
// import React, { useState, useEffect } from "react";
// import { FaPlus } from "react-icons/fa";
// import {
//   createProject,
//   getProject,
//   addProjectDetailData,
//   updateProject,
//   deleteProject,
// } from "../services/projectDetailService";
// import GoBackBtn from "src/components/GoBackBtn";

// import ProjectDetailData from "../model/ProjectDetailData";
// import Project from "../model/Project";
// import Category from "../model/Category";
// import ProjectDetails from "../model/ProjectDetails";
// import ProjectImages from "../model/ProjectImages";

// // Composant pour le Modal
// const ProjectModal = ({ project, onSave, onClose, isOpen }) => {
//   const [formData, setFormData] = useState(project || { id: "", images: {}, pinned: false, details: {} });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSave = () => {
//     onSave(formData);
//     onClose(); // Ferme le modal après sauvegarde
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-xl font-semibold mb-4">Modifier le Projet</h2>
//         <input
//           type="text"
//           name="id"
//           placeholder="ID du Projet"
//           value={formData.id}
//           onChange={handleChange}
//           className="border p-2 mb-4 w-full"
//         />
//         <input
//           type="text"
//           name="src_principal_image"
//           placeholder="Image Principale"
//           value={formData.images.src_principal_image}
//           onChange={(e) => setFormData({ ...formData, images: { ...formData.images, src_principal_image: e.target.value } })}
//           className="border p-2 mb-4 w-full"
//         />
//         <input
//           type="text"
//           name="src_image_on_hover"
//           placeholder="Image sur Survol"
//           value={formData.images.src_image_on_hover}
//           onChange={(e) => setFormData({ ...formData, images: { ...formData.images, src_image_on_hover: e.target.value } })}
//           className="border p-2 mb-4 w-full"
//         />
//         <button onClick={handleSave} className="bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700 transition mr-2">Sauvegarder</button>
//         <button onClick={onClose} className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 transition">Annuler</button>
//       </div>
//     </div>
//   );
// };

// const ProjectManagePage = () => {
//   const [projectDetailData, setProjectDetailData] = useState(new ProjectDetailData());
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [hoveredProjectId, setHoveredProjectId] = useState(null); // Utilisé pour suivre l'ID du projet survolé

//   useEffect(() => {
//     const fetchProjectDetailData = async () => {
//       const projectDetail = await getProject(); // Assurez-vous que getProject() renvoie une promesse
//       setProjectDetailData(projectDetail);
//     };

//     fetchProjectDetailData();
//   }, []);

//   const handleAddProject = (categoryId) => {
//     setSelectedProject({ id: '', images: {}, pinned: false, details: {}, categoryId }); // Ajoutez categoryId ici
//     setIsModalOpen(true);
//   };

//   const handleEditProject = (project) => {
//     setSelectedProject(project);
//     setIsModalOpen(true);
//   };

//   const handleSaveProject = (project) => {
//     // Si l'ID est vide, cela signifie que c'est un nouveau projet
//     if (!project.id) {
//       // Ajouter le projet à la catégorie
//       const category = projectDetailData.categories.find(cat => cat.id === project.categoryId);
//       if (category) {
//         category.projects.push(project); // Ajoutez le nouveau projet à la catégorie
//       }
//     } else {
//       // Mettre à jour le projet existant
//       updateProject(project);
//     }
//     setProjectDetailData({ ...projectDetailData });
//   };

//   const handleSaveAll = async () => {
//     await addProjectDetailData(projectDetailData);
//     alert('Tous les projets ont été sauvegardés avec succès.');
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-blue-100">
//       <div className="max-w-4xl w-full border-2 border-amber-600 rounded-lg shadow-xl p-6 bg-white">
//         <h1 className="text-3xl font-bold mb-6 text-center text-amber-600">Gestion des Projets</h1>
        
