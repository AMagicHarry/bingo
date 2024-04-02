const mongoose = require('mongoose')

const connectDB = (MONGO_URI) =>{  
mongoose.connect(MONGO_URI)
.then(()=>{
  console.log('connected to data base')
})
.catch((error)=>{
    console.log(error)
})
}


module.exports = connectDB