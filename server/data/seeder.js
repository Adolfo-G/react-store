const mongoose= require('mongoose')
const dotenv = require('dotenv')
const users = require('./users')
const products = require('./products')
const Order = require('../models/Order')
const Product= require('../models/Product')
const User = require('../models/User')
const connectDB = require('../config/connection')

const importData = async()=>{
    dotenv.config()
    await connectDB()
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers= await User.insertMany(users)
        const adminUser= createdUsers[0]._id
        const sampleProducts = products.map(product =>{
            return {...product, user:adminUser}
        })
        await Product.insertMany(sampleProducts)
        console.log('Data Imported!')
        process.exit()
        
    }catch(error){
        console.error(`Error: ${error}`)
        process.exit(1)
    }
}

const destroyData = async()=>{
    dotenv.config()
    await connectDB()
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data destroyed!')
        process.exit()
        
    }catch(error){
        console.error(`Error: ${error}`)
        process.exit(1)
    }
}

if(process.argv[2] ==='-d'){
    destroyData()
}else{
    importData()
}