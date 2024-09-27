

class Project {
    constructor(id, images, pinned, details) {
      this.id = id;
      this.images = images;
      this.pinned = pinned;
      this.details = details;
    }
  
    // Mise à jour d'un projet
    updateProject(images, pinned, details) {
      if (images) this.images = images;
      if (pinned !== undefined) this.pinned = pinned;
      if (details) this.details = details;
    }
  
    // Suppression d'un projet
    deleteProject() {
      this.id = null;
      this.images = null;
      this.pinned = null;
      this.details = null;
    }
  }
  
  
  export default Project;
  





//   // Créer des images de projet
// const projectImages = new ProjectImages(
//   'src_of_main_image.jpg', 
//   'src_of_hover_image.jpg'
// );

// // Créer les détails du projet
// const projectDetails = new ProjectDetails([
//   'src_of_detail_image_1.jpg', 
//   'src_of_detail_image_2.jpg'
// ]);

// // Créer un projet
// const project1 = new Project(
//   1, 
//   projectImages, 
//   true, // pinned
//   projectDetails
// );

// const project2 = new Project(
//   2, 
//   new ProjectImages('src_of_main_image_2.jpg', 'src_of_hover_image_2.jpg'),
//   false, 
//   new ProjectDetails(['src_of_detail_image_3.jpg'])
// );

// // Créer une catégorie et ajouter des projets
// const category1 = new Category(1, 'Design Projects');
// category1.addProject(project1);
// category1.addProject(project2);

// // Créer une autre catégorie
// const category2 = new Category(2, 'Development Projects');
// const project3 = new Project(
//   3,
//   new ProjectImages('src_of_main_image_3.jpg', 'src_of_hover_image_3.jpg'),
//   true,
//   new ProjectDetails(['src_of_detail_image_4.jpg', 'src_of_detail_image_5.jpg'])
// );
// category2.addProject(project3);

// // Créer les données de détails du projet avec les catégories
// const projectDetailData = new ProjectDetailData([category1, category2]);