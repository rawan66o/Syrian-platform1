import React from 'react'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
  return (
      <div className='flex items-center justify-center flex-col gap-3 w-1/2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        
        <h3 className='text-3xl font-bold'>هل نسيت كلمة المرور الخاصة بك؟</h3>
        <p className='text-gray-500 font-semibold'>
          أدخل بريدك الالكتروني الشخصي لاكمال العملية الآن
        </p>

        <form className='w-full'>
          <div className='flex flex-col my-5'>
            <label className='font-medium'>البريد الالكتروني</label>
            <input
              type="text"
              placeholder='ادخل البريد الالكتروني'
              className='border border-gray-300 rounded-full p-3 mt-2 mb-3'
            />
          </div>

          <div className="flex gap-2">
      
            <button className='bg-babyBlue my-5 py-2 font-semibold text-white rounded-full w-3/4'>
              <Link to="/make-new"> التالي</Link>
            </button>
            <button className='border border-gray-300 my-5 py-2 font-semibold text-black rounded-full w-1/4'>
              الغاء
            </button>
          </div>
        </form>

      </div>
  )
}

export default ForgetPassword
