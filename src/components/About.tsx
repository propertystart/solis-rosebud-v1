
import React from 'react';
import AnimatedText from './AnimatedText';
import ImageReveal from './ImageReveal';
import ImageCarousel from './ImageCarousel';

const About: React.FC = () => {
  const carouselImages = [
    {
      src: "/lovable-uploads/solis-living-1.jpg",
      alt: "Modern apartment living room with green sofa and open plan kitchen"
    },
    {
      src: "/lovable-uploads/solis-kitchen-1.jpg",
      alt: "Modern kitchen and dining area with wooden finishes"
    },
    {
      src: "/lovable-uploads/solis-courtyard-1.jpg",
      alt: "Balcony with outdoor dining and city skyline view"
    },
    {
      src: "/lovable-uploads/solis-bathroom-1.jpg",
      alt: "Luxury bathroom with stone tile walls and double vanity"
    },
    {
      src: "/lovable-uploads/solis-bedroom-1.jpg",
      alt: "Modern bedroom with mirrored wardrobe and balcony access"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto bg-noir">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
        <div className="order-2 md:order-1 md:col-span-5">
          <div className="space-y-6">
            <div className="inline-block">
              <AnimatedText
                text="ABOUT"
                tag="p"
                className="text-noir-gold text-sm tracking-widest"
                animation="slide-up"
              />
            </div>
            <AnimatedText
              text="AN EXCLUSIVE COLLECTION OF 20 METICULOUSLY CRAFTED RESIDENCES."
              tag="h2"
              className="text-3xl md:text-4xl font-light text-white tracking-tight"
              animation="slide-up"
              delay={100}
            />
            <div className="h-px w-16 bg-noir-gold/50"></div>
            <AnimatedText
              text="Maximising elegance and luxury through the artistry of minimalist architectural design, these exclusive town residences are thoughtfully designed to offer a new genre of beachside living."
              tag="p"
              className="text-gray-300 leading-relaxed"
              animation="slide-up"
              delay={200}
            />
            <AnimatedText
              text="Drawing inspiration from the beauty of local icons, the homes skilfully embody timber boardwalks, bright white pier rails, beach-shack roof angles, and pastel beach-box colours provide homes that are distinctive, yet effortlessly settled within their coastal streetscape."
              tag="p"
              className="text-gray-300 leading-relaxed"
              animation="slide-up"
              delay={300}
            />
            <div className="pt-4">
              <a
                href="#gallery"
                className="inline-block px-6 py-3 bg-noir-gold hover:bg-noir-gold2 text-noir-dark transition-colors duration-300 text-sm font-medium"
              >
                EXPLORE
              </a>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 md:col-span-7">
          <div className="relative">
            <ImageReveal
              animation="slide-left"
              className="rounded-sm overflow-hidden w-full"
            >
              <ImageCarousel 
                images={carouselImages}
                interval={6000}
                aspectRatio="aspect-[16/10]" // Changed to a wider aspect ratio to better fit the grid
                className="rounded-sm overflow-hidden"
              />
            </ImageReveal>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-noir-gold/10 -z-10 rounded-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
