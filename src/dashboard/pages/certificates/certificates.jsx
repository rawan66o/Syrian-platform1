import './certificates.css'
// import '../dashboard-home/dashbooard-home.css'
import {certificates} from '../../mycoursesdata';

function Card({data}) {
    const safeData = data || {};

   return(
    <div className='card-certificates'>
      {/* HEADER SECTION */}
      <div className="card-content-header">
        <img src={ safeData.image || '/images/5.jpg'} alt={safeData.name}/>
        <div>
          <h5 style={{margin: 0, color: '#072127',fontSize:'20px'}}>{safeData.name || "اسم الدورة"}</h5>
          {/* <p style={{margin: '5px 0 0 0', color: '#666', fontSize: '14px'}}>
              {safeData.status || "المحاضر"}
          </p> */}
        </div>
      </div>
      {/* CONTENT SECTION */}
      <div className='card-flex-start'>
        <img src='/images/icons/dashboard/calendar.svg' alt=''/>
        <h5>{safeData.date}</h5>
      </div>
      
      <div className='card-flex-row' >
        <div className='button-certificates' style={{background:'#6DCDE5',color:'#ffff'}}>التنزيل ك PDF <img src='/images/icons/dashboard/Layer_1.png' style={{width:'20px',height:'20px', filter: 'brightness(0) invert(1)'}} alt=''/></div>
        <div className='button-certificates' style={{background:'#7C83891A', color:'#071722'}}>عرض الشهادة <img src='/images/icons/dashboard/Vector.png' alt='' /></div>
      </div>
    </div>
   )
}
function Certificates() {
   return (
    <div className="layout-certificates">
        <div className="layout-certificates-title">
            <h4>الشهادات</h4>
            <div style={{ display:'flex',justifyContent:'space-between',gap:'10px' }}>
                <button style={{height:'33px',width:'107.5px'}}>من الاحدث</button>
                <button style={{background:'#7C83891A', height:'33px', color:'#071722', width:'107.5px'}}>الاقدم</button>
            </div>
        </div>
        <div className='courses-grid'>
           {certificates.map((certificate)=>(
            <div key={certificate.id}>
                <Card data={certificate}/>
            </div>
           ))}
            <Card />
        </div>
    </div>
   )
}

export default Certificates;