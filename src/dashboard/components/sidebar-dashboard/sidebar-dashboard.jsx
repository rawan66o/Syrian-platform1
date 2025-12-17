// import { useState } from 'react'
import './sidebar-dashboard.css'

function SidebarDashboard() {
    const list = [
        {
            name:'لوحة التحكم',
            logo:'/images/icons/dashboard/category.png'
        },
        {
            name:'الملف الشخصي',
            logo:'/images/icons/dashboard/user.png'
        }, 
        {
            name:'الشهادات',
            logo:'/images/icons/dashboard/degree.png'
        }, 
        {
            name:'المشاريع التطوعية',
            logo:'/images/icons/dashboard/project-icon.png'
        }, 
        {
            name:'الكورسات',
            logo:'/images/icons/dashboard/course-icon/course-icon.png'
        }
    ]
   return(
    <div>
        <div className="header-sidebar">
            <h6>معلوماتي</h6>
        </div>
        <div className="content-sidebar">
           {list.map((l,ind)=> (
            <div className="content-sidebar-flex" key={ind}>
                <img src={l.logo} alt=""/>
                <h5>{l.name}</h5>
            </div>
           ))}
        </div>
        <div className='footer'>
            <div className='footer-title'>
                <h6>اخرى</h6>
            </div>
            <div className="footer-content">
                <div className="content-sidebar-flex">
                    <img src='/images/icons/dashboard/setting-2.png' alt=""/>
                    <h5>الاعدادات</h5>
                </div >
                <div className="content-sidebar-flex">
                    <img src='/images/icons/dashboard/Unlock-2.png' alt=""/>
                    <h5>تسجيل الخروج</h5>
                </div>
            </div>

        </div>
    </div>
   )
}

export default SidebarDashboard