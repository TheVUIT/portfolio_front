import React, { useEffect, useRef, useState } from 'react';
import ButtonCarousel from './ButtonCarousel';

const GridSection = () => {
  const gridItems = [
    { id: 1, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 1' },
    { id: 2, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 2' },
    { id: 2, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 2' },
    { id: 2, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 2' },
    { id: 2, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 2' },
    { id: 2, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 2' },
    { id: 2, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 2' },
    { id: 2, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 2' },
    { id: 2, modelUrl: 'https://d1a370nemizbjq.cloudfront.net/0a08c3a8-c67a-41ea-bfdb-28d0e9894db7.glb', title: 'Modèle 3D 2' },
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
    <section className="flex flex-col items-center justify-center p-4">
      {/* Placez les boutons ici pour éviter qu'ils se répètent */}
      <ButtonCarousel />

      {/* Grille d'éléments */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {gridItems.map((item) => (
          <GridItem key={item.id} modelUrl={item.modelUrl} title={item.title} />
        ))}
      </div>
    </section>
  );
};

const GridItem = ({ modelUrl, title }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="relative group cursor-pointer">
      {isVisible && (
        <model-viewer
          alt={title}
          src={modelUrl}
          ar
          ar-modes="webxr scene-viewer quick-look"
          seamless-poster
          shadow-intensity="1"
          camera-controls
          auto-rotate
          className="w-full h-auto"
        ></model-viewer>
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <span className="text-white text-lg">{title}</span>
      </div>
    </div>
  );
};

export default GridSection;
