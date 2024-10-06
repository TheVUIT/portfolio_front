import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../css/index.css';
import { addMessagingData, getMessages } from 'src/services/messageService';
import MessagingData from '../model/MessagingData';
import { useToast } from '../hooks/use-toast';
import {getUserData} from '../services/userService'
import { Link } from 'react-router-dom';
const Contact = () => {
  const { toast } = useToast();
  const [aboutUserData, setAboutUserData] = useState({})
  const [messagingData, setMessagingData] = useState(new MessagingData());
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    email: '',
    message: ''
  });
  const [openDialog, setOpenDialog] = useState(false); // État pour contrôler le dialog

  // Charger les messages existants au montage du composant
  useEffect(() => {
    const fetchActualMessages = async () => {
      const actualMessages = await getMessages();
      const actualUserDate = await getUserData()
      setAboutUserData(actualUserDate)
      setMessagingData(actualMessages);
    };
    fetchActualMessages();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); // Fermer le dialog
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Vérifier si les champs sont vides
    if (!formData.name || !formData.profession || !formData.email || !formData.message) {
      setOpenDialog(true); // Ouvrir le dialog si des champs vides
      return; // Ne pas envoyer le message
    }

    const updatedMessagingData = new MessagingData();

    updatedMessagingData.messages = messagingData.messages;
    updatedMessagingData.addMessage(
      formData.name,
      formData.profession,
      formData.email,
      formData.message
    );

    await addMessagingData(updatedMessagingData);

    setFormData({
      name: '',
      profession: '',
      email: '',
      message: ''
    });

    toast({
      title: "Réussi",
      description: "Message envoyé !",
      type: "success",
    }); 
  };

  const textVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
  };

  const formVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }
  };

  return (
    <motion.div
      className="h-[95vh] min-w-full mt-20 flex flex-col items-start justify-between lg:pr-20 lg:pl-20 pr-5 pl-5"
      initial="hidden"
      animate="visible"
    >
      <motion.p
        className="mt-8 mb-4 text-3xl lg:text-6xl font-montserrat font-bold text-texte_secondary md:text-4xl sm:text-2xl"
        variants={textVariant}
      >
        Hire me for your projects
      </motion.p>

      <motion.p
        className="mb-2 text-xs lg:text-xl font-montserrat"
        variants={textVariant}
        transition={{ delay: 0.4 }}
      >
        Designers, UI, Comms companies and everyone! Elevate your work with stunning 4K 3D renders - Ready to use and customizable
      </motion.p>
      <motion.p
        className="mb-12 text-xs lg:text-xl font-montserrat"
        variants={textVariant}
        transition={{ delay: 0.4 }}
      >
        Send me an email at
        <Link className='hover:text-blue-500' to={`mailto:${aboutUserData.email}`}> {aboutUserData.email}{" "}</Link >  
          or fill out this form
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="h-2/3 w-full flex flex-col items-start justify-between gap-3 mb-20"
        variants={formVariant}
      >
        <div className="w-full flex flex-col lg:flex-row justify-between gap-4 pr-4 pl-4">
          <div className="w-full lg:w-1/2 flex flex-col ">
            <label htmlFor="name" className="text-md font-ubuntu text-texte_secondary">Name / Organisation</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-b border-gray-400 rounded-none shadow-sm hover:border-texte_secondary focus:border-b focus:border-texte_secondary focus:outline-none focus:shadow-none"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col">
            <label htmlFor="profession" className="flex flex-row text-md font-ubuntu text-texte_secondary">Profession / Domain</label>
            <input
              type="text"
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-b border-gray-400 rounded-none shadow-sm hover:border-texte_secondary focus:border-b focus:border-texte_secondary focus:outline-none focus:shadow-none"
            />
          </div>
        </div>

        <div className="w-full flex flex-col pr-4 pl-4">
          <label htmlFor="email" className="block text-md font-ubuntu text-texte_secondary">Your Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border-b border-gray-400 rounded-none shadow-sm hover:border-texte_secondary focus:border-b focus:border-texte_secondary focus:outline-none focus:shadow-none"
          />
        </div>

        <div className="w-full flex flex-col pr-4 pl-4">
          <label htmlFor="message" className="block text-md font-ubuntu text-texte_secondary">Message</label>
          <input
            type="text"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-2 w-full border-b border-gray-400 rounded-none shadow-sm hover:border-texte_secondary focus:border-b focus:border-texte_secondary focus:outline-none focus:shadow-none"
          />
        </div>

        <div className="mr-10 w-full flex flex-row justify-end">
          <motion.button
            type="submit" // Ajouté pour s'assurer que c'est un bouton de soumission
            className="custom-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </div>
      </motion.form>

      {/* Dialog personnalisé */}
      {openDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-5 w-11/12 sm:w-1/3">
            <h2 className="font-bold text-lg mb-4">Erreur</h2>
            <p>Veuillez remplir tous les champs avant d'envoyer le message.</p>
            <div className="flex justify-end mt-4">
              <button 
                onClick={handleCloseDialog} 
                className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition">
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Contact;
