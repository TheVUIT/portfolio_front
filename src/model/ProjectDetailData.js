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
            let updatedProjects = category.projects.filter(
                (project) => project.id !== projectId
            );

            updatedProjects = updatedProjects.map((project, index) => {
                return {...project, id: index + 1};
            });

            const updatedCategory = {...category, projects: updatedProjects};
            return this.updateCategory(categoryId, updatedCategory);
        } else {
            console.error(`Category with ID ${categoryId} not found.`);
        }
    }

    addProjectToCategory(project, categoryId) {
        const category = this.getCategoryById(categoryId);

        if (category) {
            const updatedProjects = [...category.projects, project];
            const updatedCategory = {...category, projects: updatedProjects};
            return this.updateCategory(categoryId, updatedCategory);
        } else {
            console.error(`Category with ID ${categoryId} not found.`);
        }
    }

    updateProjectInCategory(project, categoryId) {
        const category = this.getCategoryById(categoryId);

        if (category) {
            const projectIndex = category.projects.findIndex(p => p.id === project.id);
            if (projectIndex !== -1) {
                const updatedProjects = category.projects.map(p => p.id === project.id ? project : p);

                const updatedCategory = {...category, projects: updatedProjects};
                return this.updateCategory(categoryId, updatedCategory);
            } else {
                console.log('Project non trouvé !');
            }
        } else {
            console.log('Category non trouvée !');
        }
    }

    // Méthode mise à jour pour ajouter une image à un projet
    addImageSourceToProjectInCategory(ImageFileName, projectForDetailsUpdate, categoryId) {
        const category = this.getCategoryById(categoryId);

        if (category) {
            // const project = category.projects.find(p => p.id === projectId);
            if (projectForDetailsUpdate) {
                const updatedSrcImages = [...projectForDetailsUpdate.details.src_images, ImageFileName];
                const updatedProject = {...projectForDetailsUpdate, details: {...projectForDetailsUpdate.details, src_images: updatedSrcImages}};

                const updatedProjects = category.projects.map(p => p.id === projectForDetailsUpdate.id ? updatedProject : p);
                const updatedCategory = {...category, projects: updatedProjects};

                return this.updateCategory(categoryId, updatedCategory);
            } else {
                console.error('Project non trouvé.');
            }
        } else {
            console.error(`Category avec ID ${categoryId} non trouvée.`);
        }
    }

    // Méthode mise à jour pour supprimer une image d'un projet
    deleteSourceImagesToProjectInCategory(ImageFileName, projectId, categoryId) {
        const category = this.getCategoryById(categoryId);

        if (category) {
            const project = category.projects.find(p => p.id === projectId);
            if (project) {
                // Supprime l'image de la liste src_images
                const updatedSrcImages = project.details.src_images.filter(src_image => src_image !== ImageFileName);
                const updatedProject = {...project, details: {...project.details, src_images: updatedSrcImages}};

                // Mets à jour la liste des projets
                const updatedProjects = category.projects.map(p => p.id === project.id ? updatedProject : p);
                const updatedCategory = {...category, projects: updatedProjects};

                return this.updateCategory(categoryId, updatedCategory);
            } else {
                console.error('Project non trouvé.');
            }
        } else {
            console.error(`Category avec ID ${categoryId} non trouvée.`);
        }
    }
}

export default ProjectDetailData;
