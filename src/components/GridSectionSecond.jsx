import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import ButtonCarousel from './ButtonCarousel';
import {getProject} from "../services/projectDetailService";
import ProjectDetailData from 'src/model/ProjectDetailData';

const GridSectionSecond = () => {
  const [projectAndCategory, setprojectAndCategory] = useState({})
  const [categories, setCategories] = useState([])
  const [projectListByCategory, setProjectListByCategory] = useState([])
  const [categorySelectedId, setCategorySelectedId] = useState(null)

  useEffect(()=> {
    const handleGettingTheProjectData = async () => {
      const projects = await getProject();
      if (projects && projects.categories) {
         setprojectAndCategory(projects);
         setCategories(projects.categories);
      }
   };
   
    handleGettingTheProjectData()
  }, []);


  const handleOnClickOnCarrouselButton = (categoryId) => {
    setCategorySelectedId(categoryId)
    const projectDataObject = new ProjectDetailData([...projectAndCategory.categories]);
    
    const categoryConcerned = projectDataObject.getCategoryById(categoryId);
    
    if (categoryConcerned && categoryConcerned.projects) {
      // Only set the new project list if it's different from the current state
      setProjectListByCategory(prevList => {
        const newList = [...categoryConcerned.projects];
        if (JSON.stringify(prevList) !== JSON.stringify(newList)) {
          return newList;
        }
        return prevList;
      });
    }
  };
  
  // console.log(JSON.stringify(projectListByCategory, null, 2) ) 
  console.log(categorySelectedId)

  return (
    <div className='flex flex-col items-center justify-center p-4'>
  <ButtonCarousel 
    categories={categories}
    onClickOnCarrousel={handleOnClickOnCarrouselButton}
  />

  <section className="mt-4 flex flex-col items-center justify-center p-6 lg:p-12 w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {/* Tri des projets par l'attribut 'pinned' avant affichage */}
      {projectListByCategory
        .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0)) // Les projets 'pinned' en premier
        .map((project, index) => (
          <Link
            key={index}
            to={`/portfolio/project/${categorySelectedId}-${project.id}`} 
            className="relative group cursor-pointer w-full aspect-square bg-gray-200"
          >
            {/* Container for the images */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Default image */}
              <img
                src={project.images.src_principal_image}
                alt={project.id}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              {/* Hover image */}
              <img
                src={project.images.src_image_on_hover}
                alt={project.id}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </Link>
      ))}
    </div>
  </section>
</div>

  );
};

export default GridSectionSecond;

