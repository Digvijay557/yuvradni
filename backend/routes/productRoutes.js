const express = require('express')
const router = express.Router();

const Product = require('../models/Product')
const protect = require('../middleware/Auth')


router.get('/', async (req, res)=>{
    try{
        const products = await Product.find();
        res.json(products)

    }catch (err){
        res.status(500).json({message: err.message})
    }

})


router.get('/:id', async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id)
        if(!product) return res.status(404).json({message: "Product not found"})
        res.json(product)

    }catch(err){
        res.status(500).json({message:err.meesage})
    }

})

router.get('/collection/:name', async (req, res) => {
  try {
    const products = await Product.find({
      collection: req.params.name
    })
    res.json(products)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/add', protect, async (req, res) => {
try {
const {
name,
description,
price,
image,
category,
stock,
collection,
sizes,
colors
} = req.body;

// Validation
if (!name || !price || !sizes || sizes.length === 0) {
  return res.status(400).json({
    message: 'Name, price and sizes are required'
  });
}

const product = await Product.create({
  name,
  description,
  price,
  image,
  category,
  stock,
  collection,
  sizes,
  colors
});

res.status(201).json({
  success: true,
  message: 'Product added successfully',
  product
});

} catch (err) {
res.status(500).json({
success: false,
message: err.message
});
}
});

router.delete('/:id', protect, async(req, res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.json({message: 'product deleted'})
    }catch(err){
        res.status(500).json({message: err.message})
    }


})



module.exports = router;