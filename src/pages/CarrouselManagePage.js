// import React, { useEffect, useState } from "react";
// import { FaTrash, FaPlus } from "react-icons/fa";
// import {
//   getCarrouselData,
//   saveCarrouselData,
//   deleteCarrouselImage,
// } from "../services/carrouselService";
// import { getCurrentUserId } from "../services/userService";
// import GoBackBtn from "src/components/GoBackBtn";

// const CarrouselManagePage = () => {
//   const [images, setImages] = useState([]); // Liste des URLs des images
//   const [selectedImage, setSelectedImage] = useState(null); // Image sélectionnée pour l'upload
//   const [isModalOpen, setIsModalOpen] = useState(false); // État pour gérer le modal
//   const userId = getCurrentUserId(); // ID de l'utilisateur connecté

//   useEffect(() => {
//     const fetchCarrouselData = async () => {
//       const allCarrousel = await getCarrouselData(userId); // Récupère les données du carrousel
//       if (allCarrousel && allCarrousel.images) {
//         setImages(allCarrousel.images); // Met à jour les images avec le tableau récupéré
//       }
//     };
//     fetchCarrouselData();
//   }, [userId]);

//   // Fonction pour gérer le changement d'image (upload)
//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedImage(file); // Définit l'image sélectionnée pour l'upload
//       setIsModalOpen(false); // Ferme le modal après avoir sélectionné une image
//     }
//   };

//   const handleSaveImage = async () => {
//     if (selectedImage) {
//       // Sauvegarde l'image dans Firestore et récupère la liste des images mise à jour
//       const updatedImageList = await saveCarrouselData(userId, selectedImage);
//       setImages(updatedImageList); // Met à jour la liste des images dans l'état
//       setSelectedImage(null); // Réinitialise l'image sélectionnée
//     }
//   };

//   // Fonction pour supprimer une image
//   const handleDeleteImage = async (imageUrl) => {
//     const updatedImageList = await deleteCarrouselImage(userId, imageUrl); // Supprime l'image
//     setImages(updatedImageList); // Met à jour la liste des images après suppression
//   };

//   return (
//     <div className="w-screen h-screen flex flex-col items-center justify-center mt-28">
//       <div className="border-2 border-blue-500 w-1/2 h-auto flex flex-col items-center justify-center">
//         <h1 className="text-2xl font-ubuntu">Liste des images du carrousel</h1>

//         {/* Liste des images dans le carrousel */}
//         <div className="mt-4">
//           {images.length > 0 ? (
//             images.map((imageUrl, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-between w-full mb-2"
//               >
//                 <img
//                   src={imageUrl}
//                   alt={`Carrousel ${index}`}
//                   className="w-32 h-32 object-cover rounded-md"
//                 />
//                 <button
//                   onClick={() => handleDeleteImage(imageUrl)} // Supprimer l'image
//                   className="bg-red-500 text-white p-2 rounded-md"
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p>Aucune image dans le carrousel pour l'instant.</p>
//           )}
//         </div>

//         {/* Prévisualisation de l'image sélectionnée en bas de la liste */}
//         {selectedImage && (
//           <div className="mt-4">
//             <img
//               className="w-32 h-32 object-cover rounded-md mb-4"
//               alt={selectedImage.name}
//               src={URL.createObjectURL(selectedImage)} // Prévisualisation de l'image
//             />
//             <button
//               onClick={handleSaveImage}
//               className="custom-btn bg-blue-500 text-white rounded-md px-4 py-2"
//             >
//               Sauvegarder l'image <FaPlus />
//             </button>
//           </div>
//         )}

//         {/* Bouton pour ouvrir le modal */}
//         <button
//           className="custom-btn bg-green-500 text-white rounded-md px-4 py-2 mt-4"
//           onClick={() => setIsModalOpen(true)}
//         >
//           Ajouter une image <FaPlus />
//         </button>
//       </div>

//       {/* Modal d'import d'image */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg">
//             <h2 className="text-lg font-bold mb-4">Importer une image</h2>
//             <input type="file" onChange={handleImageChange} />
//             <button
//               className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
//               onClick={() => setIsModalOpen(false)}
//             >
//               Annuler
//             </button>
//           </div>
//         </div>
//       )}
//       <GoBackBtn />
//     </div>
//   );
// };

// export default CarrouselManagePage;












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
      const updatedImageList = await saveCarrouselData(userId, selectedImage);
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
        <h1 className="text-3xl font-semibold text-gray-700 mb-6">Gérer le carrousel</h1>

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
            <p className="text-center col-span-full text-gray-500">Aucune image pour l'instant.</p>
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
              className={`custom-btn-project-serv${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Sauvegarde..." : "Sauvegarder l'image"}
              {!isLoading && <FaPlus />}
            </button>
          </div>
        )}

        {/* Bouton d'ajout */}
        <button
          className="custom-btn-project-serv"
          onClick={() => setIsModalOpen(true)}
        >
          Ajout image <FaPlus />
        </button>
      </div>

      {/* Modal d'import d'image */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96 transition-transform transform scale-95">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Importer une image</h2>
            <input type="file" onChange={handleImageChange} className="w-full mb-4" />
            <div className="flex justify-end gap-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-all"
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
