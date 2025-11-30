import appTheme from '../appTeme';
import Navbar from '../compononts/Navbar';
import '../styles/style3.css'
import { ThemeProvider } from '@mui/material/styles';

function ApplicationForMembership (){
  return(
    <ThemeProvider theme={appTheme}>
      <Navbar />
      <div className='app-a'>
        <div className='request'>
          <h6 style={{fontSize:'24px', lineHeight:'100%', color:'#232323'}} >اضافة معلوماتك للانتساب للمشروع :</h6>
          <div className='form-request'>
            <label>الاسم الكامل</label>
            <div className='input-texthelp'> من فضلك يجب أن يكون الاسم معبرا ولا يتجاوز 30 حرف .</div>
            <input type="text" placeholder='دورة لغة انجليزية' />
            <label>رقم الهاتف</label>
            <input type="tel"/>
            <label>اكتب لنا الايام المتاح بها والساعات المتاحة </label>
            <textarea placeholder='دورة لغة انجليزية' />
            <label>ماذا يمكن ان تقدم لهذا المشروع ؟</label>
            <textarea placeholder='دورة لغة انجليزية' />
          </div>
        </div>
      </div>
      <div className='button-request'>
        <button style={{ width:'396px'}}>طلب الدخول كمتطوع</button>
        <button style={{ width:'146px', border: '1px solid #D9E4E5', 
            fontWeight:500,
            background:'#ffff', color:'#072127'}}>السابق</button>
      </div>
    </ThemeProvider>
  )
}

export default ApplicationForMembership;