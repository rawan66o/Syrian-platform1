import '../styles/Posts.css'
import { ThemeProvider } from '@mui/material/styles';

import Footer from '../components/footer/footer'
import Navbar from '../components/volunteer-projects/Navbar';
import LatestProjects from "../components/volunteer-projects/LatestProjects";
import { volunteers, commentsData } from './Data'
// IMPORTS MUI
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import appTheme from '../appTeme';
import Comment from '../components/volunteer-projects/Comment';
import Volunteer from '../components/volunteer-projects/Volunteer';
import { useState } from 'react';


const progect = `لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .

لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .
لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين 

لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .

لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .سب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .

لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .`

function Posts({full}) {
  const [commentInput, setCommentInput] =useState('')
   // حالة التحكم
  const [showAll, setShowAll] = useState(false);
  const MAX_ROWS = 2;
  const ITEMS_PER_ROW = 3;
  const MAX_ITEMS = MAX_ROWS * ITEMS_PER_ROW; // 6 عناصر
  
  const displayedVolunteers = showAll 
    ? volunteers 
    : volunteers.slice(0, MAX_ITEMS);
  
  const hiddenCount = volunteers.length - displayedVolunteers.length;

  return(
    <ThemeProvider theme={appTheme}>
      <Navbar/>
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
                <button disabled className={`status-badge ${full ? 'full' : 'not-full'} `}>
                  <div className='status-badge-text'>{full ? "ممتلئ" : "لم يكمتل العدد"}</div>
                </button>
                <Button variant='outlined' color='#D9E4E5' size='small' sx={{color:'#0A1826'}}>مشاركة 
                  <img src='/images/icons/shere.png' alt='' style={{width:'13px', height:'16px'}} />
                  </Button>
              </div>
              <button style={{ width:'372px', height:'52px',fontSize:'18px' }}>طلب الدخول كمتطوع</button>
            </div>
            
            <img src='images/5.jpg' alt='' style={{width:'100%', height:'441.57px'}} />
            {/* START TIME SECTION &&  Implementing entity */}
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              {/* START TIME SECTION */}
              <div className='card-time'>
                <Typography variant='body1' color='#708387' >موعد البدأ</Typography>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                  <Typography variant='h6' >الاحد</Typography>
                   <div className="date-info">
                    <CalendarMonthOutlinedIcon sx={{ fontSize: '20px' }} />
                    <Typography variant='h6'>2025 / 8 / 18</Typography>
                    </div> 
                </div>       
              </div>
              {/* SECTION OF Implementing entity */}
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'12px'}}>
                <Typography variant='h2' fontSize='16px' >الجهة المنفذة:</Typography>
                <div style={{display:'flex', justifyContent:'space-around',alignItems:'center',gap:'12px'}}>
                 <img src='images/icons/icon2.png' alt='' 
                   style={{width:'147px',height:'28px'}} />
                 <img src='images/icons/icon.png' alt='' 
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
                  <Button 
                  variant='outlined' 
                  size='medium' color='#D9E4E5' 
                  sx={{color:'#072127',background:'#F2F2F280'}}
                  onClick={() => setShowAll(true)}
                  >عرض الكل</Button>
                </Box>
              )}
              {showAll && (
                <Box sx={{ textAlign: 'center', mt: 3 }}>
                  <Button 
                    variant="outlined" 
                    onClick={() => setShowAll(false)}
                  >
                    إخفاء المتطوعين الإضافيين
                  </Button>
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