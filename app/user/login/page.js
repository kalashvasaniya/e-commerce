"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const data = await res.json()
        if (data.success) {
            localStorage.setItem('token', data.token)
            window.location.href = '/home'
        } else {
            alert(data.error)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'email') {
            setEmail(value)
        }
        if (name === 'password') {
            setPassword(value)
        }
    }

    return (
        <>
            <section className="bg-black pt-32">
                <div className="flex flex-col items-center justify-center px-6 mx-auto mt-20">
                    <Link href={'/user/login'} className="flex items-center">
                        <span className="self-center text-4xl font-bold">Login</span>
                    </Link>
                    <div className="flex space-x-1">
                        <div className="">Or</div>
                        <Link href={'/user/signup'} className="font-medium text-blue-600 hover:underline pb-5">
                            Sign up
                        </Link>
                    </div>
                    <div className="w-full rounded-lg shadow sm:max-w-md ring ring-gray-600">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                                Login to your account
                            </h1>
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                    <input onChange={handleChange} type="email" name="email" id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                                    <input onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <Link href={'/user/forgot'} className="text-sm font-medium text-blue-600 hover:underline">Forgot password?</Link>
                                </div>
                                <button type="submit"
                                    className="w-full text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600">
                                    Login
                                </button>
                                <p className="text-sm font-light text-white">
                                    Don't have an account yet?
                                    <Link href={'/user/signup'} className="font-medium text-blue-600 hover:underline">
                                        <br />
                                        Sign up
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login
