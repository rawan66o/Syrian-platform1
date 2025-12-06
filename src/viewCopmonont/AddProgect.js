import appTheme from '../appTeme';
import Navbar from '../components/volunteer-projects/Navbar';
import '../styles/Form.css'
import { ThemeProvider } from '@mui/material/styles';

function AddProject() {
  return (
    <ThemeProvider theme={appTheme}>
      <Navbar />
      <div className='app-a'>
        <div className='request'>
          <h6 style={{fontSize:'24px', lineHeight:'100%', color:'#232323'}} >اضافة مشروع تطوعي جديد :</h6>
          <div className='form-request'>
            <label>عنوان المشروع</label>
            <div className='input-texthelp'> من فضلك يجب أن يكون الاسم معبرا ولا يتجاوز 30 حرف .</div>
            <input placeholder='دورة لغة انجليزية' />
            <label>عدد المتطوعين المطلوبين :</label>
            <input placeholder='24'/>
            <label>تحديد موعد بدأ المشروع</label>
            <input type='datetime-local' />
            <label>صورة الغلاف</label>
            <div className='input-texthelp'> من فضلك يجب أن تكون الصورة معبرة ومناسبة مع الاسم .</div>
            <div className='input-image'>
              <div className='input-image-button'>
                <img src='/images/icons/add.png' alt=''/>
              </div>
            </div>
            <label>وصف قصير  للمشروع</label>
            <div className='input-texthelp'>يجب ان لا يتجاوز ال 50 حرف</div>
            <input placeholder='وصف الدورة كامل ومعبر'/>
            <label>الجهة المنفذة :</label>
            <div className='input-texthelp'>من فضلك يجب أن تكون الصورة معبرة ومناسبة مع الاسم .</div>
            <div className='input-image'>
              <div className='input-image-button'>
                <img src='/images/icons/add.png' alt=''/>
              </div>
            </div>
            <label>وصف المشروع الكامل</label>
            <textarea placeholder='وصف الدورة كامل ومعبر'/>
          </div>
        </div>
      </div>
      <div className='button-request'>
        <button style={{ width:'146px', border: '1px solid #D9E4E5', 
          fontWeight:500,
          background:'#ffff', color:'#072127'}}>السابق</button>
        <button style={{ width:'396px'}}>نشر المشروع</button>
      </div>
        </ThemeProvider>
  )
}

export default AddProject;