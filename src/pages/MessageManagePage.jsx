

// import React, { useEffect, useState } from 'react';
// import { getMessages, deleteMessage } from '../services/messageService';
// import { FiTrash2 } from 'react-icons/fi'; // Icone pour la suppression
// import { MdEmail } from 'react-icons/md'; // Icone pour l'email
// import { toast } from 'react-toastify'; // Optionnel: Pour afficher des notifications de succès ou d'erreur
// import 'react-toastify/dist/ReactToastify.css'; // Style pour les notifications
// import GoBackBtn from "src/components/GoBackBtn";

// const MessageManagePage = () => {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     const fetchMessages = async () => {
//       const actualMessages = await getMessages();
//       setMessages(actualMessages.messages); // Supposons que getMessages retourne un tableau de messages
//     };

//     fetchMessages();
//   }, []);

//   // Fonction pour supprimer un message
//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this message?')) {
//       const success = await deleteMessage(id); // Supposons que deleteMessage supprime du Firestore
//       if (success) {
//         setMessages(messages.filter((message) => message.id !== id));
//         toast.success('Message deleted successfully'); // Notification de succès
//       } else {
//         toast.error('Failed to delete message');
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Message Management</h1>
//       <div className="container mx-auto">
//         {messages.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {messages.map((message) => (
//               <div key={message.id} className="bg-white shadow-lg rounded-lg p-6 relative">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-2">{message.name}</h2>
//                 <p className="text-gray-600 mb-1">
//                   <strong>Profession:</strong> {message.profession}
//                 </p>
//                 <p className="text-gray-600 mb-1 flex items-center">
//                   <MdEmail className="mr-2 text-texte_secondary" /> 
//                   <a href={`mailto:${message.email}`} className="text-blue-500 underline">
//                     {message.email}
//                   </a>
//                 </p>
//                 <p className="text-gray-600 mb-2">
//                   <strong>Message:</strong> {message.message}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   <strong>Date:</strong> {new Date(message.date).toLocaleString()}
//                 </p>

//                 {/* Bouton pour supprimer */}
//                 <button 
//                   className="absolute top-3 right-3 text-red-500 hover:text-red-700"
//                   onClick={() => handleDelete(message.id)}
//                   title="Delete Message"
//                 >
//                   <FiTrash2 className="w-6 h-6" />
//                 </button>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No messages available.</p>
//         )}
//       </div>

//       <GoBackBtn/>
//     </div>
//   );
// };

// export default MessageManagePage;



import React, { useEffect, useState } from 'react';
import { getMessages, addMessagingData } from '../services/messageService'; // On garde la fonction pour ajouter des données
import { FiTrash2 } from 'react-icons/fi'; // Icône pour la suppression
import { MdEmail } from 'react-icons/md'; // Icône pour l'email
import { toast } from 'react-toastify'; // Pour afficher des notifications de succès ou d'erreur
import 'react-toastify/dist/ReactToastify.css'; // Style pour les notifications
import GoBackBtn from "src/components/GoBackBtn"; // Bouton pour revenir en arrière

const MessageManagePage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const actualMessages = await getMessages();
      setMessages(actualMessages.messages); // Supposons que getMessages retourne un tableau de messages
    };

    fetchMessages();
  }, []);

  // Fonction pour supprimer un message
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      // Filtrer le message supprimé de l'état local
      const updatedMessages = messages.filter((message) => message.id !== id);
      setMessages(updatedMessages); // Met à jour la liste des messages

      // Réajouter les données mises à jour dans Firestore
      await addMessagingData({ messages: updatedMessages });

      toast.success('Message deleted successfully'); // Notification de succès
    }
  };

  return (
    <div className="mt-20 min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Message Management</h1>
      <div className="container mx-auto">
        {messages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {messages.map((message) => (
              <div key={message.id} className="bg-white shadow-lg rounded-lg p-6 relative">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{message.name}</h2>
                <p className="text-gray-600 mb-1">
                  <strong>Profession:</strong> {message.profession}
                </p>
                <p className="text-gray-600 mb-1 flex items-center">
                  <MdEmail className="mr-2 text-texte_secondary" /> 
                  <a href={`mailto:${message.email}`} className="text-blue-500 underline">
                    {message.email}
                  </a>
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Message:</strong> {message.message}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Date:</strong> {new Date(message.date).toLocaleString()}
                </p>

                {/* Bouton pour supprimer */}
                <button 
                  className="absolute top-3 right-3 text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(message.id)}
                  title="Delete Message"
                >
                  <FiTrash2 className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No messages available.</p>
        )}
      </div>

      <GoBackBtn /> {/* Ajout du bouton pour revenir en arrière */}
    </div>
  );
};

export default MessageManagePage;
