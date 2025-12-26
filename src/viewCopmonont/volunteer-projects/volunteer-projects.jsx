import { useState, useMemo } from 'react';

// MUI IMPORTS
import { ThemeProvider } from '@mui/material/styles';
import appTheme from '../../appTeme';
import { Container, Box, IconButton } from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

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

  // إعدادات الباجينيشن
  const ITEMS_PER_PAGE = 6; // 2 columns × 3 items per column
  
  // حساب عدد الصفحات ديناميكياً
  const totalPages = Math.max(1, Math.ceil(projects.length / ITEMS_PER_PAGE));
  
  // إنشاء مصفوفة الصفحات
  const steps = useMemo(() => 
    Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages]
  );

  // حساب المشاريع للصفحة الحالية
  const currentProjects = useMemo(() => {
    const startIndex = activeStep * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return projects.slice(startIndex, endIndex);
  }, [projects, activeStep, ITEMS_PER_PAGE]);

  const handleNext = () => {
    if (activeStep < totalPages - 1) {
      setActiveStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1);
    }
  };

  const handleStepClick = (stepIndex) => {
    if (stepIndex >= 0 && stepIndex < totalPages) {
      setActiveStep(stepIndex);
    }
  };

  // دالة لعرض الأرقام مع النقاط للصفحات البعيدة
  const renderStepNumbers = () => {
    // إذا كانت الصفحات قليلة، عرض جميعها
    if (totalPages <= 7) {
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
    const currentStep = activeStep;
    
    if (currentStep <= 3) {
      // في البداية: 1 2 3 4 5 ... 10
      numbersToShow = [0, 1, 2, 9];
    } else if (currentStep >= totalSteps - 4) {
      // في النهاية: 1 ... 6 7 8 9 10
      numbersToShow = [0, totalSteps - 5, totalSteps - 4, totalSteps - 3, totalSteps - 2, totalSteps - 1];
    } else {
      // في المنتصف: 1 ... current-1 current current+1 ... آخر
      numbersToShow = [0, currentStep - 1, currentStep, currentStep + 1, totalPages - 1];
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
        <div style={{ padding: '40px 150px', width: '100%' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'start',
            justifyContent: 'space-between', 
            gap: '40px' 
          }}>
            
            {/* الشريط الجانبي */}
            <div style={{ width: 356, gap: '40px' }}>
              <CategoriesProject />
              <LatestProjects />
            </div>

            {/* المحتوى الرئيسي */}
            <div style={{ flex: 1 }}>
              
              {/* عرض المشاريع */}
              {currentProjects.length > 0 ? (
                <div style={{ columnCount: 2, columnGap: '32px' }}>
                  {currentProjects.map((project) => (
                    <div key={project.id} style={{ 
                      marginBottom: '32px', 
                      overflow: 'hidden',
                      breakInside: 'avoid' 
                    }}>
                      <CardProject project={project} />
                    </div>
                  ))}
                </div>
              ) : (
                <Box sx={{ 
                  textAlign: 'center', 
                  py: 8, 
                  color: '#708387',
                  fontSize: '18px'
                }}>
                  لا توجد مشاريع متاحة حالياً
                </Box>
              )}

              {/* Pagination - تعرض فقط إذا كان هناك أكثر من صفحة */}
              {totalPages > 1 && (
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  gap: '40px',
                  mt: 4,
                  p: 3,
                  flexWrap: 'wrap',
                  padding: '40px'
                }}>
                  
                  {/* زر السابق */}
                  <IconButton
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    sx={{  
                      border: '1px solid #D9E4E5', 
                      borderRadius: '8px',
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
                    disabled={activeStep === totalPages - 1}
                    sx={{ 
                      border: '1px solid #D9E4E5', 
                      borderRadius: '8px',
                      color: activeStep === totalPages - 1 ? '#CCCCCC' : '#6DCDE5',
                      '&:hover': {
                        backgroundColor: activeStep === totalPages - 1 ? 'transparent' : '#F0F9FF',
                      }
                    }}
                  >
                    <KeyboardArrowRightOutlinedIcon color='#072127'/>
                  </IconButton>
                </Box>
              )}
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </ThemeProvider>
  );
}

export default VolunteerProjects;