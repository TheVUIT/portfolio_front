import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { getProjectDetails } from '../utils/ImagesContant'; 
import { FaArrowUp } from 'react-icons/fa'; 

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const projectDetails = getProjectDetails(id);
    const [isScrolled, setIsScrolled] = useState(false); // État pour suivre le défilement

    // Fonction pour gérer le défilement de la page
    const handleScroll = () => {
        const scrollTop = window.scrollY; // Position actuelle de la page
        if (scrollTop > 100) { // Si on défile plus de 100px
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    // Ajouter un écouteur de défilement lorsqu'on monte le composant
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Fonction pour remonter en haut de la page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!projectDetails) {
        return <p>Projet non trouvé</p>;
    }

    return (
        <div className='w-full p-7'>
            <div className="image-container">
                <img
                    src={projectDetails.bannerImage?.src}
                    alt={`Banner ${projectDetails.id}`}
                    className="image-centered"
                />
            </div>
            <div className='detail-images'>
                {projectDetails.details.map((src, index) => (
                    <img 
                        key={index} 
                        src={src} 
                        alt={`Detail ${index + 1} ${projectDetails.id}`} 
                        className="image-centered mb-30"
                    />
                ))}
            </div>

            <div className='fixed bottom-4 right-4 flex flex-row items-center justify-end ml-4'>
                {/* Si la page est défilée, afficher le bouton avec la flèche pour remonter */}
                {isScrolled ? (
                    <button
                        onClick={scrollToTop}
                        className="mt-4 px-4 py-2 font-ubuntu text-xl bg-texte_secondary text-backgroung_secondary rounded hover:text-texte_secondary hover:bg-backgroung_secondary hover:border-2 hover:border-texte_secondary"
                    >
                        {/* ↑  */}
                        <FaArrowUp/>
                    </button>
                ) : (
                    <button
                        onClick={() => navigate('/')}
                        className="mt-4 px-4 py-2 font-ubuntu text-xl bg-texte_secondary text-backgroung_secondary rounded hover:text-texte_secondary hover:bg-backgroung_secondary hover:border-2 hover:border-texte_secondary"
                    >
                        Go Back
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProjectDetail;









