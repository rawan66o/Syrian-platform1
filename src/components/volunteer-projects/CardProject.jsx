import '../../styles/VolunteerProjects.css'
import { Avatar, AvatarGroup, Button, Typography } from "@mui/material";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

function CardProject({ title, number, ditail, full }) {
  return (
    <div className='card-project'>
      <img 
        className='image-card-project' 
        alt='مشروع'
        src="/images/5.jpg"
      />
      
      <div className="card-content">
        {/* الحالة والتاريخ */}
        <div className="card-header">
          <button disabled className={`status-badge ${full ? 'full' : 'not-full'} `}>
            <div className='status-badge-text'>{full ? "ممتلئ" : "لم يكمتل العدد"}</div>
          </button>
          <div className="date-info">
            <CalendarMonthOutlinedIcon sx={{ fontSize: '20px' }} />
            <Typography variant='h6'>2025 / 8 / 18</Typography>
          </div>
        </div>

        {/* العنوان والتفاصيل */}
        <div className="card-body">
          <Typography className="project-title" variant='h1'>
            {title}
          </Typography>
          <Typography className="project-detail" variant='h6'>
            {ditail}
          </Typography>
        </div>

        {/* المتطوعين والزر */}
        <div className="card-footer">
          <div className="volunteers-section">
            <AvatarGroup total={number}>
              <Avatar alt="متطوع 1" src='/images/logo/1.jpg' />
              <Avatar alt="متطوع 2" src='/images/logo/2.jpg' />
              <Avatar alt="متطوع 3" src='/images/logo/3.jpg' />
            </AvatarGroup>
            <h4 className="volunteers-text">
              {number}
               متطوع حالي بالمشروع
            </h4>
          </div>
          
          <Button 
            variant='contained' 
            className="project-button"
          >
            <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 'small' }} />
            عرض المشروع
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CardProject;