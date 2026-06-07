import React, { useEffect, useState } from 'react'
import { useApp } from '../context/AppContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Order() {
  const { singleOrder, user } = useApp();
  const [success, setSuccess] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate()

const orderItems = singleOrder.map((item) => ({
  productId: item._id,
  quantity: item.quantity
}))

const [paymentMethod, setPaymentMethod] = useState('cod')

const [formData, setFormData] = useState({
  name: user?.name || '',
  email: user?.email || '',
  phone: user?.phone || '',
  address: user?.address || '',
  city: user?.city || '',
  state: user?.state || '',
  pincode: user?.pincode || ''
}) 
  const totalPrice = singleOrder.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
const orderData = {
  items: orderItems,

  shippingAddress: {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    address: formData.address,
    city: formData.city,
    state: formData.state,
    pincode: formData.pincode
  },

  paymentMethod
}
useEffect(() => {
  if (success ===true) navigate('/success')

  
}, [success])

const confirmPlaceOrder = () => {
  setIsConfirmOpen(false)
  handlePlaceOrder()
}

const handlePlaceOrder = async () => {
  try {
    setIsSubmitting(true)

    if (paymentMethod === 'cod') {

      const { data } = await axios.post(
        'https://yuvradnivastradalan.onrender.com/api/orders',
        orderData,
        { withCredentials: true }
      )

      console.log('COD Order Created:', data)
      setSuccess(true)

    } else if (paymentMethod === 'online') {

      console.log('Start Razorpay Payment')

      // Step 1: Create Razorpay order from backend
      // const { data } = await axios.post(
      //   'https://yuvradnivastradalan.onrender.com/api/payment/create-order',
      //   { amount: totalPrice }
      // )

      // Step 2: Open Razorpay

      // Step 3: After successful payment
      // await axios.post(
      //   'https://yuvradnivastradalan.onrender.com/api/orders',
      //   {
      //     ...orderData,
      //     isPaid: true
      //   },
      //   { withCredentials: true }
      // )

      alert('Online payment not integrated yet')
    }

  } catch (err) {
    console.log(err.response?.data)
    console.log(err.message)
  } finally {
    setIsSubmitting(false)
  }
}


  return (
    <div className="min-h-screen bg-[#2D1810] py-16 px-4">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="text-[#D4AF37] uppercase tracking-[0.3em]">
            Secure Checkout
          </p>

          <h1 className="text-[#F8F1E7] text-5xl font-bold mt-4">
            Complete Your Order
          </h1>

          <p className="text-[#B89B75] mt-4">
            One step away from owning timeless elegance
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Shipping Form */}
          <div className="lg:col-span-2">

            <div className="bg-[#3B2317] rounded-3xl border border-[#D4AF37]/20 p-8">

              <h2 className="text-[#F8F1E7] text-2xl font-semibold mb-8">
                Shipping Information
              </h2>

              <form className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">

                 <input
  type="text"
  placeholder="First Name"
  value={formData.name}
  onChange={(e) =>
    setFormData({
      ...formData,
      name: e.target.value
    })
  }
  className="bg-[#24130D] text-white border border-[#D4AF37]/20 rounded-xl p-4 outline-none focus:border-[#D4AF37]"
/>

<input
  type="email"
  placeholder="Email"
  value={formData.email}
  onChange={(e) =>
    setFormData({
      ...formData,
      email: e.target.value
    })
  }
  className="w-full bg-[#24130D] text-white border border-[#D4AF37]/20 rounded-xl p-4 outline-none focus:border-[#D4AF37]"
/>

<input
  type="text"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={(e) =>
    setFormData({
      ...formData,
      phone: e.target.value
    })
  }
  className="w-full bg-[#24130D] text-white border border-[#D4AF37]/20 rounded-xl p-4 outline-none focus:border-[#D4AF37]"
/>

<textarea
  rows="4"
  placeholder="Address"
  value={formData.address}
  onChange={(e) =>
    setFormData({
      ...formData,
      address: e.target.value
    })
  }
  className="w-full bg-[#24130D] text-white border border-[#D4AF37]/20 rounded-xl p-4 outline-none focus:border-[#D4AF37]"
/>

<input
  type="text"
  placeholder="City"
  value={formData.city}
  onChange={(e) =>
    setFormData({
      ...formData,
      city: e.target.value
    })
  }
  className="bg-[#24130D] text-white border border-[#D4AF37]/20 rounded-xl p-4 outline-none focus:border-[#D4AF37]"
/>

<input
  type="text"
  placeholder="State"
  value={formData.state}
  onChange={(e) =>
    setFormData({
      ...formData,
      state: e.target.value
    })
  }
  className="bg-[#24130D] text-white border border-[#D4AF37]/20 rounded-xl p-4 outline-none focus:border-[#D4AF37]"
