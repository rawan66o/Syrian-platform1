import './dashboard.css'
import Navbar from "../../components/volunteer-projects/Navbar"
import SidebarDashboard from '../components/sidebar-dashboard/sidebar-dashboard'
import ContentDashboard from '../components/content-dashboard/content-dashboard'
import Footer from '../../components/footer/footer'

function Dashboard(){
   return (
    <div>
      <Navbar />
      <div className='layout-dashboard'>
        {/* SIDEBAR SECTION */}
        <div className='layout-dashboard-sidebar'>
          <SidebarDashboard />
        </div>
        {/* CONTENT SECTION */}
        <div className='layout-dashboard-content'>
          <ContentDashboard />
        </div>
      </div>
      <Footer />
    </div>
   )
}

export default Dashboard