import { useState } from 'react';

// MUI
import { ThemeProvider } from '@mui/material/styles';
import { Container, Box, IconButton } from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

// THEME
import appTheme from '../../appTeme'; // ✅ تأكد أن اسم الملف theme.js

// COMPONENTS
import Navbar from "../../components/volunteer-projects/Navbar";
import Footer from '../../components/footer/footer';
import Header from '../../components/volunteer-projects/Header';
import CardProject from '../../components/volunteer-projects/CardProject/CardProject';
import CategoriesProject from '../../components/volunteer-projects/CategoriesProject';
import LatestProjects from '../../components/volunteer-projects/LatestProjects';

function VolunteerProjects() {
  const [activeStep, setActiveStep] = useState(0);

  const generateRandomDescription = () => {
    const descriptions = [
      "مشروع بسيط مع وصف قصير.",
      "مشروع متطور يتضمن أحدث التقنيات.",
      "هذا المشروع يهدف إلى تحسين تجربة المستخدم.",
      "مشروع تعاوني بين عدة فرق.",
      "تم تطوير هذا المشروع باستخدام أحدث frameworks.",
      "مشروع ضخم استغرق تطويره أكثر من عام.",
      "وصف متوسط الطول لمشروع تقني.",
      "مشروع مبتكر بتصميم جذاب.",
    ];
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  };

  const generateRandomTitle = () => {
    const titles = [
      "تصميم واجهات",
      "تطوير تطبيق",
      "منصة تعليمية",
      "نظام إدارة",
      "موقع تجارة إلكترونية",
    ];
    const prefixes = ["مشروع", "تطبيق", "منصة"];
    return `${prefixes[Math.floor(Math.random() * prefixes.length)]} ${titles[Math.floor(Math.random() * titles.length)]}`;
  };

  const projects = Array.from({ length: 8 }, (_, i) => ({
    title: generateRandomTitle(),
    ditail: generateRandomDescription(),
    number: i + 1,
    full: Math.random() > 0.5,
  }));

  const steps = [1,2,3,4,5,6,7,8,9,10];

  const StepNumber = ({ step, index }) => (
    <Box
      onClick={() => setActiveStep(index)}
      sx={{
        width: 36,
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        cursor: 'pointer',
        backgroundColor: activeStep === index ? '#6DCDE5' : 'transparent',
        color: activeStep === index ? '#fff' : '#708387',
        fontWeight: 600,
      }}
    >
      {step}
    </Box>
  );

  return (
    <ThemeProvider theme={appTheme}>
      <Navbar />

      <div style={{ direction: 'rtl' }}>
        <Header />

        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <div style={{ display: 'flex', gap: '40px' }}>
            
            <div style={{ width: 356 }}>
              <CategoriesProject />
              <LatestProjects />
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ columnCount: 2, columnGap: '32px' }}>
                {projects.map((project, index) => (
                  <div key={index} style={{ marginBottom: 32 }}>
                    <CardProject {...project} />
                  </div>
                ))}
              </div>

              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 4 }}>
                <IconButton
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(activeStep - 1)}
                >
                  <KeyboardArrowLeftOutlinedIcon />
                </IconButton>

                {steps.map((step, index) => (
                  <StepNumber key={index} step={step} index={index} />
                ))}

                <IconButton
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep(activeStep + 1)}
                >
                  <KeyboardArrowRightOutlinedIcon />
                </IconButton>
              </Box>
            </div>

          </div>
        </Container>
      </div>

      <Footer />
    </ThemeProvider>
  );
}

export default VolunteerProjects;