//         {projectDetailData.categories.length > 0 ? (
//           <ul className="space-y-8">
//             {projectDetailData.categories.map((category) => (
//               <li key={category.id} className="shadow-md rounded-lg overflow-hidden bg-gray-50 transition-transform transform hover:scale-105">
//                 <div className="flex justify-between items-center p-4">
//                   <h2 className="text-2xl font-semibold text-amber-600">{category.title}</h2>
//                   <button 
//                     onClick={() => handleAddProject(category.id)} 
//                     className="bg-amber-600 text-white p-2 rounded hover:bg-amber-700 transition">
//                     <FaPlus />
//                   </button>
//                 </div>
//                 <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//                   {category.projects.map((project) => {
//                     return (
//                       <li 
//                         key={project.id} 
//                         className="border rounded-lg shadow-lg bg-white p-4 flex flex-col"
//                         onMouseEnter={() => setHoveredProjectId(project.id)} // Définit l'ID du projet survolé
//                         onMouseLeave={() => setHoveredProjectId(null)} // Réinitialise l'ID du projet survolé
//                       >
//                         <img
//                           src={hoveredProjectId === project.id ? project.images.src_image_on_hover : project.images.src_principal_image} // Utilise l'ID pour déterminer quelle image afficher
//                           alt={`Image du projet ${project.id}`}
//                           className="w-full h-40 object-cover rounded-md mb-4 transition-transform transform hover:scale-105"
//                         />
//                         <div className="flex-1">
//                           <p className="text-lg font-medium">ID du projet: <span className="font-bold">{project.id}</span></p>
//                           <p className="text-lg">Pinned: <span className={project.pinned ? "text-green-600" : "text-red-600"}>{project.pinned ? "Oui" : "Non"}</span></p>
//                         </div>
//                         <div className="flex justify-between mt-4">
//                           <button onClick={() => handleEditProject(project)} className="bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700 transition">Modifier</button>
//                           <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition">Supprimer</button>
//                         </div>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-center text-gray-500">Aucune catégorie disponible.</p>
//         )}
//         <button 
//           onClick={handleSaveAll} 
//           className="mt-6 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
//           Sauvegarder Tous
//         </button>
//       </div>

//       <ProjectModal
//         project={selectedProject}
//         onSave={handleSaveProject}
//         onClose={() => setIsModalOpen(false)}
//         isOpen={isModalOpen}
//       />
//     </div>
//   );
// };

// export default ProjectManagePage;



















































// import React, { useState, useEffect } from "react";
// import { FaPlus } from "react-icons/fa";
// import {
//   createProject,
//   getProject,
//   addProjectDetailData,
//   updateProject,
//   deleteProject,
// } from "../services/projectDetailService";
// import GoBackBtn from "src/components/GoBackBtn";

// import ProjectDetailData from "../model/ProjectDetailData";
// import Project from "../model/Project";
// import Category from "../model/Category";
// import ProjectDetails from "../model/ProjectDetails";
// import ProjectImages from "../model/ProjectImages";

// // Composant pour le Modal des Détails du Projet
// const ProjectDetailModal = ({ project, onClose, isOpen }) => {
//   if (!isOpen || !project) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
//         <h2 className="text-xl font-semibold mb-4">Détails du Projet: {project.id}</h2>
//         <div className="mb-4">
//           <img src={project.images.src_detail1} alt="Détail 1" className="w-full h-40 object-cover rounded-md mb-2" />
//           <img src={project.images.src_detail2} alt="Détail 2" className="w-full h-40 object-cover rounded-md" />
//         </div>
//         <button onClick={onClose} className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 transition">Fermer</button>
//       </div>
//     </div>
//   );
// };

