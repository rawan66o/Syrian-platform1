import './Posts.css'
import { useEffect, useState } from 'react';
import appTheme from '../../appTeme';
import { ThemeProvider } from '@mui/material/styles';

import { volunteers, commentsData } from '../Data'
import Footer from '../../components/footer/footer'
import Comment from '../../components/volunteer-projects/Comment';
import Volunteer from '../../components/volunteer-projects/Volunteer';
import LatestProjects from "../../components/volunteer-projects/LatestProjects";
// IMPORTS MUI
import { Box, Container, Grid, Typography } from '@mui/material';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useNavigate, useParams } from 'react-router';


const progect = `لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .

لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .
لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين 

لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .

لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .سب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .

لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .`

function Posts({full}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [commentInput, setCommentInput] = useState('');
  const [project, setProject] = useState(null);
  
  // حالة التحكم
  const [showAll, setShowAll] = useState(false);
  const MAX_ROWS = 2;
  const ITEMS_PER_ROW = 3;
  const MAX_ITEMS = MAX_ROWS * ITEMS_PER_ROW; // 6 عناصر
  
  // تأكد من أن volunteers معرف بشكل صحيح
  const displayedVolunteers = showAll 
    ? volunteers 
    : volunteers.slice(0, MAX_ITEMS);
  
  const hiddenCount = volunteers.length - displayedVolunteers.length;

  useEffect(() => {
    // جلب البيانات من localStorage
    const projects = JSON.parse(localStorage.getItem('volunteer-project')) || [];
    const foundProject = projects.find(proj => proj.id.toString() === id);
    
    if (foundProject) {
      setProject(foundProject); // <-- تحديث حالة project
      console.log('✅ بيانات المشروع:', foundProject);
    } else {
      console.log('❌ المشروع غير موجود في localStorage');
      // يمكنك إضافة redirect هنا إذا المشروع غير موجود
      // navigate('/not-found');
    }
  }, [id]); // <-- إضافة id كـ dependency

  function handleProjectApplicationTo() {
    if (!project) {
      alert('المشروع غير محمل بعد. الرجاء الانتظار...');
      return;
    }
    navigate(`/project-application/${project.id}`);  
  }

  // التحقق من وجود المشروع قبل التصيير
  if (!project) {
    return <div>جاري تحميل بيانات المشروع...</div>;
  }

  return(
    <ThemeProvider theme={appTheme}>
      <Container maxWidth="lg">
        <div className='layout-l'>
          <div className='layout-post'>
            {/* TITLE SECTION */}
            <div className='layout-title'>
              <ArrowForwardOutlinedIcon fontSize='medium'/>
              <div className='title-text' >منشور تصميم  Ui UX للتطبيقات و المواقع الالكترونية.</div>
            </div>
            {/* HEADER SECTION */}
            <div style={{gap:'20px', display:'flex', flexDirection:'column',
              borderBottom: '1px solid #D9E4E5',paddingBottom:'24px'
            }}>
              <div className="post-header">
                <div disabled className={`status-badge ${full ? 'full' : 'not-full'} `}>
                  <div className='status-badge-text'>{full ? "ممتلئ" : "لم يكمتل العدد"}</div>
                </div>
                <button className='button-shere'>مشاركة 
                  <img src='/images/icons/shere.png' alt='' style={{width:'13px', height:'16px'}} />
                  </button>
              </div>
              <button type='submit' onClick={handleProjectApplicationTo}
               style={{ width:'372px', height:'52px',fontSize:'18px' }}>طلب الدخول كمتطوع</button>
            </div>
            
            <img src='/images/5.jpg' alt='' style={{width:'100%', height:'441.57px'}} />
            {/* START TIME SECTION &&  Implementing entity */}
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              {/* START TIME SECTION */}
              <div className='card-time'>
                <p>موعد البدأ</p>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                  <Typography variant='h6' >الاحد</Typography>
                   <div className="date-info">
                    <img src='/images/icons/dashboard/calendar.svg' alt='' sx={{ fontSize: '20px' }} />
                    <Typography variant='h6'>2025 / 8 / 18</Typography>
                    </div> 
                </div>       
              </div>
              {/* SECTION OF Implementing entity */}
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'12px'}}>
                <Typography variant='h2' fontSize='16px' >الجهة المنفذة:</Typography>
                <div style={{display:'flex', justifyContent:'space-around',alignItems:'center',gap:'12px'}}>
                 <img src='/images/icons/icon2.png' alt='' 
                   style={{width:'147px',height:'28px'}} />
                 <img src='/images/icons/icon.png' alt='' 
                   style={{width:'56px',height:'42px'}} />
                </div>
              </div>
            </div>
            <div className='divider'/>

            {/* SECTION OF PROJECT DETAILES */}
            <Typography variant='h2' fontSize='20px'  >وصف المشروع:</Typography>  
            <Typography variant='body1' fontSize='16px' color='#708387' >{progect}</Typography>  
            <div className='divider'/>

            {/* Volunteers && BUTTON SHOWALL SECTION */}           
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
              <div style={{display:'flex',alignItems:'center'}}>
                <Typography variant='h4' sx={{ color: '#072127', fontSize: '16px' }} >المتطوعين الحاليين:</Typography>
                <Typography variant='h4' sx={{ color: '#708387', fontSize: '16px' }} >({volunteers.length}متطوع)</Typography>
              </div>
              <div className='number-of-vol'>العدد المطلوب:  {volunteers.length}</div>
            </div>
            <div>
              <Grid container spacing={2.5} sx={{ width:'100%', justifyContent:'center'}}>
                {displayedVolunteers.map((vol) => (
                  <Grid item xs={12} md={4} sm={6} key={vol.id}
                  sx={{ display:'flex', justifyContent:'center', padding:'8px'}}>
                    <Volunteer {...vol} />
                  </Grid>
                ))}
              </Grid>
              {!showAll && hiddenCount > 0 && (
                <Box sx={{ textAlign: 'center', mt: 3 }}>
                  <button  
                  className='button-hidden'
                  onClick={() => setShowAll(true)}
                  >عرض الكل</button>
                </Box>
              )}
              {showAll && (
                <Box sx={{ textAlign: 'center', mt: 3 }}>
                  <button  className='button-hidden'
                    onClick={() => setShowAll(false)}
                  >
                    إخفاء المتطوعين الإضافيين
                  </button>
                </Box>
              )}
            </div> 
            {/* Volunteers && BUTTON SHOWALL SECTION */}
            <div className='divider'/>

            {/* Comment SECTION */}

            {/* TITLEComment SECTION */}
            <div style={{display:'flex',alignItems:'center', gap:'6px'}}>
              <Typography variant='h4' 
              sx={{ color: '#072127', fontSize: '16px' }} 
              >التعليقات : </Typography>
              <Typography variant='h4' 
              sx={{ color: '#708387', fontSize: '16px' }}
              >(122 تعليق)</Typography>
            </div>
            <div style={{ gap:'16px' }}>
              {commentsData.map((comment) => (
                <Comment key={comment.id} {...comment} />
              ))}
            </div>
            {/* Comment SECTION */}
            <div className='divider'/>
            {/* ADD COMMENT SECTION */}
            <form>
              <div className='comment-publish'>
                <input placeholder='اضف تعليق هنا' value={commentInput}
                 onChange={(e)=>setCommentInput(e.target.value)}/>
                <button style={{ width:'111px', height:'52px',fontSize:'18px' }}>نشر</button>
              </div>
            </form>
            {/* ADD COMMENT SECTION */}
          </div>
          <div style={{ width:'25%'}}>
            <LatestProjects />
          </div>
        </div>
      </Container>
      <Footer/>
    </ThemeProvider>
  )
}

export default Posts;