import { format, formatDate } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

// Function to create date in the correct format
const createDateWithoutTime = (daysAgo) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  date.setHours(0, 0, 0, 0); 
  formatDate(date, 'yyyy/MM/dd');
  return date;
};

const description = `لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .

لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .
لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين 

لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .

لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .سب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .

لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار لقد قمنا بتحسين المحتوى الذي يناسب جمهورك، لقد قمنا بتجميع قائمة من الاخبار .`

const projects = [
  {
    id: uuidv4(),
    title: "مشروع تطوير الموقع التعليمي",
    volunteers: 12,
    startDate: createDateWithoutTime(30), // قبل 30 يوم
    shortDes: "منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية ,منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية.منصة تعليمية متكاملة تشمل دورات تفاعلية وتقييمات آلية",
    fullDescription: description,
    organizationImage: "/images/organizations/1.jpg",
    projectImages: [
      "/images/projects/1-1.jpg",
      "/images/projects/1-2.jpg"
    ],
    createdAt: createDateWithoutTime(60).toISOString(), // قبل 60 يوم
    status: "active",
    category: "تعليم",
    full: true,
    coverImage: "/images/projects/1.jpg",
  },
  {
    id: uuidv4(),
    title: "تطبيق متابعة التبرعات",
    volunteers: 8,
    startDate: createDateWithoutTime(25), // قبل 25 يوم
    shortDescription: "نظم متكامل لإدارة سجلات المرضى والمواعيد والمخزون الطبي",
    fullDescription: description,
    coverImage: "/images/projects/2.jpg",
    organizationImage: "/images/organizations/2.jpg",
    projectImages: [
      "/images/projects/2-1.jpg",
      "/images/projects/2-2.jpg"
    ],
    createdAt: createDateWithoutTime(55).toISOString(),
    status: "active",
    category: "اجتماعي",
    full: false
  },
  {
    id: uuidv4(),
    title: "منصة التطوع الإلكتروني",
    volunteers: 20,
    startDate: createDateWithoutTime(20), // قبل 20 يوم
    shortDescription: "تطبيق جوال لمتابعة التبرعات وتوزيع المساعدات في المناطق المتضررة",
    fullDescription: description,
    coverImage: "/images/projects/3.jpg",
    organizationImage: "/images/organizations/3.jpg",
    projectImages: [
      "/images/projects/3-1.jpg",
      "/images/projects/3-2.jpg"
    ],
    createdAt: createDateWithoutTime(50).toISOString(),
    status: "active",
    category: "تطوع",
    full: true
  },
  {
    id: uuidv4(),
    title: "نظام إدارة المستشفيات",
    volunteers: 6,
    startDate: createDateWithoutTime(15), // قبل 15 يوم
    shortDescription: "منصة لربط المتطوعين مع المؤسسات الخيرية وتنظيم الأنشطة التطوعية",
    fullDescription: description,
    coverImage: "/images/projects/4.jpg",
    organizationImage: "/images/organizations/4.jpg",
    projectImages: [
      "/images/projects/4-1.jpg",
      "/images/projects/4-2.jpg"
    ],
    createdAt: createDateWithoutTime(45).toISOString(),
    status: "active",
    category: "صحة",
    full: true
  },
  {
    id: uuidv4(),
    title: "مشروع التشجير البلدي",
    volunteers: 15,
    startDate: createDateWithoutTime(10), // قبل 10 يوم
    shortDescription: "مبادرة لتشجير الأحياء السكنية وزيادة المساحات الخضراء في المدينة",
    fullDescription: description,
    coverImage: "/images/projects/5.jpg",
    organizationImage: "/images/organizations/5.jpg",
    projectImages: [
      "/images/projects/5-1.jpg",
      "/images/projects/5-2.jpg"
    ],
    createdAt: createDateWithoutTime(40).toISOString(),
    status: "active",
    category: "بيئة",
    full: false
  },
  {
    id: uuidv4(),
    title: "تطوير مكتبة رقمية",
    volunteers: 10,
    startDate: createDateWithoutTime(5), // قبل 5 أيام
    shortDescription: "تحويل المكتبة التقليدية إلى مكتبة رقمية مع إمكانية الاستعارة الإلكترونية .تحويل المكتبة التقليدية إلى مكتبة رقمية مع إمكانية الاستعارة الإلكترونية",
    fullDescription: description,
    coverImage: "/images/projects/6.jpg",
    organizationImage: "/images/organizations/6.jpg",
    projectImages: [
      "/images/projects/6-1.jpg",
      "/images/projects/6-2.jpg"
    ],
    createdAt: createDateWithoutTime(35).toISOString(),
    status: "active",
    category: "ثقافة",
    full: false
  },
  {
    id: uuidv4(),
    title: "برنامج تدريب الشباب",
    volunteers: 25,
    startDate: createDateWithoutTime(0), // اليوم
    shortDescription: "حملة توعوية عن الأمراض المزمنة وطرق الوقاية منها في المدارس",
    fullDescription: description,
    coverImage: "/images/projects/7.jpg",
    organizationImage: "/images/organizations/7.jpg",
    projectImages: [
      "/images/projects/7-1.jpg",
      "/images/projects/7-2.jpg"
    ],
    createdAt: createDateWithoutTime(30).toISOString(),
    status: "active",
    category: "تعليم",
    full: false
  },
  {
    id: uuidv4(),
    title: "حملة توعية صحية",
    volunteers: 18,
    startDate: createDateWithoutTime(-5), // بعد 5 أيام من اليوم
    shortDescription: "برنامج تدريبي مكثف لتأهيل الشباب لسوق العمل في مجال البرمجة",
    fullDescription: description,
    coverImage: "/images/projects/8.jpg",
    organizationImage: "/images/organizations/8.jpg",
    projectImages: [
      "/images/projects/8-1.jpg",
      "/images/projects/8-2.jpg"
    ],
    createdAt: createDateWithoutTime(25).toISOString(),
    status: "active",
    category: "صحة",
    full: true
  },
  // {
  //   id: uuidv4(),
  //   title: "حملة توعية صحية",
  //   volunteers: 18,
  //   startDate: createDateWithoutTime(-5), // بعد 5 أيام من اليوم
  //   shortDescription: "برنامج تدريبي مكثف لتأهيل الشباب لسوق العمل في مجال البرمجة",
  //   fullDescription: description,
  //   coverImage: "/images/projects/8.jpg",
  //   organizationImage: "/images/organizations/8.jpg",
  //   projectImages: [
  //     "/images/projects/8-1.jpg",
  //     "/images/projects/8-2.jpg"
  //   ],
  //   createdAt: createDateWithoutTime(25).toISOString(),
  //   status: "active",
  //   category: "صحة",
  //   priority: "متوسط"
  // },
  // {
  //   id: uuidv4(),
  //   title: "حملة توعية صحية",
  //   volunteers: 18,
  //   startDate: createDateWithoutTime(-5), // بعد 5 أيام من اليوم
  //   shortDescription: "برنامج تدريبي مكثف لتأهيل الشباب لسوق العمل في مجال البرمجة",
  //   fullDescription: description,
  //   coverImage: "/images/projects/8.jpg",
  //   organizationImage: "/images/organizations/8.jpg",
  //   projectImages: [
  //     "/images/projects/8-1.jpg",
  //     "/images/projects/8-2.jpg"
  //   ],
  //   createdAt: createDateWithoutTime(25).toISOString(),
  //   status: "active",
  //   category: "صحة",
  //   priority: "متوسط"
  // }
];

export default projects;