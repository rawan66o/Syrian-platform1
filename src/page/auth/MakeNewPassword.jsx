import React from 'react'
import { BsEye } from 'react-icons/bs'

const MakeNewPassword = () => {
  return (
        <div className='flex items-center justify-center flex-col gap-3 my-24 w-1/2 mx-auto'>
             <h3 className='text-3xl font-bold '>              انشاء كلمة مرور جديدة
</h3>
             <p className='text-gray-500 font-semibold' >يجب ان تكون كلمة المرورالجديدة مختلفة عن كلمات المرور الاخرى</p>
           
             <form className='w-full'>
              
        
            <div className='flex flex-col my-5'>
                       <label className='font-medium'>كلمة المرور</label>
                       <p className='text-sm my-1 text-gray-500 '>6احرف على الاقل من فضلك يجب ان تحتوي على رموز ايضا </p>
           <div className="relative flex items-center">
                         <input type="password" placeholder='ادخل كلمة المرور' className='border-[1px] border-gray-300 rounded-full p-3 mt-2 mb-3 w-full'/>
                         <BsEye className='absolute left-3'/>
           </div>        
           </div>
        
            <div className='flex flex-col my-5'>
                       <label className='font-medium'>كلمة المرور</label>
                       <p className='text-sm my-1 text-gray-500 '>6احرف على الاقل من فضلك يجب ان تحتوي على رموز ايضا </p>
           <div className="relative flex items-center">
                         <input type="password" placeholder='ادخل كلمة المرور' className='border-[1px] border-gray-300 rounded-full p-3 mt-2 mb-3 w-full'/>
                         <BsEye className='absolute left-3'/>
           </div>        
           </div>
            <div className="flex gap-2">
            <button className='bg-babyBlue my-5 py-2 font-semibold text-white rounded-full w-3/4'>
              انشاء كلمة مرور جديدة
            </button>
            <button className='border border-gray-300 my-5 py-2 font-semibold text-black rounded-full w-1/4'>
              الغاء
            </button>
          </div>
           </form>
           </div>
  )
}

export default MakeNewPassword
