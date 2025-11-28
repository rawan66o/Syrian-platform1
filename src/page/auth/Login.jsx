import React from 'react'
import { BsApple, BsEye } from 'react-icons/bs'
import { GrGoogle } from 'react-icons/gr'

import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex items-center justify-center flex-col gap-3 my-24 w-1/2 mx-auto'>
         <h3 className='text-3xl font-bold '>تسجيل دخول</h3>
         <p className='text-gray-500 font-semibold' >ليس لديك حساب على المنصة السورية؟           <Link to="/signup"><span className='text-babyBlue'>انشاء حساب</span></Link>
</p>
         <div className='flex gap-5 flex-col md:flex-row'>
           <div className='bg-white rounded-full border-gray-300 border-[1px] flex items-center gap-2 py-3 px-6'>
               <GrGoogle className='w-6 h-6'/>
               <span className='text-md font-medium'>انشاء حساب عبر جوجل</span>
           </div>
           <div className='bg-white rounded-full border-gray-300 border-[1px] flex items-center gap-2 py-3 px-6'>
               <BsApple className='w-6 h-6'/>
               <span className='text-md font-medium'>انشاء حساب عبر جوجل</span>
           </div>
         </div>
         <span className='text-gray-500 font-semibold'>
           or
         </span>
         <form className='w-full'>
          
           <div className='flex flex-col my-5'>
               <label className='font-medium'>البريد الالكتروني</label>
               <input type="text" placeholder='ادخل البريد الالكتروني' className='border-[1px] border-gray-300 rounded-full p-3 mt-2 mb-3'/>
           </div>
 <div className='flex flex-col my-5'>
            <label className='font-medium'>كلمة المرور</label>
            <p className='text-sm my-1 text-gray-500 '>6احرف على الاقل من فضلك يجب ان تحتوي على رموز ايضا </p>
<div className="relative flex items-center">
              <input type="password" placeholder='ادخل كلمة المرور' className='border-[1px] border-gray-300 rounded-full p-3 mt-2 mb-3 w-full'/>
              <BsEye className='absolute left-3'/>
</div>        
</div>     
         <Link to="/forget-pass">
         <span className='text-md font-medium'>هل نسيت كلمة السر؟</span></Link>
           <button className='bg-babyBlue my-5 w-full py-2 font-semibold text-white rounded-full'>تسجيل دخول</button>
         </form>
       </div>
  )
}

export default Login
