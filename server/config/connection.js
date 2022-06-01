const mongoose = require('mongoose')

const connection= async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true, 
            useNewUrlParser:true,
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }catch(error){
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

module.exports= connection;