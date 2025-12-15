import { useState } from 'react';

// MUI IMPORTS
import appTheme from '../../appTeme';
import { ThemeProvider } from '@mui/material/styles';
import { Container, Box, IconButton } from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

// COMPONENTS && DATA IMPORTS
import Navbar from "../../components/volunteer-projects/Navbar";
import Footer from '../../components/footer/footer'
import Header from '../../components/volunteer-projects/Header';
import CardProject from '../../components/volunteer-projects/CardProject/CardProject';
import CategoriesProject from '../../components/volunteer-projects/CategoriesProject';
import LatestProjects from '../../components/volunteer-projects/LatestProjects';

function VolunteerProjects() {
  const [activeStep, setActiveStep] = useState(0);
  
  // مصفوفة المشاريع مع تنوع في الأطوال
  const generateRandomDescription = () => {
    const descriptions = [
      "مشروع بسيط مع وصف قصير.",
      "مشروع متطور يتضمن أحدث التقنيات. تم تطويره بدقة عالية ليلبي احتياجات المستخدمين.",
      "هذا المشروع يهدف إلى تحسين تجربة المستخدم من خلال واجهات بديهية وأداء سريع. تم العمل عليه لمدة 6 أشهر.",
      "مشروع تعاوني بين عدة فرق. يشمل نظام إدارة محتوى متكامل، بوابة دفع إلكترونية، وتقارير تفصيلية.",
      "تم تطوير هذا المشروع باستخدام أحدث frameworks. يدعم multiple languages ويتوافق مع جميع الأجهزة.",
      "مشروع ضخم استغرق تطويره أكثر من عام. يتضمن AI integration، real-time analytics، وcustom reporting system.",
      "وصف متوسط الطول لمشروع تقني متكامل.",
      "مشروع مبتكر يجمع بين التصميم الجذاب والأداء المتميز. حصل على تقييمات ممتازة من المستخدمين.",
      "تم إطلاق هذا المشروع بنجاح كبير وحقق أهدافه خلال الأشهر الأولى.",
      "مشروع تعليمي تفاعلي مع محتوى غني ومتنوع.",
      "نظام متكامل لإدارة العمليات اليومية بفعالية.",
      "تطبيق جوال مع تصميم responsive وميزات متقدمة.",
      "منصة سحابية تقدم حلولاً متكاملة للشركات.",
      "مشروع بحثي متطور في مجال الذكاء الاصطناعي.",
      "حلول برمجية مخصصة تلبي احتياجات العملاء."
    ];
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  };

  // دالة لعنوان عشوائي
  const generateRandomTitle = () => {
    const titles = [
      "تصميم واجهات UI/UX",
      "تطوير تطبيق جوال",
      "منصة تعليمية",
      "نظام إدارة محتوى",
      "موقع تجارة إلكترونية",
      "تطبيق لياقة بدنية",
      "منصة عمل حر",
      "نظام حجز مواعيد",
      "مشروع ذكاء اصطناعي",
      "تحليل بيانات",
      "تطوير ويب متقدم",
      "تصميم جرافيك",
      "إدارة مشاريع",
      "تطوير ألعاب",
      "أمن سيبراني"
    ];
    const prefixes = ["مشروع", "نظام", "تطبيق", "منصة", "موقع"];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const title = titles[Math.floor(Math.random() * titles.length)];
    return `${prefix} ${title}`;
  };

  // إنشاء مصفوفة مشاريع عشوائية
  const generateRandomProjects = (count) => {
    return Array.from({ length: count }, (_, index) => ({
      title: generateRandomTitle(),
      ditail: generateRandomDescription(),
      number: Math.floor(Math.random() * 30) + 1,
      full: Math.random() > 0.5
    }));
  };

  const projects = generateRandomProjects(8);

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

  // مكون مساعد لعرض رقم الصفحة
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
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: activeStep === index ? '#6DCDE5' : '#F5F5F5',
        }
      }}
    >
      {step}
    </Box>
  );

  return(
    <ThemeProvider theme={appTheme}>
      <Navbar />
      <div style={{direction:'rtl'}}>
        <Header/>
        <Container maxWidth='lg' sx={{ mt:4 }}>
          <div style={{ 
            display: 'flex',
            gap: '40px',
            flexDirection: {xs:'column', lg:'row'}
          }}>

            {/* قسم التصنيفات */}
            <div style={{
              display:'flex',
              flexDirection:'column',
              gap:'32px',
              width: '356px',
              position: 'sticky',
              flexShrink: 0
            }}>
              <CategoriesProject />
              <LatestProjects />
            </div>
            
            {/* قسم الكاردات بتخطيط Masonry */}
            <div style={{ 
              flex: 1,
              maxWidth: '812px'
            }}>
              <div style={{
                columnCount:2,
                columnGap:'32px',
                breakInside:'avoid'
              }}>
                {projects.map((project, index) => (
                  <div style={{
                    display: 'inline-block',
                    width: '100%',
                    marginBottom: '32px',
                    breakInside: 'avoid',
                  }}>
                  <CardProject 
                    key={index}
                    project={project}
                    projectId={index}
                    />
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
                padding:'40px',
                direction:'ltr'
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
        </Container>
      </div>  
      <Footer/>
    </ThemeProvider>
  )
}

export default VolunteerProjects;