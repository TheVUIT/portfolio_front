// projectDetailService.js

import { db, storage } from '../config/firebase'; // Assurez-vous d'importer vos configurations Firebase
import { doc, setDoc, getDoc, updateDoc, deleteDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

class ProjectDetails {
  constructor(src_detail1, src_detail2) {
    this.src_detail1 = src_detail1;
    this.src_detail2 = src_detail2;
  }
}

class ProjectImages {
  constructor(src_principal_image, src_image_on_hover) {
    this.src_principal_image = src_principal_image;
    this.src_image_on_hover = src_image_on_hover;
  }
}

class Project {
  constructor(id, images, pinned, details) {
    this.id = id;
    this.images = images;
    this.pinned = pinned;
    this.details = details;
  }
}

class Category {
  constructor(id, title, projects = []) {
    this.id = id;
    this.title = title;
    this.projects = projects;
  }

  addProject(project) {
    this.projects.push(project);
  }
}

class ProjectDetailData {
  constructor(categories = []) {
    this.categories = categories;
  }

  addCategory(category) {
    this.categories.push(category);
  }
}

// Exemple d'utilisation
const projectDetails1 = new ProjectDetails("http://linkToImagePrijectDetail1.com", "http://linkToImagePrijectDetail2.com");
const projectImages1 = new ProjectImages("http://linkToImage1.com", "http://linkToImage2.com");

const project1 = new Project(1, projectImages1, true, projectDetails1);
const project2 = new Project(2, projectImages1, true, projectDetails1);

const category1 = new Category(1, "Categorie 1", [project1, project2]);
const category2 = new Category(2, "Categorie 2", [project1, project2]);

const projectDetailData = new ProjectDetailData([category1, category2]);

console.log(projectDetailData);













const addProjectDetailData = async (projectDetailData) => {
  try {
    const docRef = doc(db, "projects", "projectDetailAndCategories");

    // Sérialisation des objets de classe en objets JavaScript simples
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








// const projectDetailData = {
//   categories: [
//     {
//       id: 1,
//       title: "Categorie 1",
//       projects: [
//         {
//           id:1,
//           images: {
//             src_principal_image : "http://linkToImage1.com",
//             src_image_on_hover : "http://linkToImage2.com"
//           },
//           pinned: true,
//           details :  {
//             src_detail1 :  "http://linkToImagePrijectDetail1.com",
//             src_detail2 : "http://linkToImagePrijectDetail2.com"
//           }
//         },
//         {
//           id:2,
//           images: {
//             src_principal_image : "http://linkToImage1.com",
//             src_image_on_hover : "http://linkToImage2.com"
//           },
//           pinned: true,
//           details :  {
//             src_detail1 :  "http://linkToImagePrijectDetail1.com",
//             src_detail2 : "http://linkToImagePrijectDetail2.com"
//           }
//         }
//       ]
//     },
//     {
//       id: 2,
//       title: "Categorie 2",
//       projects: [
//         {
//           id:1,
//           images: {
//             src_principal_image : "http://linkToImage1.com",
//             src_image_on_hover : "http://linkToImage2.com"
//           },
//           pinned: true,
//           details :  {
//             src_detail1 :  "http://linkToImagePrijectDetail1.com",
//             src_detail2 : "http://linkToImagePrijectDetail2.com"
//           }
//         },
//         {
//           id:2,
//           images: {
//             src_principal_image : "http://linkToImage1.com",
//             src_image_on_hover : "http://linkToImage2.com"
//           },
//           pinned: true,
//           details :  {
//             src_detail1 :  "http://linkToImagePrijectDetail1.com",
//             src_detail2 : "http://linkToImagePrijectDetail2.com"
//           }
//         }
//       ]
//     }
//   ]
// };