/>

<input
  type="text"
  placeholder="Pincode"
  value={formData.pincode}
  onChange={(e) =>
    setFormData({
      ...formData,
      pincode: e.target.value
    })
  }
  className="bg-[#24130D] text-white border border-[#D4AF37]/20 rounded-xl p-4 outline-none focus:border-[#D4AF37]"
/> </div>

              </form>

            </div>

          </div>

          {/* Order Summary */}
          <div>

            <div className="bg-[#24130D] border border-[#D4AF37]/20 rounded-3xl p-6 sticky top-24">

              <h2 className="text-[#F8F1E7] text-2xl font-semibold mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">

                {singleOrder.map(item => (
                  <div
                    key={item._id}
                    className="flex gap-4 border-b border-[#D4AF37]/10 pb-4"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-xl object-cover"
                    />

                    <div className="flex-1">

                      <h3 className="text-[#F8F1E7] font-medium">
                        {item.name}
                      </h3>

                      <p className="text-[#B89B75] text-sm">
                        Qty: {item.quantity}
                      </p>

                      <p className="text-[#D4AF37] font-semibold mt-1">
                        ₹{item.price}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

              <div className="mt-6 space-y-3">

                <div className="flex justify-between text-[#B89B75]">
                  <span>Items</span>
                  <span>{singleOrder.length}</span>
                </div>

                <div className="flex justify-between text-[#B89B75]">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="mt-8">

  <h3 className="text-[#F8F1E7] text-xl font-semibold mb-5">
    Payment Method
  </h3>

  <div className="space-y-4">

    {/* COD */}
    <label className="flex items-center justify-between bg-[#24130D] border border-[#D4AF37]/20 rounded-2xl p-5 cursor-pointer hover:border-[#D4AF37] transition">

      <div className="flex items-center gap-4">

       <input
  type="radio"
  name="payment"
  value="cod"
  checked={paymentMethod === 'cod'}
  onChange={(e) => setPaymentMethod(e.target.value)}
  className="w-5 h-5 accent-[#D4AF37]"
/>

        <div>
          <h4 className="text-[#F8F1E7] font-medium">
            Cash on Delivery
          </h4>

          <p className="text-[#B89B75] text-sm">
            Pay after receiving your order
          </p>
        </div>

      </div>

      <span className="text-[#D4AF37] text-sm font-medium">
        COD
      </span>

    </label>

    {/* Online */}
    <label className="flex items-center justify-between bg-[#24130D] border border-[#D4AF37]/20 rounded-2xl p-5 cursor-pointer hover:border-[#D4AF37] transition">

      <div className="flex items-center gap-4">

       <input
  type="radio"
  name="payment"
  value="online"
  checked={paymentMethod === 'online'}
  onChange={(e) => setPaymentMethod(e.target.value)}
  className="w-5 h-5 accent-[#D4AF37]"
/>

        <div>
          <h4 className="text-[#F8F1E7] font-medium">
            Online Payment
          </h4>

          <p className="text-[#B89B75] text-sm">
            UPI, Debit Card, Credit Card & Net Banking
          </p>
        </div>

      </div>

      <span className="text-[#D4AF37] text-sm font-medium">
        Secure
      </span>

    </label>

  </div>

</div>

                <div className="border-t border-[#D4AF37]/20 pt-4 flex justify-between text-[#F8F1E7] text-xl font-bold">
                  <span>Total</span>
                  <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                </div>

              </div>

             <button
  onClick={() => setIsConfirmOpen(true)}
  className="w-full mt-8 bg-[#D4AF37] text-[#2D1810] py-4 rounded-full font-semibold hover:bg-[#E6C35C] transition"
>
  Place Order
</button>

  {isConfirmOpen && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-md bg-[#3B2317] rounded-3xl border border-[#D4AF37]/20 p-8 text-center">
        <h2 className="text-[#F8F1E7] text-2xl font-semibold mb-4">Confirm Your Order</h2>
        <p className="text-[#B89B75] mb-6">Are you sure you want to place this order?</p>
        <div className="flex gap-4 justify-center">
          <button
            type="button"
            onClick={() => setIsConfirmOpen(false)}
            className="px-6 py-3 rounded-full border border-[#D4AF37]/40 text-[#F8F1E7] hover:bg-[#24130D] transition"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={confirmPlaceOrder}
            className="px-6 py-3 rounded-full bg-[#D4AF37] text-[#2D1810] font-semibold hover:bg-[#E6C35C] transition"
          >
            {isSubmitting ? 'Placing...' : 'Confirm Order'}
          </button>
        </div>
      </div>
    </div>
  )}

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Order