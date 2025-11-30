import { Box, Container, Grid, Typography, Link, Divider, Stack, IconButton } from '@mui/material'

const Footer = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#1a237e', // primary.dark
        color: 'white',
        py: 6,
        direction: 'rtl'
      }}
    >
      <Container maxWidth="xl">
        {/* المحتوى الرئيسي */}
        <Grid container spacing={4} justifyContent="space-between">
          {/* العمود الأول - الشعار والوصف */}
          <Grid item xs={12} lg={4}>
            <Box 
              component="img"
              src="/images/logo/spLogo12.png"
              alt="شعار المنصة السورية"
              sx={{
                width: '50%',
                height: 96,
                my: 2
              }}
            />
            <Typography sx={{ fontWeight: 500 }}>
              المنصة السورية التعليمية هي بوابة رقمية شاملة تهدف لتجميع بين التقنيات الحديثة والمحتوى المحلي لتسهيل الوصول الى المعرفة في اي وقت ومكان
            </Typography>
          </Grid>

          {/* العمود الثاني - الرئيسية */}
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <Typography variant="h5" sx={{ fontWeight: 500 }}>
              الرئيسية
            </Typography>
            <Box 
              sx={{
                width: '56px',
                height: '3px',
                background: 'linear-gradient(to left, #42a5f5, #1565c0)',
                borderRadius: '9999px',
                my: 1
              }}
            />
            <Stack spacing={1}>
              {['السياسة', 'الشركاء', 'المشاريع', 'المساعدة', 'الدعم'].map((item, index) => (
                <Link 
                  key={index}
                  href="#" 
                  color="inherit" 
                  underline="none"
                  sx={{
                    fontSize: '1.125rem',
                    '&:hover': { color: '#90caf9' }
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* العمود الثالث - التقنيات */}
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <Typography variant="h5" sx={{ fontWeight: 500 }}>
              التقنيات
            </Typography>
            <Box 
              sx={{
                width: '56px',
                height: '3px',
                background: 'linear-gradient(to left, #42a5f5, #1565c0)',
                borderRadius: '9999px',
                my: 1
              }}
            />
            <Stack spacing={1}>
              {['من نحن', 'الدورات', 'المشاريع'].map((item, index) => (
                <Link 
                  key={index}
                  href="#" 
                  color="inherit" 
                  underline="none"
                  sx={{
                    fontSize: '1.125rem',
                    '&:hover': { color: '#90caf9' }
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* العمود الرابع - اتصل بنا */}
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <Typography variant="h5" sx={{ fontWeight: 500 }}>
              اتصل بنا
            </Typography>
            <Box 
              sx={{
                width: '56px',
                height: '3px',
                background: 'linear-gradient(to left, #42a5f5, #1565c0)',
                borderRadius: '9999px',
                my: 1
              }}
            />
            <Stack spacing={1}>
              {['من نحن', 'الدورات', 'المشاريع', 'المنتدى', 'الاخبار'].map((item, index) => (
                <Link 
                  key={index}
                  href="#" 
                  color="inherit" 
                  underline="none"
                  sx={{
                    fontSize: '1.125rem',
                    '&:hover': { color: '#90caf9' }
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* الخط الفاصل */}
        <Divider sx={{ my: 5, backgroundColor: '#1976d2' }} />

        {/* حقوق النشر والوسائط الاجتماعية */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', lg: 'row' }, 
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', lg: 'center' },
          gap: 2
        }}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            جميع الحقوق محفوظة للمنصة السورية 2025
          </Typography>
          
          <Stack direction="row" spacing={1}>
            {[
              { icon: '/images/icons/f.png', label: 'Facebook' },
              { icon: '/images/icons/inst.png', label: 'Instagram' },
              { icon: '/images/icons/in.png', label: 'LinkedIn' },
              { icon: '/images/icons/tewtt.png', label: 'Twitter' }
            ].map((social, index) => (
              <IconButton
                key={index}
                aria-label={social.label}
                sx={{
                  backgroundColor: 'white',
                  color: '#1a237e',
                  width: 40,
                  height: 40,
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                    transform: 'scale(1.1)'
                  }
                }}
              >
                <img 
                  src={social.icon} 
                  alt={social.label}
                  style={{
                    width: '16px',
                    height: '16px',
                    objectFit: 'contain'
                  }}
                />
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer