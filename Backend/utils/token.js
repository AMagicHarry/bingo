const jwt = require('jsonwebtoken')

const createAccessToken = (id) =>{
   return jwt.sign({id},process.env.ATS,{
       expiresIn:process.env.ATE
   })
}

const createRefreshToken = (id) =>{
   return jwt.sign({id},process.env.RTS,{
       expiresIn:process.env.RTE
   })
}

const sendAccessToken = (res,accesstoken,user) =>{
    res.status(200).json({
       accesstoken,
       ...user
    })
}

const sendRefreshToken = (res, refreshtoken) => {
   res.cookie('ref', refreshtoken, {
      httpOnly: true,
      maxAge: 2 * 24 * 60 * 60 * 1000, 
      secure: true, 
      sameSite: 'None', 
    });
    
 };



module.exports = {
   createAccessToken,
   createRefreshToken,
   sendAccessToken,
   sendRefreshToken
}