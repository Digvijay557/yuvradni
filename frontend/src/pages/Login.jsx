import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useApp } from '../context/AppContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useApp()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const { data } = await axios.post('https://yuvradnivastradalan.onrender.com/api/users/login',
        { email, password },
        { withCredentials: true }
      )
      login(data)
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

return (
  <div className="min-h-screen bg-white grid lg:grid-cols-2">

    {/* Left Side */}
    <div className="hidden lg:flex flex-col justify-center px-20 bg-zinc-950 text-white relative overflow-hidden">

      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <span className="text-sm tracking-[0.4em] uppercase text-zinc-400">
        YUVRADNI
      </span>

      <h1 className="text-7xl font-black leading-none mt-6">
        Welcome
        <br />
        Back.
      </h1>

      <p className="mt-8 text-lg text-zinc-400 max-w-md leading-relaxed">
        Sign in to continue shopping premium fashion curated
        for modern women.
      </p>

      <div className="flex gap-8 mt-12">
        <div>
          <h3 className="text-3xl font-bold">10K+</h3>
          <p className="text-zinc-500">Customers</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">500+</h3>
          <p className="text-zinc-500">Products</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">4.9★</h3>
          <p className="text-zinc-500">Rating</p>
        </div>
      </div>
    </div>

    {/* Right Side */}
    <div className="flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-md">

        <div className="mb-10">
          <h2 className="text-4xl font-bold text-zinc-900">
            Sign In
          </h2>

          <p className="text-zinc-500 mt-2">
            Access your account and continue shopping.
          </p>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-zinc-200 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-zinc-200 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-4 rounded-2xl font-semibold hover:bg-zinc-800 transition disabled:opacity-50"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-zinc-500 mt-8">
          Don't have an account?
          <Link
            to="/register"
            className="ml-2 text-black font-medium hover:underline"
          >
            Create Account
          </Link>
        </p>

      </div>

    </div>
  </div>
)


}

export default Login