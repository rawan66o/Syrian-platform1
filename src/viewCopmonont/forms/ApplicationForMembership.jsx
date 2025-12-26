import './Form.css';
import { useState } from 'react';
import countriesWithFlages from '../../dashboard/countriesWithFlages';

<<<<<<< HEAD
function ApplicationForMembership (){
  // ======STATES SECTION ========
  const [formData,setFormData] = useState({
    fullName:'',
    phone:'',
    AvailableTime:'',
    possibilities:''
  })
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // حالة القائمة
=======
function ApplicationForMembership() {
  // ====== STATES ======
  const [isDropdownOpen,setIsDropdownOpen]= useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    AvailableTime: '',
    possibilities: ''
  });

>>>>>>> 0057728b6829541e2d13efced26bb8d0dbc765e4
  const [selectedCountry, setSelectedCountry] = useState({
    prefix: '963',
    name: 'سوريا',
    flag: '/images/icons/syria.png'
<<<<<<< HEAD
  }); 
=======
  });

  // ====== FUNCTIONS ======
  const handleFieldChange = (fieldName) => (e) => {
    setFormData(prev => ({ ...prev, [fieldName]: e.target.value }));
  };
>>>>>>> 0057728b6829541e2d13efced26bb8d0dbc765e4


<<<<<<< HEAD
=======
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };
>>>>>>> 0057728b6829541e2d13efced26bb8d0dbc765e4

  return (
    <div style={{padding:'10px'}}>
      <div className="app-a">
        <div className="request">
          <h6 style={{ fontSize: '24px', lineHeight: '100%', color: '#232323' }}>
            اضافة معلوماتك للانتساب للمشروع :
          </h6>

          <div className="form-request">

            {/* الاسم الكامل */}
            <label>الاسم الكامل</label>
<<<<<<< HEAD
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
=======
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
            <div className="phone-container" style={{ display: 'flex', width:'660px' }}>
         
>>>>>>> 0057728b6829541e2d13efced26bb8d0dbc765e4
              <input
                type="tel"
                placeholder="5XX XXX XXX"
                value={formData.phone}
<<<<<<< HEAD
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                style={{
                  flex: 1,
                  height: '56px',
                  border: '1px solid #70838766',
                  borderLeft:'none',
                  borderRadius: '0px 8px 8px 0px', // زاوية دائرية على اليسار فقط
                  padding: '0 16px',
                  fontSize: '16px'
                }}
              />

              {/* زر اختيار الدولة (بداخله العلم والسهم) */}
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} // قلب حالة الفتح/الإغلاق
                style={{
=======
                onChange={handleFieldChange('phone')}
                style={{
                  flex: 1,
                  borderRadius: '0px 8px 8px 0px',
                  border: '1px solid #70838766',
                  borderLeft: 'none',
                  textAlign:'right',
                  padding: '0 12px',
                  fontSize: '16px',
                }}
              />

             {!isDropdownOpen ? (<button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{
                  width:'auto',
>>>>>>> 0057728b6829541e2d13efced26bb8d0dbc765e4
                  height: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px',
<<<<<<< HEAD
                  padding: '0 16px',
                  border: '1px solid #70838766',
                  borderRight: 'none',
                  borderRadius: '8px 0 0 8px',
=======
                  padding: '0 12px',
                  borderRadius: '8px 0 0 8px',
                  border: '1px solid #70838766',
                  borderRight: 'none',
>>>>>>> 0057728b6829541e2d13efced26bb8d0dbc765e4
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }}
              >
<<<<<<< HEAD
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {/* خط فاصل */}
                  <div style={{ width: '1px', height: '24px', backgroundColor: '#70838766' }} />
                  {/* سهم القائمة (يتغير اتجاهه) */}
=======
                <div style={{ display: 'flex', alignItems: 'center', width: 'auto', gap: '8px' }}>
                  <span style={{ fontSize: '14px', color: '#000' }}>{selectedCountry.prefix}+</span>
                  <div style={{ width: '1px', height: '24px', backgroundColor: '#70838766' }} />
>>>>>>> 0057728b6829541e2d13efced26bb8d0dbc765e4
                  <img
                    src="/images/icons/ChevronRight.png"
                    alt=""
                    style={{
<<<<<<< HEAD
                      transform: isDropdownOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s'
                    }}
                  />
                  {/* علم الدولة المختارة */}
=======
                      width: '12px',
                      height: '11px',
                      transition: 'transform 0.3s'
                    }}
                  />
>>>>>>> 0057728b6829541e2d13efced26bb8d0dbc765e4
                  <img
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    style={{ width: '20px', height: '15px', borderRadius: '3px' }}
                  />
                </div>
<<<<<<< HEAD
              </button>
                  
              {/* القائمة المنسدلة نفسها - تظهر فقط إذا isDropdownOpen = true */}
              {isDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '60px', // أسفل الزر مباشرة
                  right: '430px',
=======
              </button>) : (
                <button style={{
                  width:'auto',
                  height: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px',
                  padding: '0 12px',
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
>>>>>>> 0057728b6829541e2d13efced26bb8d0dbc765e4
                  width: '220px',
                  maxHeight: '300px',
                  overflowY: 'auto',
                  backgroundColor: '#D9E4E5',
                  border: '1px solid #f0f0f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
<<<<<<< HEAD
                  zIndex: 1000 // للتأكد من ظهورها فوق العناصر الأخرى
                }}>
                  {/* البحث (اختياري) */}
                  {/* <input
                    type="text"
                    placeholder="ابحث عن دولة..."
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: 'none',
                      borderBottom: '1px solid #f0f0f0',
                      backgroundColor: '#D9E4E5',
                      boxSizing: 'border-box'
                    }}
                  /> */}

                  {/* قائمة الدول */}
=======
                  zIndex: 1000
                }}>
