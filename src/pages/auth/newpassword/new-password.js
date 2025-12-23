import { useNavigate } from 'react-router';
import { useToast } from '../../../context/ToastContext';
import authReducer, { initialAuthState } from '../../../Reducers/auth-reducer';
import classes from '../auth.module.css';
import { useReducer, useState } from 'react';
const NewPassword = () => {
    const { showHideToast } = useToast(); 
    const [state, dispatch] = useReducer(authReducer, initialAuthState);

    const [firstPassword, setFirstPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    function handleChangePassword(e) {
        e.preventDefault();
        if (firstPassword.length < 6 || secondPassword.length < 6) {
            showHideToast("يجب أن تكون كلمة المرور 6 أحرف على الأقل", "error");
        }
        else if (firstPassword !== secondPassword) {
            showHideToast("كلمتا المرور غير متطابقتان", "error");
        } else {
            dispatch({ type: 'RESET_PASSWORD_SUCCESS', payload: { email: state.email, newPassword: firstPassword } });
            showHideToast("تم تغيير كلمة المرور بنجاح", "success");
            navigate('/');
        }
    }

    return <div className={classes.auth_container}>
        <div className={classes.header}>
            <h1>انشاء كلمة مرور جديدة</h1>
            <p className={classes.header_p}>يجب أن تكون كلمة المرور الجديدة مختلفة عن كلمات المرور الأخرى.</p>
        </div>
        <div className={classes.auth_body}>
            <div className={classes.form_container}>
                <form className={classes.form}>
                    <div className={classes.form_inputs}>
                        <div className={classes.input_container_with_forgot}>
                            <div className={classes.input_container}>
                                <div className={classes.label_with_vlidation_wrapper}>
                                    <label className={classes.input_label}>كلمة المرور</label>
                                    <p className={classes.validation_p}>6 أحرف على الأقل من فضلك يجب أن تحتوي على رموز أيضًا</p>
                                </div>
                                <div className={classes.input_with_icon}>
                                    <input className={classes.form_input} type='password' placeholder='ادخل كلمة المرور'
                                     value={firstPassword} onChange={(e) => setFirstPassword(e.target.value)} />
                                    <img className={classes.show_and_hide_icon} src={`${showPassword ? '/icons/on_click_hide_password/eye-slash.svg' : '/icons/on_click_show_password/show.png'}`}
                                        alt=''
                                        onClick={() => { setShowPassword(prev => !prev) }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={classes.input_container_with_forgot}>
                            <div className={classes.input_container}>
                                <div className={classes.label_with_vlidation_wrapper}>
                                    <label className={classes.input_label}>تأكيد كلمة المرور</label>
                                    <p className={classes.validation_p}>6 أحرف على الأقل من فضلك يجب أن تحتوي على رموز أيضًا</p>
                                </div>
                                <div className={classes.input_with_icon}>
                                    <input className={classes.form_input} type='password' placeholder='ادخل كلمة المرور'
                                     value={secondPassword} onChange={(e) => setSecondPassword(e.target.value)} />
                                    <img className={classes.show_and_hide_icon} src={`${showPassword ? '/icons/on_click_hide_password/eye-slash.svg' : '/icons/on_click_show_password/show.png'}`}
                                        alt=''
                                        onClick={() => { setShowPassword(prev => !prev) }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.button_wrapper}>
                        <button className={classes.submit_button} type='submit' onClick={handleChangePassword} >انشاء كلمة مرور جديدة</button>
                        <button className={classes.cancel_button}>الغاء</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}
export default NewPassword;