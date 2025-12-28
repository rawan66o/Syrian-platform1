import projects  from "../viewCopmonont/volunteer-projects/projects-data";

// دالة لتحميل البيانات الأولية
const getInitialProjects = () => {
  try {
    const saved = localStorage.getItem('volunteer-projects');
    
    if (saved) {
      const parsed = JSON.parse(saved);
      console.log('📂 مشاريع من localStorage:', parsed.length);
      return parsed;
    }
    
    // إذا لا يوجد، استخدم البيانات التجريبية مع تهيئة
    console.log('🔄 استخدام البيانات التجريبية');
    const initialized = projects.map(proj => ({
      ...proj,
      currentVolunteers: proj.currentVolunteers || 0,
      volunteersNeeded: proj.volunteersNeeded || proj.volunteers || 10,
      isFull: false,
      volunteersApplied: [],
      joinRequests: []
    }));
    
    // احفظها للمرة القادمة
    localStorage.setItem('volunteer-projects', JSON.stringify(initialized));
    return initialized;
    
  } catch (error) {
    console.error('❌ خطأ في تحميل المشاريع:', error);
    return projects;
  }
};

// الحالة الأولية
export const initialProjectsState = {
  projects: getInitialProjectsData(),
  joinRequests: JSON.parse(localStorage.getItem('join-requests')) || [],
  selectedProject: null,
  isLoading: false,
  error: null
};

// دالة مساعدة للحفظ في localStorage
const saveToLocalStorage = (key, data) => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(`❌ خطأ في حفظ ${key} في localStorage:`, error);
    }
  }
};

// الـ Reducer
function projectReducer(state, action) {
  console.log('Reducer Action:', action.type);
  
  // دالة حفظ مركزية
  const saveToStorage = (projectsData, requestsData = null) => {
    if (projectsData !== null) {
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
        id: action.payload.id || `proj_${Date.now()}`,
        createdAt: new Date().toISOString(),
        currentVolunteers: action.payload.currentVolunteers || 0,
        volunteersNeeded: action.payload.volunteersNeeded || action.payload.volunteers || 10,
        isFull: false,
        volunteersApplied: [],
        joinRequests: []
      };
      
      const updatedProjects = [...state.projects, newProject];
      saveToStorage(updatedProjects);
      
      return {
        ...state,
        projects: updatedProjects
      };
    }
    
    case 'UPDATE_PROJECT': {
      const { id, updates } = action.payload;
      
      const updatedProjects = state.projects.map(project => 
        String(project.id) === String(id)
          ? { ...project, ...updates, updatedAt: new Date().toISOString() }
          : project
      );
      
      saveToStorage(updatedProjects);
      
      return {
        ...state,
        projects: updatedProjects,
        selectedProject: state.selectedProject?.id === id ? null : state.selectedProject
      };
    }
    
    case 'ADD_JOIN_REQUEST': {
      const { projectId, userId } = action.payload;
      
      const newRequest = {
        id: `request_${Date.now()}`,
        projectId,
        userId,
        status: 'pending',
        requestedAt: new Date().toISOString()
      };
      
      const updatedRequests = [...state.joinRequests, newRequest];
      saveToStorage(null, updatedRequests);
      
      return {
        ...state,
        joinRequests: updatedRequests
      };
    }
    
    case 'APPROVE_REQUEST': {
      const { requestId } = action.payload;
      
      const request = state.joinRequests.find(r => r.id === requestId);
      if (!request) return state;
      
      // تحديث حالة الطلب
      const updatedRequests = state.joinRequests.map(req => 
        req.id === requestId 
          ? { ...req, status: 'approved', approvedAt: new Date().toISOString() }
          : req
      );
      
      // زيادة عدد المتطوعين في المشروع
      const updatedProjects = state.projects.map(project => {
        if (String(project.id) === String(request.projectId)) {
          const newCount = (project.currentVolunteers || 0) + 1;
          return {
            ...project,
            currentVolunteers: newCount,
            isFull: newCount >= (project.volunteersNeeded || 10)
          };
        }
        return project;
      });
      
      saveToStorage(updatedProjects, updatedRequests);
      
      return {
        ...state,
        projects: updatedProjects,
        joinRequests: updatedRequests
      };
    }
    
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    
    default:
      return state;
  }
}

export default projectReducer;