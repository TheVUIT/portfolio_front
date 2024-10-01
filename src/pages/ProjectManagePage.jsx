/* eslint-disable no-undef */

import React, { useState, useEffect } from "react";
import { FaPlus, FaTrash, FaPencilAlt, FaCheck, FaCross } from "react-icons/fa";

import { FaX } from "react-icons/fa6";
import {
  getProject,
  addProjectDetailData,
  uploadImageToStorage,
} from "../services/projectDetailService";
import GoBackBtn from "src/components/GoBackBtn";

import ProjectDetailData from "../model/ProjectDetailData";
import Project from "../model/Project";
import Category from "../model/Category";
import ProjectDetails from "../model/ProjectDetails";
import ProjectImages from "../model/ProjectImages";

// Composant pour le Modal des Détails du Projet

const ProjectDetailModal = ({
  project,
  onClose,
  isOpen,
  handleDeleteImage,
  handleAddImage,
}) => {
  const [srcImages, setSrcImages] = useState(
    project?.details?.src_images || []
  );
  const [newImageLink, setNewImageLink] = useState("");

  const handleAddImageLink = () => {
    if (newImageLink.trim()) {
      setSrcImages([...srcImages, newImageLink]);
      setNewImageLink("");
    }
  };

  const handleRemoveImageLink = (index) => {
    const updatedSrcImages = srcImages.filter((_, i) => i !== index);
    setSrcImages(updatedSrcImages);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleAddImage(file); // Gestion de l'image sélectionnée
    }
  };

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="mt-24 bg-white p-6 rounded-lg shadow-lg max-w-lg w-1/2 md:w-full">
        <h2 className="text-xl font-semibold mb-4">
          Détails du Projet: {project.id}
          {project.pinned === true ? "Pinned" : "No Pinned"}
        </h2>

        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {project.details.src_images.map((detail, index) => (
            <div key={index} className="relative group">
              <img
                src={detail}
                alt={`Image ${index}`}
                className="w-full h-25 md:h-30 lg:h-40 object-cover rounded-md mb-2"
              />
              <button
                onClick={() => handleDeleteImage(detail)}
                className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-3 items-center justify-center">
          <button onClick={onClose} className="custom-btn">
            Fermer
          </button>

          <div className="relative group">
            {/* Bouton FaPlus toujours visible */}
            <FaPlus className="text-xl text-texte_secondary group-hover:rotate-360 group-focus:rotate-360 transition-transform duration-500" />

            {/* Input file transparent superposé */}
            <input
              type="file"
              onChange={handleFileChange}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant pour le Modal de Modification du Projet

const ProjectModal = ({
  project,
  onSave,
  onClose,
  isOpen,
  categoryId,
  categoryLastIndex,
}) => {
  // console.log("Category in the ProjectModal componenet")
  console.log('--------Start Projet in the component')
    console.log(categoryId)
  console.log(project)
  console.log(categoryLastIndex)
  console.log('--------End Projet in the component')

  const [formData, setFormData] = useState({
    ...project,
    pinned: project?.pinned ?? false,
    images: {
      src_principal_image: project?.images?.src_principal_image || "",
      src_image_on_hover: project?.images?.src_image_on_hover || "",
    },
    details: {
      src_images: project?.details?.src_images || [],
    },
  });

  const [categoryIdConcerned, setCategoryIdConcerned] = useState(
    categoryId || {}
  );
  const [categoryLastIndexConcerned, setCategoryLastIndexConcerned] = useState(
    categoryLastIndex || {}
  );
  const [previewImages, setPreviewImages] = useState({
    src_principal_image: project?.images?.src_principal_image || "",
    src_image_on_hover: project?.images?.src_image_on_hover || "",
  });

  // Utiliser useEffect pour mettre à jour les états lorsque project change
  useEffect(() => {
    if (project) {
      setFormData((prevData) => ({
        ...prevData,
        ...project,
        pinned: project?.pinned ?? false,
      }));
      setCategoryIdConcerned(categoryId);
      setCategoryLastIndexConcerned(categoryLastIndex);
      setPreviewImages({
        src_principal_image: project?.images?.src_principal_image || "",
        src_image_on_hover: project?.images?.src_image_on_hover || "",
      });
    }
  }, [project, categoryId, categoryLastIndex]);

  const handleImageChange = async (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      const newPreviewURL = await uploadImageToStorage(file);

      setPreviewImages((prev) => ({
        ...prev,
        [name]: newPreviewURL,
      }));

      setFormData((prev) => ({
        ...prev,
        images: {
          ...prev.images,
          [name]: newPreviewURL, // Utiliser l'URL ici
        },
      }));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      details: {
        ...formData.details,
      },
    };

    console.log("Données du formulaire avant enregistrement:", updatedFormData); // Log des valeurs avant enregistrement
    onSave(updatedFormData, categoryLastIndexConcerned, categoryIdConcerned);

    // setFormData({
    //   ...project,
    //   id: 0,
    //   pinned:  false,
    //   images: {
    //     src_principal_image:  "",
    //     src_image_on_hover:  "",
    //   },
    //   details: {
    //     src_images: [],
    //   },
    // })
    onClose();

  };

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          {categoryLastIndexConcerned === formData.id
            ? "Créer un"
            : "Modifier ce"}{" "}
          Projet
        </h2>

        <div className="mb-4">
          <h2 className="font-ubuntu text-lg font-bold">ID : {formData.id}</h2>

          {/* Affichage de la case à cocher stylisée */}
          <div className="mb-4 flex items-center space-x-4">
            <label className="font-ubuntu text-gray-700 text-sm">
              Épingler le projet
            </label>
            <input
              type="checkbox"
              checked={formData.pinned}
              onChange={(e) =>
                setFormData({ ...formData, pinned: e.target.checked })
              }
              className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
          </div>

          <label className="font-ubuntu text-gray-700">Image Principale</label>
          <input
            type="file"
            name="src_principal_image"
            onChange={handleImageChange}
            className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />
          {previewImages.src_principal_image && (
            <img
              src={previewImages.src_principal_image}
              alt="Aperçu"
              className="mt-2 w-full h-20 object-cover rounded-md shadow"
            />
          )}
        </div>

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

        <div className="flex flex-row justify-between items-center">
          <button onClick={handleSave} className="custom-btn-project-serv">
            {categoryLastIndexConcerned === formData.id ? "Créer" : "Confirmer"}
          </button>
          <button onClick={onClose} className="custom-btn">
            Annuler
          </button>
        </div>
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
  //*******************GlobalProject USESTATE********************** */
  const [projectDetailData, setProjectDetailData] = useState(
    new ProjectDetailData()
  );
  //*******************GlobalProject USESTATE********************** */

  console.log(projectDetailData);

  //*******************Catgory Updating USESTATE********************** */
  const [categoryInfosIsChanging, setCategoryInfosIsChanging] = useState(null);
  const [categoryUpdatingData, setCategoryUpdatingData] = useState({
    id: "",
    title: "",
  });
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  //*******************Catgory Updating USESTATE********************** */

  //*******************Project Updating USESTATE********************** */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [categoryLastIndex, setCategoryLastIndex] = useState(null);
  const [categoryIdProject, setCategoryIdProject] = useState(null);

  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProjectId, setHoveredProjectId] = useState(null); // Utilisé pour suivre l'ID du projet survolé
  //*******************Project Updating USESTATE********************** */

  //===================================The LOAD BEHAVIOR===================================//
  useEffect(() => {
    const fetchProjectDetailData = async () => {
      const projectDetail = await getProject();
      setProjectDetailData(projectDetail);
    };

    fetchProjectDetailData();
  }, []);
  //===================================THE LOAD BEHAVIOR===================================//

  //===================================PROJECT CRUD===================================//

  //===================PROJECT VIEWER===================//
  const handleViewProjectDetails = (project) => {
    setSelectedProject(project);
    setIsDetailModalOpen(true);
  };
  const handleEditProject = (project, categoryIdChoose) => {
    setCategoryIdProject(categoryIdChoose);
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  //===================PROJECT VIEWER===================//

  const handleDeleteProject = (event, projectId, categoryId) => {
    event.preventDefault();

    const updatedProjectDetailData = new ProjectDetailData([
      ...projectDetailData.categories,
    ]);

    updatedProjectDetailData.deleteProject(projectId, categoryId);

    setProjectDetailData(updatedProjectDetailData);
  };

  const handleAddProject = (categoryLastIndex, project) => {
    // console.log(selectedProject);
    console.log(
      "------------------------------In the methode handleAddProject-----------------------------------------"
    );
    console.log("c'est nul ici !")
    // console.log(categoryIdChoose);
    // console.log(project);

    setCategoryLastIndex(categoryLastIndex);
    setSelectedProject(project);

    setIsModalOpen(true);
  };

  //-------------------------------------------------------------------------------------------------------------------------

  // const handleSaveProject = (project, categoryLastIndex, categoryId) => {
  //   let updatedProjectDetailData = new ProjectDetailData([...projectDetailData.categories]);

  //   console.log(categoryId);

  //   if (categoryLastIndex === project.id) {
  //     const finalProjectDetailData = updatedProjectDetailData.addProjectToCategory(project, categoryId);
  //     setProjectDetailData(finalProjectDetailData);
  //   } else {
  //     const finalCategories = updateProject(project, updatedProjectDetailData.categories);
  //     setProjectDetailData(new ProjectDetailData(finalCategories));
  //   }
  // };

  const handleSaveProject = (project, categoryLastIndex, categoryId) => {
    // Créer une nouvelle instance de ProjectDetailData avec les catégories existantes
    const updatedProjectDetailData = new ProjectDetailData([
      ...projectDetailData.categories,
    ]);

    // Vérifier si le project.id correspond à categoryLastIndex pour ajouter ou mettre à jour le projet
    if (categoryLastIndex === project.id) {
      // Ajouter un nouveau projet
      const finalProjectDetailData =
        updatedProjectDetailData.addProjectToCategory(project, categoryId);
      setProjectDetailData(finalProjectDetailData); // Mettre à jour le state avec la nouvelle version des données
    } else {
      console.log(categoryId);
      // Mettre à jour un projet existant dans la catégorie
      const finalProjectDetailData =
        updatedProjectDetailData.updateProjectInCategory(project, categoryId);
      // if (finalProjectDetailData) {
        setProjectDetailData(finalProjectDetailData); // Mettre à jour les données si le projet a été mis à jour avec succès
      // }
    }
  };

  

  //===================================PROJECT CRUD===================================//

  //===================================PROJECT-DETAILS CRUD===================================//

  //===================================PROJECT-DETAILS CRUD===================================//

  //===================================CATEGORY CRUD===================================//

  const handleCreateCategory = (categoryName) => {
    setIsCategoryModalOpen(true);

    if (!categoryName || categoryName.trim() === "") {
      return;
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

  const handleUpdateCategory = (categoryId, newId, newName) => {
    let updatedCategories = [...projectDetailData.categories];

    if (newId && newId !== null) {
      updatedCategories = handleUpdateCategoryId(
        updatedCategories,
        categoryId,
        newId
      );
    }

    if (newName && newName !== null) {
      updatedCategories = handleUpdateCategoryName(
        updatedCategories,
        categoryId,
        newName
      );
    }

    const updatedProjectDetailData = new ProjectDetailData(updatedCategories);

    setProjectDetailData(updatedProjectDetailData);

    setCategoryUpdatingData({});
    setCategoryInfosIsChanging(null);
  };

  const handleUpdateCategoryName = (updatedCategories, categoryId, newName) => {
    return updatedCategories.map((category) => {
      if (category.id === categoryId) {
        return { ...category, title: newName }; // Mise à jour du nom
      }
      return category;
    });
  };

  const handleUpdateCategoryId = (updatedCategories, categoryId, newId) => {
    const categoryToUpdate = updatedCategories.find(
      (category) => category.id === categoryId
    );

    if (!categoryToUpdate) {
      console.error("Catégorie non trouvée");
      return updatedCategories;
    }

    updatedCategories = updatedCategories.filter(
      (category) => category.id !== categoryId
    );
    updatedCategories.splice(newId - 1, 0, { ...categoryToUpdate, id: newId });

    updatedCategories = updatedCategories.map((category, index) => ({
      ...category,
      id: index + 1, // Les ID doivent être consécutifs
    }));

    return updatedCategories;
  };

  //===================================CATEGORY CRUD===================================//

  //===================================FINAL-SAVING===================================//
  const handleSaveAll = async () => {
    await addProjectDetailData(projectDetailData);
    alert("Tous les projets ont été sauvegardés avec succès.");
  };
  //===================================FINAL-SAVING===================================//

  return (
    <div className="mt-24 min-h-screen flex flex-col items-center justify-center bg-background_primary">
      <div className="max-w-4xl w-full border-2 border-gray-200 rounded-lg shadow-xl p-6 bg-white">
        <h1 className="text-3xl font-bold mb-6 text-center text-texte_secondary">
          Gestion des Projets
        </h1>

        {projectDetailData.categories.length > 0 ? (
          <ul className="space-y-8">
            {projectDetailData.categories
              .sort((a, b) => a.id - b.id)
              .map((category) => (
                <li
                  key={category.id}
                  className="shadow-md rounded-lg overflow-hidden bg-gray-50 transition-transform transform hover:scale-105"
                >
                  {categoryInfosIsChanging == category.id ? (
                    <form
                      className="flex flex-col md:flex-row lg:flex-row justify-between gap-2 items-center p-4"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleUpdateCategory(
                          category.id,
                          categoryUpdatingData.id,
                          categoryUpdatingData.title
                        );
                        setCategoryUpdatingData({ id: "", title: "" });
                        setCategoryInfosIsChanging(null);
                      }}
                    >
                      {/* Input pour modifier le titre de la catégorie */}
                      <input
                        type="text"
                        className="text-2xl font-semibold text-texte_secondary"
                        placeholder={category.title}
                        value={categoryUpdatingData.title}
                        onChange={(e) =>
                          setCategoryUpdatingData({
                            ...categoryUpdatingData,
                            title: e.target.value,
                          })
                        }
                        // onChange={handleInputCategoryChange} // Mettez à jour le titre de la catégorie
                      />

                      {/* Input pour modifier l'ID de la catégorie */}
                      <input
                        type="number"
                        className="text-2xl font-semibold text-texte_secondary"
                        placeholder={category.id}
                        value={categoryUpdatingData.id}
                        // onChange={handleInputCategoryChange} // Mettez à jour l'ID de la catégorie
                        onChange={(e) =>
                          setCategoryUpdatingData({
                            ...categoryUpdatingData,
                            id: e.target.value,
                          })
                        }
                      />

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
                        <p className="font-ubuntu">
                          {" "}
                          {category.projects.length} |{" "}
                          {projectDetailData.categories.length} /
                          {category.id}
                        </p>

                        <button
                          onClick={() => {
                            console.log("Category:", category);
                            // setCategoryIdProject(category.id); // Vérifie que la catégorie existe et contient un id
                            handleAddProject(
                              // category.id,
                              category.projects.length + 1,
                              {
                                id: category.projects.length + 1,
                                images: {
                                  src_principal_image: "",
                                  src_image_on_hover: "",
                                },
                                pinned: false,
                                details: {
                                  src_images: [],
                                },
                              }
                            );
                          }}
                          className="custom-btn"
                        >
                          <FaPlus />
                        </button>

                        <button
                          onClick={() =>
                            handleUpdateCategoryTrigger(category.id)
                          }
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
                          <div
                            className={`h-2 rounded-2xl flex flex-row w-1/6 justify-center items-center ${
                              project.pinned == true
                                ? "bg-green-500"
                                : "bg-red-500"
                            }`}
                          ></div>
                          {category.id}
                          <div className=" flex flex-row items-center justify-between gap-2 mt-4">
                            <button
                              onClick={() => handleEditProject(project, category.id)}
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

      <div className="fixed bottom-4 left-4 flex flex-row items-center justify-end ml-4">
        <button
          // A la page précédente
          onClick={""}
          className="mt-4 px-4 py-2 font-ubuntu text-xl bg-red-500 text-backgroung_secondary rounded hover:text-red-500 hover:bg-backgroung_secondary hover:border-2 hover:border-red-500"
        >
          Vider tout
        </button>
      </div>

      {/* Modal de Modification du Projet */}
      <ProjectModal
        project={selectedProject}
        onSave={handleSaveProject}
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
        categoryId={categoryIdProject}
        categoryLastIndex={categoryLastIndex}
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
