import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          'https://yuvradnivastradalan.onrender.com/api/products'
        )

        setProducts(data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#2D1810] flex items-center justify-center">
        <h1 className="text-[#D4AF37] text-3xl font-['Prata']">
          Loading Collection...
        </h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#2D1810] py-16">

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-[#D4AF37] uppercase tracking-[0.35em] text-sm">
            YUVRADNI COLLECTION
          </p>

          <h1 className="text-[#F8F1E7] text-5xl md:text-6xl font-['Prata'] mt-5">
            Saree Collection
          </h1>

          <p className="text-[#B89B75] mt-5 max-w-2xl mx-auto">
            Discover handcrafted sarees woven with timeless
            elegance, heritage and luxury.
          </p>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {products.map((product) => (
  <Link
    to={`/products/${product._id}`}
    key={product._id}
    className="
      bg-[#3B2317]
      rounded-3xl
      overflow-hidden
      border
      border-[#D4AF37]/20
      hover:border-[#D4AF37]
      hover:-translate-y-2
      transition-all
      duration-300
      shadow-lg
      block
    "
  >
    {/* Product Image */}
    <div className="aspect-square overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="
          w-full
          h-full
          object-cover
          hover:scale-105
          transition-transform
          duration-700
        "
      />
    </div>

    {/* Product Details */}
    <div className="p-5">

      <p className="text-[#D4AF37] text-xs uppercase tracking-widest">
        {product.category || 'Premium Collection'}
      </p>

      <h2 className="text-[#F8F1E7] text-lg md:text-xl font-semibold mt-2">
        {product.name}
      </h2>

      {product.description && (
        <p className="text-[#B89B75] text-sm mt-3 line-clamp-2">
          {product.description}
        </p>
      )}

      <div className="flex items-center gap-3 mt-4">

        {product.oldPrice && (
          <span className="text-zinc-500 line-through">
            ₹{product.oldPrice}
          </span>
        )}

        <span className="text-[#D4AF37] font-bold text-xl md:text-2xl">
          ₹{product.price}
        </span>

      </div>

      <button
        className="
          w-full
          mt-5
          bg-[#D4AF37]
          text-[#2D1810]
          py-3
          rounded-xl
          font-medium
          hover:bg-[#E6C35C]
          transition
        "
      >
        View Details
      </button>

    </div>
  </Link>
))}

        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-[#F8F1E7] text-3xl font-['Prata']">
              No Products Found
            </h2>

            <p className="text-[#B89B75] mt-4">
              New collections are coming soon.
            </p>
          </div>
        )}

      </div>

    </div>
  )
}

export default Products