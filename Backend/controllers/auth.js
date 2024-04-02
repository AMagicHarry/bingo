const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { createAccessToken, createRefreshToken, sendAccessToken, sendRefreshToken } = require('../utils/token');
const {validatePassword} = require('../utils/functions')


// Register user
const register = async (req, res, next) => {
    const {name, email, password, confirmPassword } = req.body;

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

        const user = new User({name,email, password});

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

        const match = await user.isMatch(password);


        if (!match) return next({ message: 'Invalid credentials' });

        const accessToken = createAccessToken(user.id);
        const refreshToken = createRefreshToken(user.id);

        await user.updateOne({ refreshtoken: refreshToken });

        sendRefreshToken(res, refreshToken);
        const { password:userPassword, refreshtoken: reftoken, __v, ...others } = user._doc;
        sendAccessToken(res, accessToken, others);
    } catch (error) {
        next({ message: 'Internal server error' })
    }
};

// Logout user
const logout = (req, res, next) => {
    res.clearCookie('ref', {httpOnly: false });
    return res.json({
        message: 'Logged out',
    });
};



// Refresh token
const refreshToken = async (req, res, next) => {
    const token = req.cookies.ref;
    console.log(token)

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



module.exports = {
    login,
    register,
    logout,
    refreshToken,
};
