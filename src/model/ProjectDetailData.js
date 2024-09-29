import Category from "./Category";

class ProjectDetailData {
  constructor(categories = []) {
    this.categories = categories;
  }

  // Ajouter une catégorie
  addCategory(category) {
    this.categories.push(category);
  }

  // Lire une catégorie par ID
  getCategoryById(categoryId) {
     this.categories.find(category => category.id === categoryId);
    // return this.categories.find(category => category.id === categoryId);
    // const category = this.categories.find(category => category.id === categoryId);


    // if (category) {
    //   return new Category(category.id, category.title, category.projects);
    // }
    // return null; // Ou lever une erreur selon votre logique
  }

  
  // Mettre à jour une catégorie
  updateCategory(categoryId, updatedCategory) {
    const index = this.categories.findIndex(category => category.id === categoryId);
    if (index !== -1) {
      this.categories[index] = updatedCategory;
    }
    return new ProjectDetailData([...this.categories]);
  }

  // Supprimer une catégorie
  deleteCategory(categoryId) {
    this.categories = this.categories.filter(category => category.id !== categoryId);
  }

  // Supprimer un projet
  deleteProject(projectId, categoryId) {
    const category = this.getCategoryById(categoryId);
    if (category) {
      // Appel de la méthode deleteProject de la classe Category
      category.deleteProject(projectId);
      
      // Mettez à jour la catégorie dans les catégories existantes
      const index = this.categories.findIndex(cat => cat.id === categoryId);
      if (index !== -1) {
        this.categories[index] = category; // Mettez à jour la catégorie avec la liste de projets modifiée
      }
    } else {
      console.error(`Category with ID ${categoryId} not found.`);
    }
  }
}

export default ProjectDetailData;
