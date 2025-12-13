import { Avatar, AvatarGroup } from "@mui/material";

function Card({ data }) {
  const safeData = data || {};

  function handleCourse() {
    alert('go to progect succsses')
  }

  return (
    <div className='card-pro'>
      {/* HEADER SECTION */}
      <div className="card-content-header">
        <img 
          src={safeData.image || '/images/5.jpg'} 
          alt={safeData.name || "صورة الدورة"}
          onError={(e) => {
            e.target.src = '/images/default-course.jpg';
          }}
        />
        <div>
          <h5>{safeData.name || "اسم الدورة"}</h5>
        </div>
      </div>
      
      {/* DATE SECTION */}
      <div className='card-flex-center'>
        <div className="volunteers-section-card">
          <AvatarGroup total={22}>
            <Avatar alt="متطوع 1" src='/images/logo/1.jpg' />
            <Avatar alt="متطوع 2" src='/images/logo/2.jpg' />
            {/* <Avatar alt="متطوع 3" src='/images/logo/3.jpg' /> */}
          </AvatarGroup>
          <h6>22</h6>
          <p> متطوع حالي بالمشروع</p>
        </div>
        <div className='card-flex'>
          <img src='/images/icons/dashboard/calendar.svg' alt='تاريخ'/>
          <h5>{safeData.date || "تاريخ غير محدد"}</h5>
        </div>
      </div>
      
      {/* BUTTONS SECTION */}
      <div className="continue-course"style={{background:'white', borderBottom:"1px solid #072127"}} onClick={handleCourse}>
        <h2>عرض المشروع</h2>
        <img src='/images/icons/dashboard/Vector.png' alt='متابعة' style={{cursor: 'pointer'}} />
      </div>
    </div>
  )
}

export default Card