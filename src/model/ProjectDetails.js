class ProjectDetails {
    constructor(src_detail1, src_detail2) {
      this.src_detail1 = src_detail1;
      this.src_detail2 = src_detail2;
    }
  
    updateDetails(src_detail1, src_detail2) {
      this.src_detail1 = src_detail1;
      this.src_detail2 = src_detail2;
    }
  
    deleteDetails() {
      this.src_detail1 = null;
      this.src_detail2 = null;
    }
  }


  export default ProjectDetails;