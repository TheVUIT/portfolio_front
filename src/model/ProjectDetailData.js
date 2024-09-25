

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
      return this.categories.find(category => category.id === categoryId);
    }
  
    // Mettre à jour une catégorie
    updateCategory(categoryId, updatedCategory) {
      const index = this.categories.findIndex(category => category.id === categoryId);
      if (index !== -1) {
        this.categories[index] = updatedCategory;
      }
    }
  
    // Supprimer une catégorie
    deleteCategory(categoryId) {
      this.categories = this.categories.filter(category => category.id !== categoryId);
    }
  }
  

  export default ProjectDetailData