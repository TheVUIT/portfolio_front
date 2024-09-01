import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importer useNavigate
import { getProjectDetails, imagesPack } from '../utils/ImagesContant'; // Assure-toi de bien importer

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialiser useNavigate
  const projectDetails = getProjectDetails(id);

  if (!projectDetails) {
    return <p>Projet non trouvé</p>;
  }

  return (
    <div>
      <h1>Détails du Projet</h1>
      <div>
        <h2>Image de Banner</h2>
        <img src={projectDetails.bannerImage?.src} alt={`Banner ${projectDetails.id}`} />
      </div>
      <div>
        <h2>Détails du Projet</h2>
        <img src={projectDetails.src_detail1} alt={`Detail 1 ${projectDetails.id}`} />
        <img src={projectDetails.src_detail2} alt={`Detail 2 ${projectDetails.id}`} />
      </div>
      {/* Bouton Go Back */}
      <button
        onClick={() => navigate('/')} // Naviguer vers la page d'accueil
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default ProjectDetail;
