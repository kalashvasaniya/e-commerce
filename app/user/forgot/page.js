"use client"
import React from 'react'
import { useEffect } from 'react'


const Forgot = () => {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      window.location.href = '/home'
    }
  }, [])
  return (
    <div>

    </div>
  )
}

export default Forgot
