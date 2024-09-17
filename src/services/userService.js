/* eslint-disable import/no-anonymous-default-export */
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
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

export const saveUserData = async (
  userId,
  userData,
  logoFile,
  aboutImageFile
) => {
  try {
    console.log("Logo file:", logoFile ? logoFile.name : "No file");
    console.log(
      "About image file:",
      aboutImageFile ? aboutImageFile.name : "No file"
    );

    const updatedUserData = {
      ...userData,
      logo:
        (await formatUrlLinkToImage(logoFile, userId, "logos")) ||
        userData.logo,
      aboutImage:
        (await formatUrlLinkToImage(aboutImageFile, userId, "aboutImages")) ||
        userData.aboutImage,
    };

    await setDoc(doc(db, "users", userId), updatedUserData, { merge: true });

    await deleteUnusedFiles("logos", userId, logoFile?.name);
    await deleteUnusedFiles("aboutImages", userId, aboutImageFile?.name);
  } catch (error) {
    console.error("Error saving user data: ", error);
  }
};

const deleteUnusedFiles = async (folder, userId, fileNameToKeep) => {
  try {
    const directoryRef = ref(storage, `${folder}/${userId}/`);

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

const formatUrlLinkToImage = async (imageFile, userId, folder) => {
  let imageUrl = "";
  if (imageFile) {
    const logoRef = ref(storage, `${folder}/${userId}/${imageFile.name}`);
    await uploadBytes(logoRef, imageFile);
    imageUrl = await getDownloadURL(logoRef);
  }

  return imageUrl;
};



export const updateUserAuthentication = async (user, newEmail, newPassword) => {
  try {
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
      await signOut(user.auth);
      console.log("User signed out after updating credentials.");
    }
    
  } catch (error) {
    console.error("Error updating user authentication:", error);
  }
};



// Exemple d'appel de la méthode
const updateUserData = async (newEmail, newPassword) => {
  const user = auth.currentUser; // Récupère l'utilisateur actuellement connecté

  if (user) {
    await updateUserAuthentication(user, newEmail, newPassword);
  } else {
    console.log("No user is logged in.");
  }
};
















export const getUserData = async (userId) => {
  try {
    const userDetailFromAuth = getUserDetailFromAuthentification(userId); 
    const userDetailFromFirestore = await getUserDetailFromFirestore(userId);

    if (
      userDetailFromAuth &&
      userDetailFromFirestore &&
      userDetailFromAuth.email === userDetailFromFirestore.email
    ) {
      return userDetailFromFirestore;
    } else {
      return null; // Si les emails ne correspondent pas ou en cas d'erreur
    }
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données utilisateur :",
      error
    );
    return null;
  }
};

const getUserDetailFromAuthentification = (userId) => {
  const user = auth.currentUser;

  if (user && user.uid === userId) {
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
    };
  } else {
    console.error("Utilisateur non authentifié ou mauvais ID utilisateur.");
    return null;
  }
};

const getUserDetailFromFirestore = async (userId) => {
  try {
    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      console.error("Aucun utilisateur trouvé dans Firestore pour cet ID.");
      return null;
    }
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des détails depuis Firestore :",
      error
    );
    return null;
  }
};

const defaultDataProvider = async (userId) => {
  const docRef = doc(db, "users", userId);
  console.log("No such document! Creating a new one...");
  const defaultData = {
    logo: "",
    textAboutFirst: "",
    textAboutSecond: "",
    linkBehance: "",
    linkLinkedIn: "",
    linkInstagram: "",
    email: "tony@gmail.com",
    aboutImage: "",
    password: "",
  };
  await setDoc(docRef, defaultData);
  return defaultData;
};

// // Mettre à jour les données utilisateur
// export const updateUserData = async (userId, userData) => {
//   try {
//     const docRef = doc(db, "users", userId);
//     await updateDoc(docRef, userData);
//   } catch (error) {
//     console.error("Error updating user data: ", error);
//   }
// };
