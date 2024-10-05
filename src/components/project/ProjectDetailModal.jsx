import React, { useState, useEffect } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";
import { uploadImageToStorage } from "../../services/projectDetailService";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {useToast} from "../../hooks/use-toast";

const ProjectDetailModal = ({ project, onSave, onClose, isOpen, categoryId }) => {
  const {toast} = useToast()



  const [formData, setFormData] = useState({
    ...project,
    details : {
      src_images: project?.details?.src_images || []
    }
  });
  const [loading, setLoading] = useState(false);
  const [loadingSave, setLoadingSave] = useState(false); // Loader pour la sauvegarde

  useEffect(() => {
    if (project) {
      setFormData({
        ...project,
        details : {
          src_images: project?.details?.src_images || []
        }
      });
    }
  }, [project]);

  const handleRemoveImageLink = (index) => {
    const updatedList = formData.details.src_images.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      details : {
        src_images: updatedList
      }
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true); // Loader pour l'upload d'image
      try {
        const imageUrl = await uploadImageToStorage(file);
        const updatedListByAddingNewImage = [...formData.details.src_images, imageUrl];

        setFormData({
          ...formData,
          details : {
            src_images: updatedListByAddingNewImage
          }
        });

      } catch (error) {
        console.error("Erreur lors de l'upload de l'image:", error);
      } finally {
        setLoading(false); // Fin du loader pour l'upload
      }
    }
  };

  const handleSave = async () => {
    setLoadingSave(true); // Démarre le loader de sauvegarde
    try {
      onSave(formData, categoryId);
      toast({
        title: "Succès",
        description: "Image ajouté au projet avec succès",
        type: "success",
      });
      console.log("Données sauvegardées : ", formData);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingSave(false);
      onClose()
    }
  };

  if (!isOpen || !project) return null;

  return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="mt-24 bg-white p-6 rounded-lg shadow-lg max-w-lg w-1/2 md:w-full">
          <h2 className="text-xl font-semibold mb-4">
            Détails du Projet {project.id}
          </h2>

          {/* Affichage des images */}
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {formData.details.src_images.map((image, index) => (
                <div key={index} className="relative group">
                  <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="w-full h-25 md:h-30 lg:h-40 object-cover rounded-md mb-2"
                  />
                  <button
                      onClick={() => handleRemoveImageLink(index)}
                      className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <FaTrash />
                  </button>
                </div>
            ))}
          </div>

          <div className="flex flex-row gap-3 items-center justify-center">
            <button onClick={handleSave} className="custom-btn" disabled={loadingSave}>
              {loadingSave ? <AiOutlineLoading3Quarters className="animate-spin mr-2" /> : "Sauvegarder"}
            </button>
            <button onClick={onClose} className="custom-btn" disabled={loadingSave}>
              Fermer
            </button>

            <div className="relative group">
              <FaPlus className="text-xl text-texte_secondary group-hover:rotate-360 group-focus:rotate-360 transition-transform duration-500" />
              <input
                  type="file"
                  onChange={handleFileChange}
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>

          {/* Loader pendant l'upload d'image */}
          {loading && (
              <div className="flex justify-center mt-4">
                <AiOutlineLoading3Quarters className="animate-spin text-3xl text-blue-500" />
                <span className="font-ubuntu ml-2 text-sm text-gray-600">Chargement de l'image...</span>
              </div>
          )}
        </div>
      </div>
  );
};

export default ProjectDetailModal;
