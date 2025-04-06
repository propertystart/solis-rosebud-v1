
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0 h-full w-full">
        <div className="relative h-full w-full">
          <img 
            src="/lovable-uploads/9ec7ae7c-151d-4425-863d-1b5f57c7d6db.png" 
            alt="Solis Rosebud Building" 
            className="object-cover object-center h-full w-full"
          />
          {/* Semi-transparent overlay to make the image darker */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
      </div>
      
      {/* Hero Content */}
      <div className={`relative z-10 h-full flex items-center justify-center transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center px-6 md:px-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tighter mb-4">
            SOLIS ROSEBUD
          </h1>
          <div className="h-px w-24 bg-noir-gold mx-auto my-6"></div>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
            Luxury Coastal Living in the Heart of Rosebud
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
