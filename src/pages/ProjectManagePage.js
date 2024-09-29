/* eslint-disable no-undef */

import React, { useState, useEffect } from "react";
import { FaPlus, FaTrash, FaPencilAlt, FaCheck, FaCross } from "react-icons/fa";

import { FaX } from "react-icons/fa6";
import {
  getProject,
  addProjectDetailData,
} from "../services/projectDetailService";
import GoBackBtn from "src/components/GoBackBtn";

import ProjectDetailData from "../model/ProjectDetailData";
import Project from "../model/Project";
import Category from "../model/Category";
import ProjectDetails from "../model/ProjectDetails";
import ProjectImages from "../model/ProjectImages";

// Composant pour le Modal des Détails du Projet
const ProjectDetailModal = ({ project, onClose, isOpen }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="mt-24 bg-white p-6 rounded-lg shadow-lg max-w-lg w-1/2  md:w-full">
        <h2 className="text-xl font-semibold mb-4">
          Détails du Projet: {project.id}
          {project.pinned === true ? "Pinned" : "No Pinned"}
        </h2>
        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {project.details.src_images.map((detail, index) => {
            return (
              <div key={index} className="relative group">
                <img
                  src={detail}
                  alt={index}
                  className="w-full h-25 md:h-30 lg:h-40 object-cover rounded-md mb-2"
                ></img>
                
                <button
                  onClick={() => handleDeleteImage(imageUrl)}
                  className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <FaTrash />
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex flex-row gap-3 items-center justify-center">
          <button onClick={onClose} className="custom-btn">
            Fermer
          </button>
          <button onClick={""} className="custom-btn">
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

// Composant pour le Modal de Modification du Projet

const ProjectModal = ({ project, onSave, onClose, isOpen }) => {
  const [formData, setFormData] = useState(project || new Project());
  const [previewImages, setPreviewImages] = useState({
    src_principal_image: project?.images?.src_principal_image || "",
    src_image_on_hover: project?.images?.src_image_on_hover || "",
  });

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      const newPreviewURL = URL.createObjectURL(file);
      setPreviewImages({
        ...previewImages,
        [name]: newPreviewURL,
      });

      setFormData({
        ...formData,
        images: {
          ...formData.images,
          [name]: file, // Enregistre le fichier pour être traité lors de la sauvegarde
        },
      });
    }
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Modifier le Projet</h2>

        <div>{formData.id}</div>

        {/* Champ d'importation de l'image principale */}
        <div className="mb-4">
          <label className="font-ubuntu">Image Principale</label>
          <input
            type="file"
            name="src_principal_image"
            onChange={handleImageChange}
            className="border p-2 w-full"
          />
          {previewImages.src_principal_image && (
            <img
              src={previewImages.src_principal_image}
              alt="Aperçu"
              className="mt-2 w-full h-20 object-cover rounded-md"
            />
          )}
        </div>

        {/* Champ d'importation de l'image sur survol */}
        <div className="mb-4">
          <label className="font-ubuntu">Image sur Survol</label>
          <input
            type="file"
            name="src_image_on_hover"
            onChange={handleImageChange}
            className="border p-2 w-full"
          />
          {previewImages.src_image_on_hover && (
            <img
              src={previewImages.src_image_on_hover}
              alt="Aperçu"
              className="mt-2 w-full h-20 object-cover rounded-md"
            />
          )}
        </div>

        <button
          onClick={handleSave}
          className="bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700 transition mr-2"
        >
          Sauvegarder
        </button>
        <button
          onClick={onClose}
          className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 transition"
        >
          Annuler
        </button>
      </div>
    </div>
  );
};

const CategoryModal = ({ saveCategoryCreated, onClose, isOpen }) => {
  const [category, setCategory] = useState("");

  if (!isOpen) return null;

  // Fonction pour gérer la sauvegarde après avoir vérifié que la catégorie n'est pas vide
  const handleSaveCategory = () => {
    if (category.trim() === "") {
      alert("Veuillez entrer un nom pour la catégorie."); // Empêche la création si vide
      return;
    }
    saveCategoryCreated(category); // Si tout est bon, on sauvegarde
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Ajouter Une Categorie</h2>

        <div className="mb-4 flex flex-col justify-center items-center">
          <label className="font-ubuntu text-center">Nom de la categorie</label>
          <input
            type="text"
            // value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 w-full"
          />
        </div>

        <div className="flex flex-row gap-6 justify-center">
          {/* Bouton pour ajouter la catégorie */}
          <button
            onClick={handleSaveCategory}
            className="py-2 px-4 custom-btn-project-serv"
          >
            <FaCheck />
          </button>

          {/* Bouton pour fermer la modal */}
          <button onClick={onClose} className="custom-btn">
            <FaX />
          </button>
        </div>
      </div>
    </div>
  );
};










const ProjectManagePage = () => {
  const [projectDetailData, setProjectDetailData] = useState(
    new ProjectDetailData()
  );

  const [categoryInfosIsChanging, setCategoryInfosIsChanging] = useState(null);
  // const [categoryUpdatingData, setCategoryUpdatingData] = useState({})
  const [categoryUpdatingData, setCategoryUpdatingData] =  useState({ id: '', title: '' });


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProjectId, setHoveredProjectId] = useState(null); // Utilisé pour suivre l'ID du projet survolé

  //--------------------------The LOAD BEHAVIOR-----------------------//
  useEffect(() => {
    const fetchProjectDetailData = async () => {
      const projectDetail = await getProject();
      setProjectDetailData(projectDetail);
    };

    fetchProjectDetailData();
  }, []);
  //--------------------------The LOAD BEHAVIOR-----------------------//

  //-------------------PROJECT CRUD----------------------------//
  const handleAddProject = (categoryId) => {
    setSelectedProject({
      id: "",
      images: {},
      pinned: false,
      details: {},
      categoryId,
    });
    setIsModalOpen(true);
  };

  const handleEditProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleViewProjectDetails = (project) => {
    setSelectedProject(project);
    setIsDetailModalOpen(true);
  };

  const handleSaveProject = (project) => {
    if (!project.id) {
      const category = projectDetailData.categories.find(
        (cat) => cat.id === project.categoryId
      );
      if (category) {
        category.projects.push(project);
      }
    } else {
      // updateProject(project);
    }
    setProjectDetailData({ ...projectDetailData });
  };
  const handleDeleteProject = (event, projectId, categoryId) => {
    event.preventDefault();

    const updatedCategories = projectDetailData.categories.map((category) => {
      if (category.id === categoryId) {
        const updatedProjects = category.projects.filter(
          (project) => project.id !== projectId
        );
        return {
          ...category,
          projects: updatedProjects,
        };
      }
      return category;
    });

    setProjectDetailData(new ProjectDetailData(updatedCategories));
  };

  //-------------------PROJECT CRUD----------------------------//



  //-------------------CATEGORY CRUD----------------------------//

  const handleCreateCategory = (categoryName) => {
    setIsCategoryModalOpen(true);

    if (!categoryName || categoryName.trim() === "") {
      return; // Sortie de la fonction si le nom est vide
    }

    const updatedProjectDetailData = new ProjectDetailData([
      ...projectDetailData.categories,
    ]);

    const lastElement =
      updatedProjectDetailData.categories[
        updatedProjectDetailData.categories.length - 1
      ];

    const category = {
      id: lastElement ? parseInt(lastElement.id) + 1 : 1,
      title: categoryName,
      projects: [],
    };

    updatedProjectDetailData.addCategory(category);
    setProjectDetailData(updatedProjectDetailData);
  };

  const handleDeleteCategory = (categoryId) => {
    const updatedProjectDetailData = new ProjectDetailData([
      ...projectDetailData.categories,
    ]);

    updatedProjectDetailData.deleteCategory(categoryId);

    updatedProjectDetailData.categories =
      updatedProjectDetailData.categories.map((category, index) => ({
        ...category,
        id: index + 1,
      }));

    setProjectDetailData(updatedProjectDetailData);
    return updatedProjectDetailData;
  };

  const handleUpdateCategoryTrigger = (categoryId) => {
    setCategoryInfosIsChanging(categoryId);
  };

  const handleInputCategoryChange = (e) => {
    const { name, value } = e.target;
    setCategoryUpdatingData((prevData) => ({
      ...prevData,
      newName: value,
    }));
  };

  // const handleInputCategoryChangeForId = (e) => {
  //   const {name, value} = e.target;
  //   setCategoryUpdatingData((prevData) => ({
  //     ...prevData,
  //     newId: value 
  //   }))
  // }


  const handleUpdateCategory = (categoryId, newId, newName) => {
    let updatedCategories = [...projectDetailData.categories];

    // Si un nouvel ID est fourni et qu'il est différent du précédent
    if (newId && newId !== null) {
      updatedCategories = handleUpdateCategoryId(
        updatedCategories,
        categoryId,
        newId
      );
    }

    // Si un nouveau nom est fourni
    if (newName && newName !== null) {
      updatedCategories = handleUpdateCategoryName(
        updatedCategories,
        categoryId,
        newName
      );
    }

    // Mettre à jour le ProjectDetailData avec les nouvelles catégories
    const updatedProjectDetailData = new ProjectDetailData(updatedCategories);

    // Mettre à jour l'état avec les nouvelles données
    setProjectDetailData(updatedProjectDetailData);

    setCategoryUpdatingData({});
    setCategoryInfosIsChanging(null); // Fin du changement
  };

  // Méthode pour modifier le nom de la catégorie
  const handleUpdateCategoryName = (updatedCategories, categoryId, newName) => {
    // Trouver l'objet à modifier
    return updatedCategories.map((category) => {
      if (category.id === categoryId) {
        return { ...category, title: newName }; // Mise à jour du nom
      }
      return category;
    });
  };

  // Méthode pour modifier l'ID de la catégorie
  const handleUpdateCategoryId = (updatedCategories, categoryId, newId) => {
    // Trouver l'objet à modifier
    const categoryToUpdate = updatedCategories.find(
      (category) => category.id === categoryId
    );

    if (!categoryToUpdate) {
      console.error("Catégorie non trouvée");
      return updatedCategories;
    }

    // Supprimer l'objet du tableau
    updatedCategories = updatedCategories.filter(
      (category) => category.id !== categoryId
    );

    // Réinsérer l'objet à la nouvelle position (newId - 1 pour l'index)
    updatedCategories.splice(newId - 1, 0, { ...categoryToUpdate, id: newId });

    // Réattribuer les IDs consécutivement à tous les objets
    updatedCategories = updatedCategories.map((category, index) => ({
      ...category,
      id: index + 1, // Les ID doivent être consécutifs
    }));

    return updatedCategories;
  };

  //-------------------CATEGORY CRUD----------------------------//

  //----------------------SAVE ALL DATA---------------------------//
  const handleSaveAll = async () => {
    await addProjectDetailData(projectDetailData);
    alert("Tous les projets ont été sauvegardés avec succès.");
  };
  //----------------------SAVE ALL DATA---------------------------//

  return (
    <div className="mt-24 min-h-screen flex flex-col items-center justify-center bg-background_primary">
      <div className="max-w-4xl w-full border-2 border-gray-200 rounded-lg shadow-xl p-6 bg-white">
        <h1 className="text-3xl font-bold mb-6 text-center text-texte_secondary">
          Gestion des Projets
        </h1>

        {projectDetailData.categories.length > 0 ? (
          <ul className="space-y-8">
            {projectDetailData.categories.sort((a, b) => a.id - b.id).map((category) => (
              <li
                key={category.id}
                className="shadow-md rounded-lg overflow-hidden bg-gray-50 transition-transform transform hover:scale-105"
              >
                {categoryInfosIsChanging == category.id ? (
                  
                  <form 
                    className="flex flex-col justify-between gap-2 items-center p-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleUpdateCategory(category.id, categoryUpdatingData.id, categoryUpdatingData.title)
                      setCategoryUpdatingData({ id: '', title: '' });
                      setCategoryInfosIsChanging(null);
                    }
                      
                    }
                  >
                      {/* Input pour modifier le titre de la catégorie */}
                      <input
                        type="text"
                        className="text-2xl font-semibold text-texte_secondary"
                        placeholder={category.title}
                        value={categoryUpdatingData.title  }
                        onChange={(e) => setCategoryUpdatingData({ ...categoryUpdatingData, title: e.target.value })}
                        // onChange={handleInputCategoryChange} // Mettez à jour le titre de la catégorie
                      />

                      {/* Input pour modifier l'ID de la catégorie */}
                      <input
                        type="number"
                        className="text-2xl font-semibold text-texte_secondary"
                        placeholder={category.id}

                        value={categoryUpdatingData.id  }
                        // onChange={handleInputCategoryChange} // Mettez à jour l'ID de la catégorie
                        onChange={(e) => setCategoryUpdatingData({ ...categoryUpdatingData, id: e.target.value })}                      />

                      {/* Boutons de validation et annulation */}
                      <div className="flex flex-row gap-3 items-center justify-center">
                        <button
                          onClick={() => setCategoryInfosIsChanging(null)}
                          className="custom-btn-project-no"
                        >
                          <FaX />
                        </button>
                        <button
                          type="submit"
                          className="custom-btn-project-serv"
                        >
                          <FaCheck />
                        </button>
                      </div>
                  </form>
                ) : (
                  <div className="flex justify-between items-center p-4">
                    <h2 className="text-2xl font-semibold text-texte_secondary">
                      {category.title}
                    </h2>
                    <div className="flex flex-row gap-3 items-center justify-center">
                      <button
                        onClick={() => handleDeleteCategory(category.id)}
                        className="custom-btn"
                      >
                        <FaTrash />
                      </button>
                      <button
                        onClick={() => handleAddProject(category.id)}
                        className="custom-btn"
                      >
                        <FaPlus />
                      </button>
                      <button
                        onClick={() => handleUpdateCategoryTrigger(category.id)}
                        className="custom-btn"
                      >
                        <FaPencilAlt />
                      </button>
                    </div>
                  </div>
                )}

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                  {category.projects.map((project) => {
                    return (
                      <li
                        key={project.id}
                        className="w-auto rounded-lg shadow-lg bg-white p-4 flex flex-col justify-center items-start"
                        onMouseEnter={() => setHoveredProjectId(project.id)} // Définit l'ID du projet survolé
                        onMouseLeave={() => setHoveredProjectId(null)} // Réinitialise l'ID du projet survolé
                      >
                        <img
                          src={
                            hoveredProjectId === project.id
                              ? project.images.src_image_on_hover
                              : project.images.src_principal_image
                          } // Utilise l'ID pour déterminer quelle image afficher
                          alt={project.id}
                          className="w-full h-40 object-cover rounded-md mb-2 cursor-pointer"
                        />
                        <div className="flex-grow">
                          <h3 className="text-xl font-semibold text-gray-700">
                            {project.id}
                          </h3>
                          <p className="text-gray-600">
                            {project.details.description}
                          </p>
                        </div>
                        <div className=" flex flex-row items-center justify-between gap-2 mt-4">
                          <button
                            onClick={() => handleEditProject(project)}
                            className="custom-btn-project-serv"
                          >
                            Update
                          </button>
                          <button
                            onClick={() => handleViewProjectDetails(project)}
                            className="custom-btn"
                          >
                            Show
                          </button>
                          <button
                            // onClick={() => handleDeleteProject(project, category.id)}
                            onClick={(event) =>
                              handleDeleteProject(
                                event,
                                project.id,
                                category.id
                              )
                            }
                            className="font-ubuntu p-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                          >
                            Delete
                          </button>
                        </div>
                        {/* {` la gategorie à l'état est  ${category.id}`} */}
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p className="font-ubuntu text-2xl text-center">
            Aucune catégorie disponible.
          </p>
        )}
        <div className="flex flex-col gap-4 justify-center items-center">
          <button
            onClick={() => handleCreateCategory()}
            className="mt-8 custom-btn-project-serv"
          >
            <FaPlus />
          </button>

          <button
            onClick={handleSaveAll}
            className="mt-8 font-ubuntu custom-btn-project-serv"
          >
            End and Save
          </button>
        </div>
      </div>

      {/* Modal de Détails du Projet */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setIsDetailModalOpen(false)}
        isOpen={isDetailModalOpen}
      />
      <GoBackBtn />

      {/* <div className="fixed bottom-4 left-4 flex flex-row items-center justify-end ml-4">
        <button
          // A la page précédente
          onClick={""}
          className="mt-4 px-4 py-2 font-ubuntu text-xl bg-red-500 text-backgroung_secondary rounded hover:text-red-500 hover:bg-backgroung_secondary hover:border-2 hover:border-red-500"
        >
          Vider tout
        </button>
      </div> */}
      {/* Modal de Modification du Projet */}
      <ProjectModal
        project={selectedProject}
        onSave={handleSaveProject}
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
      />

      <CategoryModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        saveCategoryCreated={handleCreateCategory}
      />
    </div>
  );
};

export default ProjectManagePage;
