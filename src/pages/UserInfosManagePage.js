import React, { useEffect, useState } from "react";
import { getUserData, saveUserData,getCurrentUserId } from "../services/userService";
import GoBackBtn from "src/components/GoBackBtn";

const UserInfosManagePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [imageFiles, setImageFiles] = useState({}); // Stocker temporairement les fichiers image

  useEffect(() => {
    const fetchData = async () => {
      // const user = await getUserData("qkwBuoEernVFsBDq7bqFrTwa0ru1");
      // const user = await getUserData("wQ7Zrq4pFnczp0MVtteVfPL4Sr02");
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
    // const userId = "qkwBuoEernVFsBDq7bqFrTwa0ru1"; 
    // const userId = "wQ7Zrq4pFnczp0MVtteVfPL4Sr02"; 
    const userId = getCurrentUserId();
    ; 
    const updatedFormData = { ...formData };

    try {
      await saveUserData(
        userId,
        updatedFormData, 
        imageFiles.logo, 
        imageFiles.aboutImage);
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
        <div key={key} className="w-full flex flex-col justify-center items-center">
          <div className="w-1/2 mb-4 border-2 border-blue-400 rounded-xl flex flex-col items-center justify-center">
            <label className="block font-ubuntu mb-1">
              {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
            </label>
            {isImageField ? (
              <>
                <div className="mb-2">
                  <input
                    id={`${key}-file-upload`} // Utilisation d'un id unique
                    type="file"
                    onChange={(e) => handleImageChange(e, key)} // Passe le type d'image ici
                    className="hidden"
                  />
                  <label
                    htmlFor={`${key}-file-upload`}
                    className="cursor-pointer flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-700 transition duration-200"
                  >
                    Sélectionner une image
                  </label>
                </div>
                <img
                  className="w-32 h-32 object-cover rounded-md"
                  alt={key}
                  src={formData[key]}
                />
              </>
            ) : (
              <textarea
                name={key}
                value={value}
                onChange={handleInputChange}
                placeholder={key}
                rows="5"
                className="w-auto p-2 border rounded-md placeholder-gray-400 focus:outline-none resize-none overflow-hidden"
                onInput={(e) => {
                  e.target.style.height = "auto"; 
                  e.target.style.height = `${e.target.scrollHeight}px`; 
                }}
              />
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div>
        {userData ? (
          <div className="mt-16 lg:mt-24">
            {renderInputFields()}
            <div className="fixed bottom-4 left-4 flex flex-row items-center justify-end ml-4">
              <button
                onClick={handleSave}
                className="mt-4 px-4 py-2 font-ubuntu text-xl bg-green-500 text-backgroung_secondary rounded hover:text-green-500 hover:bg-backgroung_secondary hover:border-2 hover:border-green-500"
              >
                {loading ? "Saving..." : "SAVE"}
              </button>
            </div>
            <GoBackBtn />
          </div>
        ) : (
          <div>Aucun profil trouvé pour cette ID</div>
        )}
      </div>
    </div>
  );
};

export default UserInfosManagePage;
