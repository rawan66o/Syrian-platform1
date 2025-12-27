<<<<<<< HEAD
import { useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {  Box, IconButton } from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import appTheme from '../../appTeme';
import Footer from '../../components/footer/footer';
import Header from '../../components/volunteer-projects/header/Header';
import CardProject from '../../components/volunteer-projects/CardProject/CardProject';
import CategoriesProject from '../../components/volunteer-projects/categories-project/CategoriesProject';
import LatestProjects from '../../components/volunteer-projects/LatestProjects/LatestProjects';
import { useProjects } from '../../context/volunteer-projects-context';
=======
import { useState, useMemo } from "react";

// MUI
import { ThemeProvider } from "@mui/material/styles";
import { Container, Box, IconButton } from "@mui/material";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// THEME
import appTheme from "../../appTeme";

// COMPONENTS
import Footer from "../../components/footer/footer";
import Header from "../../components/volunteer-projects/Header";
import CardProject from "../../components/volunteer-projects/CardProject/CardProject";
import CategoriesProject from "../../components/volunteer-projects/categories-project/CategoriesProject";
import LatestProjects from "../../components/volunteer-projects/latest-projects/LatestProjects";
import { useProjects } from "../../context/volunteer-projects-context";
>>>>>>> 5fc67a9b65d0036822ad491b8f2e0a0bd0c611cf

function VolunteerProjects() {
  const { state } = useProjects();
  const { projects = [] } = state;
  const [activeStep, setActiveStep] = useState(0);
<<<<<<< HEAD
  
  // إعدادات الباجينيشن
  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.max(1, Math.ceil(projects.length / ITEMS_PER_PAGE));
  
  // مشاريع الصفحة الحالية
=======

  // إعدادات الباجينيشن
  const ITEMS_PER_PAGE = 6; // 2 columns × 3 items per column

  // حساب عدد الصفحات ديناميكياً
  const totalPages = Math.max(1, Math.ceil(projects.length / ITEMS_PER_PAGE));

  // إنشاء مصفوفة الصفحات
  const steps = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages]
  );

  // حساب المشاريع للصفحة الحالية
