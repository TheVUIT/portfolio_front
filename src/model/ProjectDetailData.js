
class ProjectDetailData {
  constructor(categories = []) {
    this.categories = categories;
  }

  addCategory(category) {
    this.categories.push(category);
  }

  getCategoryById(categoryId) {
    return this.categories.find((category) => category.id === categoryId);
  }

  updateCategory(categoryId, updatedCategory) {
    const index = this.categories.findIndex(
      (category) => category.id === categoryId
    );
    if (index !== -1) {
      this.categories[index] = updatedCategory;
    }
    return new ProjectDetailData([...this.categories]); 
  }

  deleteCategory(categoryId) {
    this.categories = this.categories.filter(
      (category) => category.id !== categoryId
    );
  }

  deleteProject(projectId, categoryId) {
    const category = this.getCategoryById(categoryId);

    if (category) {
      // Filtrer les projets pour exclure celui à supprimer
      let updatedProjects = category.projects.filter(
        (project) => project.id !== projectId
      );

      // Réorganiser les IDs des projets restants
      updatedProjects = updatedProjects.map((project, index) => {
        return { ...project, id: index + 1 }; // Réaffecter les IDs de manière consécutive
      });

      // Mettre à jour la catégorie avec les projets réarrangés
      const updatedCategory = { ...category, projects: updatedProjects };
      return this.updateCategory(categoryId, updatedCategory);
    } else {
      console.error(`Category with ID ${categoryId} not found.`);
    }
  }

  // Ajouter un projet à une catégorie
  addProjectToCategory(project, categoryId) {
    const category = this.getCategoryById(categoryId);

    if (category) {
      const updatedProjects = [...category.projects, project];
      const updatedCategory = { ...category, projects: updatedProjects };
      return this.updateCategory(categoryId, updatedCategory); 
    } else {
      console.error(`Category with ID ${categoryId} not found.`);
    }
  }

  // updateProjectInCategory(project, categoryId) {
  //   const category = this.getCategoryById(categoryId);

  //   if(category) {
  //     return  this.deleteProject(project.id, categoryId).addProjectToCategory(project, categoryId)

  //   } else {
  //     console.log('category non trouvé !')
  //     return
  //   }
  // }


  updateProjectInCategory(project, categoryId) {
    console.log('-------in the updated methode---------')
    console.log(categoryId)
    const category = this.getCategoryById(categoryId);
  
    if (category) {
      const projectIndex = category.projects.findIndex(p => p.id === project.id);
      if (projectIndex !== -1) {
        category.projects[projectIndex] = project;
        return this.updateCategory(categoryId, category); 
      } else {
        console.log('Project non trouvé !');
      }
    } else {
      console.log('Category non trouvé !');
    }
  }
  
}

export default ProjectDetailData;
