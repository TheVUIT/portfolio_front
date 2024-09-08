// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom'; 
// import { getProjectDetails } from '../utils/ImagesContant'; 

// const ProjectDetail = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const projectDetails = getProjectDetails(id);

//     if (!projectDetails) {
//         return <p>Projet non trouvé</p>;
//     }

//     return (
//         <div className='w-full p-7'>
//             <div>
//                 <img src={projectDetails.bannerImage?.src} alt={`Banner ${projectDetails.id}`} />
//             </div>
//             <div className='detail-images'>
//                 {projectDetails.details.map((src, index) => (
//                     <img 
//                         key={index} 
//                         src={src} 
//                         alt={`Detail ${index + 1} ${projectDetails.id}`} 
//                         className="mb-30" 
//                     />
//                 ))}
//             </div>
//             <div className='fixed bottom-4 right-4 flex flex-row items-center justify-end ml-4'>
//                 <button
//                     onClick={() => navigate('/')}
//                     className="mt-4 px-4 py-2 font-ubuntu text-xl bg-texte_secondary text-backgroung_secondary rounded hover:text-texte_secondary hover:bg-backgroung_secondary"
//                 >
//                     Go Back
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ProjectDetail;



import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { getProjectDetails } from '../utils/ImagesContant'; 

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const projectDetails = getProjectDetails(id);

    if (!projectDetails) {
        return <p>Projet non trouvé</p>;
    }

    // Fonction de fallback si une image ne se charge pas
    const handleImageError = (e) => {
        e.target.src = '/path/to/fallback-image.jpg'; // Chemin de votre image de fallback
        e.target.style.objectFit = 'contain'; // Permet d'ajuster l'image dans le conteneur
    };

    return (
        <div className='w-full p-7'>
            <div className="image-container">
                <img
                    src={projectDetails.bannerImage?.src}
                    alt={`Banner ${projectDetails.id}`}
                    onError={handleImageError}
                    className="image-centered"
                />
            </div>
            <div className='detail-images'>
                {projectDetails.details.map((src, index) => (
                    <img 
                        key={index} 
                        src={src} 
                        alt={`Detail ${index + 1} ${projectDetails.id}`}
                        onError={handleImageError}
                        className="image-centered mb-30"
                    />
                ))}
            </div>
            <div className='fixed bottom-4 right-4 flex flex-row items-center justify-end ml-4'>
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