>>>>>>> 5fc67a9b65d0036822ad491b8f2e0a0bd0c611cf
  const currentProjects = useMemo(() => {
    const startIndex = activeStep * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return projects.slice(startIndex, endIndex);
  }, [projects, activeStep, ITEMS_PER_PAGE]);
  
  // التأكد من وجود بيانات
  useEffect(() => {
    const saved = localStorage.getItem('volunteer-projects');
    if (!saved || saved === '[]') {
      console.log('⚠️ تحميل البيانات الافتراضية...');
      // هنا يمكنك إضافة dispatch لتحميل البيانات الافتراضية
    }
  }, []);
  
  const handleNext = () => {
    if (activeStep < totalPages - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };
  
  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };
  
  const handleStepClick = (stepIndex) => {
    if (stepIndex >= 0 && stepIndex < totalPages) {
      setActiveStep(stepIndex);
    }
  };
  
  // عرض أرقام الصفحات
  const renderStepNumbers = () => {
    if (totalPages <= 7) {
<<<<<<< HEAD
      return Array.from({ length: totalPages }, (_, i) => i).map(index => (
        <StepNumber 
=======
      return steps.map((step, index) => (
        <StepNumber
>>>>>>> 5fc67a9b65d0036822ad491b8f2e0a0bd0c611cf
          key={index}
          step={index + 1}
          index={index}
          activeStep={activeStep}
          onClick={handleStepClick}
        />
      ));
    }
<<<<<<< HEAD
    
=======

    // للصفحات الكثيرة، عرض بعضها مع نقاط
>>>>>>> 5fc67a9b65d0036822ad491b8f2e0a0bd0c611cf
    let numbersToShow = [];
    const currentStep = activeStep;

    if (currentStep <= 3) {
      numbersToShow = [0, 1, 2, 3, 4, totalPages - 1];
    } else if (currentStep >= totalPages - 4) {
<<<<<<< HEAD
      numbersToShow = [0, totalPages - 5, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1];
    } else {
      numbersToShow = [0, currentStep - 1, currentStep, currentStep + 1, totalPages - 1];
=======
      // في النهاية: 1 ... n-4 n-3 n-2 n-1 n
      numbersToShow = [
        0,
        totalPages - 5,
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
      ];
    } else {
      // في المنتصف: 1 ... current-1 current current+1 ... آخر
      numbersToShow = [
        0,
        currentStep - 1,
        currentStep,
        currentStep + 1,
        totalPages - 1,
      ];
>>>>>>> 5fc67a9b65d0036822ad491b8f2e0a0bd0c611cf
    }

    const result = [];
    let lastIndex = -1;

    numbersToShow.forEach((index, i) => {
      if (index - lastIndex > 1) {
        result.push(
          <Box
            key={`dots-${i}`}
            sx={{ display: "flex", alignItems: "center", color: "#708387" }}>
            <MoreHorizIcon fontSize="small" />
          </Box>
        );
      }

      result.push(
        <StepNumber
          key={index}
          step={index + 1}
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        backgroundColor: activeStep === index ? "#6DCDE5" : "transparent",
        color: activeStep === index ? "#FFFFFF" : "#708387",
        cursor: "pointer",
        fontWeight: 600,
        fontSize: "14px",
        fontFamily: "Tajawal, sans-serif",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: activeStep === index ? "#6DCDE5" : "#F5F5F5",
        },
      }}>
      {step}
    </Box>
  );

  return (
    <ThemeProvider theme={appTheme}>
      <div style={{ direction: "rtl" }}>
        <Header />
<<<<<<< HEAD
        <div style={{ padding: '40px 150px', width: '100%' }}>
          
          {/* معلومات الصفحة */}
          <Box sx={{ 
            mb: 3, 
            color: '#072127', 
            fontSize: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <strong>عرض {currentProjects.length} من أصل {projects.length} مشروع</strong>
              <div style={{ fontSize: '14px', color: '#708387' }}>
                الصفحة {activeStep + 1} من {totalPages}
              </div>
            </div>
          </Box>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'start',
            justifyContent: 'space-between', 
            gap: '40px' 
          }}>
            
=======
        <div style={{ padding: "40px 150px", width: "100%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              gap: "40px",
            }}>
>>>>>>> 5fc67a9b65d0036822ad491b8f2e0a0bd0c611cf
            {/* الشريط الجانبي */}
            <div style={{ width: 356, gap: "40px" }}>
              <CategoriesProject />
              <div style={{marginTop:'40px'}}>
              <LatestProjects />
              </div>
            </div>

            {/* المحتوى الرئيسي */}
            <div style={{ flex: 1 }}>
              {/* عرض المشاريع */}
              {currentProjects.length > 0 ? (
<<<<<<< HEAD
                <div style={{ 
                  columnCount: 2, 
                  columnGap: '32px',
                }}>
                  {currentProjects.map((project) => (
                    <div key={project.id} style={{ 
                      marginBottom: '32px', 
                      overflow: 'hidden',
                      breakInside: 'avoid'
                    }}>
=======
                <div style={{ columnCount: 2, columnGap: "32px" }}>
                  {currentProjects.map((project) => (
                    <div
                      key={project.id}
                      style={{
                        marginBottom: "32px",
                        overflow: "hidden",
                        breakInside: "avoid",
                      }}>
>>>>>>> 5fc67a9b65d0036822ad491b8f2e0a0bd0c611cf
                      <CardProject project={project} />
                    </div>
                  ))}
                </div>
              ) : (
                <Box
                  sx={{
                    textAlign: "center",
                    py: 8,
                    color: "#708387",
                    fontSize: "18px",
                  }}>
                  لا توجد مشاريع متاحة حالياً
                </Box>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "40px",
                    mt: 4,
                    p: 3,
                    flexWrap: "wrap",
                    padding: "40px",
                  }}>
                  {/* زر السابق */}
                  <IconButton
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    sx={{
                      border: "1px solid #D9E4E5",
                      borderRadius: "8px",
                      color: activeStep === 0 ? "#CCCCCC" : "#6DCDE5",
                      "&:hover": {
                        backgroundColor:
                          activeStep === 0 ? "transparent" : "#F0F9FF",
                      },
                    }}>
                    <KeyboardArrowLeftOutlinedIcon color="#072127" />
                  </IconButton>

                  {/* أرقام الصفحات */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: "40px",
                      alignItems: "center",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}>
                    {renderStepNumbers()}
                  </Box>

                  {/* زر التالي */}
                  <IconButton
                    onClick={handleNext}
                    disabled={activeStep === totalPages - 1}
                    sx={{
                      border: "1px solid #D9E4E5",
                      borderRadius: "8px",
                      color:
                        activeStep === totalPages - 1 ? "#CCCCCC" : "#6DCDE5",
                      "&:hover": {
                        backgroundColor:
                          activeStep === totalPages - 1
                            ? "transparent"
                            : "#F0F9FF",
                      },
                    }}>
                    <KeyboardArrowRightOutlinedIcon color="#072127" />
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
