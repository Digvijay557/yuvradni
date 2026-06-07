import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passCheck, setPassCheck] = useState('')
  const [phone, setPhone] = useState('')
  const [submitActive, setSubmitActive] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { login } = useApp()
  const navigate = useNavigate()

  useEffect(() => {
    setSubmitActive(
      password === passCheck &&
      password.length > 0 &&
      name.trim() !== '' &&
      email.trim() !== ''
    )
  }, [name, email, password, passCheck])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError('')
      const { data } = await axios.post(
        'https://yuvradnivastradalan.onrender.com/api/users/register',
        { name, email, password, phone },
        { withCredentials: true }
      )
      login(data)
      navigate('/')
    } catch (err) {
      console.log(err.response?.data)
      setError(err.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#ffffff] flex">
      
      {/* Left Side - Branding */}
      <div className="hidden lg:flex w-1/2 bg-[#1a1a1a] flex-col justify-center items-center p-12">
        <h1 className="text-5xl font-bold text-white tracking-widest mb-4">YUVRADNI</h1>
        <p className="text-gray-400 text-lg tracking-wide">Wear the extraordinary</p>
        <div className="mt-12 w-32 h-1 bg-pink-500 rounded-full"></div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8">
        <div className="w-full max-w-md">

          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-1">Create Account</h2>
          <p className="text-gray-400 text-sm mb-8">Join Yuvradni and discover exclusive fashion</p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">Full Name</label>
              <input
                type="text"
                placeholder="Digvijay Shelke"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-200 bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-200 bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">Phone Number (Optional) </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border border-gray-200 bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Min 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-200 bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">Confirm Password</label>
              <input
                type="password"
                placeholder="Repeat your password"
                value={passCheck}
                onChange={(e) => setPassCheck(e.target.value)}
                className={`border bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition ${
                  passCheck && password !== passCheck
                    ? 'border-red-400 focus:ring-red-300'
                    : 'border-gray-200 focus:ring-pink-400'
                }`}
              />
              {passCheck && password !== passCheck && (
                <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
              )}
            </div>

            <button
              type="submit"
              disabled={!submitActive || loading}
              className="mt-2 bg-[#1a1a1a] text-white py-3 rounded-xl font-semibold hover:bg-pink-600 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating account...' : 'Create Account →'}
            </button>
          </form>

          <p className="text-center text-sm mt-6 text-gray-400">
            Already have an account?{' '}
            <Link to='/login' className="text-pink-500 font-semibold hover:underline">Sign in</Link>
          </p>

        </div>
      </div>
    </div>
  )
}

export default Register