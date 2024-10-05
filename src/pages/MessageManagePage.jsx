// import React, { useEffect, useState } from 'react';
// import { getMessages, addMessagingData } from '../services/messageService';
// import { FiTrash2 } from 'react-icons/fi';
// import { MdEmail } from 'react-icons/md';
// import GoBackBtn from "src/components/GoBackBtn";
// import { useToast } from '../hooks/use-toast';


// const MessageManagePage = () => {
//     const { toast } = useToast()

//     const [messages, setMessages] = useState([]);

//     useEffect(() => {
//         const fetchMessages = async () => {
//             const actualMessages = await getMessages();
//             setMessages(actualMessages.messages);
//         };

//         fetchMessages();
//     }, []);

//     const handleDelete = async (id) => {
//         if (window.confirm('Are you sure you want to delete this message?')) {
//             const updatedMessages = messages.filter((message) => message.id !== id);
//             setMessages(updatedMessages);

//             await addMessagingData({ messages: updatedMessages });

//             toast({
//                 title: "Réussi",
//                 description: "Message supprimé !",
//                 type: "success",
//             });
//         }
//     };

//     return (
//         <div className="mt-20 min-h-screen bg-gray-100 p-6">
//             <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Message Management</h1>
//             <div className="container mx-auto">


//                 {messages.length > 0 ? (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {messages.map((message, index) => (
//                             <div key={message.id || index} className="bg-white shadow-lg rounded-lg p-6 relative">
//                                 <h2 className="text-xl font-semibold text-gray-800 mb-2">{message.name}</h2>
//                                 <p className="text-gray-600 mb-1">
//                                     <strong>Profession:</strong> {message.profession}
//                                 </p>
//                                 <p className="text-gray-600 mb-1 flex items-center">
//                                     <MdEmail className="mr-2 text-texte_secondary" />
//                                     <a href={`mailto:${message.email}`} className="text-blue-500 underline">
//                                         {message.email}
//                                     </a>
//                                 </p>
//                                 <p className="text-gray-600 mb-2">
//                                     <strong>Message:</strong> {message.message}
//                                 </p>
//                                 <p className="text-sm text-gray-500">
//                                     <strong>Date:</strong> {new Date(message.date).toLocaleString()}
//                                 </p>

//                                 {/* Bouton pour supprimer */}
//                                 <button
//                                     className="absolute top-3 right-3 text-red-500 hover:text-red-700"
//                                     onClick={() => handleDelete(message.id)}
//                                     title="Delete Message"
//                                 >
//                                     <FiTrash2 className="w-6 h-6" />
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <p className="text-center text-gray-600">No messages available.</p>
//                 )}



//             </div>

//             <GoBackBtn />
//         </div>
//     );
// };

// export default MessageManagePage;





import React, { useEffect, useState } from 'react';
import { getMessages, addMessagingData } from '../services/messageService';
import { FiTrash2 } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import GoBackBtn from "src/components/GoBackBtn";
import { useToast } from '../hooks/use-toast';

const MessageManagePage = () => {
    const { toast } = useToast();

    const [messages, setMessages] = useState([]);
    const [openDialog, setOpenDialog] = useState(false); // État pour le dialog
    const [messageToDelete, setMessageToDelete] = useState(null); // Message à supprimer

    useEffect(() => {
        const fetchMessages = async () => {
            const actualMessages = await getMessages();
            setMessages(actualMessages.messages);
        };

        fetchMessages();
    }, []);

    const handleDelete = async () => {
        if (messageToDelete) {
            const updatedMessages = messages.filter((message) => message.id !== messageToDelete);
            setMessages(updatedMessages);

            await addMessagingData({ messages: updatedMessages });

            toast({
                title: "Réussi",
                description: "Message supprimé !",
                type: "success",
            });
        }
        setOpenDialog(false); // Fermer le dialog après la suppression
        setMessageToDelete(null); // Réinitialiser le message à supprimer
    };

    const openDeleteDialog = (id) => {
        setMessageToDelete(id); // Enregistrer l'ID du message à supprimer
        setOpenDialog(true); // Ouvrir le dialog
    };

    const closeDialog = () => {
        setOpenDialog(false); // Fermer le dialog
        setMessageToDelete(null); // Réinitialiser l'ID du message à supprimer
    };

    return (
        <div className="mt-20 min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Message Management</h1>
            <div className="container mx-auto">

                {messages.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {messages.map((message, index) => (
                            <div key={message.id || index} className="bg-white shadow-lg rounded-lg p-6 relative">
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
                                    onClick={() => openDeleteDialog(message.id)} // Ouvrir le dialog avec l'ID du message
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

            <GoBackBtn />

            {/* Dialog de confirmation */}
            {openDialog && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-5 w-11/12 sm:w-1/3">
                        <h2 className="font-bold text-lg mb-4">Confirmation</h2>
                        <p>Êtes-vous sûr de vouloir supprimer ce message ?</p>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={closeDialog}
                                className="bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600 transition mr-2"
                            >
                                Annuler
                            </button>
                            <button
                                onClick={handleDelete}
                                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition"
                            >
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MessageManagePage;
