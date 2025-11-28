import React from 'react'
import logo from "../assets/Logo-Syrian-Platform.png"
import { FaEarthAsia } from 'react-icons/fa6'

const Nav = () => {
  return (
<div className=' md:flex justify-between py-8 px-12 font-medium text-lg items-center'>
      <div className='flex items-center gap-5'> 
        <img src={logo} alt="" className='w-48 '/> 
        <span>|</span>
        <span> الصفحة الرئيسية</span>
        </div>
      <ul className='flex gap-5'>
         <li>الدعم والمساعدة</li> 
        <li>سياسة الخصوصية</li>
      <li className='flex items-center gap-2'><FaEarthAsia/>العربية  </li>
     
      </ul>
      
      
    </div>
  )
}

export default Nav
