
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
    </section>
  );
};

export default Hero;
