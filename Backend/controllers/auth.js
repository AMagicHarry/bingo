const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { createAccessToken, createRefreshToken, sendAccessToken, sendRefreshToken } = require('../utils/token');
const { validatePassword } = require('../utils/functions')
const axios = require('axios')



// Register user
const register = async (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
        return next({ message: 'All fields are required' });
    }

    validatePassword(password, next)

    if (password !== confirmPassword) {
        return next({ message: "Passwords don't match" });
    }

    try {
        const existEmail = await User.findOne({ email });
        if (existEmail) return next({ message: 'An account with this email exists' });

        const user = new User({ name, email, password });

        await user.save();


        const accessToken = createAccessToken(user.id);
        const refreshToken = createRefreshToken(user.id);

        await user.updateOne({ refreshtoken: refreshToken });

        sendRefreshToken(res, refreshToken);
        const { password: userPassword, refreshtoken, __v, ...others } = user._doc;

        sendAccessToken(res, accessToken, others);
    } catch (error) {
        console.log(error)
        next({ message: 'Internal Server error' });
    }
};


// Login user
const login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next({ message: 'All fields are required' });
    }

    try {
        const user = await User.findOne({ email });


        if (!user) return next({ message: 'Invalid credentials' });

        if (user.signupMethod === 'google') {
            return next({ status: 400, message: 'Please log in using Google' });
        }

        const match = await user.isMatch(password);


        if (!match) return next({ message: 'Invalid credentials' });

        const accessToken = createAccessToken(user.id);
        const refreshToken = createRefreshToken(user.id);

        await user.updateOne({ refreshtoken: refreshToken });

        sendRefreshToken(res, refreshToken);
        const { password: userPassword, refreshtoken: reftoken, __v, ...others } = user._doc;
        sendAccessToken(res, accessToken, others);
    } catch (error) {
        next({ message: 'Internal server error' })
    }
};



// Logout user
const logout = (req, res, next) => {
    res.clearCookie('ref', { httpOnly: true, secure: true, sameSite: 'None', path: '/' });
    return res.json({
        message: 'Logged out',
    });
};



// Refresh token
const refreshToken = async (req, res, next) => {
    const token = req.cookies.ref;

    if (!token) {
        return res.status(200).json({
            accesstoken: '',
        });
    }

    let payload;
    try {
        payload = jwt.verify(token, process.env.RTS);
    } catch (error) {
        return res.status(400).json({ accesstoken: '' });
    }

    const user = await User.findOne({ _id: payload.id });
    if (!user || user.refreshtoken !== token) {
        return res.status(400).json({
            accesstoken: '',
        });
    }

    const accessToken = createAccessToken(user.id);
    const refreshToken = createRefreshToken(user.id);

    try {
        await user.updateOne({ refreshtoken: refreshToken });
    } catch (error) {
        return next({ message: 'Internal server error' });
    }

    sendRefreshToken(res, refreshToken);
    const { password, refreshtoken: reftoken, isAdmin, __v, ...others } = user._doc;
    sendAccessToken(res, accessToken, others);
};



const googleRegister = async (req, res, next) => {
    const { code } = req.body;

    if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET || !process.env.GOOGLE_REDIRECT_URI || !code) {
        return next({ message: 'Server misconfiguration' });
    }

    try {
        const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', {
            code,
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            redirect_uri: process.env.GOOGLE_REDIRECT_URI,
            grant_type: 'authorization_code',
        });

        const { access_token } = tokenResponse.data;
        const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
            headers: { Authorization: `Bearer ${access_token}` },
        });

        const { name, email } = userInfoResponse.data;

        if (!name || !email) {
            return next({ message: 'Failed to retrieve essential user information' });
        }

        let user = await User.findOne({ email });
        
        if (!user) {
        user = new User({ name, email, signupMethod:'google' }); 
        await user.save();
        }


        const accessToken = createAccessToken(user.id);
        const refreshToken = createRefreshToken(user.id);

        await user.updateOne({ refreshtoken: refreshToken });
    

        sendRefreshToken(res, refreshToken);
        const { __v, refreshToken: userRefreshToken, ...others } = user._doc;
        console.log(userRefreshToken)
        sendAccessToken(res, accessToken, others);
    } catch (error) {
        console.log(error)
        next({ message: 'Internal Server Error' });
    }
};

 

const googleLogin = async (req, res, next) => {
    const { code } = req.body;

    if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET || !process.env.GOOGLE_REDIRECT_URI || !code) {
        return next({ message: 'Server misconfiguration' });
    }
    
    try {
        const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', {
            code,
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            redirect_uri: process.env.GOOGLE_REDIRECT_URI,
            grant_type: 'authorization_code',
        });

        const { access_token } = tokenResponse.data;
        const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
            headers: { Authorization: `Bearer ${access_token}` },
        });

        const { name, email } = userInfoResponse.data;

        if (!name || !email) {
            return next({ message: 'Failed to retrieve essential user information' });
        }

        let user = await User.findOne({ email });
        
        if (!user) return next({ message: 'Please register to log in' });


        const accessToken = createAccessToken(user.id);
        const refreshToken = createRefreshToken(user.id);

        await user.updateOne({ refreshtoken: refreshToken });
    

        sendRefreshToken(res, refreshToken);
        const { __v, refreshToken: userRefreshToken, ...others } = user._doc;
        console.log(userRefreshToken)
        sendAccessToken(res, accessToken, others);
    } catch (error) {
        console.log(error)
        next({ message: 'Internal Server Error' });
    }
};





const facebookAuth = async (req, res, next) => {
    try {
        const { name, email } = req.body

        if (!name || !email) {
            return next({ message: 'Name and email is required' });
        }

        let user = await User.findOne({ email });
        
        if (!user) {
        user = new User({ name, email }); 
        await user.save();
        }


        const accessToken = createAccessToken(user.id);
        const refreshToken = createRefreshToken(user.id);

        await user.updateOne({ refreshtoken: refreshToken });
    

        sendRefreshToken(res, refreshToken);
        const { __v, refreshToken: userRefreshToken, ...others } = user._doc;
        console.log(userRefreshToken)
        sendAccessToken(res, accessToken, others);
    } catch (error) {
        console.error(error);
        next({ message: 'Internal Server Error' });
    }
};

module.exports = {
    login,
    register,
    logout,
    refreshToken,
    googleRegister,
    googleLogin,
    facebookAuth
};
