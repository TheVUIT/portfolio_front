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
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const userId = getCurrentUserId();

  useEffect(() => {
    const fetchCarrouselData = async () => {
      const allCarrousel = await getCarrouselData(userId);
      if (allCarrousel && allCarrousel.images) {
        setImages(allCarrousel.images);
      }
    };
    fetchCarrouselData();
  }, [userId]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setIsModalOpen(false);
    }
  };

  const handleSaveImage = async () => {
    if (selectedImage) {
      setIsLoading(true);
      const updatedImageList = await saveCarrouselData(selectedImage);
      setImages(updatedImageList);
      setSelectedImage(null);
      setIsLoading(false);
    }
  };

  const handleDeleteImage = async (imageUrl) => {
    const updatedImageList = await deleteCarrouselImage(userId, imageUrl);
    setImages(updatedImageList);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h1 className="text-3xl font-semibold text-gray-700 mb-6">
          Gérer le carrousel
        </h1>

        {/* Liste des images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.length > 0 ? (
            images.map((imageUrl, index) => (
              <div key={index} className="relative group">
                <img
                  src={imageUrl}
                  alt={`Carrousel ${index}`}
                  className="w-full h-48 object-cover rounded-md shadow-md"
                />
                <button
                  onClick={() => handleDeleteImage(imageUrl)}
                  className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <FaTrash />
                </button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              Aucune image pour l'instant.
            </p>
          )}
        </div>

        {/* Ajout d'une image */}
        {selectedImage && (
          <div className="mt-6 flex flex-col items-center">
            <img
              className="w-32 h-32 object-cover rounded-md mb-4 shadow-md"
              alt={selectedImage.name}
              src={URL.createObjectURL(selectedImage)}
            />
            <button
              onClick={handleSaveImage}
              className={`custom-btn-project-serv ${
                isLoading ? "custom-btn-project-serv opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
          </div>
        )}

        {/* Bouton d'ajout */}
        <button
          className="mt-4 custom-btn-project-serv"
          onClick={() => setIsModalOpen(true)}
        >
          <FaPlus />
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96 transition-transform transform scale-95">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Importer une image
            </h2>
            {/* <input type="file" onChange={handleImageChange} className="w-full mb-4" />
            <div className="flex justify-end gap-4">
              <button
                className="custom-btn"
                onClick={() => setIsModalOpen(false)}
              >
                Annuler
              </button>
            </div> */}
            <div className="w-full mb-4">
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center w-full h-48 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-blue-500 hover:bg-gray-100"
              >
                <svg
                  className="w-12 h-12 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 16l-4-4m0 0l4-4m-4 4h12"
                  />
                </svg>
                <span className="mt-2 text-sm text-gray-500">
                  Glissez et déposez votre image ici, ou cliquez pour
                  sélectionner un fichier
                </span>
                <input
                  id="file-upload"
                  type="file"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>

            <div className="flex justify-end gap-4">
              <button
                className="custom-btn"
                onClick={() => setIsModalOpen(false)}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      <GoBackBtn />
    </div>
  );
};

export default CarrouselManagePage;
