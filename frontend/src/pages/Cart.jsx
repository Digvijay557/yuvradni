import React from 'react'
import { useApp } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function Cart() {

const {cart, setCart,updateQuantity, removeFromCart,singleOrder, setSingleOrder  } = useApp();

  const navigate = useNavigate();
  if (!cart || cart.length === 0){
    return (
      <div className="min-h-screen bg-[#2D1810] flex items-center justify-center px-6">
        <div className="text-center">

          <p className="text-[#D4AF37] uppercase tracking-[0.3em]">
            Shopping Bag
          </p>

          <h1 className="text-[#F8F1E7] text-5xl font-bold mt-4">
            Your Cart is Empty
          </h1>

          <p className="text-[#B89B75] mt-6 text-lg">
            Discover timeless sarees crafted for every occasion.
          </p>

          <button
            onClick={() => navigate('/')}
            className="mt-10 bg-[#D4AF37] text-[#2D1810] px-10 py-4 rounded-full font-semibold hover:bg-[#E6C35C] transition"
          >
            Continue Shopping
          </button>

        </div>
      </div>
    )
  }
 


  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="min-h-screen bg-[#2D1810] py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-[#D4AF37] uppercase tracking-[0.3em]">
            Shopping Bag
          </p>

          <h1 className="text-[#F8F1E7] text-5xl md:text-6xl font-bold mt-4">
            Your Cart
          </h1>

          <p className="text-[#B89B75] mt-4">
            Review your selected sarees before checkout
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">

            {cart.map((product, idx) => (
              <div
                key={product.id ?? idx}
                className="bg-[#3B2317] border border-[#D4AF37]/20 rounded-3xl p-5 flex flex-col md:flex-row gap-6 hover:border-[#D4AF37] transition"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full md:w-40 h-52 md:h-40 object-cover rounded-2xl"
                />

                <div className="flex-1">

                  <p className="text-[#D4AF37] text-sm">
                    {product.category}
                  </p>

                  <h2 className="text-[#F8F1E7] text-2xl font-semibold mt-2">
                    {product.name}
                  </h2>

                  <div className="flex items-center gap-3 mt-4">

                    <button
                      onClick={() => updateQuantity(product._id, 'minus')}
                      className="w-10 h-10 rounded-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2D1810] transition flex items-center justify-center text-xl"
                    >
                      -
                    </button>

                    <span className="w-12 text-center text-[#F8F1E7] text-lg font-semibold">
                      {product.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(product._id, 'plus')}
                      className="w-10 h-10 rounded-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2D1810] transition flex items-center justify-center text-xl"
                    >
                      +
                    </button>

                    <p className="text-[#D4AF37] text-2xl font-bold ml-4">
                      ₹{product.price}
                    </p>

                  </div>

                <div className="flex md:flex-col justify-between items-center">

                  <button className="text-red-400 border border-red-400 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white transition"
                  onClick={() =>{removeFromCart(product._id)}}>
                    Remove
                  </button>

                </div>

              </div>
            </div>
          ))
            }

          </div>

          <div>

            <div className="bg-[#24130D] border border-[#D4AF37]/20 rounded-3xl p-8 sticky top-24">

              <p className="text-[#D4AF37] uppercase tracking-[0.25em]">
                Order Summary
              </p>

              <h2 className="text-[#F8F1E7] text-3xl font-bold mt-3">
                Checkout
              </h2>

              <div className="mt-10 space-y-5">

                <div className="flex justify-between text-[#B89B75]">
                  <span>Items</span>
                  <span>{cart.length}</span>
                </div>

                <div className="flex justify-between text-[#B89B75]">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div className="border-t border-[#D4AF37]/20 pt-5 flex justify-between text-[#F8F1E7] text-xl font-semibold">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

              </div>

              <button className="w-full mt-10 bg-[#D4AF37] text-[#2D1810] py-4 rounded-full font-semibold hover:bg-[#E6C35C] transition"
              onClick={()=>{
                setSingleOrder(cart)
                navigate('/order')
              }}
              >
                Proceed to Checkout
              </button>

              <button className="w-full mt-4 border border-[#D4AF37] text-[#D4AF37] py-4 rounded-full hover:bg-[#D4AF37] hover:text-[#2D1810] transition"
              onClick={()=> navigate('/')}
              >
                Continue Shopping
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
} 
export default Cart