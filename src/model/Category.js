
class Category {
    constructor(id, title, projects = []) {
      this.id = id;
      this.title = title;
      this.projects = projects || [];
    }
  
    // Ajouter un projet
    addProject(project) {
      this.projects.push(project);
    }
  
    // Lire un projet par ID
    getProjectById(projectId) {
      return this.projects.find(project => project.id === projectId);
    }
  
    // Mettre à jour un projet
    updateProject(projectId, updatedProject) {
      const index = this.projects.findIndex(project => project.id === projectId);
      if (index !== -1) {
        this.projects[index] = updatedProject;
      }
    }
  
    // // Supprimer un projet
    // deleteProject(projectId) {
    //   this.projects = this.projects.filter(project => project.id !== projectId);
    //   return this.projects
    // }
    deleteProject(projectId) {
      const initialLength = this.projects.length; // Pour le débogage
      this.projects = this.projects.filter(project => project.id !== projectId);
      console.log('Projects after deletion:', this.projects); // Pour voir l'état après suppression
      console.log('Projects removed:', initialLength - this.projects.length); // Nombre de projets supprimés
  }
  
  }
  

  
  export default Category;