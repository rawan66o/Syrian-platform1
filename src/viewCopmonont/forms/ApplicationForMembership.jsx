import './Form.css'
import { useState } from 'react';
import Navbar from '../../components/volunteer-projects/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import appTheme from '../../appTeme';
import countriesWithFlages from '../../dashboard/countriesWithFlages';

function ApplicationForMembership (){
  const [formData,setFormData] = useState({
    fullName:'',
    phone:'',
    AvailableTime:'',
    possibilities:''
  })
  const [expand,setExpand]=useState(false)
  // eslint-disable-next-line
  const syriaOption = {
    value: 'SY', // أو '963' حسب تنسيقك
    label: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', direction: 'rtl' }}>
        <span>+963</span>
        <img 
          src="/images/icons/syria.png" // تأكد من وجود صورة العلم
          alt="سوريا"
          style={{ width: '20px', height: '15px', borderRadius: '2px' }}
        />
      </div>
    ),
    name: 'سوريا',
    prefix: '963',
    flag: '/images/icons/syria.png'
  };

  // ======= FUNCTIONS =======
  const handleFieldChange = (fieldName) => (e) => {
    const value = e.target.value;
    
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  }

  function handleExpand() {
    setExpand(true)
    // return <div>
    //   {countriesWithFlages.map((country)=>(
    //     <div>
    //       <h4>{country.prefix}</h4>
    //       <h4>{country.name}</h4>
    //       <img src={country.flag} alt=''
    //        style={{ width: '20px', height: '15px', borderRadius: '2px' }}
    //       />
    //     </div>
    //   ))}
    // </div>
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
            <div style={{display:'flex', alignItems:'center', width: '100%', border:'1px solid #70838766',borderRadius:'8px'}}>
              {/* إدخال الرقم */}
              <input type="tel"
                placeholder="5XX XXX XXX"
                value={formData.phone}
                style={{border:'0px'}}
              />
              <div value={expand} onClick={handleExpand} style={{display:'flex', alignItems:'center',justifyContent:'space-between',gap:'10px',padding:'10px'}}>
                <div style={{width:'1px', height:'24px', backgroundColor:'#70838766'}}/>
                <div>
                  <img src='/images/icons/ChevronRight.png' alt='' />
                </div>
                <img 
                  src="/images/icons/syria.png" // تأكد من وجود صورة العلم
                  alt="سوريا"
                  style={{ width: '20px', height: '15px', borderRadius: '2px' }}
                />
                {expand ? ({countriesWithFlages.map((country)=>(
                  <div>
                    <h4>{country.prefix}</h4>
                    <h4>{country.name}</h4>
                    <img src={country.flag} alt=''
                     style={{ width: '20px', height: '15px', borderRadius: '2px' }}
                    />
                  </div>))}
                ):''}
                
              </div>
            </div>
            
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