// // Composant pour le Modal de Modification du Projet
// const ProjectModal = ({ project, onSave, onClose, isOpen }) => {
//   const [formData, setFormData] = useState(project || { id: "", images: {}, pinned: false, details: {} });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSave = () => {
//     onSave(formData);
//     onClose(); // Ferme le modal après sauvegarde
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-xl font-semibold mb-4">Modifier le Projet</h2>
//         <input
//           type="text"
//           name="id"
//           placeholder="ID du Projet"
//           value={formData.id}
//           onChange={handleChange}
//           className="border p-2 mb-4 w-full"
//         />
//         <input
//           type="text"
//           name="src_principal_image"
//           placeholder="Image Principale"
//           value={formData.images.src_principal_image}
//           onChange={(e) => setFormData({ ...formData, images: { ...formData.images, src_principal_image: e.target.value } })}
//           className="border p-2 mb-4 w-full"
//         />
//         <input
//           type="text"
//           name="src_image_on_hover"
//           placeholder="Image sur Survol"
//           value={formData.images.src_image_on_hover}
//           onChange={(e) => setFormData({ ...formData, images: { ...formData.images, src_image_on_hover: e.target.value } })}
//           className="border p-2 mb-4 w-full"
//         />
//         <input
//           type="text"
//           name="src_detail1"
//           placeholder="Image Détail 1"
//           value={formData.images.src_detail1}
//           onChange={(e) => setFormData({ ...formData, images: { ...formData.images, src_detail1: e.target.value } })}
//           className="border p-2 mb-4 w-full"
//         />
//         <input
//           type="text"
//           name="src_detail2"
//           placeholder="Image Détail 2"
//           value={formData.images.src_detail2}
//           onChange={(e) => setFormData({ ...formData, images: { ...formData.images, src_detail2: e.target.value } })}
//           className="border p-2 mb-4 w-full"
//         />
//         <button onClick={handleSave} className="bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700 transition mr-2">Sauvegarder</button>
//         <button onClick={onClose} className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 transition">Annuler</button>
//       </div>
//     </div>
//   );
// };

// const ProjectManagePage = () => {
//   const [projectDetailData, setProjectDetailData] = useState(new ProjectDetailData());
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [hoveredProjectId, setHoveredProjectId] = useState(null); // Utilisé pour suivre l'ID du projet survolé

//   useEffect(() => {
//     const fetchProjectDetailData = async () => {
//       const projectDetail = await getProject(); // Assurez-vous que getProject() renvoie une promesse
//       setProjectDetailData(projectDetail);
//     };

//     fetchProjectDetailData();
//   }, []);

//   const handleAddProject = (categoryId) => {
//     setSelectedProject({ id: '', images: {}, pinned: false, details: {}, categoryId }); // Ajoutez categoryId ici
//     setIsModalOpen(true);
//   };

//   const handleEditProject = (project) => {
//     setSelectedProject(project);
//     setIsModalOpen(true);
//   };

//   const handleViewProjectDetails = (project) => {
//     setSelectedProject(project);
//     setIsDetailModalOpen(true);
//   };

//   const handleSaveProject = (project) => {
//     // Si l'ID est vide, cela signifie que c'est un nouveau projet
//     if (!project.id) {
//       // Ajouter le projet à la catégorie
//       const category = projectDetailData.categories.find(cat => cat.id === project.categoryId);
//       if (category) {
//         category.projects.push(project); // Ajoutez le nouveau projet à la catégorie
//       }
//     } else {
//       // Mettre à jour le projet existant
//       updateProject(project);
//     }
//     setProjectDetailData({ ...projectDetailData });
//   };

//   const handleSaveAll = async () => {
//     await addProjectDetailData(projectDetailData);
//     alert('Tous les projets ont été sauvegardés avec succès.');
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-blue-100">
//       <div className="max-w-4xl w-full border-2 border-amber-600 rounded-lg shadow-xl p-6 bg-white">
//         <h1 className="text-3xl font-bold mb-6 text-center text-amber-600">Gestion des Projets</h1>
        
