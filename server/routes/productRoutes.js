const express = require('express')
const router = express.Router()
const Product = require('../models/Product')
const asyncHandler = require('express-async-handler')

//Fetch all products
// GET /api/products
// Public
router.get('/', asyncHandler(async(req, res)=>{
    const products = await Product.find({})
    res.json(products)
}))

//Fetch single products
// GET /api/products:id
// Public
router.get('/:id', asyncHandler(async(req, res)=>{
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }else{
        res.status(404).json({message:'Product not found'})
    }
}))

module.exports=router
