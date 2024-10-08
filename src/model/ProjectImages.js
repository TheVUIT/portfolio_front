class ProjectImages {
    constructor(src_principal_image, src_image_on_hover) {
      this.src_principal_image = src_principal_image;
      this.src_image_on_hover = src_image_on_hover;
    }
  
    updateImages(src_principal_image, src_image_on_hover) {
      this.src_principal_image = src_principal_image;
      this.src_image_on_hover = src_image_on_hover;
    }
  
    deleteImages() {
      this.src_principal_image = null;
      this.src_image_on_hover = null;
    }
  }
  
export default ProjectImages;
