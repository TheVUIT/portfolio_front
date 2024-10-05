import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../css/index.css';
import { addMessagingData, getMessages } from 'src/services/messageService';
import MessagingData from '../model/MessagingData';

const Contact = () => {
  const [messagingData, setMessagingData] = useState(new MessagingData());
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    email: '',
    message: ''
  });

  // Charger les messages existants au montage du composant
  useEffect(() => {
    const fetchActualMessages = async () => {
      const actualMessages = await getMessages();
      setMessagingData(actualMessages);
    };
    fetchActualMessages();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedMessagingData = new MessagingData();

    // Créer un nouvel objet MessagingData avec les messages existants
    updatedMessagingData.messages = messagingData.messages
    // Ajouter le nouveau message
    updatedMessagingData.addMessage(
      formData.name,
      formData.profession,
      formData.email,
      formData.message
    );

    // Envoyer les données mises à jour dans Firestore
    await addMessagingData(updatedMessagingData);

    // Reset du formulaire après soumission
    setFormData({
      name: '',
      profession: '',
      email: '',
      message: ''
    });

    console.log('Form submitted:', formData);
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
        className="mt-8 text-3xl lg:text-6xl font-montserrat font-bold text-texte_secondary md:text-4xl sm:text-2xl"
        variants={textVariant}
      >
        Hire me for your projects
      </motion.p>

      <motion.p
        className="mb-12 text-xs lg:text-xl font-montserrat"
        variants={textVariant}
        transition={{ delay: 0.4 }}
      >
        Designers, UI, Comms companies and everyone! Elevate your work with stunning 4K 3D renders - Ready to use and customizable
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
            className="mt-1 p-2 w-full border-b border-gray-400 rounded-none shadow-sm hover:border-texte_secondary focus:border-b focus:texte_secondary focus:outline-none focus:shadow-none"
          />
        </div>

        <div className="mr-10 w-full flex flex-row justify-end">
          <motion.button
            className="custom-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
