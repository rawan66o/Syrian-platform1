import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Avatar,
  Badge,
  Divider,
  Menu,
  MenuItem,
  Drawer,
  useMediaQuery
} from '@mui/material'
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Language as LanguageIcon
} from '@mui/icons-material'
import MobileNav from './MobileNav'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  // eslint-disable-next-line
  const isMobile = useMediaQuery('(max-width:1199px)') // lg breakpoint

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const menuItems = ['الرئيسية', 'الكورسات', 'المنتدى', 'المشاريع', 'اتصل بنا']

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>الملف الشخصي</MenuItem>
      <MenuItem onClick={handleMenuClose}>الإعدادات</MenuItem>
      <MenuItem onClick={handleMenuClose}>تسجيل الخروج</MenuItem>
    </Menu>
  )

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0',
        direction: 'rtl'
      }}
    >
      <Toolbar sx={{ 
        justifyContent: 'space-between',
        py: 1,
        px: { xs: 2, md: 3, xl: 6 }
      }}>
        {/* الجزء الأيسر - الشعار والقائمة */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            component="img"
            src="/images/logo/spLogo12.png"
            alt="شعار المنصة السورية"
            sx={{
              width: '162px',
              height: '62px'
            }}
          />
          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
          
          {/* القائمة - تظهر فقط في الشاشات الكبيرة */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 3 }}>
            {menuItems.map((item) => (
              <Typography
                key={item}
                sx={{
                  cursor: 'pointer',
                  fontWeight: 500,
                  '&:hover': {
                    color: 'primary.main',
                  },
                  px: 1,
                  py: 0.5
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* الجزء الأيمن - الإشعارات والملف الشخصي */}
        <Box sx={{ 
          display: { xs: 'none', lg: 'flex' }, 
          alignItems: 'center', 
          gap: 2 
        }}>
          {/* الإشعارات واللغة */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton 
              sx={{ 
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                '&:hover': { backgroundColor: '#eeeeee' }
              }}
            >
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            
            <IconButton 
              sx={{ 
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                '&:hover': { backgroundColor: '#eeeeee' }
              }}
            >
              <LanguageIcon />
            </IconButton>
          </Box>

          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          {/* الملف الشخصي */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              cursor: 'pointer'
            }}
            onClick={handleProfileMenuOpen}
          >
            <Avatar
              src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
              sx={{
                width: 32,
                height: 32
              }}
            />
            <Typography sx={{ fontWeight: 500 }}>
              المدربة ريم فالح
            </Typography>
          </Box>
        </Box>

        {/* زر القائمة - يظهر فقط في الشاشات الصغيرة */}
        <IconButton
          edge="end"
          onClick={() => setOpen(!open)}
          sx={{ display: { lg: 'none' }, color: 'black' }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* القائمة الجانبية للجوال */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: { lg: 'none' },
          '& .MuiDrawer-paper': {
            width: 280,
          },
        }}
      >
        <MobileNav onClose={() => setOpen(false)} />
      </Drawer>

      {renderMenu}
    </AppBar>
  )
}

export default Navbar