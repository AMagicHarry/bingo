const User = require('../models/User.js')
const jwt = require('jsonwebtoken')

exports.protect = async(req,res,next) =>{
    //DESTRUCTURE AUTHRIZATION FROM REQ.HEADERS
   const {authorization} = req.headers

   //IF AUTHORIZATION DOSENT EXIST AND IF IT DOSENT START WITH BEARER
   if(!authorization && !authorization?.startsWith('Bearer')){
     
       return res.status(401).json({
           
           success: false,
           error: 'You are not authorized'
       })
   }

   //GET TOKEN
   const token = authorization.split(' ')[1]
   
  
   //CHECK IF TOKEN EXIST
   if(!token){ 
    return res.status(401).json({
        success: false,
        error: 'You are not authorized'
    })
   }

   //VERIFY TOKEN
   try{
       const {id} = jwt.verify(token,process.env.ATS)
       const user = await User.findById(id).select('-password')
       
       req.user = user
     
     
     //IF USER DOSENT EXIST
     if(!user){
         return res.status(401).json({
             success: false,
             error: 'You are not authorized'
            })
        }
        next()
        
    }catch(err){
    res.status(401).json({
        success: false,
        error: 'You are not authorized'
    })
   }

}