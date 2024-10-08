
class Category {
    constructor(id, title, projects = []) {
        this.id = id;
        this.title = title;
        this.projects = projects || [];
    }

    addProject(project) {
        this.projects.push(project);
    }

    getProjectById(projectId) {
        return this.projects.find(project => project.id === projectId);
    }

    updateProject(projectId, updatedProject) {
        const index = this.projects.findIndex(project => project.id === projectId);
        if (index !== -1) {
            this.projects[index] = updatedProject;
        }
    }

    deleteProject(projectId) {
        const initialLength = this.projects.length; 
        this.projects = this.projects.filter(project => project.id !== projectId);
        console.log('Projects after deletion:', this.projects); 
        console.log('Projects removed:', initialLength - this.projects.length); 
    }
  
}

export default Category;