/* eslint-disable import/no-anonymous-default-export */
import { doc, setDoc, getDoc } from "firebase/firestore";
import { updateEmail, updatePassword, signOut } from "firebase/auth";

import {
  ref,
  listAll,
  deleteObject,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import { db, storage } from "../config/firebase";
import { auth } from "../config/firebase";

export const saveUserData = async (userData, logoFile, aboutImageFile) => {
  try {
    console.log("Logo file:", logoFile ? logoFile.name : "No file");
    console.log("About image file:", aboutImageFile ? aboutImageFile.name : "No file");

    const updatedUserData = {
      ...userData,
      logo: (await formatUrlLinkToImage(logoFile, "logos")) || userData.logo,
      aboutImage: (await formatUrlLinkToImage(aboutImageFile, "aboutImages")) || userData.aboutImage,
    };

    await setDoc(doc(db, "users", "userManageInfos"), updatedUserData, { merge: true });

    if (aboutImageFile && logoFile) {
      await deleteUnusedFiles("logos", logoFile?.name);
      await deleteUnusedFiles("aboutImages", aboutImageFile?.name);
    }
  } catch (error) {
    console.error("Error saving user data: ", error);
  }
};

const deleteUnusedFiles = async (folder, fileNameToKeep) => {
  try {
    const directoryRef = ref(storage, `${folder}/`);

    const fileList = await listAll(directoryRef);

    fileList.items.forEach(async (fileRef) => {
      if (fileRef.name !== fileNameToKeep) {
        await deleteObject(fileRef);
        console.log(`Deleted: ${fileRef.name}`);
      }
    });
  } catch (error) {
    console.error("Error deleting files: ", error);
  }
};

const formatUrlLinkToImage = async (imageFile, folder) => {
  let imageUrl = "";
  if (imageFile) {
    const imageRef = ref(storage, `${folder}/${imageFile.name}`);
    await uploadBytes(imageRef, imageFile);
    imageUrl = await getDownloadURL(imageRef);
  }

  return imageUrl;
};

export const getUserData = async () => {
  try {
    const userDetailFromFirestore = await getUserDetailFromFirestore();

    if (userDetailFromFirestore) {
      return userDetailFromFirestore;
    } else {
      return null; // Si aucune donnée utilisateur n'est trouvée
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des données utilisateur :", error);
    return null;
  }
};

const getUserDetailFromFirestore = async () => {
  try {
    const userDocRef = doc(db, "users", "userManageInfos");
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      await defaultDataProvider();
      console.error("Aucun utilisateur trouvé dans Firestore. Création de données par défaut.");
      return null;
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des détails depuis Firestore :", error);
    return null;
  }
};

const defaultDataProvider = async () => {
  const docRef = doc(db, "users", "userManageInfos");
  const defaultData = {
    logo: "",
    textAboutFirst: "",
    textAboutSecond: "",
    linkBehance: "",
    linkLinkedIn: "",
    linkInstagram: "",
    email: "tony@gmail.com",
    aboutImage: ""
    };
  await setDoc(docRef, defaultData);
  return defaultData;
};

export const updateUserAuthentication = async (newEmail, newPassword) => {
  try {
    const user = auth.currentUser;
    let emailUpdated = false;
    let passwordUpdated = false;

    // Met à jour l'email si une nouvelle valeur est fournie
    if (newEmail && newEmail !== user.email) {
      await updateEmail(user, newEmail);
      console.log("Email updated to:", newEmail);
      emailUpdated = true;
    }

    // Met à jour le mot de passe si une nouvelle valeur est fournie
    if (newPassword) {
      await updatePassword(user, newPassword);
      console.log("Password updated.");
      passwordUpdated = true;
    }

    // Si l'email ou le mot de passe est mis à jour, déconnecte l'utilisateur
    if (emailUpdated || passwordUpdated) {
      await signOut(auth);
      console.log("User signed out after updating credentials.");
    }
  } catch (error) {
    console.error("Error updating user authentication:", error);
  }
};

// Fonction pour obtenir l'ID de l'utilisateur connecté
export function getCurrentUserId() {
  const user = auth.currentUser;
  return user ? user.uid : null;
}
