// projectDetailService.js

import { db, storage } from '../config/firebase'; // Assurez-vous d'importer vos configurations Firebase
import { doc, setDoc, getDoc, updateDoc, deleteDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

export const createProject = async (projectData, images) => {
  try {
    const { title, isPinned } = projectData;

    const projectId = doc(collection(db, "projects")).id;

    // Upload des images dans le Storage
    const imageUrls = await Promise.all(images.map(async (image) => {
      const imageRef = ref(storage, `projects/${projectId}/${image.name}`);
      await uploadBytes(imageRef, image);
      return await getDownloadURL(imageRef);
    }));

    // Créer la structure de données
    const projectDetail = {
      id: projectId,
      title,
      isPinned,
      projectImages: {
        imageUrl1: imageUrls[0],
        imageUrl2: imageUrls[1],
      },
    };

    // Enregistrer dans Firestore
    await setDoc(doc(db, "projects", projectId), projectDetail);

    return projectDetail;
  } catch (error) {
    console.error("Error creating project: ", error);
    throw error; // Propager l'erreur pour la gestion ultérieure
  }
};





// Lire un Projet
export const getProject = async (projectId) => {
  try {
    const projectDocRef = doc(db, "projects", projectId);
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





// Mettre à Jour un Projet
export const updateProject = async (projectId, updatedData, images) => {
  try {
    const projectDocRef = doc(db, "projects", projectId);

    // Upload des nouvelles images si elles sont fournies
    if (images && images.length > 0) {
      const imageUrls = await Promise.all(images.map(async (image) => {
        const imageRef = ref(storage, `projects/${projectId}/${image.name}`);
        await uploadBytes(imageRef, image);
        return await getDownloadURL(imageRef);
      }));

      updatedData.projectImages = {
        imageUrl1: imageUrls[0],
        imageUrl2: imageUrls[1],
      };
    }

    await updateDoc(projectDocRef, updatedData);
  } catch (error) {
    console.error("Error updating project: ", error);
  }
};

// Supprimer un Projet
export const deleteProject = async (projectId) => {
  try {
    // Supprimer les images du Storage
    const imageRef1 = ref(storage, `projects/${projectId}/image1.jpg`); // Modifiez avec le vrai nom de l'image
    const imageRef2 = ref(storage, `projects/${projectId}/image2.jpg`); // Modifiez avec le vrai nom de l'image

    await deleteObject(imageRef1);
    await deleteObject(imageRef2);

    // Supprimer le document Firestore
    await deleteDoc(doc(db, "projects", projectId));
  } catch (error) {
    console.error("Error deleting project: ", error);
  }
};
