// استيراد دالة الحصول على البيانات الأولية
import { getInitialProjectsData } from "../viewCopmonont/volunteer-projects/projects-data";

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
  console.log('🔁 Reducer Action:', action.type, action.payload);
  
  switch (action.type) {
    
    case 'ADD_PROJECT': {
      const newProject = {
        ...action.payload,
        id: action.payload.id || `project_${Date.now()}`,
        createdAt: new Date().toISOString(),
        currentVolunteers: 0,
        isFull: false,
        volunteersApplied: [],
        joinRequests: []
      };
      
      const updatedProjects = [...state.projects, newProject];
      
      saveToLocalStorage('volunteer-projects', updatedProjects);
      
      return {
        ...state,
        projects: updatedProjects
      };
    }
    
    case 'UPDATE_PROJECT': {
      const { id, updates } = action.payload;
      
      const updatedProjects = state.projects.map(project => 
        project.id === id
          ? { 
              ...project, 
              ...updates,
              // تحديث حالة isFull بناءً على المتطوعين
              isFull: (updates.currentVolunteers || project.currentVolunteers) >= 
                      (updates.volunteersNeeded || project.volunteersNeeded),
              updatedAt: new Date().toISOString() 
            }
          : project
      );
      
      saveToLocalStorage('volunteer-projects', updatedProjects);
      
      const updatedSelectedProject = state.selectedProject?.id === id 
        ? { ...state.selectedProject, ...updates }
        : state.selectedProject;
      
      return {
        ...state,
        projects: updatedProjects,
        selectedProject: updatedSelectedProject
      };
    }
    
    case 'DELETE_PROJECT': {
      const { id } = action.payload;
      
      const updatedProjects = state.projects.filter(project => project.id !== id);
      
      saveToLocalStorage('volunteer-projects', updatedProjects);
      
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
      
      saveToLocalStorage('join-requests', updatedRequests);
      
      return {
        ...state,
        joinRequests: updatedRequests
      };
    }
    
    case 'UPDATE_JOIN_REQUEST': {
      const { requestId, status } = action.payload;
      
      const updatedRequests = state.joinRequests.map(request =>
        request.id === requestId
          ? { ...request, status, updatedAt: new Date().toISOString() }
          : request
      );
      
      // حفظ في localStorage
      saveToLocalStorage('join-requests', updatedRequests);
      
      return {
        ...state,
        joinRequests: updatedRequests
      };
    }
    
    case 'SELECT_PROJECT': {
      return {
        ...state,
        selectedProject: action.payload
      };
    }
    
    case 'CLEAR_SELECTED_PROJECT': {
      return {
        ...state,
        selectedProject: null
      };
    }
    
    case 'SET_LOADING': {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    
    case 'SET_ERROR': {
      return {
        ...state,
        error: action.payload
      };
    }
    
    case 'RESET_PROJECTS': {

      const resetProjects = getInitialProjectsData();
      
      saveToLocalStorage('volunteer-projects', resetProjects);
      
      return {
        ...initialProjectsState,
        projects: resetProjects
      };
    }
    
    default:
      return state;
  }
}

export default projectReducer;