import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { db, storage } from '../config/firebase';


// Méthode générique pour uploader une image
const uploadImage = async (file) => {
    try {
      // Créer une référence de stockage où l'image sera sauvegardée
      const storageRef = ref(storage, `images/${file.name}`);
  
      // Uploader le fichier
      const snapshot = await uploadBytes(storageRef, file);
  
      // Obtenir l'URL de téléchargement une fois l'upload terminé
      const downloadURL = await getDownloadURL(snapshot.ref);
  
      console.log("Image téléchargée avec succès: ", downloadURL);
      return downloadURL;  // Retourne l'URL pour l'utiliser dans l'application
    } catch (error) {
      console.error("Erreur lors du téléchargement de l'image: ", error);
      throw error;
    }
  };