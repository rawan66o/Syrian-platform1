import classes from '../auth.module.css';
import { Link, useNavigate } from 'react-router-dom';
import {  useState } from 'react';
import { useToast } from '../../../context/ToastContext';
import { useAuth } from '../../../context/auth-context';

const Register = () => {
    const navigate = useNavigate();

    const { showHideToast } = useToast();   

    const { dispatch, authState } = useAuth();
    const { isLoading, error } = authState 

    // ======= STATES ========    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        isChecked: false
    });
    
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    
    // ======= FUNCTIONS ========
    const handleFieldChange = (fieldName) => (e) => {
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

    const validatename = (name) => {
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
        const nameError = validatename(formData.name);
        const checkboxError = validateCheckbox(formData.isChecked);
        
        const newErrors = {
            email: emailError,
            password: passwordError,
            name: nameError,
            isChecked: checkboxError
        };
        
        setErrors(newErrors);
        
        const hasErrors = Object.values(newErrors).some(error => error !== '');
        if (!hasErrors) {
            console.log('بيانات صالحة:', formData);
            
            const users = JSON.parse(localStorage.getItem("users")) || [];
            console.log('عدد المستخدمين:', users.length);
            console.log('المستخدم الأول:', users[0]);
            const emailExists = users.some(user => user.email.toLowerCase() === formData.email.toLowerCase().trim());
            
            if (emailExists) {
                dispatch({ type: 'REGISTER_FAILURE', payload: 'البريد الإلكتروني مستخدم بالفعل' });
                return;
            }
            
            dispatch({ type: 'REGISTER_REQUEST' }); 

            const userToAdd = {
                id: Date.now(), 
                name: formData.name,
                password: formData.password,
                email: formData.email,
                createdAt: new Date().toISOString(),
                isActive: true,
                role: 'user'
            };
            
            dispatch({ type: 'REGISTER_SUCCESS', payload: userToAdd });
            // await fetch('/api/register', { ... });
        }
        showHideToast(`🎉 مرحباً ${formData.name}! تم إنشاء حسابك`, "success");

        setFormData({ name: '', email: '', password: '', isChecked: false });

        showHideToast("مرحباً بك في المنصة السورية!");

        navigate('/');
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
                {authState.isLoading && <p className={classes.header_p}>جاري التسجيل...</p>}
                {authState.error && <p style={{color: 'red'}}>{authState.error}</p>}

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
                                    className={`${classes.form_input} ${errors.name ? classes.error_border : ''}`}
                                    type='text' 
                                    placeholder='ادخل اسمك الكامل' 
                                    value={formData.name} 
                                    onChange={handleFieldChange('name')}
                                />
                                {errors.name && <p className={classes.error_text}>{errors.name}</p>}
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
                            <button className={classes.submit_button} 
                                type='submit' disabled={authState.isLoading} >
                                {authState.isLoading ? 'جاري التسجيل...' : 'انشاء الحساب'}
                            </button>
                        </div>
                    </form>
                
                </div>
            </div>
        </div>
    );
};

export default Register;