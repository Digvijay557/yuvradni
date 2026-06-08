const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const orderRoutes = require('./routes/orderRoutes')
const app = express()
app.use(express.json())
app.use(cookieParser())

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected')
    app.listen(5000, () => console.log('Server running on port 5000'))
  })
  .catch(err => console.log(err))

app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)


app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://yuvradni.vercel.app'
  ],
  credentials: true
}))