// context/volunteer-projects-context.js
import { createContext, useContext, useReducer } from "react";
import projectReducer, { initialProjectsState } from "../Reducers/project-reducer";

const ProjectsContext = createContext(null);

export function ProjectsProvider({ children }) {
    const [state, dispatch] = useReducer(projectReducer, initialProjectsState);
    
    return (
        <ProjectsContext.Provider value={{ state, dispatch }}>
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