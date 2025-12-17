import './Form.css';
import { useState } from 'react';
import Navbar from '../../components/volunteer-projects/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import appTheme from '../../appTeme';
import countriesWithFlages from '../../dashboard/countriesWithFlages';

function ApplicationForMembership() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    AvailableTime: '',
    possibilities: ''
  });

  const [expand, setExpand] = useState(false);

  // ======= FUNCTIONS =======
  const handleFieldChange = (fieldName) => (e) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: e.target.value
    }));
  };

  const handleExpand = () => {
    setExpand(prev => !prev);
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
            {/* الاسم */}
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

            {/* الهاتف */}
            <label>رقم الهاتف</label>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                border: '1px solid #70838766',
                borderRadius: '8px'
              }}
            >
              <input
                type="tel"
                placeholder="5XX XXX XXX"
                value={formData.phone}
                onChange={handleFieldChange('phone')}
                style={{ border: '0px', flex: 1 }}
              />

              <div
                onClick={handleExpand}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px',
                  cursor: 'pointer'
                }}
              >
                <div style={{ width: '1px', height: '24px', backgroundColor: '#70838766' }} />

                <img src="/images/icons/ChevronRight.png" alt="" />

                <img
                  src="/images/icons/syria.png"
                  alt="سوريا"
                  style={{ width: '20px', height: '15px', borderRadius: '2px' }}
                />
              </div>
            </div>

            {/* قائمة الدول */}
            {expand && (
              <div style={{ marginTop: '10px', border: '1px solid #eee', borderRadius: '8px' }}>
                {countriesWithFlages.map((country) => (
                  <div
                    key={country.prefix}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px',
                      cursor: 'pointer'
                    }}
                  >
                    <img
                      src={country.flag}
                      alt={country.name}
                      style={{ width: '20px', height: '15px', borderRadius: '2px' }}
                    />
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

      <div className="button-request">
        <button
          style={{
            width: '146px',
            border: '1px solid #D9E4E5',
            fontWeight: 500,
            background: '#fff',
            color: '#072127'
          }}
        >
          السابق
        </button>

        <button style={{ width: '396px' }}>
          طلب الدخول كمتطوع
        </button>
      </div>
    </ThemeProvider>
  );
}

export default ApplicationForMembership;
