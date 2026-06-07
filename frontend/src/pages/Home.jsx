import React, { useEffect, useState } from 'react'
import heroImg from '../assets/hero.png'
import heroMobile from '../assets/heroMobile.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Home() {
  // const products = [
  //   {
  //     id: 1,
  //     name: "Royal Banarasi Saree",
  //     category: "Silk Collection",
  //     price: "₹5,999",
  //     oldPrice: "₹7,999",
  //     image: "/saree1.jpg"
  //   },
  //   {
  //     id: 2,
  //     name: "Wedding Kanjivaram",
  //     category: "Bridal Collection",
  //     price: "₹8,499",
  //     oldPrice: "₹10,999",
  //     image: "/saree2.jpg"
  //   },
  //   {
  //     id: 3,
  //     name: "Traditional Paithani",
  //     category: "Heritage Collection",
  //     price: "₹6,299",
  //     oldPrice: "₹8,299",
  //     image: "/saree3.jpg"
  //   },
  //   {
  //     id: 4,
  //     name: "Designer Organza",
  //     category: "Premium Collection",
  //     price: "₹4,999",
  //     oldPrice: "₹6,499",
  //     image: "/saree4.jpg"
  //   }
  // ]''
   const navigate = useNavigate()
  const [products, setProducts] = useState([])
  useEffect(() => {
  const fetchProducts = async () => {
    const { data } = await axios.get(
      'http://localhost:5000/api/products'
    )

    setProducts(data)
  }

  fetchProducts()
}, [])
  

  return (
    <div className="bg-[#2D1810]">

      {/* HERO SECTION */}
    
<section className="relative min-h-[90vh] flex items-center justify-center">

  {/* Desktop Hero */}
  <div
    className="hidden md:block absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(${heroImg})`
    }}
  />

  {/* Mobile Hero */}
  <div
    className="md:hidden absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(${heroMobile})`
    }}
  />

  {/* Overlay */}
  {/* <div className="absolute inset-0 bg-black/30"></div> */}

  {/* Content */}
  <div className="relative z-10 text-center px-6 max-w-4xl">

    <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-sm md:text-base">
      YUVRADNI COLLECTION
    </p>

    <h1 className="text-white text-5xl md:text-7xl mt-6 leading-tight font-['Cormorant_Garamond']">
      Timeless
      <br />
      Saree Elegance
    </h1>

    <button className="mt-10 bg-[#D4AF37] text-[#2D1810] px-10 py-4 rounded-full font-semibold hover:bg-[#E6C35C] transition"
    onClick={()=> navigate('/products')}>
      Explore Collection
    </button>

  </div>

</section>
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-[#D4AF37] tracking-[0.3em] uppercase">
              Featured Collection
            </p>

            <h2 className="text-[#F8F1E7] text-4xl md:text-5xl font-bold mt-4">
              Royal Sarees
            </h2>

            <p className="text-[#B89B75] mt-4">
              Handpicked pieces for every special occasion.
            </p>

          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

            {products.map(product => (
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

              <div
                key={product._id}
                className="bg-[#3B2317] rounded-3xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37] transition duration-300"
                >

                {/* Portrait Card Image */}
                <div className="aspect-[3/3] overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                    />

                </div>

                <div className="p-5">

                  <p className="text-[#D4AF37] text-sm">
                    {product.category}
                  </p>

                  <h3 className="text-[#F8F1E7] text-lg font-semibold mt-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-3 mt-4">
                    {product.oldPrice && (
                      <span className="text-zinc-500 line-through">
                        {product.oldPrice}
                      </span>
                    )}

                    <span className="text-[#D4AF37] font-bold text-xl">
                     ₹{product.price}
                    </span>

                  </div>
                </div>

              </div>
                    </Link>
            ))}

          </div>

          <div className="flex justify-center mt-14">

            <button className="bg-[#D4AF37] text-[#2D1810] px-10 py-4 rounded-full font-semibold hover:bg-[#E6C35C] transition"
            onClick={()=> navigate('/products')}>
              Shop All Sarees
            </button>

          </div>

        </div>

      </section>

      {/* HERITAGE SECTION */}
      <section className="bg-[#24130D] py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-[#D4AF37] uppercase tracking-[0.3em]">
            Our Heritage
          </p>

          <h2 className="text-[#F8F1E7] text-4xl md:text-5xl font-bold mt-5">
            Tradition Woven Into Every Thread
          </h2>

          <p className="text-[#B89B75] max-w-3xl mx-auto mt-8 text-lg leading-relaxed">
            Yuvradni celebrates India's rich textile heritage through
            carefully curated saree collections crafted by skilled
            artisans. Every weave tells a story of culture,
            craftsmanship and timeless elegance.
          </p>

        </div>

      </section>

    </div>
  )
}

