
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { db, storage } from '../config/firebase';


// GET 
export const getCarrouselData = async () => {
  try {
    const docRef = doc(db, "carousels", "carrouselImages");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data()); 
      return docSnap.data();
    } else {
      console.log("No such document!");
      return { images: [] }; 
    }
  } catch (error) {
    console.error("Error getting carrousel data: ", error);
  }
};


// CREATE
export const saveCarrouselData = async ( imageFile) => {
  try {
    const imageURL = await formatUrlLinkToImage(imageFile, "carousels");
    
    const updatedImageList = await saveCarrouselDataFireStore(imageURL);

    return updatedImageList;
  } catch (error) {
    console.error("Error saving carrousel data: ", error);
    return [];
  }
};


const saveCarrouselDataFireStore = async ( imageURL) => {

  // const carrouselDocRef = doc(db, "carousels", userId);
  const carrouselDocRef = doc(db, "carousels", "carrouselImages");
  const carrouselDocSnap = await getDoc(carrouselDocRef);

  let updatedImages = [];
  
  if (carrouselDocSnap.exists()) {
    const currentImages = carrouselDocSnap.data().images || [];
    updatedImages = [...currentImages, imageURL]; 
  } else {
    updatedImages = [imageURL]; 
  }

  await setDoc(carrouselDocRef, {
    images: updatedImages
  });

  return updatedImages; 
};


const formatUrlLinkToImage = async (imageFile,  folder) => {
  let imageUrl = "";
  if (imageFile) {
    const logoRef = ref(storage, `${folder}/${imageFile.name}`);
    await uploadBytes(logoRef, imageFile); 
    imageUrl = await getDownloadURL(logoRef); 
  }

  return imageUrl;
};





export const deleteCarrouselImage = async (userId, imageUrl) => {
  try {
    console.log("URL de l'image :", imageUrl); 

    const filePath = getFilePathFromUrl(imageUrl);
    if (!filePath) {
      console.error("Chemin de fichier introuvable à partir de l'URL :", imageUrl);
      throw new Error("Chemin de l'image invalide");
    }

    const imageRef = ref(storage, filePath);
    await deleteObject(imageRef); 

    const carrouselDocRef = doc(db, "carousels", userId);
    const carrouselDocSnap = await getDoc(carrouselDocRef);

    if (carrouselDocSnap.exists()) {
      const currentImages = carrouselDocSnap.data().images || [];

      const updatedImages = currentImages.filter((url) => url !== imageUrl);

      await setDoc(carrouselDocRef, {
        images: updatedImages
      });

      return updatedImages; 
    } else {
      console.error("Document carrousel non trouvé pour l'utilisateur :", userId);
    }
  } catch (error) {
    console.error("Erreur lors de la suppression de l'image :", error);
    return []; 
  }
};

const getFilePathFromUrl = (url) => {
  const decodedUrl = decodeURIComponent(url); 
  const matches = decodedUrl.match(/\/o\/([^?]+)/); 
  return matches ? matches[1] : null;
};






