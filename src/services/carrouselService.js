
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { db, storage } from '../config/firebase';


// GET FROM FIRESTORE
export const getCarrouselData = async (userId) => {
  try {
    // Récupérer le document avec l'ID utilisateur
    const docRef = doc(db, "carousels", userId);
    const docSnap = await getDoc(docRef);

    // Vérifier si le document existe
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data()); // Vérification des données récupérées
      return docSnap.data();
    } else {
      console.log("No such document!");
      return { images: [] }; // Retourne une structure vide si le document n'existe pas
    }
  } catch (error) {
    console.error("Error getting carrousel data: ", error);
  }
};


export const saveCarrouselData = async (userId, imageFile) => {
  try {
    const imageURL = await formatUrlLinkToImage(imageFile, userId, "carousels");
    
    // Sauvegarde l'URL dans Firestore
    const updatedImageList = await saveCarrouselDataFireStore(userId, imageURL);

    // Retourne la nouvelle liste d'images après ajout
    return updatedImageList;
  } catch (error) {
    console.error("Error saving carrousel data: ", error);
    return [];
  }
};

// Fonction pour sauvegarder les données dans Firestore
const saveCarrouselDataFireStore = async (userId, imageURL) => {
  const carrouselDocRef = doc(db, "carousels", userId);
  const carrouselDocSnap = await getDoc(carrouselDocRef);

  let updatedImages = [];
  
  // Si le document existe déjà, on met à jour les images, sinon on en crée un nouveau
  if (carrouselDocSnap.exists()) {
    const currentImages = carrouselDocSnap.data().images || [];
    updatedImages = [...currentImages, imageURL]; // Ajout de la nouvelle image
  } else {
    updatedImages = [imageURL]; // Créer un nouveau document avec cette image
  }

  // Mettre à jour Firestore avec la nouvelle liste d'images
  await setDoc(carrouselDocRef, {
    images: updatedImages
  });

  return updatedImages; // Retourne la nouvelle liste d'images
};


// Fonction pour uploader l'image et obtenir son URL
const formatUrlLinkToImage = async (imageFile, userId, folder) => {
  let imageUrl = "";
  if (imageFile) {
    const logoRef = ref(storage, `${folder}/${userId}/${imageFile.name}`);
    await uploadBytes(logoRef, imageFile); // Upload de l'image
    imageUrl = await getDownloadURL(logoRef); // Récupération de l'URL
  }

  return imageUrl;
};







// Mettre à jour les données du carrousel
export const updateCarrouselData = async (userId, imageFiles) => {
  try {
    const imageURLs = [];
    for (const file of imageFiles) {
      const imageRef = ref(storage, `carousels/${userId}/${file.name}`);
      await uploadBytes(imageRef, file);
      const imageURL = await getDownloadURL(imageRef);
      imageURLs.push(imageURL);
    }
    await updateDoc(doc(db, "carousels", userId), {
      images: imageURLs
    });
  } catch (error) {
    console.error("Error updating carrousel data: ", error);
  }
};



















//DELETE

// export const deleteCarrouselImage = async (userId, imageUrl) => {
//   try {
//     // 1. Supprimer l'image de Firebase Storage
//     const imageRef = ref(storage, getFilePathFromUrl(imageUrl));
//     await deleteObject(imageRef); // Supprimer l'image dans Storage

//     // 2. Récupérer le document Firestore pour cet utilisateur
//     const carrouselDocRef = doc(db, "carousels", userId);
//     const carrouselDocSnap = await getDoc(carrouselDocRef);

//     if (carrouselDocSnap.exists()) {
//       const currentImages = carrouselDocSnap.data().images || [];
      
//       // 3. Filtrer la liste pour supprimer l'image supprimée
//       const updatedImages = currentImages.filter((url) => url !== imageUrl);
      
//       // 4. Mettre à jour Firestore avec la nouvelle liste d'images
//       await setDoc(carrouselDocRef, {
//         images: updatedImages
//       });
      
//       return updatedImages; // Retourne la nouvelle liste d'images
//     }
//   } catch (error) {
//     console.error("Error deleting image: ", error);
//     return []; // En cas d'erreur, retourner une liste vide
//   }
// };

// // Fonction pour extraire le chemin correct du fichier depuis l'URL publique
// const getFilePathFromUrl = (url) => {
//   const decodedUrl = decodeURIComponent(url); // Décode l'URL encodée
//   const matches = decodedUrl.match(/\/o\/(.*)\?/); // Extraction du chemin relatif
//   return matches ? matches[1] : null;
// };











export const deleteCarrouselImage = async (userId, imageUrl) => {
  try {
    console.log("URL de l'image :", imageUrl); // Affiche l'URL pour débogage

    // 1. Récupérer le chemin de l'image depuis l'URL
    const filePath = getFilePathFromUrl(imageUrl);
    if (!filePath) {
      console.error("Chemin de fichier introuvable à partir de l'URL :", imageUrl);
      throw new Error("Chemin de l'image invalide");
    }

    // 2. Supprimer l'image de Firebase Storage
    const imageRef = ref(storage, filePath);
    await deleteObject(imageRef); // Supprimer l'image dans Storage

    // 3. Récupérer le document Firestore pour cet utilisateur
    const carrouselDocRef = doc(db, "carousels", userId);
    const carrouselDocSnap = await getDoc(carrouselDocRef);

    if (carrouselDocSnap.exists()) {
      const currentImages = carrouselDocSnap.data().images || [];

      // 4. Filtrer la liste pour supprimer l'image supprimée
      const updatedImages = currentImages.filter((url) => url !== imageUrl);

      // 5. Mettre à jour Firestore avec la nouvelle liste d'images
      await setDoc(carrouselDocRef, {
        images: updatedImages
      });

      return updatedImages; // Retourne la nouvelle liste d'images
    } else {
      console.error("Document carrousel non trouvé pour l'utilisateur :", userId);
    }
  } catch (error) {
    console.error("Erreur lors de la suppression de l'image :", error);
    return []; // En cas d'erreur, retourner une liste vide
  }
};

// Fonction pour extraire le chemin correct du fichier depuis l'URL publique
const getFilePathFromUrl = (url) => {
  const decodedUrl = decodeURIComponent(url); // Décode l'URL encodée
  const matches = decodedUrl.match(/\/o\/([^?]+)/); // Extraction du chemin relatif
  return matches ? matches[1] : null;
};






