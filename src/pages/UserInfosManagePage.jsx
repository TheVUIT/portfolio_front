
import React, { useEffect, useState } from "react";
import { getUserData, saveUserData, getCurrentUserId } from "../services/userService";
import GoBackBtn from "src/components/GoBackBtn";

const UserInfosManagePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [imageFiles, setImageFiles] = useState({}); // Stocker temporairement les fichiers image

  const [userId, setUserId] = useState("")


  useEffect(() => {
    const fetchData = async () => {
      setUserId(getCurrentUserId())
      const user = await getUserData(getCurrentUserId());
      if (user) {
        setUserData(user);
        setFormData(user);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e, fieldType) => {
    const file = e.target.files[0];
    if (file) {
      setImageFiles((prevFiles) => ({
        ...prevFiles,
        [fieldType]: file, // Stocker temporairement l'image
      }));
      const imageURL = URL.createObjectURL(file); // Aperçu local de l'image
      setFormData((prevData) => ({
        ...prevData,
        [fieldType]: imageURL, // Mettre à jour l'aperçu local
      }));
    }
  };

  const handleSave = async () => {
    setLoading(true);
    const userId = getCurrentUserId();
    const updatedFormData = { ...formData };

    try {
      await saveUserData(userId, updatedFormData, imageFiles.logo, imageFiles.aboutImage);
      alert("Données enregistrées avec succès !");
    } catch (error) {
      console.error("Error saving user data: ", error);
      alert("Une erreur s'est produite lors de l'enregistrement.");
    } finally {
      setLoading(false);
    }
  };

  const renderInputFields = () => {
    return Object.keys(userData).map((key) => {
      const value = formData[key] || ""; // Valeur par défaut vide si pas encore définie
      const isImageField = key === "logo" || key === "aboutImage";

      return (
        <div key={key} className="flex flex-col items-start mb-6 w-full max-w-md">
          <label className="block font-bold text-lg mb-2">
            {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
          </label>
          <div className="w-full border-2 border-texte_secondary rounded-xl bg-white shadow-lg p-4">
            {isImageField ? (
              <>
                <input
                  id={`${key}-file-upload`}
                  type="file"
                  onChange={(e) => handleImageChange(e, key)}
                  className="hidden"
                />
                <label
                  htmlFor={`${key}-file-upload`}
                  className="cursor-pointer inline-flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-700 transition duration-200 mb-2"
                >
                  Sélectionner une image
                </label>
                {formData[key] && (
                  <img
                    className="w-full h-32 object-cover rounded-md mb-4"
                    alt={key}
                    src={formData[key]}
                  />
                )}
              </>
            ) : (
              <textarea
                name={key}
                value={value}
                onChange={handleInputChange}
                placeholder={`Entrez votre ${key}`}
                rows="4"
                className="w-full h-32 p-2 border rounded-md placeholder-gray-400 focus:outline-none resize-none overflow-y-auto mb-4" // Utilisez overflow-y-auto pour le défilement vertical
              />
            )}
          </div>
          <small className="text-gray-500">Saisissez vos {key}</small>
        </div>
      );
    });
  };



  return (
    <div className="mt-20 flex flex-col justify-center items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-8">Gestion des informations utilisateur</h1>
      <div className="w-full max-w-xl flex flex-col justify-center items-center">
        {userData ? (
          <>
            {renderInputFields()}
            <div className="flex justify-center mb-4">
              <button
                onClick={handleSave}
                className="px-4 py-2 font-bold text-white bg-green-500 rounded-md hover:bg-green-700 transition duration-200"
              >
                {loading ? "Enregistrement..." : "Enregistrer"}
              </button>
            </div>
            <GoBackBtn />
          </>
        ) : (
          <div>
              <div className="text-red-500">Aucun profil trouvé pour cette ID {userId}</div>
              <GoBackBtn/>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfosManagePage;
