import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useApp } from "../context/AppContext";

function ProductDetail() {
  const { id } = useParams();
 const { addToCart, setSingleOrder, singleOrder } = useApp();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );

        setProduct(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F1E7]">
      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="overflow-hidden rounded-3xl">
              <img
                src={
                  product.image ||
                  "https://images.unsplash.com/photo-1610030469983-98e550d6193c"
                }
                alt={product.name}
                className="w-full h-[700px] object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <p className="text-[#8B6B3E] uppercase tracking-[0.3em] text-sm">
              Bridal Collection
            </p>

            <h1 className="text-5xl text-[#2D1810] font-['Prata'] mt-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-5">
              <span className="text-[#8B6B3E] text-4xl font-bold">
                ₹{product.price}
              </span>
            </div>

            <p className="text-gray-600 mt-8 leading-relaxed">
              {product.description ||
                "Handwoven Banarasi silk saree featuring intricate zari craftsmanship inspired by traditional royal motifs."}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="bg-[#EFE4D1] px-4 py-2 rounded-full text-sm">
                Premium
              </span>

              <span className="bg-[#EFE4D1] px-4 py-2 rounded-full text-sm">
                Handcrafted
              </span>

              <span className="bg-[#EFE4D1] px-4 py-2 rounded-full text-sm">
                Exclusive
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-10">
              <button className="flex-1 bg-[#2D1810] text-white py-4 rounded-xl font-semibold hover:bg-[#1A0F0B] transition"
              onClick={()=>addToCart(product)}>
                Add to Cart
              </button>

              <button
                className="flex-1 bg-[#D4AF37] text-[#2D1810] py-4 rounded-xl font-semibold hover:bg-[#E6C35C] transition"
                onClick={() => {
                  setSingleOrder([
  {
    ...product,
    quantity: 1
  }
])
                  navigate("/order");
                }}
              >
                Buy Now
              </button>
            </div>

            {/* Product Details */}
            <div className="mt-12 border-t border-gray-300 pt-8 space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">Category</span>
                <span>{product.category || "Saree"}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">Stock</span>
                <span>{product.stock || "Available"}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">Brand</span>
                <span>{product.brand || "Yuvradni"}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">Delivery</span>
                <span>Free Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="bg-[#2D1810] py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-[#D4AF37] uppercase tracking-[0.3em]">
            Crafted With Heritage
          </p>

          <h2 className="text-white text-4xl font-['Prata'] mt-4">
            Tradition Woven Into Every Thread
          </h2>

          <p className="text-gray-300 mt-6 leading-relaxed">
            Every Yuvradni saree is curated to celebrate India's timeless
            textile heritage and skilled craftsmanship.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-[#F8F1E7]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-['Prata'] text-center text-[#2D1810]">
            Customer Love
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-[#D4AF37]">★★★★★</p>
              <p className="mt-4 text-gray-600">
                Beautiful craftsmanship and premium quality.
              </p>
              <h4 className="mt-4 font-semibold">Priya S.</h4>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-[#D4AF37]">★★★★★</p>
              <p className="mt-4 text-gray-600">
                Exactly as shown. Perfect for my wedding.
              </p>
              <h4 className="mt-4 font-semibold">Neha K.</h4>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-[#D4AF37]">★★★★★</p>
              <p className="mt-4 text-gray-600">
                The fabric feels luxurious and elegant.
              </p>
              <h4 className="mt-4 font-semibold">Ananya R.</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;