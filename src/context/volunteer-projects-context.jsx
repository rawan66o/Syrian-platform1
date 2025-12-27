// context/volunteer-projects-context.js
import { createContext, useCallback, useContext, useEffect, useReducer } from "react";
import projectReducer, { initialProjectsState } from "../Reducers/project-reducer";

const ProjectsContext = createContext(null);

// في Context.js
export function ProjectsProvider({ children }) {
  const [state, dispatch] = useReducer(projectReducer, initialProjectsState );
  
  // دالة خاصة للإضافة تحفظ أولاً في localStorage
  const addProjectWithCache = useCallback((newProject) => {
    // 1. أولاً: نجيب اللي موجود في localStorage
    const existingProjects = JSON.parse(
      localStorage.getItem('projects') || '[]'
    );
    
    // 2. نضيف المشروع الجديد
    const updatedCache = [...existingProjects, {
      ...newProject,
      cachedAt: new Date().toISOString(), // وقت الحفظ
      cacheId: `cache_${Date.now()}`      // معرّف خاص بالكاش
    }];
    
    // 3. نحفظ في localStorage
    localStorage.setItem('volunteer-projects', JSON.stringify(updatedCache));
    
    console.log('✅ تم حفظ المشروع في الكاش أولاً:', newProject.title);

  }, [dispatch]);
   
  return (
    <ProjectsContext.Provider value={{ state, dispatch, addProjectWithCache }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export const useProjects = () => {
    const context = useContext(ProjectsContext);
    if (!context) {
        throw new Error("useProjects must be used within a ProjectsProvider");
    } 
    return context; // Should return { state, dispatch }
};