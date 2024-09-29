// projectDetailService.js

import { db, storage } from '../config/firebase'; 
import { doc, setDoc, getDoc, updateDoc, deleteDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';



export const addProjectDetailData = async (projectDetailData) => {
  try {
    const docRef = doc(db, "projects", "projectDetailAndCategories");

    const dataToSave = JSON.parse(JSON.stringify(projectDetailData));

    await setDoc(docRef, dataToSave);
    console.log("Document créé avec succès !");
  } catch (error) {
    console.error("Erreur lors de la création du document: ", error);
  }
};


// Lire un Projet
export const getProject = async () => {
  try {
    const projectDocRef = doc(db, "projects", "projectDetailAndCategories");
    const projectDocSnap = await getDoc(projectDocRef);

    if (projectDocSnap.exists()) {
      return projectDocSnap.data();
    } else {
      console.error("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching project: ", error);
  }
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


const uploadImageToStorage = async (file) => {
  if (!file) {
    throw new Error("Aucun fichier sélectionné");
  }

  try {
    const storageRef = ref(storage, `/project_data/${file.name}`);

    const snapshot = await uploadBytes(storageRef, file);

    const downloadURL = await getDownloadURL(snapshot.ref);

    console.log("Fichier téléchargé avec succès. URL :", downloadURL);
    return downloadURL;
  } catch (error) {
    console.error("Erreur lors du téléchargement de l'image :", error);
    throw error;
  }
};
