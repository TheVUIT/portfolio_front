// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { FaArrowUp } from 'react-icons/fa';
// import Footer from 'src/components/Footer';
// import {getProject} from "../services/projectDetailService";
// import ProjectDetailData from 'src/model/ProjectDetailData';

// const ProjectDetail = () => {
//     const [projectAndCategory, setprojectAndCategory] = useState({})
//     const [projectDetails, setProjectDetails] = useState({})
//     const { id } = useParams();
//     const navigate = useNavigate();
//     // const projectDetails = getProjectDetails(id);
//     const [isScrolled, setIsScrolled] = useState(false); // État pour suivre le défilement

//     console.log(typeof id)

//     useEffect(()=> {
//         const fetchProjectAndCategoryData = async () => {
//             const projectData = await getProject()
//             setprojectAndCategory(projectData)

//             const projectAllData = new ProjectDetailData([...projectAndCategory.categories])
//             const categoryId = parseInt(id.split("-")[0]) ;
//             const projectId = parseInt(id.split("-")[1]) ;
//             const categorySpecified = projectAllData.getCategoryById(categoryId)
//             const projectSpecified = categorySpecified.projects.filter((project => project.id === projectId))
//             setProjectDetails(projectSpecified)
//         } ;
//         fetchProjectAndCategoryData()
//     }, [id])

//     console.log("peoject Data :", JSON.stringify(projectDetails, null, 2) )
//     // console.log("Data :", JSON.stringify(projectAndCategory, null, 2) )

//     const handleScroll = () => {
//         const scrollTop = window.scrollY; 
//         if (scrollTop > 100) { 
//             setIsScrolled(true);
//         } else {
//             setIsScrolled(false);
//         }
//     };

//     // Ajouter un écouteur de défilement lorsqu'on monte le composant
//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     if (!projectDetails) {
//         return <p>Projet non trouvé</p>;
//     }

//     return (
//         <>
//             <div className='w-full p-7'>
//                 <div className="mt-16"> 
//                     {projectDetails.details.src_images.map((src, index) => (
//                         <img
//                             key={index}
//                             src={src}
//                             alt={`Detail ${index + 1} ${projectDetails.id}`}
//                             className="max-w-full h-auto mx-auto mb-8"
//                         />
//                     ))}
//                 </div>


//                 <div className='fixed bottom-4 right-4 flex flex-row items-center justify-end ml-4'>
//                     {isScrolled ? (
//                         <button
//                             onClick={scrollToTop}
//                             className="mt-4 px-4 py-2 font-ubuntu text-xl bg-texte_secondary text-backgroung_secondary rounded hover:text-texte_secondary hover:bg-backgroung_secondary hover:border-2 hover:border-texte_secondary"
//                         >
//                             <FaArrowUp />
//                         </button>
//                     ) : (
//                         <button
//                             onClick={() => navigate(-1)}
//                             className="mt-4 px-4 py-2 font-ubuntu text-xl bg-texte_secondary text-backgroung_secondary rounded hover:text-texte_secondary hover:bg-backgroung_secondary hover:border-2 hover:border-texte_secondary"
//                         >
//                             Go Back
//                         </button>
//                     )}
//                 </div>
//             </div>

//             <Footer />

//         </>

//     );
// };

// export default ProjectDetail;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import Footer from 'src/components/Footer';
import { getProject } from "../services/projectDetailService";
import ProjectDetailData from 'src/model/ProjectDetailData';

const ProjectDetail = () => {
    const [projectAndCategory, setProjectAndCategory] = useState({});
    const [projectDetails, setProjectDetails] = useState(null); // Initialiser comme null
    const { id } = useParams();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const fetchProjectAndCategoryData = async () => {
            const projectData = await getProject();
            setProjectAndCategory(projectData);

            const projectAllData = new ProjectDetailData([...projectData.categories]); // Utiliser projectData ici
            const categoryId = parseInt(id.split("-")[0]);
            const projectId = parseInt(id.split("-")[1]);
            const categorySpecified = projectAllData.getCategoryById(categoryId);
            const projectSpecified = categorySpecified.projects.find(project => project.id === projectId); // Trouver un projet au lieu de filtrer

            setProjectDetails(projectSpecified); // Mettre à jour projectDetails directement
        };
        fetchProjectAndCategoryData();
    }, [id]);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsScrolled(scrollTop > 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!projectDetails) {
        return <p>Projet non trouvé</p>; // Vérifiez si projectDetails est null ou undefined
    }

    return (
        <>
            <div className='w-full p-7'>
                <div className="mt-16">
                    {projectDetails.details?.src_images?.map((src, index) => ( // Utilisez l'opérateur de coalescence nulle pour éviter les erreurs
                        <img
                            key={index}
                            src={src}
                            alt={`Detail ${index + 1} ${projectDetails.id}`}
                            className="max-w-full h-auto mx-auto mb-8"
                        />
                    ))}
                </div>

                <div className='fixed bottom-4 right-4 flex flex-row items-center justify-end ml-4'>
                    {isScrolled ? (
                        <button
                            onClick={scrollToTop}
                            className="mt-4 px-4 py-2 font-ubuntu text-xl bg-texte_secondary text-backgroung_secondary rounded hover:text-texte_secondary hover:bg-backgroung_secondary hover:border-2 hover:border-texte_secondary"
                        >
                            <FaArrowUp />
                        </button>
                    ) : (
                        <button
                            onClick={() => navigate(-1)}
                            className="mt-4 px-4 py-2 font-ubuntu text-xl bg-texte_secondary text-backgroung_secondary rounded hover:text-texte_secondary hover:bg-backgroung_secondary hover:border-2 hover:border-texte_secondary"
                        >
                            Go Back
                        </button>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ProjectDetail;

