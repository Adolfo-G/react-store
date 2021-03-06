const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/connection')
const productRoutes = require('./routes/productRoutes')

dotenv.config()
connectDB()
const app = express()

app.get('/', (req, res)=>{
    res.send('API is running...')
})

app.use('/api/products',productRoutes)


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}.`))