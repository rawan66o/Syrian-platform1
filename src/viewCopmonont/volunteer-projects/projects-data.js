import { format } from 'date-fns';

// Function to create date in the correct format
const createDateWithoutTime = (daysAgo) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  date.setHours(0, 0, 0, 0);
  return format(date, 'yyyy/MM/dd'); 
};

const description = `لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .

لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .
لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين 

لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .

لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .سب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .

لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .`

const baseProjects = [
  {
    id: 1,
    title: "مشروع تطوير الموقع التعليمي",
    volunteersNeeded: 12, // عدل من volunteers لـ volunteersNeeded
    currentVolunteers: 4, // أضفنا هذا الحقل
    startDate: createDateWithoutTime(30),
    shortDes: "منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية",
    fullDescription: description,
    organizationImage: "/images/organizations/1.jpg",
    projectImages: [
      "/images/projects/1-1.jpg",
      "/images/projects/1-2.jpg"
    ],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(),
    status: "active",
    category: "تعليم",
    isFull: false, // أضفنا هذا الحقل
    coverImage: "/images/5.jpg",
    location: "غزة",
    contactPerson: "أحمد محمد",
    contactEmail: "ahmed@example.com",
    skillsNeeded: ["تطوير ويب", "تعليم", "تصميم"],
    duration: "3 أشهر"
  },
  {
    id: 2,
    title: "مشروع تطوير الموقع التعليمي",
    volunteersNeeded: 12, // عدل من volunteers لـ volunteersNeeded
    currentVolunteers: 4, // أضفنا هذا الحقل
    startDate: createDateWithoutTime(30),
    shortDes: "منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية",
    fullDescription: description,
    organizationImage: "/images/organizations/1.jpg",
    projectImages: [
      "/images/projects/1-1.jpg",
      "/images/projects/1-2.jpg"
    ],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(),
    status: "active",
    category: "تعليم",
    isFull: false, // أضفنا هذا الحقل
    coverImage: "/images/5.jpg",
    location: "غزة",
    contactPerson: "أحمد محمد",
    contactEmail: "ahmed@example.com",
    skillsNeeded: ["تطوير ويب", "تعليم", "تصميم"],
    duration: "3 أشهر"
  },
  {
    id: 3,
    title: "مشروع تطوير الموقع التعليمي",
    volunteersNeeded: 12, // عدل من volunteers لـ volunteersNeeded
    currentVolunteers: 4, // أضفنا هذا الحقل
    startDate: createDateWithoutTime(30),
    shortDes: "منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية",
    fullDescription: description,
    organizationImage: "/images/organizations/1.jpg",
    projectImages: [
      "/images/projects/1-1.jpg",
      "/images/projects/1-2.jpg"
    ],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(),
    status: "active",
    category: "تعليم",
    isFull: false, // أضفنا هذا الحقل
    coverImage: "/images/5.jpg",
    location: "غزة",
    contactPerson: "أحمد محمد",
    contactEmail: "ahmed@example.com",
    skillsNeeded: ["تطوير ويب", "تعليم", "تصميم"],
    duration: "3 أشهر"
  },
  {
    id: 4,
    title: "مشروع تطوير الموقع التعليمي",
    volunteersNeeded: 12, // عدل من volunteers لـ volunteersNeeded
    currentVolunteers: 4, // أضفنا هذا الحقل
    startDate: createDateWithoutTime(30),
    shortDes: "منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية",
    fullDescription: description,
    organizationImage: "/images/organizations/1.jpg",
    projectImages: [
      "/images/projects/1-1.jpg",
      "/images/projects/1-2.jpg"
    ],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(),
    status: "active",
    category: "تعليم",
    isFull: false, // أضفنا هذا الحقل
    coverImage: "/images/5.jpg",
    location: "غزة",
    contactPerson: "أحمد محمد",
    contactEmail: "ahmed@example.com",
    skillsNeeded: ["تطوير ويب", "تعليم", "تصميم"],
    duration: "3 أشهر"
  },
  {
    id: 5,
    title: "مشروع تطوير الموقع التعليمي",
    volunteersNeeded: 12, // عدل من volunteers لـ volunteersNeeded
    currentVolunteers: 4, // أضفنا هذا الحقل
    startDate: createDateWithoutTime(30),
    shortDes: "منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية",
    fullDescription: description,
    organizationImage: "/images/organizations/1.jpg",
    projectImages: [
      "/images/projects/1-1.jpg",
      "/images/projects/1-2.jpg"
    ],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(),
    status: "active",
    category: "تعليم",
    isFull: false, // أضفنا هذا الحقل
    coverImage: "/images/5.jpg",
    location: "غزة",
    contactPerson: "أحمد محمد",
    contactEmail: "ahmed@example.com",
    skillsNeeded: ["تطوير ويب", "تعليم", "تصميم"],
    duration: "3 أشهر"
  },
  {
    id: 6,
    title: "مشروع تطوير الموقع التعليمي",
    volunteersNeeded: 12, // عدل من volunteers لـ volunteersNeeded
    currentVolunteers: 4, // أضفنا هذا الحقل
    startDate: createDateWithoutTime(30),
    shortDes: "منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية",
    fullDescription: description,
    organizationImage: "/images/organizations/1.jpg",
    projectImages: [
      "/images/projects/1-1.jpg",
      "/images/projects/1-2.jpg"
    ],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(),
    status: "active",
    category: "تعليم",
    isFull: false, // أضفنا هذا الحقل
    coverImage: "/images/5.jpg",
    location: "غزة",
    contactPerson: "أحمد محمد",
    contactEmail: "ahmed@example.com",
    skillsNeeded: ["تطوير ويب", "تعليم", "تصميم"],
    duration: "3 أشهر"
  },
  {
    id: 7,
    title: "مشروع تطوير الموقع التعليمي",
    volunteersNeeded: 12, // عدل من volunteers لـ volunteersNeeded
    currentVolunteers: 4, // أضفنا هذا الحقل
    startDate: createDateWithoutTime(30),
    shortDes: "منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية",
    fullDescription: description,
    organizationImage: "/images/organizations/1.jpg",
    projectImages: [
      "/images/projects/1-1.jpg",
      "/images/projects/1-2.jpg"
    ],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(),
    status: "active",
    category: "تعليم",
    isFull: false, // أضفنا هذا الحقل
    coverImage: "/images/5.jpg",
    location: "غزة",
    contactPerson: "أحمد محمد",
    contactEmail: "ahmed@example.com",
    skillsNeeded: ["تطوير ويب", "تعليم", "تصميم"],
    duration: "3 أشهر"
  },
  {
    id: 8,
    title: "مشروع تطوير الموقع التعليمي",
    volunteersNeeded: 12, // عدل من volunteers لـ volunteersNeeded
    currentVolunteers: 4, // أضفنا هذا الحقل
    startDate: createDateWithoutTime(30),
    shortDes: "منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية",
    fullDescription: description,
    organizationImage: "/images/organizations/1.jpg",
    projectImages: [
      "/images/projects/1-1.jpg",
      "/images/projects/1-2.jpg"
    ],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(),
    status: "active",
    category: "تعليم",
    isFull: false, // أضفنا هذا الحقل
    coverImage: "/images/5.jpg",
    location: "غزة",
    contactPerson: "أحمد محمد",
    contactEmail: "ahmed@example.com",
    skillsNeeded: ["تطوير ويب", "تعليم", "تصميم"],
    duration: "3 أشهر"
  },
  {
    id: 9,
    title: "مشروع تطوير الموقع التعليمي",
    volunteersNeeded: 12, // عدل من volunteers لـ volunteersNeeded
    currentVolunteers: 4, // أضفنا هذا الحقل
    startDate: createDateWithoutTime(30),
    shortDes: "منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية",
    fullDescription: description,
    organizationImage: "/images/organizations/1.jpg",
    projectImages: [
      "/images/projects/1-1.jpg",
      "/images/projects/1-2.jpg"
    ],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(),
    status: "active",
    category: "تعليم",
    isFull: false, // أضفنا هذا الحقل
    coverImage: "/images/5.jpg",
    location: "غزة",
    contactPerson: "أحمد محمد",
    contactEmail: "ahmed@example.com",
    skillsNeeded: ["تطوير ويب", "تعليم", "تصميم"],
    duration: "3 أشهر"
  },
  {
    id: 10,
    title: "مشروع تطوير الموقع التعليمي",
    volunteersNeeded: 12, // عدل من volunteers لـ volunteersNeeded
    currentVolunteers: 4, // أضفنا هذا الحقل
    startDate: createDateWithoutTime(30),
    shortDes: "منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية",
    fullDescription: description,
    organizationImage: "/images/organizations/1.jpg",
    projectImages: [
      "/images/projects/1-1.jpg",
      "/images/projects/1-2.jpg"
    ],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(),
    status: "active",
    category: "تعليم",
    isFull: false, // أضفنا هذا الحقل
    coverImage: "/images/5.jpg",
    location: "غزة",
    contactPerson: "أحمد محمد",
    contactEmail: "ahmed@example.com",
    skillsNeeded: ["تطوير ويب", "تعليم", "تصميم"],
    duration: "3 أشهر"
  },
  {
    id: 11,
    title: "مشروع تطوير الموقع التعليمي",
    volunteersNeeded: 12, // عدل من volunteers لـ volunteersNeeded
    currentVolunteers: 4, // أضفنا هذا الحقل
    startDate: createDateWithoutTime(30),
    shortDes: "منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية",
    fullDescription: description,
    organizationImage: "/images/organizations/1.jpg",
    projectImages: [
      "/images/projects/1-1.jpg",
      "/images/projects/1-2.jpg"
    ],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(),
    status: "active",
    category: "تعليم",
    isFull: false, // أضفنا هذا الحقل
    coverImage: "/images/5.jpg",
    location: "غزة",
    contactPerson: "أحمد محمد",
    contactEmail: "ahmed@example.com",
    skillsNeeded: ["تطوير ويب", "تعليم", "تصميم"],
    duration: "3 أشهر"
  },
];

