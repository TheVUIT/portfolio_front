import { db } from '../config/firebase';
import { doc, setDoc, getDoc, updateDoc, deleteField } from 'firebase/firestore';

// Ajouter un message (déjà existant)
export const addMessagingData = async (messagingData) => {
  try {
    const docRef = doc(db, "messages", "messagingData");
    const dataToSave = JSON.parse(JSON.stringify(messagingData));
    const result = await setDoc(docRef, dataToSave);
    return result;
  } catch (error) {
    console.error("Erreur lors de la création du document: ", error);
  }
};

// Récupérer tous les messages (déjà existant)
export const getMessages = async () => {
  try {
    const projectDocRef = doc(db, "messages", "messagingData");
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

// Supprimer un message par son ID (nouvelle méthode)
export const deleteMessage = async (id) => {
  try {
    const docRef = doc(db, "messages", "messagingData");

    // Récupérer les données actuelles
    const projectDocSnap = await getDoc(docRef);
    if (!projectDocSnap.exists()) {
      console.error("No such document to delete from!");
      return false;
    }

    const currentMessages = projectDocSnap.data();

    // Si le message existe dans l'ensemble, le supprimer
    if (currentMessages && currentMessages[id]) {
      await updateDoc(docRef, {
        [`${id}`]: deleteField(),
      });
      console.log(`Message with ID ${id} deleted successfully.`);
      return true;
    } else {
      console.error("Message ID not found.");
      return false;
    }
  } catch (error) {
    console.error("Error deleting message: ", error);
    return false;
  }
};
