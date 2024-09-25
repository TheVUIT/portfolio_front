// import React from 'react'

// const ProjectManagePage = () => {
//   return (
//     <div>ProjectManagePage</div>
//   )
// }

// export default ProjectManagePage












// import React, { useState, useEffect } from 'react';
// import {
//   createProject,
//   getProject,
//   updateProject,
//   deleteProject,
// } from '../services/projectDetailService';

// const ProjectManagePage = () => {
//   const [projectId, setProjectId] = useState('');
//   const [projectData, setProjectData] = useState({ title: '', isPinned: false });
//   const [images, setImages] = useState([]);
//   const [existingProject, setExistingProject] = useState(null);

//   // Charger un projet existant si projectId est fourni
//   useEffect(() => {
//     if (projectId) {
//       const fetchProject = async () => {
//         const project = await getProject(projectId);
//         if (project) {
//           setExistingProject(project);
//           setProjectData({ title: project.title, isPinned: project.isPinned });
//         }
//       };
//       fetchProject();
//     }
//   }, [projectId]);

//   const handleCreateOrUpdate = async () => {
//     if (existingProject) {
//       // Mise à jour d'un projet existant
//       await updateProject(existingProject.id, projectData, images);
//       alert("Projet mis à jour !");
//     } else {
//       // Création d'un nouveau projet
//       const newProject = await createProject(projectData, images);
//       alert("Nouveau projet créé !");
//     }
//   };

//   const handleDelete = async () => {
//     if (existingProject) {
//       await deleteProject(existingProject.id);
//       alert("Projet supprimé !");
//       setExistingProject(null);
//       setProjectData({ title: '', isPinned: false });
//       setImages([]);
//     }
//   };

//   return (
//     <div className="project-manage-page">
//       <h1>{existingProject ? "Modifier le projet" : "Créer un nouveau projet"}</h1>
//       <input
//         type="text"
//         placeholder="Titre du projet"
//         value={projectData.title}
//         onChange={(e) => setProjectData({ ...projectData, title: e.target.value })}
//       />
//       <label>
//         <input
//           type="checkbox"
//           checked={projectData.isPinned}
//           onChange={(e) => setProjectData({ ...projectData, isPinned: e.target.checked })}
//         />
//         Épingler ce projet
//       </label>
//       <input
//         type="file"
//         multiple
//         onChange={(e) => setImages([...e.target.files])}
//       />
//       <button onClick={handleCreateOrUpdate}>
//         {existingProject ? "Mettre à jour" : "Créer"}
//       </button>
//       {existingProject && (
//         <button onClick={handleDelete}>Supprimer le projet</button>
//       )}
//       <div>
//         <h2>Chargement des images :</h2>
//         {images.map((image, index) => (
//           <div key={index}>{image.name}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectManagePage;




































import React, { useState, useEffect } from 'react';
import {
  createProject,
  getProject,
  updateProject,
  deleteProject,
} from '../services/projectDetailService';
import GoBackBtn from "src/components/GoBackBtn";

const ProjectManagePage = () => {
  const [projectId, setProjectId] = useState('');
  const [projectData, setProjectData] = useState({ title: '', isPinned: false });
  const [imageFiles, setImageFiles] = useState([null, null]);
  const [imagePreviews, setImagePreviews] = useState([null, null]);
  const [existingProject, setExistingProject] = useState(null);

  useEffect(() => {
    if (projectId) {
      const fetchProject = async () => {
        const project = await getProject(projectId);
        if (project) {
          setExistingProject(project);
          setProjectData({ title: project.title, isPinned: project.isPinned });
          setImagePreviews([project.projectImages.imageUrl1, project.projectImages.imageUrl2]);
        }
      };
      fetchProject();
    }
  }, [projectId]);

  const handleImageChange = (index) => (e) => {
    const file = e.target.files[0];
    if (file) {
      const newFiles = [...imageFiles];
      newFiles[index] = file;
      setImageFiles(newFiles);

      const reader = new FileReader();
      reader.onload = () => {
        const newPreviews = [...imagePreviews];
        newPreviews[index] = reader.result;
        setImagePreviews(newPreviews);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateOrUpdate = async () => {
    try {
      if (existingProject) {
        await updateProject(existingProject.id, projectData, imageFiles);
        alert("Projet mis à jour !");
      } else {
        const newProject = await createProject(projectData, imageFiles);
        alert("Nouveau projet créé !");
        setExistingProject(newProject);
      }
    } catch (error) {
      console.error("Erreur lors de la création ou mise à jour du projet: ", error);
      alert("Erreur lors de l'opération, veuillez réessayer.");
    }
  };

  const handleDelete = async () => {
    if (existingProject) {
      await deleteProject(existingProject.id);
      alert("Projet supprimé !");
      setExistingProject(null);
      setProjectData({ title: '', isPinned: false });
      setImageFiles([null, null]);
      setImagePreviews([null, null]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">{existingProject ? "Modifier le projet" : "Créer un nouveau projet"}</h1>
      <input
        type="text"
        placeholder="Titre du projet"
        value={projectData.title}
        onChange={(e) => setProjectData({ ...projectData, title: e.target.value })}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <label className="inline-flex items-center mb-4">
        <input
          type="checkbox"
          checked={projectData.isPinned}
          onChange={(e) => setProjectData({ ...projectData, isPinned: e.target.checked })}
          className="mr-2"
        />
        Épingler ce projet
      </label>

      {/* Inputs pour les images avec prévisualisation */}
      {[0, 1].map((index) => (
        <div key={index} className="mb-4">
          <input
            type="file"
            onChange={handleImageChange(index)}
            className="mb-2"
          />
          {imagePreviews[index] && (
            <img src={imagePreviews[index]} alt={`Image ${index + 1}`} className="w-full h-32 object-cover rounded mb-2" />
          )}
        </div>
      ))}

      <button
        onClick={handleCreateOrUpdate}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        {existingProject ? "Mettre à jour" : "Créer"}
      </button>
      {existingProject && (
        <button
          onClick={handleDelete}
          className="w-full mt-2 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-200"
        >
          Supprimer le projet
        </button>
      )}
      <GoBackBtn/>
    </div>
  );
};

export default ProjectManagePage;




// console.log(ProjectDetailData.categori1.projects[2])