//         {projectDetailData.categories.length > 0 ? (
//           <ul className="space-y-8">
//             {projectDetailData.categories.map((category) => (
//               <li key={category.id} className="shadow-md rounded-lg overflow-hidden bg-gray-50 transition-transform transform hover:scale-105">
//                 <div className="flex justify-between items-center p-4">
//                   <h2 className="text-2xl font-semibold text-amber-600">{category.title}</h2>
//                   <button 
//                     onClick={() => handleAddProject(category.id)} 
//                     className="bg-amber-600 text-white p-2 rounded hover:bg-amber-700 transition">
//                     <FaPlus />
//                   </button>
//                 </div>
//                 <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//                   {category.projects.map((project) => {
//                     return (
//                       <li 
//                         key={project.id} 
//                         className="border rounded-lg shadow-lg bg-white p-4 flex flex-col"
//                         onMouseEnter={() => setHoveredProjectId(project.id)} // Définit l'ID du projet survolé
//                         onMouseLeave={() => setHoveredProjectId(null)} // Réinitialise l'ID du projet survolé
//                       >
//                         <img
//                           src={hoveredProjectId === project.id ? project.images.src_image_on_hover : project.images.src_principal_image} // Utilise l'ID pour déterminer quelle image afficher
//                           alt={`Image du projet ${project.id}`}
//                           className="w-full h-40 object-cover rounded-md mb-4 transition-transform transform hover:scale-105"
//                         />
//                         <div className="flex-1">
//                           <p className="text-lg font-medium">ID du projet: <span className="font-bold">{project.id}</span></p>
//                         </div>
//                         <div className="flex justify-between mt-4">
//                           <button 
//                             onClick={() => handleEditProject(project)} 
//                             className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
//                             Modifier
//                           </button>
//                           <button 
//                             onClick={() => handleViewProjectDetails(project)} 
//                             className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
//                             Voir
//                           </button>
//                         </div>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>Aucune catégorie disponible.</p>
//         )}
//         <button 
//           onClick={handleSaveAll} 
//           className="mt-8 bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700 transition">
//           Sauvegarder Tous
//         </button>
//       </div>

//       {/* Modal de Détails du Projet */}
//       <ProjectDetailModal project={selectedProject} onClose={() => setIsDetailModalOpen(false)} isOpen={isDetailModalOpen} />
      
//       {/* Modal de Modification du Projet */}
//       <ProjectModal project={selectedProject} onSave={handleSaveProject} onClose={() => setIsModalOpen(false)} isOpen={isModalOpen} />
//     </div>
//   );
// };

// export default ProjectManagePage;


































import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
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
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-semibold mb-4">Détails du Projet: {project.id}</h2>
        <div className="mb-4">
          <img src={project.images.src_detail1} alt="Détail 1" className="w-full h-40 object-cover rounded-md mb-2" />
          <img src={project.images.src_detail2} alt="Détail 2" className="w-full h-40 object-cover rounded-md" />
        </div>
        <button onClick={onClose} className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 transition">Fermer</button>
      </div>
    </div>
  );
};

// Composant pour le Modal de Modification du Projet
const ProjectModal = ({ project, onSave, onClose, isOpen }) => {
  const [formData, setFormData] = useState(project || { id: "", images: {}, pinned: false, details: {} });

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
          onChange={(e) => setFormData({ ...formData, images: { ...formData.images, src_principal_image: e.target.value } })}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          name="src_image_on_hover"
          placeholder="Image sur Survol"
          value={formData.images.src_image_on_hover}
          onChange={(e) => setFormData({ ...formData, images: { ...formData.images, src_image_on_hover: e.target.value } })}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          name="src_detail1"
          placeholder="Image Détail 1"
          value={formData.images.src_detail1}
          onChange={(e) => setFormData({ ...formData, images: { ...formData.images, src_detail1: e.target.value } })}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          name="src_detail2"
          placeholder="Image Détail 2"
          value={formData.images.src_detail2}
          onChange={(e) => setFormData({ ...formData, images: { ...formData.images, src_detail2: e.target.value } })}
          className="border p-2 mb-4 w-full"
        />
        <button onClick={handleSave} className="bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700 transition mr-2">Sauvegarder</button>
        <button onClick={onClose} className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 transition">Annuler</button>
      </div>
    </div>
  );
};

