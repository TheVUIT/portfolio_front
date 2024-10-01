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