// دالة لتحميل/دمج البيانات مع localStorage
const getProjectsWithCache = () => {
  // 1. جلب البيانات المحفوظة من localStorage
  const savedProjects = localStorage.getItem('volunteer-projects');
  
  if (!savedProjects) {
    // إذا لا يوجد بيانات محفوظة، نستخدم البيانات التجريبية
    // ونضيف الحقول المطلوبة للنظام
    const initializedProjects = baseProjects.map(project => ({
      ...project,
      currentVolunteers: project.currentVolunteers || 0,
      volunteersNeeded: project.volunteersNeeded || project.volunteers || 10,
      isFull: (project.currentVolunteers || 0) >= (project.volunteersNeeded || project.volunteers || 10),
      volunteersApplied: [], // قائمة المتطوعين المقدمين
      joinRequests: [] // طلبات الانضمام للمشروع
    }));
    
    // حفظ النسخة المبدئية
    localStorage.setItem('volunteer-projects', JSON.stringify(initializedProjects));
    return initializedProjects;
  }
  
  // 2. إذا يوجد بيانات محفوظة، ندمجها مع البيانات التجريبية
  try {
    const cachedProjects = JSON.parse(savedProjects);
    
    // دمج البيانات: نأخذ البيانات المحفوظة، ونضيف أي مشروع جديد من البيانات التجريبية
    const mergedProjects = [...cachedProjects];
    
    baseProjects.forEach(baseProject => {
      const exists = cachedProjects.some(cached => cached.id === baseProject.id);
      
      if (!exists) {
        // إضافة مشروع جديد مع الحقول المطلوبة
        mergedProjects.push({
          ...baseProject,
          currentVolunteers: baseProject.currentVolunteers || 0,
          volunteersNeeded: baseProject.volunteersNeeded || baseProject.volunteers || 10,
          isFull: (baseProject.currentVolunteers || 0) >= (baseProject.volunteersNeeded || baseProject.volunteers || 10),
          volunteersApplied: [],
          joinRequests: []
        });
      }
    });
    
    // تحديث localStorage بالبيانات المدمجة
    localStorage.setItem('volunteer-projects', JSON.stringify(mergedProjects));
    
    return mergedProjects;
    
  } catch (error) {
    console.error('خطأ في قراءة البيانات المحفوظة:', error);
    return baseProjects.map(project => ({
      ...project,
      currentVolunteers: 0,
      volunteersNeeded: project.volunteersNeeded || project.volunteers || 10,
      isFull: false,
      volunteersApplied: [],
      joinRequests: []
    }));
  }
};

// تصدير البيانات بعد المعالجة
const projects = getProjectsWithCache();

// استدعاء مرة واحدة عند التحميل
if (typeof window !== 'undefined') {
  // هذا يضمن أننا في بيئة متصفح
  const initializeData = () => {
    const projectsToSave = getProjectsWithCache();
    console.log(`✅ تم تحميل ${projectsToSave.length} مشروع (${projectsToSave.filter(p => p.isFull).length} مكتمل)`);
  };
  
  // ننتظر قليلاً قبل التهيئة
  setTimeout(initializeData, 100);
}

export default projects;