const ProjectManagePage = () => {
  const [projectDetailData, setProjectDetailData] = useState(new ProjectDetailData());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProjectId, setHoveredProjectId] = useState(null); // Utilisé pour suivre l'ID du projet survolé

  useEffect(() => {
    const fetchProjectDetailData = async () => {
      const projectDetail = await getProject(); // Assurez-vous que getProject() renvoie une promesse
      setProjectDetailData(projectDetail);
    };

    fetchProjectDetailData();
  }, []);

  const handleAddProject = (categoryId) => {
    setSelectedProject({ id: '', images: {}, pinned: false, details: {}, categoryId }); // Ajoutez categoryId ici
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

  const handleDeleteProject = (project) => {
    // Logique pour supprimer le projet
    const updatedCategories = projectDetailData.categories.map(category => {
      return {
        ...category,
        projects: category.projects.filter(p => p.id !== project.id)
      };
    });
    setProjectDetailData({ ...projectDetailData, categories: updatedCategories });
    // Ajoutez ici l'appel à la méthode deleteProject si nécessaire
    deleteProject(project.id); // Ajoutez cette ligne si vous voulez aussi supprimer sur le serveur
  };

  const handleSaveProject = (project) => {
    // Si l'ID est vide, cela signifie que c'est un nouveau projet
    if (!project.id) {
      // Ajouter le projet à la catégorie
      const category = projectDetailData.categories.find(cat => cat.id === project.categoryId);
      if (category) {
        category.projects.push(project); // Ajoutez le nouveau projet à la catégorie
      }
    } else {
      // Mettre à jour le projet existant
      updateProject(project);
    }
    setProjectDetailData({ ...projectDetailData });
  };

  const handleSaveAll = async () => {
    await addProjectDetailData(projectDetailData);
    alert('Tous les projets ont été sauvegardés avec succès.');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-blue-100">
      <div className="max-w-4xl w-full border-2 border-amber-600 rounded-lg shadow-xl p-6 bg-white">
        <h1 className="text-3xl font-bold mb-6 text-center text-amber-600">Gestion des Projets</h1>
        
        {projectDetailData.categories.length > 0 ? (
          <ul className="space-y-8">
            {projectDetailData.categories.map((category) => (
              <li key={category.id} className="shadow-md rounded-lg overflow-hidden bg-gray-50 transition-transform transform hover:scale-105">
                <div className="flex justify-between items-center p-4">
                  <h2 className="text-2xl font-semibold text-amber-600">{category.title}</h2>
                  <button 
                    onClick={() => handleAddProject(category.id)} 
                    className="bg-amber-600 text-white p-2 rounded hover:bg-amber-700 transition">
                    <FaPlus />
                  </button>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                  {category.projects.map((project) => {
                    return (
                      <li 
                        key={project.id} 
                        className="border rounded-lg shadow-lg bg-white p-4 flex flex-col"
                        onMouseEnter={() => setHoveredProjectId(project.id)} // Définit l'ID du projet survolé
                        onMouseLeave={() => setHoveredProjectId(null)} // Réinitialise l'ID du projet survolé
                      >
                        <img
                          src={hoveredProjectId === project.id ? project.images.src_image_on_hover : project.images.src_principal_image} // Utilise l'ID pour déterminer quelle image afficher
                          alt={project.id}
                          className="w-full h-40 object-cover rounded-md mb-2"
                        />
                        <div className="flex-grow">
                          <h3 className="text-xl font-semibold text-gray-700">{project.id}</h3>
                          <p className="text-gray-600"><span className="font-semibold">Détails:</span> {project.details.description}</p>
                        </div>
                        <div className="flex justify-between mt-4">
                          <button 
                            onClick={() => handleEditProject(project)} 
                            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
                            Modifier
                          </button>
                          <button 
                            onClick={() => handleViewProjectDetails(project)} 
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                            Voir
                          </button>
                          <button 
                            onClick={() => handleDeleteProject(project)} 
                            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
                            Supprimer
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
          <p>Aucune catégorie disponible.</p>
        )}
        <button 
          onClick={handleSaveAll} 
          className="mt-8 bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700 transition">
          Sauvegarder Tous
        </button>
      </div>

      {/* Modal de Détails du Projet */}
      <ProjectDetailModal project={selectedProject} onClose={() => setIsDetailModalOpen(false)} isOpen={isDetailModalOpen} />
      
      {/* Modal de Modification du Projet */}
      <ProjectModal project={selectedProject} onSave={handleSaveProject} onClose={() => setIsModalOpen(false)} isOpen={isModalOpen} />
    </div>
  );
};

export default ProjectManagePage;
