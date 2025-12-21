import classes from '../auth.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useReducer, useState } from 'react';
import authReducer, { initialAuthState } from '../../../Reducers/auth-reducer';

const Register = () => {
     const navigate = useNavigate();

    const [state, dispatch] = useReducer(authReducer, initialAuthState); // ✅ صححت: dispatch

    // ======= STATES ========    
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        isChecked: false
    });
    
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    
    // ======= FUNCTIONS ========
    const handleFieldChange = (fieldName) => (e) => {
        // ✅ أزلت dispatch من هنا - ليس مكانه الصحيح
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData(prev => ({
            ...prev,
            [fieldName]: value
        }));
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) return 'مطلوب';
        if (!re.test(email)) return 'غير صالح';
        return '';
    };
    
    const validatePassword = (password) => {
        const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        if (!password) return 'مطلوبة';
        if (password.length < 6) return 'قصيرة';
        if (!specialCharRegex.test(password)) return 'يجب أن تحتوي على رموز خاصة';
        return '';
    };

    const validateFullName = (name) => {
        if (!name.trim()) return 'مطلوب';
        if (name.trim().length < 2) return 'الاسم قصير جداً';
        return '';
    };

    const validateCheckbox = (isChecked) => {
        if (!isChecked) return 'يجب الموافقة على الشروط';
        return '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // التحقق من كل الحقول
        const emailError = validateEmail(formData.email);
        const passwordError = validatePassword(formData.password);
        const nameError = validateFullName(formData.fullName);
        const checkboxError = validateCheckbox(formData.isChecked);
        
        const newErrors = {
            email: emailError,
            password: passwordError,
            fullName: nameError,
            isChecked: checkboxError
        };
        
        setErrors(newErrors);
        
        // إذا لا توجد أخطاء، تابع
        const hasErrors = Object.values(newErrors).some(error => error !== '');
        if (!hasErrors) {
            console.log('بيانات صالحة:', formData);
            
            // ✅ هنا مكان dispatch الصحيح
            dispatch({ type: 'REGISTER_REQUEST' }); // نبدأ العملية
            
            // إنشاء كائن المستخدم الكامل
            const userToAdd = {
                id: Date.now(), // معرف فريد
                fullName: formData.fullName,
                email: formData.email,
                createdAt: new Date().toISOString(),
                isActive: true,
                role: 'user'
                // ⚠️ لا نرسل الباسوورد للـ reducer!
            };
            
            // محاكاة تأخير الشبكة (للتجربة)
            setTimeout(() => {
                dispatch({
                    type: 'REGISTER_SUCCESS',
                    payload: userToAdd  // ✅ نرسل البيانات
                });
            }, 1000);
            navigate('/');
            // في التطبيق الحقيقي:
            // await fetch('/api/register', { ... });
        }
    };
    
    return (
        <div className={classes.auth_container}>
            <div className={classes.header}>
                <h1>انشاء حساب جديد</h1>
                <p className={classes.header_p}>
                    هل لديك حساب على المنصة السورية؟ 
                    <Link to='/login' className={classes.link}>سجل دخولك</Link>
                </p>
                
                {/* ✅ عرض حالة التحميل والخطأ */}
                {state.isLoading && <p className={classes.header_p}>جاري التسجيل...</p>}
                {state.error && <p style={{color: 'red'}}>{state.error}</p>}
                
                {/* ✅ تصحيح: state.currentUser بدلاً من state.auth */}
                {/* {state.currentUser && (
                    <div style={{background: '#e8f5e9', padding: '10px', marginTop: '10px'}}>
                        <p>✅ تم تسجيل الدخول بنجاح!</p>
                        <p>مرحباً <strong>{state.currentUser.fullName}</strong></p>
                        <p>البريد: {state.currentUser.email}</p>
                    </div>
                )} */}
            </div>
            <div className={classes.auth_body}>
                <div className={classes.o_auth_container}>
                    <button type="button">
                        <img className={classes.google_icon} src='/icons/google_icon/google.svg' alt='' />
                        <p className={classes.o_auth_p}>انشاء حساب عبر جوجل</p>
                    </button>
                    <button type="button">
                        <img className={classes.apple_icon} src='/icons/apple_icon/apple.svg' alt='' />
                        <p className={classes.o_auth_p}>انشاء حساب عبر أبل</p>
                    </button>
                </div>
                <div className={classes.or_separater}>
                    or
                </div>
                <div className={classes.form_container}>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <div className={classes.form_inputs}>
                            {/* حقل الاسم الكامل */}
                            <div className={classes.input_container}>
                                <label className={classes.input_label}>الاسم</label>
                                <input 
                                    className={`${classes.form_input} ${errors.fullName ? classes.error_border : ''}`}
                                    type='text' 
                                    placeholder='ادخل اسمك الكامل' 
                                    value={formData.fullName} 
                                    onChange={handleFieldChange('fullName')}
                                />
                                {errors.fullName && <p className={classes.error_text}>{errors.fullName}</p>}
                            </div>
                            
                            {/* حقل البريد الإلكتروني */}
                            <div className={classes.input_container}>
                                <label className={classes.input_label}>البريد الالكتروني</label>
                                <input 
                                    className={`${classes.form_input} ${errors.email ? classes.error_border : ''}`}
                                    type='email'
                                    placeholder='ادخل البريد الالكتروني' 
                                    value={formData.email} 
                                    onChange={handleFieldChange('email')}
                                />
                                {errors.email && <p className={classes.error_text}>{errors.email}</p>}
                            </div>
                            
                            {/* حقل كلمة المرور */}
                            <div className={classes.input_container}>
                                <div className={classes.label_with_validation_wrapper}>
                                    <label className={classes.input_label}>كلمة المرور</label>
                                    <p className={classes.validation_p}>6 أحرف على الأقل من فضلك يجب أن تحتوي على رموز أيضًا</p>
                                </div>
                                <div className={classes.input_with_icon}>
                                    <input 
                                        className={`${classes.form_input} ${errors.password ? classes.error_border : ''}`}
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='ادخل كلمة المرور' 
                                        value={formData.password} 
                                        onChange={handleFieldChange('password')}
                                    />
                                    <img 
                                        className={classes.show_and_hide_icon} 
                                        src={showPassword ? '/icons/on_click_hide_password/eye-slash.svg' : '/icons/on_click_show_password/show.png'}
                                        alt=''
                                        onClick={() => { setShowPassword(prev => !prev) }}
                                    />
                                </div>
                                {errors.password && <p className={classes.error_text}>{errors.password}</p>}
                            </div>
                        </div>
                        
                        {/* حقل الموافقة على الشروط */}
                        <div className={classes.checkbox_container}>
                            <div className={classes.checkbox_wrapper}>
                                <input 
                                    className={classes.checkbox} 
                                    type='checkbox' 
                                    checked={formData.isChecked} 
                                    onChange={handleFieldChange('isChecked')}
                                />
                            </div>
                            <p className={classes.checkbox_label}>قبول سياسة الخصوصية والشروط</p>
                            {errors.isChecked && <p className={classes.error_text}>{errors.isChecked}</p>}
                        </div>
                        
                        {/* زر الإرسال */}
                        <div className={classes.button_wrapper}>
                            <button 
                                className={classes.submit_button} 
                                type='submit'
                                disabled={state.isLoading} // ✅ نعطله أثناء التحميل
                            >
                                {state.isLoading ? 'جاري التسجيل...' : 'انشاء الحساب'}
                            </button>
                        </div>
                    </form>
                    
                    {/* ✅ عرض بيانات للمطور (للتجربة فقط) */}
                    <div style={{ 
                        marginTop: '20px', 
                        padding: '15px', 
                        background: '#f5f5f5',
                        fontSize: '14px'
                    }}>
                        <h4>معلومات التطبيق (للتطوير):</h4>
                        <p>عدد المستخدمين المسجلين: <strong>{state.users.length}</strong></p>
                        <p>المستخدم الحالي: {state.currentUser ? state.currentUser.fullName : 'لا يوجد'}</p>
                        <p>حالة التحميل: {state.isLoading ? 'نعم' : 'لا'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;