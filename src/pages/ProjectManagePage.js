/* eslint-disable no-undef */

import React, { useState, useEffect } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import {
  createProject,
  getProject,
  addProjectDetailData,
  updateProject,
  deleteProject,
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
      <div className="mt-24 bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-semibold mb-4">
          Détails du Projet: {project.id} -- epinglé ?{" "}
          {project.pinned === true ? "Oui" : "Non"}
        </h2>
        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {project.details.src_images.map((detail, index) => {
            return (
              <img
                key={index}
                src={detail}
                alt={index}
                className="w-full h-40 object-cover rounded-md mb-2"
              ></img>
            );
          })}
          
        </div>

        <div className="flex flex-row gap-3 items-center justify-center">
          <button
            onClick={onClose}
            className="custom-btn"
          >
            Fermer
          </button>
          <button 
          onClick={""} 
          className="custom-btn">
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

// Composant pour le Modal de Modification du Projet
const ProjectModal = ({ project, onSave, onClose, isOpen }) => {
  const [formData, setFormData] = useState(
    project || { id: "", images: {}, pinned: false, details: {} }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave(formData);
    onClose(); // Ferme le modal après sauvegarde
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Modifier le Projet</h2>
        <input
          type="text"
          name="id"
          placeholder="ID du Projet"
          value={formData.id}
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          name="src_principal_image"
          placeholder="Image Principale"
          value={formData.images.src_principal_image}
          onChange={(e) =>
            setFormData({
              ...formData,
              images: {
                ...formData.images,
                src_principal_image: e.target.value,
              },
            })
          }
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          name="src_image_on_hover"
          placeholder="Image sur Survol"
          value={formData.images.src_image_on_hover}
          onChange={(e) =>
            setFormData({
              ...formData,
              images: {
                ...formData.images,
                src_image_on_hover: e.target.value,
              },
            })
          }
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          name="src_detail1"
          placeholder="Image Détail 1"
          value={formData.images.src_detail1}
          onChange={(e) =>
            setFormData({
              ...formData,
              images: { ...formData.images, src_detail1: e.target.value },
            })
          }
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          name="src_detail2"
          placeholder="Image Détail 2"
          value={formData.images.src_detail2}
          onChange={(e) =>
            setFormData({
              ...formData,
              images: { ...formData.images, src_detail2: e.target.value },
            })
          }
          className="border p-2 mb-4 w-full"
        />
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

const CategoryModalCreation = ({}) => {
  const [category, setCategory] = useState(new Category());
};

const ProjectManagePage = () => {
  const [projectDetailData, setProjectDetailData] = useState(
    new ProjectDetailData()
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
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

  //-------------------PROJECT CRUD----------------------------//
  const handleAddProject = (categoryId) => {
    setSelectedProject({
      id: "",
      images: {},
      pinned: false,
      details: {},
      categoryId,
    }); // Ajoutez categoryId ici
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
      updateProject(project);
    }
    setProjectDetailData({ ...projectDetailData });
  };
  //-------------------PROJECT CRUD----------------------------//

  //-------------------CATEGORY CRUD----------------------------//
  const handleDeleteCategory = (categoryId) => {
    const updatedProjectDetailData = new ProjectDetailData([
      ...projectDetailData.categories,
    ]);

    // Appeler la méthode deleteCategory pour supprimer la catégorie
    updatedProjectDetailData.deleteCategory(categoryId);

    setProjectDetailData(updatedProjectDetailData);

    return updatedProjectDetailData;
  };

  const handleDeleteProject = (project) => {
    const updatedCategories = projectDetailData.categories.map((category) => {
      return {
        ...category,
        projects: category.projects.filter((p) => p.id !== project.id),
      };
    });
    setProjectDetailData({
      ...projectDetailData,
      categories: updatedCategories,
    });

    deleteProject(project.id);
  };

  //-------------------CATEGORY CRUD----------------------------//

  //----------------------SAVE ALL---------------------------//
  const handleSaveAll = async () => {
    await addProjectDetailData(projectDetailData);
    alert("Tous les projets ont été sauvegardés avec succès.");
  };
  //----------------------SAVE ALL---------------------------//

  return (
    <div className="mt-24 min-h-screen flex flex-col items-center justify-center bg-background_primary">
      <div className="max-w-4xl w-full border-2 border-gray-200 rounded-lg shadow-xl p-6 bg-white">
        <h1 className="text-3xl font-bold mb-6 text-center text-texte_secondary">
          Gestion des Projets
        </h1>

        {projectDetailData.categories.length > 0 ? (
          <ul className="space-y-8">
            {projectDetailData.categories.map((category) => (
              <li
                key={category.id}
                className="shadow-md rounded-lg overflow-hidden bg-gray-50 transition-transform transform hover:scale-105"
              >
                <div className="flex justify-between items-center p-4 border-2 border-red-500">
                  <h2 className="text-2xl font-semibold text-texte_secondary">
                    {category.title} [ordre] = {category.id}
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
                  </div>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                  {category.projects.map((project) => {
                    return (
                      <li
                        key={project.id}
                        className="w-auto rounded-lg shadow-lg bg-white p-4 flex flex-col justify-center items-start border-2 border-black"
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
                            className="font-ubuntu p-2  bg-green-500 text-white  rounded hover:bg-backgroung_secondary hover:text-green-700 hover:border-green-500 hover:border-2 transition"
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
                            onClick={() => handleDeleteProject(project)}
                            className="font-ubuntu p-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                          >
                            Delete
                          </button>
                        </div>
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
        <button
          onClick={handleSaveAll}
          className="mt-8 font-ubuntu bg-green-500 text-white  rounded hover:bg-backgroung_secondary hover:text-green-700 hover:border-green-500 hover:border-2 transition py-2 px-4 "
        >
          End and Save
        </button>
      </div>

      {/* Modal de Détails du Projet */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setIsDetailModalOpen(false)}
        isOpen={isDetailModalOpen}
      />
      <GoBackBtn />
      {/* Modal de Modification du Projet */}
      {/* <ProjectModal project={selectedProject} onSave={handleSaveProject} onClose={() => setIsModalOpen(false)} isOpen={isModalOpen} /> */}
    </div>
  );
};

export default ProjectManagePage;
