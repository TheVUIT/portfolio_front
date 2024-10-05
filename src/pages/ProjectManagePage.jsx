/* eslint-disable no-undef */
import React, {useState, useEffect, useCallback, useMemo} from "react";
import {FaTrash, FaPlus, FaPencilAlt, FaCheck, FaThumbtack} from "react-icons/fa";
import {FaX} from "react-icons/fa6";
import {useToast} from '../hooks/use-toast';

import {
    getProject,
    addProjectDetailData
} from "../services/projectDetailService";
import GoBackBtn from "src/components/GoBackBtn";

import ProjectDetailData from "../model/ProjectDetailData";
import ProjectDetailModal from "../components/project/ProjectDetailModal"
import CategoryModal from "../components/project/CategoryModal"
import ProjectModal from "src/components/project/ProjectModal";


const ProjectManagePage = () => {
    //************Toaster******************//
    const [isAllDataIsSavingLoading, setIsAllDataIsSavingLoading] = useState(false);
    const {toast} = useToast()
    //************Toaster******************//


    //*******************START GlobalProject USESTATE********************** */
    const [projectDetailData, setProjectDetailData] = useState(
        new ProjectDetailData()
    );
    //*******************END GlobalProject USESTATE********************** */


    //*******************START Catgory Updating USESTATE********************** */
    const [categoryInfosIsChanging, setCategoryInfosIsChanging] = useState(null);
    const [categoryUpdatingData, setCategoryUpdatingData] = useState({
        id: "",
        title: "",
    });
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
    //*******************END Catgory Updating USESTATE********************** */


    //*******************START Project Updating USESTATE********************** */
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [categoryLastIndex, setCategoryLastIndex] = useState(null);
    const [categoryIdProject, setCategoryIdProject] = useState(null);

    const [selectedProject, setSelectedProject] = useState(null);
    const [hoveredProjectId, setHoveredProjectId] = useState(null);
    //*******************END Project Updating USESTATE********************** */


    // *******************START Project Updating USESTATE********************** */
        const [selectedCategoryForAddingSrcImages, setSlectedCategoryForAddingSrcImages] = useState(null)
    //*******************END Project Updating USESTATE********************** */


    //===================================The LOAD OF DOM BEHAVIOR===================================//
    useEffect(() => {
        const fetchProjectDetailData = async () => {
            const projectDetail = await getProject();
            setProjectDetailData(projectDetail);
        };

        fetchProjectDetailData();
    }, []);
    //===================================THE LOAD OF DOM BEHAVIOR===================================//


    //===================================PROJECT CRUD===================================//
    //===================PROJECT VIEWER===================//

    const handleEditProject = (project, categoryIdChoose, categoryLastIndex) => {
        setCategoryLastIndex(categoryLastIndex)
        setCategoryIdProject(categoryIdChoose);
        setSelectedProject(project);
        setIsModalOpen(true);
    };
    const handleAddProject = (categoryLastIndex, project) => {
        setCategoryLastIndex(categoryLastIndex);
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    //===================PROJECT VIEWER===================//

    //===================================END PROJECT CRUD PRINCIPAL METHODE===================================//
    const handleDeleteProject = (event, projectId, categoryId) => {
        event.preventDefault();
        const updatedProjectDetailData = new ProjectDetailData([
            ...projectDetailData.categories,
        ]);
        updatedProjectDetailData.deleteProject(projectId, categoryId);
        setProjectDetailData(updatedProjectDetailData);
    };

    const handleSaveProject = (project, categoryLastIndex, categoryId) => {
        const updatedProjectDetailData = new ProjectDetailData([
            ...projectDetailData.categories,
        ]);

        if (project.id > categoryLastIndex) {
            // Ajouter un nouveau projet
            const finalProjectDetailData =
                updatedProjectDetailData.addProjectToCategory(project, categoryId);
            setProjectDetailData(finalProjectDetailData); // Mettre à jour le state avec la nouvelle version des données
        } else {
            console.log(categoryId);
            // Mettre à jour un projet existant dans la catégorie
            const finalProjectDetailData = updatedProjectDetailData.updateProjectInCategory(project, categoryId);
            if (finalProjectDetailData) {
                try {
                    setProjectDetailData(finalProjectDetailData);
                    toast({
                        title: "Réussi",
                        description: "Projet mis à jour avec succès.",
                        type: "success",
                    });
                } catch (e) {
                    toast({
                        title: "Erreur",
                        description: "Une erreur est survenue lors de la mise à jour.",
                        type: "error",
                    });
                }
            }
        }
    };
    //===================================END PROJECT CRUD PRINCIPAL METHODE===================================//

    //===================================END PROJECT CRUD===================================//


    //===================================PROJECT-DETAILS CRUD===================================//
    //   const handleAddingNewImagesSrcInProjectDetails = (ImaFileName, project)
    const handleViewProjectDetails = (project, categoryId) => {
        setSlectedCategoryForAddingSrcImages(categoryId)
        setSelectedProject(project);
        setIsDetailModalOpen(true);
    };


    const handleSaveAddedSrcImages = (projectUpdated, categoryId) => {
        const updatedProjectDetailData = new ProjectDetailData([
            ...projectDetailData.categories,
        ]);

        const updatedSrcImages = [...projectUpdated.details.src_images];

        const updatedProject = {
            ...projectUpdated,
            details: {
                ...projectUpdated.details,
                src_images: updatedSrcImages
            }
        };

        updatedProjectDetailData.updateProjectInCategory(updatedProject, categoryId);

        console.log('Nouvelles images du projet:', updatedProject.details.src_images);
        setProjectDetailData(updatedProjectDetailData);
        console.log("Les images détail su projet ont été enregistreé")


    };

    //===================================PROJECT-DETAILS CRUD===================================//





    //===================================CATEGORY CRUD===================================//

    const handleCreateCategory = (categoryName) => {
        setIsCategoryModalOpen(true);
        if (!categoryName || categoryName.trim() === "") {
            return;
        }
        const updatedProjectDetailData = new ProjectDetailData([
            ...projectDetailData.categories,
        ]);
        const lastElement =
            updatedProjectDetailData.categories[
            updatedProjectDetailData.categories.length - 1
                ];
        const category = {
            id: lastElement ? parseInt(lastElement.id) + 1 : 1,
            title: categoryName,
            projects: [],
        };
        updatedProjectDetailData.addCategory(category);
        setProjectDetailData(updatedProjectDetailData);
    };

    const handleDeleteCategory = (categoryId) => {
        const updatedProjectDetailData = new ProjectDetailData([
            ...projectDetailData.categories,
        ]);
        updatedProjectDetailData.deleteCategory(categoryId);
        updatedProjectDetailData.categories =
            updatedProjectDetailData.categories.map((category, index) => ({
                ...category,
                id: index + 1,
            }));
        setProjectDetailData(updatedProjectDetailData);
        return updatedProjectDetailData;
    };

    const handleUpdateCategoryTrigger = (categoryId) => {
        setCategoryInfosIsChanging(categoryId);
    };
    const handleUpdateCategory = (categoryId, newId, newName) => {
        let updatedCategories = [...projectDetailData.categories];

        if (newId) {
            updatedCategories = handleUpdateCategoryId(
                updatedCategories,
                categoryId,
                newId
            );
        }

        if (newName) {
            updatedCategories = handleUpdateCategoryName(
                updatedCategories,
                categoryId,
                newName
            );
        }

        const updatedProjectDetailData = new ProjectDetailData(updatedCategories);

        setProjectDetailData(updatedProjectDetailData);

        setCategoryUpdatingData({});
        setCategoryInfosIsChanging(null);
    };

    const handleUpdateCategoryName = (updatedCategories, categoryId, newName) => {
        return updatedCategories.map((category) => {
            if (category.id === categoryId) {
                return {...category, title: newName}; // Mise à jour du nom
            }
            return category;
        });
    };

    const handleUpdateCategoryId = (updatedCategories, categoryId, newId) => {
        const categoryToUpdate = updatedCategories.find(
            (category) => category.id === categoryId
        );

        if (!categoryToUpdate) {
            console.error("Catégorie non trouvée");
            return updatedCategories;
        }

        updatedCategories = updatedCategories.filter(
            (category) => category.id !== categoryId
        );
        updatedCategories.splice(newId - 1, 0, {...categoryToUpdate, id: newId});

        updatedCategories = updatedCategories.map((category, index) => ({
            ...category,
            id: index + 1, // Les ID doivent être consécutifs
        }));

        return updatedCategories;
    };

    //===================================CATEGORY CRUD===================================//

    //===================================FINAL-SAVING===================================//

    const handleSaveAll = async () => {
        setIsAllDataIsSavingLoading(true);
        try {
            await addProjectDetailData(projectDetailData);
            toast({
                title: "Succès",
                description: "Tous les projets ont été sauvegardés avec succès.",
                type: "success",
            });
        } catch (error) {
            toast({
                title: "Erreur",
                description: "Une erreur est survenue lors de la sauvegarde.",
                type: "error",
            });
        } finally {
            setIsAllDataIsSavingLoading(false);
        }
    };
    //===================================FINAL-SAVING===================================//


    //***************************************************COMPONANT ProjectManage*****************************************************//
    return (
        <div className="mt-24 min-h-screen flex flex-col items-center justify-center bg-background_primary">
            <div className="max-w-4xl w-full border-2 border-gray-200 rounded-lg shadow-xl p-6 bg-white">
                <h1 className="text-3xl font-bold mb-6 text-center text-texte_secondary">
                    Gestion des Projets
                </h1>

                {projectDetailData.categories.length > 0 ? (
                    <ul className="space-y-8">
                        {projectDetailData.categories
                            .sort((a, b) => a.id - b.id)
                            .map((category) => (
                                <li
                                    key={category.id}
                                    className="shadow-md rounded-lg overflow-hidden bg-gray-50 transition-transform transform hover:scale-105"
                                >
                                    {categoryInfosIsChanging === category.id ? (
                                        <form
                                            className="flex flex-col md:flex-row lg:flex-row justify-between gap-2 items-center p-4"
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                handleUpdateCategory(
                                                    category.id,
                                                    categoryUpdatingData.id,
                                                    categoryUpdatingData.title
                                                );
                                                setCategoryUpdatingData({id: "", title: ""});
                                                setCategoryInfosIsChanging(null);
                                            }}
                                        >
                                            {/* Input pour modifier le titre de la catégorie */}
                                            <input
                                                type="text"
                                                className="text-2xl font-semibold text-texte_secondary"
                                                placeholder={category.title}
                                                value={categoryUpdatingData.title}
                                                onChange={(e) =>
                                                    setCategoryUpdatingData({
                                                        ...categoryUpdatingData,
                                                        title: e.target.value,
                                                    })
                                                }
                                                // onChange={handleInputCategoryChange} // Mettez à jour le titre de la catégorie
                                            />

                                            {/* Input pour modifier l'ID de la catégorie */}
                                            <input
                                                type="number"
                                                className="text-2xl font-semibold text-texte_secondary"
                                                placeholder={category.id}
                                                value={categoryUpdatingData.id}
                                                // onChange={handleInputCategoryChange} // Mettez à jour l'ID de la catégorie
                                                onChange={(e) =>
                                                    setCategoryUpdatingData({
                                                        ...categoryUpdatingData,
                                                        id: e.target.value,
                                                    })
                                                }
                                            />

                                            {/* Boutons de validation et annulation */}
                                            <div className="flex flex-row gap-3 items-center justify-center">
                                                <button
                                                    onClick={() => setCategoryInfosIsChanging(null)}
                                                    className="custom-btn-project-no"
                                                >
                                                    <FaX/>
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="custom-btn-project-serv"
                                                >
                                                    <FaCheck/>
                                                </button>
                                            </div>
                                        </form>
                                    ) : (
                                        <div className="flex justify-between items-center p-4">
                                            <h2 className="text-2xl font-semibold text-texte_secondary">
                                                {category.title}
                                            </h2>
                                            <div className="flex flex-row gap-3 items-center justify-center">
                                                <button
                                                    onClick={() => handleDeleteCategory(category.id)}
                                                    className="custom-btn"
                                                >
                                                    <FaTrash/>
                                                </button>


                                                <button
                                                    onClick={() => {
                                                        console.log("Category on Click is :", category);
                                                        setCategoryIdProject(category.id); // Vérifie que la catégorie existe et contient un id
                                                        handleAddProject(
                                                            category.projects.length,
                                                            {
                                                                id: category.projects.length + 1,
                                                                images: {
                                                                    src_principal_image: "",
                                                                    src_image_on_hover: "",
                                                                },
                                                                pinned: false,
                                                                details: {
                                                                    src_images: [],
                                                                },
                                                            }
                                                        );
                                                    }}
                                                    className="custom-btn"
                                                >
                                                    <FaPlus/>
                                                </button>

                                                <button
                                                    onClick={() =>
                                                        handleUpdateCategoryTrigger(category.id)
                                                    }
                                                    className="custom-btn"
                                                >
                                                    <FaPencilAlt/>
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                                        {category.projects.map((project) => {
                                            return (
                                                <li
                                                    key={project.id}
                                                    className="w-auto rounded-lg shadow-lg bg-white p-4 flex flex-col justify-center items-start"
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
                                                    {project.pinned ? (
                                                        <FaThumbtack className="text-blue-500"/>
                                                    ) : (
                                                        ''
                                                    )}
                                                    <div
                                                        className=" flex flex-row items-center justify-between gap-2 mt-4">
                                                        <button
                                                            onClick={() => {
                                                                setCategoryIdProject(category.id); // To set the
                                                                handleEditProject(project, category.id, category.projects.length)
                                                            }
                                                            }
                                                            className="custom-btn-project-serv"
                                                        >
                                                            Update
                                                        </button>
                                                        <button
                                                            onClick={() => handleViewProjectDetails(project, category.id)}
                                                            className="custom-btn"
                                                        >
                                                            Show
                                                        </button>
                                                        <button
                                                            onClick={(event) =>
                                                                handleDeleteProject(
                                                                    event,
                                                                    project.id,
                                                                    category.id
                                                                )
                                                            }
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
                <div className="flex flex-col gap-4 justify-center items-center">
                    <button
                        onClick={() => handleCreateCategory()}
                        className="mt-8 custom-btn-project-serv"
                    >
                        <FaPlus/>
                    </button>


                    <button
                        onClick={handleSaveAll}
                        className="mt-8 font-ubuntu custom-btn-project-serv"
                        disabled={isAllDataIsSavingLoading}
                    >
                        {isAllDataIsSavingLoading ? (
                            <div
                                className="cursor-pointer inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-green-600 border-r-transparent"></div>
                        ) : (
                            "End and Save"
                        )}
                    </button>
                </div>
            </div>

            {/* Modal de Détails du Projet */}
            <ProjectDetailModal
                project={selectedProject}
                onSave={handleSaveAddedSrcImages}
                onClose={() => setIsDetailModalOpen(false)}
                isOpen={isDetailModalOpen}
                categoryId={selectedCategoryForAddingSrcImages}

            />
            <GoBackBtn/>

            {/*<div className="fixed bottom-4 left-4 flex flex-row items-center justify-end ml-4">*/}
            {/*  <button*/}
            {/*    // A la page précédente*/}
            {/*    onClick={""}*/}
            {/*    className="mt-4 px-4 py-2 font-ubuntu text-xl bg-red-500 text-backgroung_secondary rounded hover:text-red-500 hover:bg-backgroung_secondary hover:border-2 hover:border-red-500"*/}
            {/*  >*/}
            {/*    Vider tout*/}
            {/*  </button>*/}
            {/*</div>*/}

            {/* Modal de Modification du Projet */}
            <ProjectModal
                project={selectedProject}
                onSave={handleSaveProject}
                onClose={() => setIsModalOpen(false)}
                isOpen={isModalOpen}
                categoryId={categoryIdProject}
                categoryLastIndex={categoryLastIndex}
            />

            <CategoryModal
                isOpen={isCategoryModalOpen}
                onClose={() => setIsCategoryModalOpen(false)}
                saveCategoryCreated={handleCreateCategory}
            />
        </div>
    );
};

export default ProjectManagePage;