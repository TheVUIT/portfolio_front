// import React, { useEffect, useState } from "react";
// import { getUserData, saveUserData,getCurrentUserId } from "../services/userService";
// import GoBackBtn from "src/components/GoBackBtn";

// const UserInfosManagePage = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({});
//   const [imageFiles, setImageFiles] = useState({}); // Stocker temporairement les fichiers image

//   useEffect(() => {
//     const fetchData = async () => {
//       const user = await getUserData(getCurrentUserId());
      
//       if (user) {
//         setUserData(user);
//         setFormData(user); 
//       }
//     };
//     fetchData();
//   }, []);


  
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };


//   const handleImageChange = (e, fieldType) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFiles((prevFiles) => ({
//         ...prevFiles,
//         [fieldType]: file, // Stocker temporairement l'image
//       }));
//       const imageURL = URL.createObjectURL(file); // Aperçu local de l'image
//       setFormData((prevData) => ({
//         ...prevData,
//         [fieldType]: imageURL, // Mettre à jour l'aperçu local
//       }));
//     }
//   };

//   const handleSave = async () => {
//     setLoading(true);

//     const userId = getCurrentUserId();
//     ; 
//     const updatedFormData = { ...formData };

//     try {
//       await saveUserData(
//         userId,
//         updatedFormData, 
//         imageFiles.logo, 
//         imageFiles.aboutImage);
//       alert("Données enregistrées avec succès !");
//     } catch (error) {
//       console.error("Error saving user data: ", error);
//       alert("Une erreur s'est produite lors de l'enregistrement.");
//     } finally {
//       setLoading(false);
//     }
//   };



//   const renderInputFields = () => {
//     return Object.keys(userData).map((key) => {
//       const value = formData[key] || ""; // Valeur par défaut vide si pas encore définie
//       const isImageField = key === "logo" || key === "aboutImage";
  
//       return (
//         <div key={key} className="w-full flex flex-col justify-center items-center">
//           <div className="w-1/2 mb-4 border-2 border-blue-400 rounded-xl flex flex-col items-center justify-center">
//             <label className="block font-ubuntu mb-1">
//               {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
//             </label>
//             {isImageField ? (
//               <>
//                 <div className="mb-2">
//                   <input
//                     id={`${key}-file-upload`} // Utilisation d'un id unique
//                     type="file"
//                     onChange={(e) => handleImageChange(e, key)} // Passe le type d'image ici
//                     className="hidden"
//                   />
//                   <label
//                     htmlFor={`${key}-file-upload`}
//                     className="cursor-pointer flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-700 transition duration-200"
//                   >
//                     Sélectionner une image
//                   </label>
//                 </div>
//                 <img
//                   className="w-32 h-32 object-cover rounded-md mb-4"
//                   alt={key}
//                   src={formData[key]}
//                 />
//               </>
//             ) : (
//               <textarea
//                 name={key}
//                 value={value}
//                 onChange={handleInputChange}
//                 placeholder={key}
//                 rows="5"
//                 className="w-auto p-2 border rounded-md placeholder-gray-400 focus:outline-none resize-none overflow-hidden mb-4"
//                 onInput={(e) => {
//                   e.target.style.height = "auto"; 
//                   e.target.style.height = `${e.target.scrollHeight}px`; 
//                 }}
//               />
//             )}
//           </div>
//         </div>
//       );
//     });
//   };

//   return (
//     <div>
//       <div>
//         {userData ? (
//           <div className="mt-16 lg:mt-24">
//             {renderInputFields()}
//             <div className="fixed bottom-4 left-4 flex flex-row items-center justify-end ml-4">
//               <button
//                 onClick={handleSave}
//                 className="mt-4 px-4 py-2 font-ubuntu text-xl bg-green-500 text-backgroung_secondary rounded hover:text-green-500 hover:bg-backgroung_secondary hover:border-2 hover:border-green-500"
//               >
//                 {loading ? "Saving..." : "SAVE"}
//               </button>
//             </div>
//             <GoBackBtn />
//           </div>
//         ) : (
//           <div>Aucun profil trouvé pour cette ID</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserInfosManagePage;











