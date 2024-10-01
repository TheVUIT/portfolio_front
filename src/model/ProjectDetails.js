// class ProjectDetails {
//     constructor(src_detail1, src_detail2) {
//       this.src_detail1 = src_detail1;
//       this.src_detail2 = src_detail2;
//     }
  
//     updateDetails(src_detail1, src_detail2) {
//       this.src_detail1 = src_detail1;
//       this.src_detail2 = src_detail2;
//     }
  
//     deleteDetails() {
//       this.src_detail1 = null;
//       this.src_detail2 = null;
//     }
//   }


//   export default ProjectDetails;


  class ProjectDetails {
    constructor(src_images = []) {
      this.src_images = src_images;
    }
  
    updateImages(src_images_to_update, index) {
      if (index >= 0 && index < this.src_images.length) {
        this.src_images[index] = src_images_to_update;
      } else {
        console.error("Index out of bounds");
      }
    }
  
    deleteImages(index) {
      if (index >= 0 && index < this.src_images.length) {
        this.src_images.splice(index, 1); // Supprime l'image à l'index donné
      } else {
        console.error("Index out of bounds");
      }
    }
  
    // Pour vider toutes les images, tu peux ajouter une méthode supplémentaire
    clearAllImages() {
      this.src_images = [];
    }
  }
  
  export default ProjectDetails;
  