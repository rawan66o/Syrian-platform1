import { useState } from 'react';
import Navbar from '../components/volunteer-projects/Navbar';
import '../styles/Form.css'
import { ThemeProvider } from '@mui/material/styles';
import appTheme from '../appTeme';

function ApplicationForMembership (){
  const [formData,setFormData] = useState({
    fullName:'',
    phone:'',
    AvailableTime:'',
    possibilities:''
  })

  // ======= FUNCTIONS =======
  const handleFieldChange = (fieldName) => (e) => {
    const value = e.target.value;
    
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  }

  return(
    <ThemeProvider theme={appTheme}>
      <Navbar />
      <div className='app-a'>
        <div className='request'>
          <h6 style={{fontSize:'24px', lineHeight:'100%', color:'#232323'}} >اضافة معلوماتك للانتساب للمشروع :</h6>
          <div className='form-request'>
            <label>الاسم الكامل</label>
            <div className='input-texthelp'> من فضلك يجب أن يكون الاسم معبرا ولا يتجاوز 30 حرف .</div>
            <input type="text" placeholder='دورة لغة انجليزية'
             value={formData.fullName} onChange={handleFieldChange('fullName')} />
            <label>رقم الهاتف</label>
            <input type="tel" 
             value={formData.phone} onChange={handleFieldChange('phone')}/>
            <label>اكتب لنا الايام المتاح بها والساعات المتاحة </label>
            <textarea placeholder='دورة لغة انجليزية' 
             value={formData.AvailableTime} onChange={handleFieldChange('AvailableTime')} />
            <label>ماذا يمكن ان تقدم لهذا المشروع ؟</label>
            <textarea placeholder='دورة لغة انجليزية' 
             value={formData.possibilities} onChange={handleFieldChange('possibilities')}/>
          </div>
        </div>
      </div>
      <div className='button-request'>
        <button style={{ width:'146px', border: '1px solid #D9E4E5', 
          fontWeight:500,
          background:'#ffff', color:'#072127'}}>السابق</button>
        <button style={{ width:'396px'}}>طلب الدخول كمتطوع</button>
      </div>
    </ThemeProvider>
  )
}

export default ApplicationForMembership;