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
import Footer from '../../components/footer/footer';
import Header from '../../components/volunteer-projects/Header';
import CardProject from '../../components/volunteer-projects/CardProject/CardProject';
import CategoriesProject from '../../components/volunteer-projects/categories-project/CategoriesProject';
import LatestProjects from '../../components/volunteer-projects/LatestProjects';
import { useProjects } from '../../context/volunteer-projects-context';

function VolunteerProjects() {
  const { state } = useProjects();
  const { projects = [] } = state;
  const [activeStep, setActiveStep] = useState(0);

  const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  // دالة لعرض الأرقام مع النقاط للصفحات البعيدة
  const renderStepNumbers = () => {
    const totalSteps = steps.length;
    const currentStep = activeStep;
    
    // إذا كانت الصفحات قليلة، عرض جميعها
    if (totalSteps <= 7) {
      return steps.map((step, index) => (
        <StepNumber 
          key={index}
          step={step}
          index={index}
          activeStep={activeStep}
          onClick={handleStepClick}
        />
      ));
    }
    
    // للصفحات الكثيرة، عرض بعضها مع نقاط
    let numbersToShow = [];
    
    if (currentStep <= 3) {
      // في البداية: 1 2 3 4 5 ... 10
      numbersToShow = [0, 1, 2,9];
    } else if (currentStep >= totalSteps - 4) {
      // في النهاية: 1 ... 6 7 8 9 10
      numbersToShow = [0, totalSteps - 5, totalSteps - 4, totalSteps - 3, totalSteps - 2, totalSteps - 1];
    } else {
      // في المنتصف: 1 ... 4 5 6 ... 10
      numbersToShow = [0, currentStep - 1, currentStep, currentStep + 1, totalSteps - 1];
    }
    
    const result = [];
    let lastIndex = -1;
    
    numbersToShow.forEach((index, i) => {
      // إضافة النقاط إذا كانت هناك فجوة
      if (index - lastIndex > 1) {
        result.push(
          <Box key={`dots-${i}`} sx={{ display: 'flex', alignItems: 'center', color: '#708387' }}>
            <MoreHorizIcon fontSize="small" />
          </Box>
        );
      }
      
      result.push(
        <StepNumber 
          key={index}
          step={steps[index]}
          index={index}
          activeStep={activeStep}
          onClick={handleStepClick}
        />
      );
      
      lastIndex = index;
    });
    
    return result;
  };

  const StepNumber = ({ step, index, activeStep, onClick }) => (
    <Box
      onClick={() => onClick(index)}
      sx={{
        width: 36,
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        backgroundColor: activeStep === index ? '#6DCDE5' : 'transparent',
        color: activeStep === index ? '#FFFFFF' : '#708387',
        cursor: 'pointer',
        fontWeight: 600,
        fontSize: '14px',
        fontFamily: 'Tajawal, sans-serif',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: activeStep === index ? '#6DCDE5' : '#F5F5F5',
        }
      }}
    >
      {step}
    </Box>
  );

  return (
    <ThemeProvider theme={appTheme}>
      <div style={{ direction: 'rtl' }}>
        <Header />
        <div style={{padding: '40px 150px', width:'100%' }} >
          <div style={{ display: 'flex',alignItems:'start',
             justifyContent:'space-between', gap: '40px' }}>
            
            <div style={{ width: 356, gap:'40px' }}>
              <CategoriesProject />
              <LatestProjects />
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ columnCount: 2, columnGap: '32px' }}>
                {projects.map((project) => (
                  <div key={project.id} style={{ marginBottom: '32px', overflow:'hidden' }}>
                    <CardProject project={project} />
                  </div>
                ))}
              </div>

              {/* Stepper مع 10 صفحات */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: '40px',
                mt: 4,
                p: 3,
                flexWrap: 'wrap',
                padding:'40px'
              }}>
                
                {/* زر السابق */}
                <IconButton
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  sx={{  border: '1px solid #D9E4E5', borderRadius:'8px',
                    color: activeStep === 0 ? '#CCCCCC' : '#6DCDE5',
                    '&:hover': {
                      backgroundColor: activeStep === 0 ? 'transparent' : '#F0F9FF',
                    }
                  }}
                >
                  <KeyboardArrowLeftOutlinedIcon color='#072127'/>
                </IconButton>
                
                {/* أرقام الصفحات */}
                <Box sx={{ 
                  display: 'flex', 
                  gap: '40px', 
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}>
                  {renderStepNumbers()}
                </Box>
                
                {/* زر التالي */}
                <IconButton
                  onClick={handleNext}
                  disabled={activeStep === steps.length - 1}
                  sx={{ 
                    border: '1px solid #D9E4E5', borderRadius:'8px',
                    color: activeStep === steps.length - 1 ? '#CCCCCC' : '#6DCDE5',
                    '&:hover': {
                      backgroundColor: activeStep === steps.length - 1 ? 'transparent' : '#F0F9FF',
                    }
                  }}
                >
                  <KeyboardArrowRightOutlinedIcon color='#072127'/>
                </IconButton>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </ThemeProvider>
  );
}

export default VolunteerProjects;
