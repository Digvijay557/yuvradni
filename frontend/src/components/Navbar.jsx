import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import axios from 'axios'

const Navbar = () => {
  const { user, logout, cart } = useApp()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await axios.post('http://localhost:5000/api/users/logout', {}, { withCredentials: true })
    logout()
    navigate('/login')
  }

return (
  <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200">

    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold tracking-tight text-zinc-900"
      >
        Yuvradni
      </Link>

      {/* Navigation */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">

        <Link
          to="/"
          className="hover:text-black transition"
        >
          Home
        </Link>

        <Link
          to="/products"
          className="hover:text-black transition"
        >
          Shop
        </Link>

        <Link
          to="/products"
          className="hover:text-black transition"
        >
          New Arrivals
        </Link>

        <Link
          to="/products"
          className="hover:text-black transition"
        >
          Collections
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        {/* Cart */}
        <Link
          to="/cart"
          className="relative text-zinc-700 hover:text-black transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.836l.383 1.437m0 0L6.75 12.75h10.878c.75 0 1.41-.52 1.588-1.248l1.548-6.192H5.106zM8.25 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            />
          </svg>

          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] rounded-full min-w-[18px] h-[18px] flex items-center justify-center">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </Link>

        {user ? (
          <>
            <Link
              to="/profile"
              className="text-sm text-zinc-700 hover:text-black"
            >
              {user.name.split(' ')[0]}
            </Link>

            <button
              onClick={handleLogout}
              className="border border-zinc-300 px-4 py-2 rounded-full text-sm hover:bg-zinc-100 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-sm text-zinc-700 hover:text-black"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-zinc-800 transition"
            >
              Create Account
            </Link>
          </>
        )}
      </div>

    </div>
  </nav>
)


}

export default Navbar