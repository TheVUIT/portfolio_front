import React from 'react';
const Loading = () => {
    return (
        <div className='w-full min-h-screen flex flex-row justify-center items-center'>
            <span className="loader"></span> {/* Insertion de l'animation SVG */}
            {/* <p className='text-green-500 text-4xl lg:text-6xl font-ubuntu font-bold mt-8'>En cours de téléchargement</p> */}
        </div>
    );
}

export default Loading;
