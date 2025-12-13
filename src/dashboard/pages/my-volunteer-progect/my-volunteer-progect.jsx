import './my-volunteer-progect.css';
import { certificates } from '../../mycoursesdata';
import { useState } from 'react';
import Card from '../../components/content-dashboard/card-progects';

function MyProgectes() {
  // دالة للتحكم في الترتيب
  const [sortBy, setSortBy] = useState('newest');
  
  const sortedCertificates = [...certificates].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });
  
  return (
    <div className="layout-pro">
      {/* HEADER WITH SORTING OPTIONS */}
      <div className="layout-pro-title">
        <h4>المشاريع التطوعية</h4>
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            width: '247px', 
            height: '45px', 
            background: '#7C83891A', 
            paddingRight: '10px',
            borderRadius: '8px'
          }}
        >
          <div 
            className='layout-pro-title-button'
            onClick={() => setSortBy('newest')}
            style={{
              background: sortBy === 'newest' ? '#6DCDE5' : 'transparent',
              color: sortBy === 'newest' ? 'white' : '#071722',
              borderRadius: '8px',
              marginLeft: '5px',
              flex: 1
            }}
          >
            من الاحدث
          </div>
          <div 
            className='layout-pro-title-button'
            onClick={() => setSortBy('oldest')}
            style={{
              background: sortBy === 'oldest' ? '#6DCDE5' : 'transparent',
              color: sortBy === 'oldest' ? 'white' : '#071722',
              borderRadius: '8px',
              flex: 1
            }}
          >
            الاقدم
          </div>
        </div>
      </div>
      
      {/* PROJECTS GRID */}
      <div className='courses-grid'>
        {sortedCertificates.map((certificate) => (
          <Card key={certificate.id} data={certificate} />
        ))}
      </div>
    </div>
  )   
}

export default MyProgectes;