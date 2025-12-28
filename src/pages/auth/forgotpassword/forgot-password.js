import { useState } from 'react';
import classes from '../auth.module.css';
import { useNavigate } from 'react-router';
import { useToast } from '../../../context/ToastContext';
import { useAuth } from '../../../context/auth-context';

const ForgotPassword = () => {
    const { showHideToast } = useToast();

    const [email, setEmail] = useState('');
    const { dispatch, authState } = useAuth();
    const { isLoading, error } = authState  

    const navigate = useNavigate();
    
    const handleValidateEmail = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.email === email);

        if (userExists) {

            showHideToast("تم إرسال رابط إعادة التعيين إلى بريدك", "info");
            navigate("/new-password", { state: { email } });

        } else {

            showHideToast("البريد الإلكتروني غير مسجل", "error");
            dispatch({ ...state, error: 'البريد الإلكتروني غير مسجل' });
        }
    };

    return <div className={classes.auth_container}>
        <div className={classes.header}>
            <h1>هل نسيت كلمة المرور الخاصة بك؟</h1>
            <p className={classes.header_p}>أدخل بريدك الإلكتروني الشخصي لإكمال العملية الآن!</p>
        </div>
        <div className={classes.auth_body}>
            <div className={classes.form_container}>
                <form className={classes.form}>
                    <div className={classes.form_inputs}>
                        <div className={classes.input_container}>
                            <label className={classes.input_label}>البريد الالكتروني</label>
                            <input className={classes.form_input} type='text' placeholder='ادخل البريد الالكتروني' 
                             value={email} onChange={(e)=> setEmail(e.target.value)} />
                             {state.error && <p className={classes.error_message}>{state.error}</p> }
                        </div>
                    </div>
                    <div className={classes.button_wrapper}>
                        <button className={classes.submit_button} onClick={handleValidateEmail} >التالي</button>
                        <button className={classes.cancel_button}>الغاء</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}
export default ForgotPassword;