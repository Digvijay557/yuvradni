import React from 'react'
import { CheckCircle } from 'lucide-react'

function Success() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 flex items-center justify-center px-4">

      <div className="text-center max-w-lg">

        {/* Animated Circle */}
        <div className="relative flex justify-center">

          <div className="absolute w-40 h-40 bg-green-400/20 rounded-full animate-ping"></div>

          <div className="w-40 h-40 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(34,197,94,0.7)] animate-bounce">

            <CheckCircle
              size={90}
              className="text-white"
              strokeWidth={3}
            />

          </div>

        </div>

        {/* Text */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mt-10">
          Order Placed!
        </h1>

        <p className="text-green-100 text-lg mt-5 leading-relaxed">
          Thank you for shopping with us.
          Your order has been successfully placed and is being prepared with care.
        </p>

        {/* Order Message */}
        <div className="mt-8 bg-white/10 backdrop-blur-md border border-green-300/20 rounded-3xl p-6">

          <p className="text-green-100">
            🎉 We're excited to deliver your order soon.
          </p>

          <p className="text-green-300 mt-2 font-medium">
            You'll receive updates as your order progresses.
          </p>

        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">

          <button
            className="px-8 py-4 rounded-full bg-white text-green-700 font-semibold hover:scale-105 transition"
          >
            Track Order
          </button>

          <button
            className="px-8 py-4 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-green-700 transition"
          >
            Continue Shopping
          </button>

        </div>

      </div>

    </div>
  )
}

export default Success