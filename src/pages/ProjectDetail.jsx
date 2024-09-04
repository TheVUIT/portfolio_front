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
//             <div>
//                 <img 
//                     src={projectDetails.src_detail1} 
//                     alt={`Detail 1 ${projectDetails.id}`} 
//                     className="mb-30" 
//                 />
//                 <img 
//                     src={projectDetails.src_detail2} 
//                     alt={`Detail 2 ${projectDetails.id}`} 
//                     className="mb-30" 
//                 />
//                 {/* Ajoutez d'autres images de détail ici si nécessaire */}
//             </div>
//             <div className='fixed bottom-0 right-0 flex flex-row items-center justify-end'>
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

    return (
        <div className='w-full p-7'>
            <div>
                <img src={projectDetails.bannerImage?.src} alt={`Banner ${projectDetails.id}`} />
            </div>
            <div className='detail-images'>
                {projectDetails.details.map((src, index) => (
                    <img 
                        key={index} 
                        src={src} 
                        alt={`Detail ${index + 1} ${projectDetails.id}`} 
                        className="mb-30" 
                    />
                ))}
            </div>
            <div className='fixed bottom-0 right-0 flex flex-row items-center justify-end'>
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
