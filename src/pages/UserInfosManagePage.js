
import React, { useEffect, useState } from "react";
import { getUserData, saveUserData } from "../services/userService";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebase";
import ImageUpload from "../components/ImageUpload";
import GoBackBtn from "src/components/GoBackBtn";
import Loading from "src/components/Loading";

const UserInfosManagePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUserData("qkwBuoEernVFsBDq7bqFrTwa0ru1");
      if (user) {
        setUserData(user);
        setFormData(user); // Initialiser les données du formulaire avec userData
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

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true);
      const userId = "qkwBuoEernVFsBDq7bqFrTwa0ru1"; // Assurez-vous que l'ID utilisateur est correct
      const imageRef = ref(storage, `logos/${userId}/${file.name}`);
      try {
        await uploadBytes(imageRef, file);
        const imageURL = await getDownloadURL(imageRef);
        setFormData((prevData) => ({
          ...prevData,
          logo: imageURL,
        }));
      } catch (error) {
        console.error("Error uploading image: ", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSave = async () => {
    const userId = "qkwBuoEernVFsBDq7bqFrTwa0ru1"; // Assurez-vous que l'ID utilisateur est correct
    await saveUserData(userId, formData);
  };

  const renderInputFields = () => {
    return Object.keys(userData).map((key) => {
      const value = formData[key] || ""; // Valeur par défaut vide si pas encore défini
      const isImageField = key === "logo" || key === "aboutImage";

      return (
        <div className="flex flex-col justify-center items-center">
          <div key={key} className="mb-4">
            <label className="block font-medium mb-1">
              {key.charAt(0).toUpperCase() +
                key.slice(1).replace(/([A-Z])/g, " $1")}
            </label>
            {isImageField ? (
              <>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="mb-2"
                />
                {/* <ImageUpload 
                  alt = {key}
                  onChange = {handleImageChange}
                  src = {formData[key]}
                  /> */}
                {loading ? (
                  <Loading />
                ) : (
                  <img
                    className="w-32 h-32 object-cover rounded-md"
                    alt={key}
                    src={formData[key]}
                  />
                  // <ImageUpload
                  // alt = {key}
                  // src = {formData[key]}
                  // />
                )}
              </>
            ) : (
              <input
                type="text"
                name={key}
                value={value}
                onChange={handleInputChange}
                placeholder={key}
                className="p-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <div>
            {renderInputFields()}

            <button
              onClick={handleSave}
              className="mt-4 p-2 bg- text-white rounded"
            >
              Save
            </button>
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
