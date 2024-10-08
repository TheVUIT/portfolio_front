
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
        this.src_images.splice(index, 1); 
      } else {
        console.error("Index out of bounds");
      }
    }
  
    
    clearAllImages() {
      this.src_images = [];
    }
  }
  
  export default ProjectDetails;
  