>>>>>>> 0057728b6829541e2d13efced26bb8d0dbc765e4
                  {countriesWithFlages.map((country) => (
                    <button
                      key={country.prefix}
                      type="button"
                      onClick={() => {
<<<<<<< HEAD
                        setSelectedCountry({ // 1. تحديث الدولة المختارة
                          prefix: country.prefix,
                          name: country.name,
                          flag: country.flag
                        });
                        setIsDropdownOpen(false); // 2. إغلاق القائمة
=======
                        handleCountrySelect(country)
                        setIsDropdownOpen(!isDropdownOpen)
>>>>>>> 0057728b6829541e2d13efced26bb8d0dbc765e4
                      }}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
<<<<<<< HEAD
                        justifyContent:'space-between' ,
=======
                        justifyContent: 'space-between',
>>>>>>> 0057728b6829541e2d13efced26bb8d0dbc765e4
                        gap: '12px',
                        padding: '12px',
                        border: 'none',
                        borderBottom: '1px solid #D9E4E5',
<<<<<<< HEAD
                        borderRadius:'0px',
                        backgroundColor: selectedCountry.prefix === country.prefix ? '#6DCDE5' : '#D9E4E5', // تمييز المختار
=======
                        borderRadius: '0px',
                        backgroundColor: selectedCountry.prefix === country.prefix ? '#6DCDE5' : '#D9E4E5',
>>>>>>> 0057728b6829541e2d13efced26bb8d0dbc765e4
                        cursor: 'pointer',
                        textAlign: 'right'
                      }}
                    >
<<<<<<< HEAD
                      {/* اسم الدولة ورمزها */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between', gap:'10px'}}>
                        <span style={{ fontSize: '14px', color: 'black' }}>+{country.prefix}</span>
                        <span style={{ fontWeight: 500,color:'black' }}>{country.name}</span>
                      </div>
                      {/* علم الدولة في القائمة */}
=======
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                        <span style={{ fontSize: '14px', color: 'black' }}>+{country.prefix}</span>
                        <span style={{ fontWeight: 500, color: 'black' }}>{country.name}</span>
                      </div>
>>>>>>> 0057728b6829541e2d13efced26bb8d0dbc765e4
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

    </div>
  );
}

export default ApplicationForMembership;
