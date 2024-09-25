import React, { useEffect, useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";
import {
  getCarrouselData,
  saveCarrouselData,
  deleteCarrouselImage,
} from "../services/carrouselService";
import { getCurrentUserId } from "../services/userService";
import GoBackBtn from "src/components/GoBackBtn";

const CarrouselManagePage = () => {
  const [images, setImages] = useState([]); // Liste des URLs des images
  const [selectedImage, setSelectedImage] = useState(null); // Image sélectionnée pour l'upload
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour gérer le modal
  const userId = getCurrentUserId(); // ID de l'utilisateur connecté

  useEffect(() => {
    const fetchCarrouselData = async () => {
      const allCarrousel = await getCarrouselData(userId); // Récupère les données du carrousel
      if (allCarrousel && allCarrousel.images) {
        setImages(allCarrousel.images); // Met à jour les images avec le tableau récupéré
      }
    };
    fetchCarrouselData();
  }, [userId]);

  // Fonction pour gérer le changement d'image (upload)
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file); // Définit l'image sélectionnée pour l'upload
      setIsModalOpen(false); // Ferme le modal après avoir sélectionné une image
    }
  };

  const handleSaveImage = async () => {
    if (selectedImage) {
      // Sauvegarde l'image dans Firestore et récupère la liste des images mise à jour
      const updatedImageList = await saveCarrouselData(userId, selectedImage);
      setImages(updatedImageList); // Met à jour la liste des images dans l'état
      setSelectedImage(null); // Réinitialise l'image sélectionnée
    }
  };

  // Fonction pour supprimer une image
  const handleDeleteImage = async (imageUrl) => {
    const updatedImageList = await deleteCarrouselImage(userId, imageUrl); // Supprime l'image
    setImages(updatedImageList); // Met à jour la liste des images après suppression
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center mt-28">
      <div className="border-2 border-blue-500 w-1/2 h-auto flex flex-col items-center justify-center">
        <h1 className="text-2xl font-ubuntu">Liste des images du carrousel</h1>

        {/* Liste des images dans le carrousel */}
        <div className="mt-4">
          {images.length > 0 ? (
            images.map((imageUrl, index) => (
              <div
                key={index}
                className="flex items-center justify-between w-full mb-2"
              >
                <img
                  src={imageUrl}
                  alt={`Carrousel ${index}`}
                  className="w-32 h-32 object-cover rounded-md"
                />
                <button
                  onClick={() => handleDeleteImage(imageUrl)} // Supprimer l'image
                  className="bg-red-500 text-white p-2 rounded-md"
                >
                  <FaTrash />
                </button>
              </div>
            ))
          ) : (
            <p>Aucune image dans le carrousel pour l'instant.</p>
          )}
        </div>

        {/* Prévisualisation de l'image sélectionnée en bas de la liste */}
        {selectedImage && (
          <div className="mt-4">
            <img
              className="w-32 h-32 object-cover rounded-md mb-4"
              alt={selectedImage.name}
              src={URL.createObjectURL(selectedImage)} // Prévisualisation de l'image
            />
            <button
              onClick={handleSaveImage}
              className="custom-btn bg-blue-500 text-white rounded-md px-4 py-2"
            >
              Sauvegarder l'image <FaPlus />
            </button>
          </div>
        )}

        {/* Bouton pour ouvrir le modal */}
        <button
          className="custom-btn bg-green-500 text-white rounded-md px-4 py-2 mt-4"
          onClick={() => setIsModalOpen(true)}
        >
          Ajouter une image <FaPlus />
        </button>
      </div>

      {/* Modal d'import d'image */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Importer une image</h2>
            <input type="file" onChange={handleImageChange} />
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
              onClick={() => setIsModalOpen(false)}
            >
              Annuler
            </button>
          </div>
        </div>
      )}
      <GoBackBtn />
    </div>
  );
};

export default CarrouselManagePage;
