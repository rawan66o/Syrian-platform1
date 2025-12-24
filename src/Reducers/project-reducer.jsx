import projects from "../viewCopmonont/volunteer-projects/projects-data";

const getInitialProjects = () => {
  const savedProjects = localStorage.getItem('volunteer-projects');
  
  if (savedProjects) {
    return JSON.parse(savedProjects);
  }
  
  // إذا لا يوجد بيانات محفوظة، استخدم البيانات التجريبية
  return projects.map(project => ({
    ...project,
    startDate: project.startDate.toISOString(), // تحويل Date إلى string
    createdAt: new Date(project.createdAt).toISOString()
  }));
};

const initialProjectsState = {
  projects: getInitialProjects(),
  isLoading: false,
  error: null
};

function projectReducer(state, action) {
    switch (action.type) {
        case 'SET_PROJECTS':{
            localStorage.setItem('volunteer-projects', JSON.stringify(action.payload) || []);
            return {
                ...state,
                projects: action.payload
            };
        }

        case 'ADD_PROJECT': {
            const updatedProjects = [...state.projects, action.payload];
            localStorage.setItem('volunteer-projects', JSON.stringify(updatedProjects));
            return { ...state, projects: updatedProjects };
        }

        default:
            return state;
    }
}
export { projectReducer, initialProjectsState };
export default projectReducer;