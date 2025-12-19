import './Form.css';
import { useState } from 'react';
import Navbar from '../../components/volunteer-projects/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import appTheme from '../../appTeme';
import countriesWithFlages from '../../dashboard/countriesWithFlages';

function ApplicationForMembership() {

  // ====== STATES ======
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    AvailableTime: '',
    possibilities: ''
  });

  const [expand, setExpand] = useState(false); // لتوسيع حقل اختيار الدولة
  const [selectedCountry, setSelectedCountry] = useState({
    prefix: '963',
    name: 'سوريا',
    flag: '/images/icons/syria.png'
  });

  // ====== FUNCTIONS ======
  const handleFieldChange = (fieldName) => (e) => {
    setFormData(prev => ({ ...prev, [fieldName]: e.target.value }));
  };

  const handleExpand = () => setExpand(prev => !prev);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setExpand(false);
  };

  return (
    <ThemeProvider theme={appTheme}>
      <Navbar />

      <div className="app-a">
        <div className="request">
          <h6 style={{ fontSize: '24px', lineHeight: '100%', color: '#232323' }}>
            اضافة معلوماتك للانتساب للمشروع :
          </h6>

          <div className="form-request">

            {/* الاسم الكامل */}
            <label>الاسم الكامل</label>
            <div className="input-texthelp">
              من فضلك يجب أن يكون الاسم معبراً ولا يتجاوز 30 حرف.
            </div>
            <input
              type="text"
              placeholder="الاسم الكامل"
              value={formData.fullName}
              onChange={handleFieldChange('fullName')}
            />

            {/* رقم الهاتف مع اختيار الدولة */}
            <label>رقم الهاتف</label>
            <div className="phone-container" style={{ display: 'flex', gap: '10px' }}>
              <div
                onClick={handleExpand}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '0 12px',
                  border: '1px solid #70838766',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  backgroundColor: 'white'
                }}
              >
                <img src={selectedCountry.flag} alt={selectedCountry.name} style={{ width: '20px', height: '15px', borderRadius: '3px' }} />
                <span>+{selectedCountry.prefix}</span>
              </div>

              <input
                type="tel"
                placeholder="5XX XXX XXX"
                value={formData.phone}
                onChange={handleFieldChange('phone')}
                style={{
                  flex: 1,
                  border: '1px solid #70838766',
                  borderRadius: '8px',
                  padding: '0 12px'
                }}
              />
            </div>

            {/* قائمة الدول المنسدلة */}
            {expand && (
              <div style={{
                marginTop: '8px',
                border: '1px solid #eee',
                borderRadius: '8px',
                maxHeight: '200px',
                overflowY: 'auto',
                backgroundColor: '#D9E4E5'
              }}>
                {countriesWithFlages.map((country) => (
                  <div
                    key={country.prefix}
                    onClick={() => handleCountrySelect(country)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 12px',
                      cursor: 'pointer',
                      backgroundColor: selectedCountry.prefix === country.prefix ? '#6DCDE5' : 'transparent'
                    }}
                  >
                    <img src={country.flag} alt={country.name} style={{ width: '20px', height: '15px', borderRadius: '2px' }} />
                    <span>+{country.prefix}</span>
                    <span>{country.name}</span>
                  </div>
                ))}
              </div>
            )}

            {/* الوقت المتاح */}
            <label>اكتب لنا الأيام والساعات المتاحة</label>
            <textarea
              placeholder="مثال: الأحد - الخميس من 4 إلى 7 مساءً"
              value={formData.AvailableTime}
              onChange={handleFieldChange('AvailableTime')}
            />

            {/* الإمكانيات */}
            <label>ماذا يمكن أن تقدم لهذا المشروع؟</label>
            <textarea
              placeholder="اكتب هنا..."
              value={formData.possibilities}
              onChange={handleFieldChange('possibilities')}
            />
          </div>
        </div>
      </div>

      {/* أزرار الإرسال */}
      <div className="button-request" style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
        <button style={{
          width: '146px',
          border: '1px solid #D9E4E5',
          fontWeight: 500,
          background: '#fff',
          color: '#072127'
        }}>
          السابق
        </button>

        <button style={{ width: '396px', backgroundColor: '#6DCDE5', color: 'white', fontWeight: 500, border: 'none', borderRadius: '8px' }}>
          طلب الدخول كمتطوع
        </button>
      </div>

    </ThemeProvider>
  );
}

export default ApplicationForMembership;
