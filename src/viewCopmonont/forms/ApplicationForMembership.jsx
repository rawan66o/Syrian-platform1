import './Form.css';
import { useState } from 'react';
import Navbar from '../../components/volunteer-projects/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import appTheme from '../../appTeme';
import countriesWithFlages from '../../dashboard/countriesWithFlages';

function ApplicationForMembership() {
  // ======STATES SECTION ========
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    AvailableTime: '',
    possibilities: ''
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry({
      prefix: country.prefix,
      name: country.name,
      flag: country.flag
    });
    setIsDropdownOpen(false);
  };

  return (
    <ThemeProvider theme={appTheme}>
      <Navbar />
      <div className='app-a'>
        <div className='request'>
          <h6>
            اضافة معلوماتك للانتساب للمشروع :
          </h6>
          
          <div className='form-request'>
            {/* حقل الاسم */}
            <label>الاسم الكامل</label>
            <div className='input-texthelp'>
              من فضلك يجب أن يكون الاسم معبرا ولا يتجاوز 30 حرف .
            </div>
            <input
              type="text"
              placeholder='دورة لغة انجليزية'
              value={formData.fullName}
              onChange={handleFieldChange('fullName')}
            />
            
            {/* حقل الهاتف */}
            <label>رقم الهاتف</label>
            <div className="phone-container">
              {/* حقل إدخال الرقم */}
              <input
                type="tel"
                placeholder="5XX XXX XXX"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                style={{
                  width:'540px',
                  height: '56px',
                  border: '1px solid #70838766',
                  borderLeft: 'none',
                  borderRadius: '0px 8px 8px 0px',
                  padding: '0 16px',
                  fontSize: '16px'
                }}
              />

             {!isDropdownOpen ? (<button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{
                  width:'auto',
                  height: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px',
                  padding: '0 16px',
                  border: '1px solid #70838766',
                  borderRight: 'none',
                  borderRadius: '8px 0 0 8px',
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', width: 'auto', gap: '8px' }}>
                  <span style={{ fontSize: '14px', color: '#000' }}>{selectedCountry.prefix}+</span>
                  <div style={{ width: '1px', height: '24px', backgroundColor: '#70838766' }} />
                  <img
                    src="/images/icons/ChevronRight.png"
                    alt=""
                    style={{
                      width: '12px',
                      height: '11px',
                      transition: 'transform 0.3s'
                    }}
                  />
                  <img
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    style={{ width: '20px', height: '15px', borderRadius: '3px' }}
                  />
                </div>
              </button>) : (
                <button style={{
                  width:'auto',
                  height: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px',
                  padding: '0 16px',
                  border: '1px solid #70838766',
                  borderRight: 'none',
                  borderRadius: '8px 0 0 8px',
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }}>
                  <img
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    style={{ width: '20px', height: '15px', borderRadius: '3px' }}
                  />
                  <span style={{ fontWeight: 500, color: '#000' }}>{selectedCountry.name}</span>
                  <img
                    src="/images/icons/ChevronRight.png"
                    alt=""
                    style={{
                      width: '12px',
                      height: '11px',
                      rotate: '90deg',
                      transition: 'transform 0.3s'
                    }}
                  />
                </button>
              )}

              {/* القائمة المنسدلة */}
              {isDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '60px',
                  right: '400px',
                  width: '220px',
                  maxHeight: '300px',
                  overflowY: 'auto',
                  backgroundColor: '#D9E4E5',
                  border: '1px solid #f0f0f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  zIndex: 1000
                }}>
                  {countriesWithFlages.map((country) => (
                    <button
                      key={country.prefix}
                      type="button"
                      onClick={() => handleCountrySelect(country)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '12px',
                        padding: '12px',
                        border: 'none',
                        borderBottom: '1px solid #D9E4E5',
                        borderRadius: '0px',
                        backgroundColor: selectedCountry.prefix === country.prefix ? '#6DCDE5' : '#D9E4E5',
                        cursor: 'pointer',
                        textAlign: 'right'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                        <span style={{ fontSize: '14px', color: 'black' }}>+{country.prefix}</span>
                        <span style={{ fontWeight: 500, color: 'black' }}>{country.name}</span>
                      </div>
                      <img
                        src={country.flag}
                        alt={country.name}
                        style={{ width: '20px', height: '15px', borderRadius: '3px' }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* الحقول الأخرى */}
            <label>اكتب لنا الايام المتاح بها والساعات المتاحة</label>
            <textarea
              placeholder='دورة لغة انجليزية'
              value={formData.AvailableTime}
              onChange={handleFieldChange('AvailableTime')}
            />
            
            <label>ماذا يمكن ان تقدم لهذا المشروع ؟</label>
            <textarea
              placeholder='دورة لغة انجليزية'
              value={formData.possibilities}
              onChange={handleFieldChange('possibilities')}
            />
          </div>
        </div>
      </div>
      <div className='button-request'>
        <button style={{ width:'146px', border: '1px solid #D9E4E5', 
          fontWeight:500,
          background:'#ffff', color:'#072127'}}>السابق</button>
        <button style={{ width:'396px'}}>نشر المشروع</button>
      </div>
    </ThemeProvider>
  );
}

export default ApplicationForMembership;