// import React, { useEffect, useState } from "react";
// import { getUserData, saveUserData, getCurrentUserId } from "../services/userService";
// import GoBackBtn from "src/components/GoBackBtn";

// const UserInfosManagePage = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({});
//   const [imageFiles, setImageFiles] = useState({}); // Stocker temporairement les fichiers image

//   useEffect(() => {
//     const fetchData = async () => {
//       const user = await getUserData(getCurrentUserId());
//       if (user) {
//         setUserData(user);
//         setFormData(user);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = (e, fieldType) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFiles((prevFiles) => ({
//         ...prevFiles,
//         [fieldType]: file, // Stocker temporairement l'image
//       }));
//       const imageURL = URL.createObjectURL(file); // Aperçu local de l'image
//       setFormData((prevData) => ({
//         ...prevData,
//         [fieldType]: imageURL, // Mettre à jour l'aperçu local
//       }));
//     }
//   };

//   const handleSave = async () => {
//     setLoading(true);
//     const userId = getCurrentUserId();
//     const updatedFormData = { ...formData };

//     try {
//       await saveUserData(userId, updatedFormData, imageFiles.logo, imageFiles.aboutImage);
//       alert("Données enregistrées avec succès !");
//     } catch (error) {
//       console.error("Error saving user data: ", error);
//       alert("Une erreur s'est produite lors de l'enregistrement.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderInputFields = () => {
//     return Object.keys(userData).map((key) => {
//       const value = formData[key] || ""; // Valeur par défaut vide si pas encore définie
//       const isImageField = key === "logo" || key === "aboutImage";

//       return (
//         <div key={key} className="w-full flex flex-col justify-center items-center mb-6">
//           <div className="w-full max-w-md p-4 border-2 border-blue-400 rounded-xl bg-white shadow-lg">
//             <label className="block font-bold text-lg mb-2">
//               {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
//             </label>
//             {isImageField ? (
//               <>
//                 <div className="mb-4">
//                   <input
//                     id={`${key}-file-upload`}
//                     type="file"
//                     onChange={(e) => handleImageChange(e, key)}
//                     className="hidden"
//                   />
//                   <label
//                     htmlFor={`${key}-file-upload`}
//                     className="cursor-pointer inline-flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-700 transition duration-200"
//                   >
//                     Sélectionner une image
//                   </label>
//                 </div>
//                 {formData[key] && (
//                   <img
//                     className="w-32 h-32 object-cover rounded-md mb-4"
//                     alt={key}
//                     src={formData[key]}
//                   />
//                 )}
//               </>
//             ) : (
//               <textarea
//                 name={key}
//                 value={value}
//                 onChange={handleInputChange}
//                 placeholder={`Entrez votre ${key}`}
//                 rows="5"
//                 className="w-full p-2 border rounded-md placeholder-gray-400 focus:outline-none resize-none overflow-hidden mb-4"
//                 onInput={(e) => {
//                   e.target.style.height = "auto";
//                   e.target.style.height = `${e.target.scrollHeight}px`;
//                 }}
//               />
//             )}
//           </div>
//         </div>
//       );
//     });
//   };

//   return (
//     <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-8">Gestion des informations utilisateur</h1>
//       <div className="w-full max-w-xl">
//         {userData ? (
//           <>
//             {renderInputFields()}
//             <div className="flex justify-center mb-4">
//               <button
//                 onClick={handleSave}
//                 className="px-4 py-2 font-bold text-white bg-green-500 rounded-md hover:bg-green-700 transition duration-200"
//               >
//                 {loading ? "Enregistrement..." : "Enregistrer"}
//               </button>
//             </div>
//             <GoBackBtn />
//           </>
//         ) : (
//           <div className="text-red-500">Aucun profil trouvé pour cette ID</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserInfosManagePage;































// import React, { useEffect, useState } from "react";
// import { getUserData, saveUserData, getCurrentUserId } from "../services/userService";
// import GoBackBtn from "src/components/GoBackBtn";

