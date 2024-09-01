import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importer useNavigate
import { getProjectDetails } from '../utils/ImagesContant'; // Assure-toi de bien importer

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const projectDetails = getProjectDetails(id);

    if (!projectDetails) {
        return <p>Projet non trouvé</p>;
    }

    return (
        <div className='w-full p-7'>
            {/* <h1>Détails du Projet</h1> */}
            <div>
                {/* <h2>Image de Banner</h2> */}
                <img src={projectDetails.bannerImage?.src} alt={`Banner ${projectDetails.id}`} />
            </div>
            <div>
                {/* <h2>Détails du Projet</h2> */}
                <img src={projectDetails.src_detail1} alt={`Detail 1 ${projectDetails.id}`} />
                <img src={projectDetails.src_detail2} alt={`Detail 2 ${projectDetails.id}`} />
            </div>
            {/* Bouton Go Back */}

            <div className='flex flex-row items-center justify-end'>
                <button
                    onClick={() => navigate('/')}
                    className="mt-4 px-4 py-2 font-ubuntu text-xl bg-texte_secondary text-backgroung_secondary rounded hover:text-texte_secondary hover:bg-backgroung_secondary"
                >
                    Go Back
                </button>
            </div>

        </div>
    );
};

export default ProjectDetail;
