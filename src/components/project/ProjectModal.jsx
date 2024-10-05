import React, {useState, useEffect} from "react";

import {
    uploadImageToStorage,
} from "../../services/projectDetailService";


const ProjectModal = ({
                          project,
                          onSave,
                          onClose,
                          isOpen,
                          categoryId,
                          categoryLastIndex,
                      }) => {
    // État pour les données du formulaire
    const [formData, setFormData] = useState(() => ({
        ...project,
        pinned: project?.pinned ?? false,
        images: {
            src_principal_image: project?.images?.src_principal_image || "",
            src_image_on_hover: project?.images?.src_image_on_hover || "",
        },
        details: {
            src_images: project?.details?.src_images || [],
        },
    }));

    const [categoryIdConcerned, setCategoryIdConcerned] = useState(categoryId);
    const [categoryLastIndexConcerned, setCategoryLastIndexConcerned] = useState(
        categoryLastIndex
    );
    const [previewImages, setPreviewImages] = useState({
        src_principal_image: project?.images?.src_principal_image || "",
        src_image_on_hover: project?.images?.src_image_on_hover || "",
    });

    useEffect(() => {
        if (project) {
            setFormData({
                ...project,
                pinned: project?.pinned ?? false,
                images: {
                    src_principal_image: project?.images?.src_principal_image || "",
                    src_image_on_hover: project?.images?.src_image_on_hover || "",
                },
                details: {
                    src_images: project?.details?.src_images || [],
                },
            });
            setCategoryIdConcerned(categoryId);
            setCategoryLastIndexConcerned(categoryLastIndex);
            setPreviewImages({
                src_principal_image: project?.images?.src_principal_image || "",
                src_image_on_hover: project?.images?.src_image_on_hover || "",
            });
        }
    }, [project, categoryId, categoryLastIndex]);


    const handleImageChange = async (e) => {
        const {name, files} = e.target;
        if (files && files[0]) {
            const file = files[0];

            // Validation de la taille de fichier (par exemple, 5 Mo maximum)
            if (file.size > 5000000) {
                alert("Le fichier est trop volumineux !");
                return;
            }

            const newPreviewURL = await uploadImageToStorage(file); // Fonction d'upload
            setPreviewImages((prev) => ({
                ...prev,
                [name]: newPreviewURL,
            }));

            setFormData((prev) => ({
                ...prev,
                images: {
                    ...prev.images,
                    [name]: newPreviewURL,
                },
            }));
        }
    };

    // Sauvegarde des données
    const handleSave = (e) => {
        e.preventDefault();

        const updatedFormData = {
            ...formData,
            details: {
                ...formData.details,
            },
        };

        console.log("Données du formulaire avant enregistrement:", updatedFormData);
        onSave(updatedFormData, categoryLastIndexConcerned, categoryIdConcerned);

        // Réinitialiser les données après sauvegarde
        setFormData({
            id: 0,
            pinned: false,
            images: {
                src_principal_image: "",
                src_image_on_hover: "",
            },
            details: {
                src_images: [],
            },
        });

        onClose();
    };

    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">
                    {formData.id > categoryLastIndexConcerned
                        ? "Créer un"
                        : "Modifier ce"}{" "}
                    Projet
                </h2>

                <div className="mb-4">
                    <h2 className="font-ubuntu text-lg font-bold">ID : {formData.id}</h2>

                    {/* Case à cocher stylisée */}
                    <div className="mb-4 flex items-center space-x-4">
                        <label htmlFor="pinned" className="font-ubuntu text-gray-700 text-sm">
                            Épingler le projet
                        </label>
                        <input
                            id="pinned"
                            type="checkbox"
                            checked={formData.pinned}
                            onChange={(e) =>
                                setFormData({...formData, pinned: e.target.checked})
                            }
                            className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                            aria-checked={formData.pinned}
                        />
                    </div>

                    {/* Gestion de l'image principale */}
                    <label className="font-ubuntu text-gray-700">Image Principale</label>
                    <input
                        type="file"
                        name="src_principal_image"
                        onChange={handleImageChange}
                        className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                    {previewImages.src_principal_image && (
                        <img
                            src={previewImages.src_principal_image}
                            alt="Aperçu"
                            className="mt-2 w-full h-20 object-cover rounded-md shadow"
                        />
                    )}
                </div>

                {/* Gestion de l'image au survol */}
                <div className="mb-4">
                    <label className="font-ubuntu">Image sur Survol</label>
                    <input
                        type="file"
                        name="src_image_on_hover"
                        onChange={handleImageChange}
                        className="border p-2 w-full"
                    />
                    {previewImages.src_image_on_hover && (
                        <img
                            src={previewImages.src_image_on_hover}
                            alt="Aperçu"
                            className="mt-2 w-full h-20 object-cover rounded-md"
                        />
                    )}
                </div>

                {/* Boutons pour confirmer ou annuler */}
                <div className="flex flex-row justify-between items-center">
                    <button onClick={handleSave} className="custom-btn-project-serv">
                        {formData.id > categoryLastIndexConcerned ? "Créer" : "Confirmer"}
                    </button>
                    <button onClick={onClose} className="custom-btn">
                        Annuler
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal