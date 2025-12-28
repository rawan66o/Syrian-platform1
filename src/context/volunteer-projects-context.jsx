import { createContext, useContext, useReducer, useCallback } from "react";
import projectReducer, { initialProjectsState } from "../Reducers/project-reducer";

const ProjectsContext = createContext(null);

export function ProjectsProvider({ children }) {
  const [state, dispatch] = useReducer(projectReducer, initialProjectsState);
  
  // دالة مساعدة للبحث عن مشروع
  const getProjectById = useCallback((id) => {
    if (!state.projects || !id) return null;
    
    // البحث بطرق متعددة
    return state.projects.find(proj => {
      if (!proj || !proj.id) return false;
      
      // 1. String match
      if (String(proj.id) === String(id)) return true;
      
      // 2. Number match
      if (Number(proj.id) === Number(id)) return true;
      
      // 3. Loose equality
      return proj.id == id;
    });
  }, [state.projects]);
  
  // دالة مساعدة لإضافة مشروع
  const addProject = useCallback((projectData) => {
    dispatch({ 
      type: 'ADD_PROJECT', 
      payload: projectData 
    });
  }, [dispatch]);
  
  // دالة مساعدة للتقديم على مشروع
  const applyToProject = useCallback((projectId, userData) => {
    dispatch({
      type: 'ADD_JOIN_REQUEST',
      payload: {
        projectId,
        userId: userData.id,
        userName: userData.name,
        userEmail: userData.email,
        message: userData.message || ''
      }
    });
  }, [dispatch]);
  
  const value = {
    state,
    dispatch,
    getProjectById,
    addProject,
    applyToProject
  };
  
  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
}

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  } 
  return context;
};