// const UserInfosManagePage = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({});
//   const [imageFiles, setImageFiles] = useState({}); // Stocker temporairement les fichiers image

//   useEffect(() => {
//     const fetchData = async () => {
//       const user = await getUserData(getCurrentUserId());
//       if (user) {
//         setUserData(user);
//         setFormData(user);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = (e, fieldType) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFiles((prevFiles) => ({
//         ...prevFiles,
//         [fieldType]: file, // Stocker temporairement l'image
//       }));
//       const imageURL = URL.createObjectURL(file); // Aperçu local de l'image
//       setFormData((prevData) => ({
//         ...prevData,
//         [fieldType]: imageURL, // Mettre à jour l'aperçu local
//       }));
//     }
//   };

//   const handleSave = async () => {
//     setLoading(true);
//     const userId = getCurrentUserId();
//     const updatedFormData = { ...formData };

//     try {
//       await saveUserData(userId, updatedFormData, imageFiles.logo, imageFiles.aboutImage);
//       alert("Données enregistrées avec succès !");
//     } catch (error) {
//       console.error("Error saving user data: ", error);
//       alert("Une erreur s'est produite lors de l'enregistrement.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderInputFields = () => {
//     return Object.keys(userData).map((key) => {
//       const value = formData[key] || ""; // Valeur par défaut vide si pas encore définie
//       const isImageField = key === "logo" || key === "aboutImage";

//       return (
//         <div key={key} className="flex flex-col items-start mb-6 w-full max-w-md">
//           <label className="block font-bold text-lg mb-2">
//             {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
//           </label>
//           <div className="w-full border-2 border-blue-400 rounded-xl bg-white shadow-lg p-4">
//             {isImageField ? (
//               <>
//                 <input
//                   id={`${key}-file-upload`}
//                   type="file"
//                   onChange={(e) => handleImageChange(e, key)}
//                   className="hidden"
//                 />
//                 <label
//                   htmlFor={`${key}-file-upload`}
//                   className="cursor-pointer inline-flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-700 transition duration-200 mb-2"
//                 >
//                   Sélectionner une image
//                 </label>
//                 {formData[key] && (
//                   <img
//                     className="w-full h-32 object-cover rounded-md mb-4"
//                     alt={key}
//                     src={formData[key]}
//                   />
//                 )}
//               </>
//             ) : (
//               <textarea
//                 name={key}
//                 value={value}
//                 onChange={handleInputChange}
//                 placeholder={`Entrez votre ${key}`}
//                 rows="4"
//                 className="w-full h-24 p-2 border rounded-md placeholder-gray-400 focus:outline-none resize-none overflow-hidden mb-4"
//                 onInput={(e) => {
//                   e.target.style.height = "auto";
//                   e.target.style.height = `${e.target.scrollHeight}px`;
//                 }}
//               />
//             )}
//           </div>
//           <small className="text-gray-500">Saisissez vos {key}</small>
//         </div>
//       );
//     });
//   };

//   return (
//     <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-8">Gestion des informations utilisateur</h1>
//       <div className="w-full max-w-xl">
//         {userData ? (
//           <>
//             {renderInputFields()}
//             <div className="flex justify-center mb-4">
//               <button
//                 onClick={handleSave}
//                 className="px-4 py-2 font-bold text-white bg-green-500 rounded-md hover:bg-green-700 transition duration-200"
//               >
//                 {loading ? "Enregistrement..." : "Enregistrer"}
//               </button>
//             </div>
//             <GoBackBtn />
//           </>
//         ) : (
//           <div className="text-red-500">Aucun profil trouvé pour cette ID</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserInfosManagePage;




































import React, { useEffect, useState } from "react";
import { getUserData, saveUserData, getCurrentUserId } from "../services/userService";
import GoBackBtn from "src/components/GoBackBtn";

const UserInfosManagePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [imageFiles, setImageFiles] = useState({}); // Stocker temporairement les fichiers image

  useEffect(() => {
    const fetchData = async () => {
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
          <div className="text-red-500">Aucun profil trouvé pour cette ID</div>
        )}
      </div>
    </div>
  );
};

export default UserInfosManagePage;
