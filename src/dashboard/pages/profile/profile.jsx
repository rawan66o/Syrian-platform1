import './profile.css';
import countriesWithFlages from '../../countriesWithFlages';
import Select from 'react-select';
import { components } from 'react-select';
import { useState } from 'react';

function Profile({status = 'volunteer'}){
  // eslint-disable-next-line 
  const[ formData,setFormData] = useState({
    fullName : '',
    email:'',
    date:'',
    phone:'',
    prifex:'',
    detail:'',
    time:'',
    sex:'',
    accommodation:'',
    academicStage:'',
    cv:''
  })
  const [stageFocused, setStageFocused] = useState(false);
  const countryOptions = countriesWithFlages.map(country => ({
    value: country.code, // أو country.prefix حسب ما تريد تخزينه
    label: `+${country.prefix}`, // للبحث والترشيح
    name: country.name,
    prefix: country.prefix,
    flag: country.flag
  }));

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

  const simpleCountryOptions = countriesWithFlages.map(country => ({
    value: country.code,
    label: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img 
          src={country.flag} 
          alt={country.name}
          style={{ width: '20px', height: '15px', borderRadius: '2px' }}
        />
        <span>{country.name}</span>
      </div>
    )
  }));

   return(
      <div className='flex-col-start' style={{gap:'20px'}}>
         <h4>معلومات الحساب الاساسية</h4>
         <p>تتضمن هذه الإعدادات معلومات أساسية عن حسابك.</p>
         
         {/*  FORM PROFILE SECTION */}
         <div className="layout-form">
            <div className='flex-row'>
                <div className="flex-col-start">
                 <label><img src="/images/icons/dashboard/user.png" alt="" /> الاسم الكامل</label>
                  <input type='text' placeholder="مثال: محمد صافي" 
                    value={formData.fullName}
                  /> 
               </div>
               <div className="flex-col-start">
                 <label><img src="/images/icons/dashboard/gmail.png" alt="" /> البريد الالكتروني</label>
                 <input type='email' placeholder='example@email.com'
                  value={formData.email}
                 /> 
               </div>
            </div>
           
           <div className='flex-row'>
            <div className="flex-col-start">
               <label><img src='/images/icons/dashboard/calendar.svg' alt="" /> تاريخ الميلاد</label>
               <input type='date' placeholder='2025 / 05 / 02'
                value={formData.date}
               />
            </div>
               <div className="flex-col-start">
                  <label><img src="/images/icons/dashboard/call.svg" alt="" /> رقم الهاتف</label>
                  <div style={{display:'flex', alignItems:'center', width: '100%'}}>
                    {/* إدخال الرقم */}
                    <input type="tel"
                      placeholder="5XX XXX XXX"
                      value={formData.phone}
                    />
                    {/* اختيار رمز الدولة مع العلم */}
                    <div style={{ width: '100px', marginLeft: '10px' }}>
                      <Select
                        options={countryOptions}
                        placeholder=""
                        defaultValue={countryOptions.find(option => option.prefix === '963')}
                        value={formData.prifex}
                        // تعديل formatOptionLabel ليعرض العلم على اليسار
                        formatOptionLabel={({ label, prefix, flag }) => (
                          <div style={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            // direction: 'ltr'
                          }}>
                            <img 
                              src={flag} 
                              alt=""
                              style={{ 
                                width: '20px', 
                                height: '15px', 
                                borderRadius: '2px',
                                marginRight: '8px' // مسافة بين العلم ورمز الدولة
                              }}
                            />
                            <span>+{prefix}</span>
                          </div>
                        )}
                        styles={{
                          control: (base, state) => ({
                            ...base,
                            width: '200px',
                            height: '56px',
                            borderRadius: '8px 0 0 8px',
                            border: state.isFocused ? '1px solid #70838766' : '1px solid #70838766',
                            borderRight: 'none',
                            textAlign: 'right',
                            outline: 'none',
                            display: 'flex',
                            flexDirection: 'row', // ترتيب أفقي
                            alignItems: 'center',
                            paddingLeft: '12px', // مسافة من اليسار للعلم
                            '&:hover': {
                              border: state.isFocused ? '1px solid #70838766' : '1px solid #70838766',
                              borderRight: 'none',
                              outline: 'none'
                            }
                          }),
                          input: (base) => ({
                            ...base,
                            visibility: 'hidden',
                            width: '0',
                            padding: '0'
                          }),
                          valueContainer: (base) => ({
                            ...base,
                            display: 'flex',
                            flexDirection: 'row-reverse', 
                            alignItems: 'center',
                            padding: '0',
                            flex: 1,
                            overflow: 'hidden',
                            justifyContent: 'flex-end'
                          }),
                          singleValue: (base) => ({
                            ...base,
                            margin: 0,
                            display: 'flex',
                            alignItems: 'center',
                            // direction: 'ltr'
                          }),
                          indicatorsContainer: (base) => ({
                            ...base,
                            display: 'flex',
                            alignItems: 'center',
                            order: -1, // وضع المؤشرات في البداية (يسار)
                            marginRight: '8px'
                          }),
                          dropdownIndicator: (base, state) => ({
                            ...base,
                            color: state.isFocused ? '#000000' : '#666666',
                            padding: '0 8px',
                            order: 2 // السهم بعد العلم مباشرة
                          }),
                          indicatorSeparator: (base, state) => ({
                            ...base,
                            backgroundColor: state.isFocused ? '#D9DBE5' : '#D9E4E5',
                            width: '1px',
                            height: '24px',
                            margin: '0 8px',
                            alignSelf: 'center',
                            order: 1 // الخط بعد السهم
                          }),
                          menu: (base) => ({
                            ...base,
                            textAlign: 'right'
                          })
                        }}
                        components={{
                          // مكون مخصص لعرض العلم داخل مربع الاختيار
                          SingleValue: ({ children, ...props }) => {
                            return (
                              <components.SingleValue {...props}>
                                <div style={{ 
                                  display: 'flex', 
                                  alignItems: 'center',
                                }}>
                                  {/* العلم يظهر أولاً على اليسار */}
                                  {props.data.flag && (
                                    <img 
                                      src={props.data.flag} 
                                      alt=""
                                      style={{ 
                                        width: '20px', 
                                        height: '15px', 
                                        borderRadius: '2px',
                                        marginRight: '8px'
                                      }}
                                    />
                                  )}
                                  {/* رمز الدولة */}
                                  <span>+{props.data.prefix}</span>
                                </div>
                              </components.SingleValue>
                            );
                          },
                          // مكون مخصص لعناصر القائمة
                          Option: ({ children, ...props }) => {
                            return (
                              <components.Option {...props}>
                                <div style={{ 
                                  display: 'flex', 
                                  alignItems: 'center',
                                }}>
                                  {props.data.flag && (
                                    <img 
                                      src={props.data.flag} 
                                      alt=""
                                      style={{ 
                                        width: '20px', 
                                        height: '15px', 
                                        borderRadius: '2px',
                                        marginRight: '8px'
                                      }}
                                    />
                                  )}
                                  <span>+{props.data.prefix} - {props.data.name}</span>
                                </div>
                              </components.Option>
                            );
                          }
                        }}
                      />
                    </div>
                  </div>
               </div>
           </div>
            
            <div className="flex-col-start">
              <label><img src="/images/icons/dashboard/course-icon/course-icon.png" alt="" /> وصف الطالب</label>
              <textarea placeholder='اكتب وصفاً عن نفسك...'
                value={formData.detail}
              />
            </div>  
             
          {/* SECTION HOURS TO VOLUNTEER */}
          {status === 'volunteer' ? (
          <div className="flex-col-start">
             <h4>معلومات التطوع </h4>
             <p>تتضمن هذه الإعدادات معلومات التطوع  الاساسية والمهمة</p>
             <textarea placeholder='اكتب وصفاً عن نفسك...' value={formData.time} />
           </div>
          ):''}
          </div>
          
         {/* FORM MORE INFORMATION SECTION */}
         <h4>معلومات اضافية</h4>
         <div className="layout-form">
            <div className="flex-col-start">
              <label>الجنس</label>
               <select 
                onFocus={() => setStageFocused(true)}
                onBlur={() => setStageFocused(false)}
                style={{
                  border: stageFocused ? '2px solid #D9E4E5' : '1px solid #D9E4E5',
                  cursor: 'pointer',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='${stageFocused ? '%23000000' : '%23666'}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                }}
                value={formData.sex}
              >
                  <option value="">اختر الجنس</option>
                  <option value="male">ذكر</option>
                  <option value="female">انثى</option>
               </select> 
            </div>
            
            <div className="flex-col-start">
              <label><img src="/images/icons/dashboard/gmail.png" alt="" /> بلد الاقامة</label>
              <Select
                options={simpleCountryOptions}
                defaultValue={countryOptions.find(option => option.name === 'سوريا')}
                placeholder="اختر الدولة"
                value={formData.accommodation}
                formatOptionLabel={({ label }) => label}
                styles={{
                  control: (base ,state) => ({
                    ...base,
                    width:'910px',
                    height: '48px',
                    border: state.isFocused ? '1px solid #D9E4E5' : '1px solid #D9E4E5' ,
                    borderRadius: '8px',
                    textAlign: 'right',
                    outline:'none',
                    '&:hover':{
                      border: state.isFocused ? '1px solid #D9E4E5' : '1px solid #D9E4E5' ,
                      outline:'none',
                    },
                    '&:focus':{
                      border:'1px solid #D9E4E5',
                      outline:'none',
                    }
                  }),
                  "&::placeholder":{
                    fontSize:'10px',
                    padding:'10px',
                    fontWeight: 600
                  },
                  menu: (base) => ({
                    ...base,
                    textAlign: 'right'
                  }),
                  indicatorSeparator: () => ({ display: 'none'}),
                  dropdownIndicator: (base, state) => ({
                    ...base,
                    color: state.isFocused ? '#000000' : '#666666',
                    padding: '12px',
                    marginBottom:'10px'
                  })
                }}
              />
            </div>
            
            <div className="flex-col-start">
              <label>المرحلة الدراسية</label>
              <select 
                onFocus={() => setStageFocused(true)}
                onBlur={() => setStageFocused(false)}
                style={{
                  border: stageFocused ? '2px solid #D9E4E5' : '1px solid #D9E4E5',
                  cursor: 'pointer',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='${stageFocused ? '%23000000' : '%23666'}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                }}
                value={formData.academicStage}
              >
                <option value="">اختر المرحلة</option>
                <option value="highschool">بكلوريا</option>
                <option value="university">طالب جامعي</option>
                <option value="graduate">خريج</option>
              </select>
            </div>
            
            <div className="flex-col-start">
               <label>السيرة الذاتية (CV)</label>
               <p style={{fontSize:'12px', fontWeight:'400'}}> من فضلك يجب أن يكون الملف معبر واحترافي </p>
               <div className='input-file'>
                 <label htmlFor="cv-upload" className='input-file-button'>
                  <img src='/images/icons/add.png' alt='إضافة ملف'/>
                 </label>
                 <input 
                  id="cv-upload" 
                  type="file" 
                  accept=".pdf,.doc,.docx" 
                  style={{display: 'none'}}
                  value={formData.cv}
                 />
               </div>
            </div> 
         </div>
         
         {/* DELETE ACCOUNT SECTION */}
         <h4>حذف الحساب</h4>
         <p>يؤسفنا ان نراك تغادر!</p>  
         <p>يرجى الملاحظة: حذف حسابك وبياناتك الشخصية دائم ولا يمكن التراجع عنه. لن تتمكن منصة ادراك من استعادة حسابك أو البيانات التي تم حذفها.</p>  
         <p>قد تفقد أيضًا الوصول إلى الشهادات الموثّقة وبيانات اعتماد البرنامج الأخرى مثل شهادات التخصصات. إذا كنت ترغب بعمل نسخة من السجلات الخاصة بك قبل متابعة الحذف ، قم باتّباع الإرشادات الخاصة بـ 
           <a href="/ptint" className="certificate-link">طباعة او</a>
           <a href="/download" className="certificate-link">تنزيل شهادة</a>
           </p>         
         <button className='delete'>
           حذف الحساب
         </button>
      </div>
   )
}

export default Profile;