import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#1E120C] border-t border-[#D4AF37]/20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-[#F8F1E7]">
              Vastra
            </h2>

            <p className="text-[#B89B75] mt-4 leading-relaxed">
              Timeless elegance woven into every saree.
              Discover luxury craftsmanship designed
              for modern women.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold text-lg mb-5">
              Shop
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/products"
                  className="text-[#B89B75] hover:text-[#D4AF37] transition"
                >
                  All Sarees
                </Link>
              </li>

              <li>
                <Link
                  to="/collections"
                  className="text-[#B89B75] hover:text-[#D4AF37] transition"
                >
                  Collections
                </Link>
              </li>

              <li>
                <Link
                  to="/new-arrivals"
                  className="text-[#B89B75] hover:text-[#D4AF37] transition"
                >
                  New Arrivals
                </Link>
              </li>

              <li>
                <Link
                  to="/best-sellers"
                  className="text-[#B89B75] hover:text-[#D4AF37] transition"
                >
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold text-lg mb-5">
              Company
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-[#B89B75] hover:text-[#D4AF37] transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-[#B89B75] hover:text-[#D4AF37] transition"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy"
                  className="text-[#B89B75] hover:text-[#D4AF37] transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="text-[#B89B75] hover:text-[#D4AF37] transition"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold text-lg mb-5">
              Stay Updated
            </h3>

            <p className="text-[#B89B75] mb-4">
              Subscribe for exclusive collections and offers.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#2D1810] border border-[#D4AF37]/20 rounded-full px-5 py-3 text-[#F8F1E7] outline-none focus:border-[#D4AF37]"
              />

              <button
                className="bg-[#D4AF37] text-[#2D1810] py-3 rounded-full font-semibold hover:bg-[#E6C35C] transition"
              >
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-[#D4AF37]/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-[#B89B75] text-sm">
            © 2026 Vastra. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-[#B89B75] hover:text-[#D4AF37] transition"
            >
              Instagram
            </a>

            <a
              href="#"
              className="text-[#B89B75] hover:text-[#D4AF37] transition"
            >
              Facebook
            </a>

            <a
              href="#"
              className="text-[#B89B75] hover:text-[#D4AF37] transition"
            >
              Pinterest
            </a>
          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer