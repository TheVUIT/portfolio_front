import React from 'react'
import { useState } from 'react';
import '../css/index.css'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traiter la soumission du formulaire ici
    console.log('Form submitted:', formData);
  };



  return (
    <div className='h-[95vh] min-w-full mt-20 flex flex-col items-start justify-between'>

      <p className='mt-8 text-6xl font-montserrat font-bold text-texte_secondary'>Hire me for your projects</p>
      <p className='mb-8 text-xl font-montserrat'>Designers, UI, Comms companies and everyone ! Elevate your work with stunning 4K 3D renders - Ready to use and customizable</p>
      <form onSubmit={handleSubmit} className='h-2/3 w-full flex flex-col items-start justify-between mb-20'>

        <div className='flex flex-row justify-between pr-4 pl-4'>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name / Organsation</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-spacing-y-0 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder=""
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Prfession / Domain</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-spacing-y-0 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Entr"
            />
          </div>

        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name / Organsation</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border-spacing-y-0 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder=""
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name / Organsation</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border-spacing-y-0 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder=""
          />
        </div>

        <div className="mr-10 border-2 w-full flex flex-row justify-end ">
          <button className="bg-background_primary text-texte_secondary font-ubuntu px-6 py-3 rounded-lg hover:bg-texte_secondary hover:text-background_primary transition-colors duration-400 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
            Contact
          </button>
        </div>

      </form>

    </div>
    // <form onSubmit={handleSubmit} className="space-y-4">
    //       {/* Champ de saisie pour le nom */}
    //       <div>
    //         <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
    //         <input
    //           type="text"
    //           id="name"
    //           name="name"
    //           value={formData.name}
    //           onChange={handleChange}
    //           className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
    //           placeholder="Entrez votre nom"
    //         />
    //       </div>

    //       {/* Champ de saisie pour l'email */}
    //       <div>
    //         <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
    //         <input
    //           type="email"
    //           id="email"
    //           name="email"
    //           value={formData.email}
    //           onChange={handleChange}
    //           className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
    //           placeholder="Entrez votre email"
    //         />
    //       </div>

    //       {/* Champ de saisie pour le mot de passe */}
    //       <div>
    //         <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
    //         <input
    //           type="password"
    //           id="password"
    //           name="password"
    //           value={formData.password}
    //           onChange={handleChange}
    //           className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
    //           placeholder="Entrez votre mot de passe"
    //         />
    //       </div>

    //       {/* Bouton de soumission */}
    //       <div>
    //         <button
    //           type="submit"
    //           className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    //         >
    //           S'inscrire
    //         </button>
    //       </div>
    //     </form>
  )
}

export default Contact