
// class ProjectDetailData {
//   constructor(categories = []) {
//     this.categories = categories;
//   }

//   addCategory(category) {
//     this.categories.push(category);
//   }

//   getCategoryById(categoryId) {
//     return this.categories.find((category) => category.id === categoryId);
//   }

//   updateCategory(categoryId, updatedCategory) {
//     const index = this.categories.findIndex(
//       (category) => category.id === categoryId
//     );
//     if (index !== -1) {
//       this.categories[index] = updatedCategory;
//     }
//     return new ProjectDetailData([...this.categories]);
//   }

//   deleteCategory(categoryId) {
//     this.categories = this.categories.filter(
//       (category) => category.id !== categoryId
//     );
//   }

//   deleteProject(projectId, categoryId) {
//     const category = this.getCategoryById(categoryId);

//     if (category) {
//       // Filtrer les projets pour exclure celui à supprimer
//       let updatedProjects = category.projects.filter(
//         (project) => project.id !== projectId
//       );

//       // Réorganiser les IDs des projets restants
//       updatedProjects = updatedProjects.map((project, index) => {
//         return { ...project, id: index + 1 }; // Réaffecter les IDs de manière consécutive
//       });

//       // Mettre à jour la catégorie avec les projets réarrangés
//       const updatedCategory = { ...category, projects: updatedProjects };
//       this.updateCategory(categoryId, updatedCategory);
//     } else {
//       console.error(`Category with ID ${categoryId} not found.`);
//     }
//   }

//   // Ajouter un projet à une catégorie
//   addProjectToCategory(project, categoryId) {
//     const category = this.getCategoryById(categoryId);

//     if (category) {
//       const updatedProjects = [...category.projects, project];
//       const updatedCategory = { ...category, projects: updatedProjects };
//       this.updateCategory(categoryId, updatedCategory);
//     } else {
//       console.error(`Category with ID ${categoryId} not found.`);
//     }
//   }
// }

// export default ProjectDetailData;





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
    return new ProjectDetailData([...this.categories]); // Retourner les catégories mises à jour
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
}

export default ProjectDetailData;
