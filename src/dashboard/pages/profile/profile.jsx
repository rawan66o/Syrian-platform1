import './profile.css';
import Select from 'react-select';
import countriesWithFlages from '../../countriesWithFlages';
import { useState } from 'react';

function Profile({status = 'volunteer'}){
  // const [genderFocused, setGenderFocused] = useState(false);
  const [stageFocused, setStageFocused] = useState(false);
   const countryOptions = countriesWithFlages.map(country => ({
    value: country.code,
    label: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img 
          src={country.flag} 
          alt={country.name}
          style={{ width: '20px', height: '15px', borderRadius: '2px' }}
        />
        <span>{country.name} (+{country.prefix})</span>
      </div>
    ),
    name: country.name,
    prefix: country.prefix,
    flag: country.flag
  }));

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
                  <input type='text' placeholder="مثال: محمد صافي" /> 
               </div>
               <div className="flex-col-start">
                 <label><img src="/images/icons/dashboard/gmail.png" alt="" /> البريد الالكتروني</label>
                 <input type='email' placeholder='example@email.com'/> 
               </div>
            </div>
           
           <div className='flex-row'>
            <div className="flex-col-start">
               <label><img src='/images/icons/dashboard/calendar.svg' alt="" /> تاريخ الميلاد</label>
               <input type='date' placeholder='2025 / 05 / 02'/>
            </div>
               <div className="flex-col-start">
                  <label><img src="/images/icons/dashboard/call.svg" alt="" /> رقم الهاتف</label>
                  <div style={{display:'flex', alignItems:'center', width: '100%'}}>
                     {/* إدخال الرقم */}
                     <input
                       style={{
                         flex: 1,
                         borderLeft:'0px', 
                         borderRadius:'0px 8px 8px 0px',
                         height: '48px'
                       }}
                       type="tel"
                       placeholder="5XX XXX XXX"
                     />
                     {/* اختيار رمز الدولة مع العلم */}
                     <div style={{ width: '100px', marginLeft: '10px' }}>
                       <Select
                         options={countryOptions}
                         placeholder=""
                         formatOptionLabel={({ label }) => label}
                         styles={{
                           control: (base,stageFocused) => ({
                             ...base,
                             height: '48px',
                             borderRadius: '8px 0 0 8px',
                             border: stageFocused.isFocused ? '1px solid #D9E4E5': '1px solid #D9E4E5',
                             borderRight: 'none',
                             textAlign: 'right',
                             outline:'none',
                             '&:hover':{
                             border: stageFocused.isFocused? '1px solid #D9E4E5': '1px solid #D9E4E5',
                              outline:'none'
                             },
                             "&::placeholder":{
                                fontSize:'10px',
                                fontWeight: 600
                              },
                           }),
                           menu: (base) => ({
                             ...base,
                             textAlign: 'right'
                           }),
                           indicatorSeparator: (base, state) => ({
                            ...base,
                            backgroundColor: state.isFocused ? '#D9DBE5' : '#D9E4E5',
                            marginTop: '12px',
                            marginBottom: '12px',
                            width: '1px',
                            height:'22px',
                            transition: 'background-color 0.2s ease'
                          }),
                          dropdownIndicator: (base, state) => ({
                            ...base,
                            color: state.isFocused ? '#000000' : '#666666',
                            padding: '12px',
                            marginBottom:'10px'
                          })
                         }}
                       />
                     </div>
                  </div>
               </div>
           </div>
            
            <div className="flex-col-start">
              <label><img src="/images/icons/dashboard/course-icon/course-icon.png" alt="" /> وصف الطالب</label>
              <textarea placeholder='اكتب وصفاً عن نفسك...'/>
            </div>   
          {/* SECTION HOURS TO VOLUNTEER */}

          {status === 'volunteer' ? (
          <div className="flex-col-start">
             <h4>معلومات التطوع </h4>
             <p>تتضمن هذه الإعدادات معلومات التطوع  الاساسية والمهمة</p>
             <textarea placeholder='اكتب وصفاً عن نفسك...' />
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
                placeholder="اختر الدولة"
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
                 />
               </div>
            </div> 
         </div>
         
         {/* DELETE ACCOUNT SECTION */}
         <h4>حذف الحساب</h4>
         <p>يؤسفنا ان نراك تغادر!</p>  
         <p>يرجى الملاحظة: حذف حسابك وبياناتك الشخصية دائم ولا يمكن التراجع عنه. لن تتمكن منصة ادراك من استعادة حسابك أو البيانات التي تم حذفها.</p>  
         <p>قد تفقد أيضًا الوصول إلى الشهادات الموثّقة وبيانات اعتماد البرنامج الأخرى مثل شهادات التخصصات. إذا كنت ترغب بعمل نسخة من السجلات الخاصة بك قبل متابعة الحذف ، قم باتّباع الإرشادات الخاصة بـ 
           <a href="" className="certificate-link">طباعة او</a>
           <a href="" className="certificate-link">تنزيل شهادة</a>
           </p>         
         <button className='delete'>
           حذف الحساب
         </button>
      </div>
   )
}

export default Profile;