import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth"; // Importer Firebase Authentication
import GoBackBtn from "src/components/GoBackBtn";

const AdminPage = () => {


  const navigate = useNavigate();
  const auth = getAuth();

  // Fonction de déconnexion
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Erreur lors de la déconnexion :", error);
      });
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center ">
      <div className="h-1/2 w-1/2 lg:w-1/3  flex flex-col items-center justify-center ">
        <div className="h-full w-full flex flex-row items-center justify-between gap-6">
          <Link
            className="admin-page-choice-button"
            to={"/admin/user-manage"}
          >
            UserServices
          </Link>
          <Link
            className="admin-page-choice-button"
            to={"/admin/carousel-manage"}
          >
            CarrouselService
          </Link>
        </div>

        <Link
          className="admin-page-choice-button"
          to={"/admin/project-manage"}
        >
          ProjectService
        </Link>
      </div>

      
     <GoBackBtn/> 
      <div className="fixed bottom-4 left-4 flex flex-row items-center justify-end ml-4">
        <button
          // A la page précédente
          onClick={handleLogout}
          className="mt-4 px-4 py-2 font-ubuntu text-xl bg-red-500 text-backgroung_secondary rounded hover:text-red-500 hover:bg-backgroung_secondary hover:border-2 hover:border-red-500"
        >
          Déconnexion
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
