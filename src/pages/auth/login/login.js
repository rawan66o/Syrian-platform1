import classes from '../auth.module.css';
import { Link, NavLink, useNavigate } from 'react-router';
import { useEffect, useReducer, useState } from 'react';
import authReducer, { initialAuthState } from '../../../Reducers/auth-reducer';
import { useToast } from '../../../context/ToastContext';

const Login = () => {
    const { showHideToast } = useToast(); 

    const [state, dispatch] = useReducer(authReducer, initialAuthState);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        
        // تحقق من الإيميل
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'البريد الإلكتروني مطلوب';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'بريد إلكتروني غير صالح';
        }
        
        // تحقق من كلمة المرور
        if (!formData.password) {
            newErrors.password = 'كلمة المرور مطلوبة';
        } else if (formData.password.length < 6) {
            newErrors.password = 'كلمة المرور قصيرة (6 أحرف على الأقل)';
        }
        
        // setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if(!validateForm()) return;

        dispatch({ type: 'LOGIN_REQUEST' });

        setTimeout(() => {
            try {
                const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
                const user = storedUsers ? JSON.parse(localStorage.getItem("users")) : [] ;

                const foundUser = user.find(u =>
                    u.email.toLowerCase() === formData.email.toLowerCase().trim() &&
                    u.password === formData.password
                );
                if (foundUser) {
                    const token = `local_token_${Date.now()}`;
                    
                    localStorage.setItem('auth_token', `local_token_${token}`);
                    localStorage.setItem('currentUser', JSON.stringify(foundUser));
                    dispatch({ type: 'LOGIN_SUCCESS', payload: { ...foundUser, token: `local_token_${token}`} });
                    
                    dispatch({ type: 'RELOAD_USERS' });

                    showHideToast(` مرحباً ${formData.fullName}! تم تسجيل الدخول الى حسابك`, "success");
                    
                    setFormData({ email: '', password: '' });

                    showHideToast("مرحباً بك في المنصة السورية!");
                    
                    navigate('/');
                } else {
                    // dispatch({ type: 'LOGIN_FAILURE', payload: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' });
                    showHideToast('البريد الإلكتروني أو كلمة المرور غير صحيحة', "error");
                }
                
            } catch (error) {
                console.error('خطأ في تسجيل الدخول:', error);
                dispatch({ type: 'LOGIN_FAILURE', payload: 'حدث خطأ أثناء تسجيل الدخول. حاول مرة أخرى.' });
                showHideToast('حدث خطأ أثناء تسجيل الدخول. حاول مرة أخرى.', "error");
            }
        }, 1000);
    }

    useEffect(() => {
        dispatch({ type: 'RELOAD_USERS' });
    }, []);

    return <div className={classes.auth_container}>
        <div className={classes.header}>
            <h1>تسجيل الدخول</h1>
            <p className={classes.header_p}>ليس لديك حساب بالمنصة السورية؟ <Link to='/register' className={classes.link}>انشاء حساب</Link></p>
            {state.error && (
                <div className={classes.error_message}>
                    ⚠️ {state.error}
                </div>
            )}
        </div>
        <div className={classes.auth_body}>
            <div className={classes.o_auth_container}>
                <button>
                    <img className={classes.google_icon} src='/icons/google_icon/google.svg' alt='' />
                    <p className={classes.o_auth_p}>تسجيل عبر جوجل</p>
                </button>
                <button>
                    <img className={classes.apple_icon} src='/icons/apple_icon/apple.svg' alt='' />
                    <p className={classes.o_auth_p}>تسجيل عبر أبل</p>
                </button>
            </div>
            <div className={classes.or_separater}>
                or
            </div>
            <div className={classes.form_container}>
                <form className={classes.form}>
                    <div className={classes.form_inputs}>
                        <div className={classes.input_container}>
                            <label className={classes.input_label}>البريد الالكتروني</label>
                            <input className={classes.form_input} type='email' placeholder='ادخل البريد الالكتروني'
                             value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                        </div>
                        <div className={classes.input_container_with_forgot}>
                            <div className={classes.input_container}>
                                <div className={classes.label_with_vlidation_wrapper}>
                                    <label className={classes.input_label}>كلمة المرور</label>
                                    <p className={classes.validation_p}>6 أحرف على الأقل من فضلك يجب أن تحتوي على رموز أيضًا</p>
                                </div>
                                <div className={classes.input_with_icon}>
                                    <input className={classes.form_input} type={showPassword ? 'text' : 'password'} placeholder='ادخل كلمة المرور' 
                                     value={formData.password} onChange={(e)=> setFormData({...formData, password: e.target.value})} />
                                    <img className={classes.show_and_hide_icon} src={`${showPassword ? '/icons/on_click_hide_password/eye-slash.svg' : '/icons/on_click_show_password/show.png'}`}
                                        alt=''
                                        onClick={() => { setShowPassword(prev => !prev) }}
                                    />
                                </div>
                            </div>
                            <div className={classes.p_wrapper}>
                                <NavLink to="/forgot-password" className={classes.forgot_p}>هل نسيت كلمة السر ؟</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={classes.button_wrapper}>
                        <button className={classes.submit_button} type='submit' onClick={handleLogin} disabled={state.isLoading}  >تسجيل الدخول</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}
export default Login;