import './Form.css'
import { useState } from 'react';
import Navbar from '../../components/volunteer-projects/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import appTheme from '../../appTeme';
import countriesWithFlages from '../../dashboard/countriesWithFlages';

function ApplicationForMembership (){
  // ======STATES SECTION ========
  const [formData,setFormData] = useState({
    fullName:'',
    phone:'',
    AvailableTime:'',
    possibilities:''
  })
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // حالة القائمة
  const [selectedCountry, setSelectedCountry] = useState({
    prefix: '963',
    name: 'سوريا',
    flag: '/images/icons/syria.png'
  }); 

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
            <div style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              position: 'relative' // مهم لوضع القائمة المنسدلة
            }}>
              {/* حقل إدخال الرقم */}
              <input
                type="tel"
                placeholder="5XX XXX XXX"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                style={{
                  flex: 1,
                  height: '56px',
                  border: '1px solid #70838766',
                  borderRadius: '8px 0 0 8px', // زاوية دائرية على اليسار فقط
                  padding: '0 16px',
                  fontSize: '16px'
                }}
              />

              {/* زر اختيار الدولة (بداخله العلم والسهم) */}
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} // قلب حالة الفتح/الإغلاق
                style={{
                  height: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px',
                  padding: '0 16px',
                  border: '1px solid #70838766',
                  borderLeft: 'none',
                  borderRadius: '0 8px 8px 0',
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {/* خط فاصل */}
                  <div style={{ width: '1px', height: '24px', backgroundColor: '#70838766' }} />
                  {/* سهم القائمة (يتغير اتجاهه) */}
                  <img
                    src="/images/icons/ChevronRight.png"
                    alt=""
                    style={{
                      transform: isDropdownOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s'
                    }}
                  />
                  {/* علم الدولة المختارة */}
                  <img
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    style={{ width: '20px', height: '15px', borderRadius: '2px' }}
                  />
                </div>
              </button>
                  
              {/* القائمة المنسدلة نفسها - تظهر فقط إذا isDropdownOpen = true */}
              {isDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '60px', // أسفل الزر مباشرة
                  right: '0',
                  width: '220px',
                  maxHeight: '300px',
                  overflowY: 'auto',
                  backgroundColor: 'white',
                  border: '1px solid #D9E4E5',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  zIndex: 1000 // للتأكد من ظهورها فوق العناصر الأخرى
                }}>
                  {/* البحث (اختياري) */}
                  <input
                    type="text"
                    placeholder="ابحث عن دولة..."
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: 'none',
                      borderBottom: '1px solid #f0f0f0',
                      boxSizing: 'border-box'
                    }}
                  />

                  {/* قائمة الدول */}
                  {countriesWithFlages.map((country) => (
                    <button
                      key={country.prefix}
                      type="button"
                      onClick={() => {
                        setSelectedCountry({ // 1. تحديث الدولة المختارة
                          prefix: country.prefix,
                          name: country.name,
                          flag: country.flag
                        });
                        setIsDropdownOpen(false); // 2. إغلاق القائمة
                      }}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px',
                        border: 'none',
                        borderBottom: '1px solid #f0f0f0',
                        backgroundColor: selectedCountry.prefix === country.prefix ? '#F0F9FF' : 'white', // تمييز المختار
                        cursor: 'pointer',
                        textAlign: 'right'
                      }}
                    >
                      {/* علم الدولة في القائمة */}
                      <img
                        src={country.flag}
                        alt={country.name}
                        style={{ width: '20px', height: '15px', borderRadius: '2px' }}
                      />
                      {/* اسم الدولة ورمزها */}
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <span style={{ fontWeight: 500 }}>{country.name}</span>
                        <span style={{ fontSize: '14px', color: '#666' }}>+{country.prefix}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
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