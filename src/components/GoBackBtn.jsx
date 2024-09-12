import React from 'react'
import { useNavigate } from "react-router-dom";

const GoBackBtn = () => {
    const navigate = useNavigate();


  return (
    <div className="fixed bottom-4 right-4 flex flex-row items-center justify-end ml-4">
        <button
          // A la page précédente
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 font-ubuntu text-xl bg-texte_secondary text-backgroung_secondary rounded hover:text-texte_secondary hover:bg-backgroung_secondary hover:border-2 hover:border-texte_secondary"
        >
          Go Back
        </button>
      </div>
  )
}

export default GoBackBtn