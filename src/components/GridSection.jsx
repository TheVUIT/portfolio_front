
import React, { useEffect } from 'react';
// import '@google/model-viewer';

const GridSection = () => {
  const gridItems = [
    { id: 1, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 1' },
    { id: 2, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 2' },
    { id: 3, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 3' },
    { id: 4, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 3' },
    { id: 5, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 3' },
    { id: 6, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 3' },
    { id: 7, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 3' },
    { id: 8, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 3' },
    { id: 9, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 3' },
    { id: 10, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 3' },
    { id: 11, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 3' },
    { id: 12, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 3' },
    { id: 13, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 3' },
    { id: 14, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 3' },
    { id: 15, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 3' },
  ];

  useEffect(() => {
    if (!document.querySelector('script[src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <section className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {gridItems.map((item) => (
          <div key={item.id} className="relative group cursor-pointer">
            {/* Model Viewer pour afficher le modèle 3D */}
            <model-viewer
              alt={item.title}
              src={item.modelUrl}
              ar
              ar-modes="webxr scene-viewer quick-look"
              seamless-poster
              shadow-intensity="1"
              camera-controls
              auto-rotate
              className="w-full h-auto"
            ></model-viewer>
            {/* Titre affiché au survol */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <span className="text-white text-lg">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridSection;
