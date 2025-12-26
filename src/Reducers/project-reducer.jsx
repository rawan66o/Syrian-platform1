import projects from "../viewCopmonont/volunteer-projects/projects-data";

// دالة لتحميل البيانات الأولية
const getInitialProjects = () => {
  try {
    const savedProjects = localStorage.getItem('volunteer-projects');
    
    if (savedProjects) {
      const parsed = JSON.parse(savedProjects);
      console.log('📂 تم تحميل المشاريع من localStorage:', parsed.length);
      return parsed;
    }
    
    // إذا لا يوجد في localStorage، نستخدم البيانات من الملف
    console.log('🔄 استخدام البيانات التجريبية');
    return projects;
    
  } catch (error) {
    console.error('خطأ في تحميل البيانات:', error);
    return projects;
  }
};

// الحالة الأولية
export const initialProjectsState = {
  projects: getInitialProjects(),
  joinRequests: JSON.parse(localStorage.getItem('join-requests')) || [],
  selectedProject: null,
  isLoading: false,
  error: null
};

// الـ Reducer
function projectReducer(state, action) {
  console.log('Reducer Action:', action.type);
  
  const saveToLocalStorage = (projectsData, requestsData = null) => {
    if (projectsData) {
      localStorage.setItem('volunteer-projects', JSON.stringify(projectsData));
    }
    if (requestsData !== null) {
      localStorage.setItem('join-requests', JSON.stringify(requestsData));
    }
  };
  
  switch (action.type) {
    
    case 'ADD_PROJECT': {
      const newProject = {
        ...action.payload,
        id: action.payload.id || Date.now().toString(),
        createdAt: new Date().toISOString(),
        currentVolunteers: 0,
        isFull: false,
        volunteersApplied: [],
        joinRequests: []
      };
      
      const updatedProjects = [...state.projects, newProject];
      saveToLocalStorage(updatedProjects);
      
      return {
        ...state,
        projects: updatedProjects
      };
    }
    
    case 'UPDATE_PROJECT': {
      const { id, updates } = action.payload;
      
      const updatedProjects = state.projects.map(project => 
        project.id.toString() === id.toString()
          ? { ...project, ...updates, updatedAt: new Date().toISOString() }
          : project
      );
      
      saveToLocalStorage(updatedProjects);
      
      return {
        ...state,
        projects: updatedProjects,
        selectedProject: state.selectedProject?.id === id 
          ? { ...state.selectedProject, ...updates }
          : state.selectedProject
      };
    }
    
    case 'ADD_JOIN_REQUEST': {
      const { projectId, userId, userName, userEmail, message = '' } = action.payload;
      
      const newRequest = {
        id: Date.now().toString(),
        projectId,
        userId,
        userName,
        userEmail,
        message,
        status: 'pending',
        requestedAt: new Date().toISOString()
      };
      
      const updatedRequests = [...state.joinRequests, newRequest];
      saveToLocalStorage(null, updatedRequests);
      
      return {
        ...state,
        joinRequests: updatedRequests
      };
    }
    
    // تحميل البيانات من الكاش إلى State
    case 'LOAD_FROM_CACHE': {
      // نأخذ البيانات من الكاش (payload)
      // ونضيفها للـ state
      return {
        ...state,
        projects: action.payload.map(proj => ({
          ...proj,
          loadedFromCache: true, // علم أنها جاية من الكاش
          loadedAt: new Date().toISOString()
        }))
      };
    }
    
    // إضافة مشروع جاي من الكاش
    case 'ADD_PROJECT_FROM_CACHE': {
      // نضيف المشروع للـ state
      // (هو أساساً منحفظ بالكاش من قبل)
      return {
        ...state,
        projects: [...state.projects, {
          ...action.payload,
          addedToStateAt: new Date().toISOString()
        }]
      };
    }
    
    // حالة الطوارئ: لو حذفنا بالغلط من state
    // نعيد تحميل من الكاش
    case 'RECOVER_FROM_CACHE': {
      const cached = JSON.parse(
        localStorage.getItem('projects') || '[]'
      );
      return { ...state, projects: cached };
    }

    default:
      return state;
  
  }
}

export default projectReducer;