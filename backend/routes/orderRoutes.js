const express = require('express')
const router = express.Router();

const Order = require('../models/Order');
const protect = require('../middleware/Auth');
const Product = require('../models/Product');

// create Order

router.post('/', protect, async (req, res) => {
  try {
    const { items, shippingAddress } = req.body

    if (!items || items.length === 0) {
      return res.status(400).json({
        message: 'No order items'
      })
    }

    let totalPrice = 0
const orderItems = []

for (const item of items) {
  const product = await Product.findById(item.productId)

  if (!product) {
    return res.status(404).json({
      message: 'Product not found'
    })
  }

  totalPrice += product.price * item.quantity

  orderItems.push({
    product: product._id,
    name: product.name,
    price: product.price,
    quantity: item.quantity,
    image: product.image
  })
}
    const order = await Order.create({
      user: req.user.id,
      orderItems,
      shippingAddress,
      totalPrice
    })

    res.status(201).json(order)

  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
})

router.get('/myorders', protect, async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user.id
    })

    res.json(orders)

  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
})

router.get('/orders', protect, async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user', 'name email')

    res.json(orders)

  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
})





module.exports = router



