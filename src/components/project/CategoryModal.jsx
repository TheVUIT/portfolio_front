
import React, { useState } from "react";
import {  FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const CategoryModal = ({ saveCategoryCreated, onClose, isOpen }) => {
    const [category, setCategory] = useState("");
  
    if (!isOpen) return null;
  
    // Fonction pour gérer la sauvegarde après avoir vérifié que la catégorie n'est pas vide
    const handleSaveCategory = () => {
      if (category.trim() === "") {
        alert("Veuillez entrer un nom pour la catégorie."); // Empêche la création si vide
        return;
      }
      saveCategoryCreated(category);
      onClose();
    };
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Ajouter Une Categorie</h2>
  
          <div className="mb-4 flex flex-col justify-center items-center">
            <label className="font-ubuntu text-center">Nom de la categorie</label>
            <input
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              className="border p-2 w-full"
            />
          </div>
  
          <div className="flex flex-row gap-6 justify-center">
            {/* Bouton pour ajouter la catégorie */}
            <button
              onClick={handleSaveCategory}
              className="py-2 px-4 custom-btn-project-serv"
            >
              <FaCheck />
            </button>
  
            {/* Bouton pour fermer la modal */}
            <button onClick={onClose} className="custom-btn">
              <FaX />
            </button>
          </div>
        </div>
      </div>
    );
  };

export default CategoryModal;
  