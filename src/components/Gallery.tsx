
import React, { useState, useEffect } from 'react';
import AnimatedText from './AnimatedText';
import ImageReveal from './ImageReveal';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';

type GalleryCategory = 'livingrooms' | 'bedrooms' | 'kitchens' | 'bathrooms';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: GalleryCategory;
}

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | null>(null);
  const [isInView, setIsInView] = useState(false);
  
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "/lovable-uploads/d35ecfd6-e0ec-4c49-8912-4feff93c4505.png",
      alt: "Spacious open-plan living room with dining area, contemporary furniture and natural light",
      category: "livingrooms"
    },
    {
      id: 2,
      src: "/lovable-uploads/2e41f948-430c-4b1c-aa61-d7a74eb2235c.png",
      alt: "Designer kitchen with timber cabinetry and island dining area",
      category: "kitchens"
    },
    {
      id: 3,
      src: "/lovable-uploads/a7047f15-3d4a-4d91-865a-4437b365fad6.png",
      alt: "Master bedroom with mirrored wardrobes and private balcony",
      category: "bedrooms"
    },
    {
      id: 4,
      src: "/lovable-uploads/c87b078e-353a-499b-973d-6469d7131fb1.png",
      alt: "Elegant kitchen with light timber cabinetry and linear lighting",
      category: "kitchens"
    },
    {
      id: 5,
      src: "/lovable-uploads/fd49a0d6-5f58-402a-a68e-21aab10a8e2d.png",
      alt: "Modern living space with sectional sofa and open staircase",
      category: "livingrooms"
    },
    {
      id: 6,
      src: "/lovable-uploads/f097e92b-4188-4db5-ab7e-07c733bdb441.png",
      alt: "Bright bedroom with timber bedside table and city views",
      category: "bedrooms"
    },
    {
      id: 7,
      src: "/lovable-uploads/dc9890f1-5bcb-400c-956a-286c8464edd4.png",
      alt: "Elegant bathroom with natural stone walls and fluted glass shower",
      category: "bathrooms"
    },
    {
      id: 8,
      src: "/lovable-uploads/650e14e6-5c16-4ac5-951c-4162244516cb.png",
      alt: "Luxury ensuite with double vessel sinks and backlit mirror",
      category: "bathrooms"
    },
    {
      id: 9,
      src: "/lovable-uploads/bc8fec62-e3ca-40ff-8173-fc9e95b755d4.png",
      alt: "Contemporary living room with garden views and minimalist decor",
      category: "livingrooms"
    },
    {
      id: 10,
      src: "/lovable-uploads/b24b1501-d71d-4eac-aae3-ed10d3553e15.png",
      alt: "Minimalist galley kitchen with white countertops and gas cooktop",
      category: "kitchens"
    },
    {
      id: 11,
      src: "/lovable-uploads/85fd1faf-3429-4f5e-9161-ac436fbb0d65.png",
      alt: "Stylish bedroom with curved fabric bedhead and timber side table",
      category: "bedrooms"
    },
    {
      id: 12,
      src: "/lovable-uploads/46c2d0b0-a244-42de-ad1f-c5e739188d59.png",
      alt: "Contemporary bathroom with freestanding bath and rainfall shower",
      category: "bathrooms"
    }
  ];

  const filteredItems = activeCategory
    ? galleryItems.filter(item => item.category === activeCategory)
    : [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const sectionElement = document.getElementById('gallery');
    if (sectionElement) observer.observe(sectionElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, []);

  const toggleCategory = (category: GalleryCategory) => {
    setActiveCategory(prev => prev === category ? null : category);
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-noir-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <AnimatedText
            text="GALLERY"
            tag="p"
            className="text-noir-gold text-sm tracking-widest"
            animation="slide-up"
          />
          <AnimatedText
            text="Experience Solis Rosebud"
            tag="h2"
            className="text-3xl md:text-4xl font-light text-white tracking-tight mt-3"
            animation="slide-up"
            delay={100}
          />
          <div className="h-px w-16 bg-noir-gold/30 mx-auto mt-6 mb-6"></div>
          <AnimatedText
            text="Browse our collection of images showcasing the exceptional quality and design of Solis Rosebud."
            tag="p"
            className="text-gray-300 max-w-2xl mx-auto"
            animation="slide-up"
            delay={200}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {['livingrooms', 'kitchens', 'bedrooms', 'bathrooms'].map((category) => (
            <button
              key={category}
              onClick={() => toggleCategory(category as GalleryCategory)}
              className={`px-4 py-2 text-sm transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-noir-gold text-noir-dark'
                  : 'bg-noir-dark text-white hover:bg-noir-gold/20'
              }`}
            >
              {category === 'kitchens' 
                ? 'Modern Kitchens' 
                : category === 'bedrooms'
                  ? 'Generous Bedrooms'
                  : category === 'bathrooms'
                    ? 'Modern Bathroom Design'
                    : category === 'livingrooms' 
                      ? 'Luxury Living Rooms'
                      : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {!activeCategory && (
          <div className="text-center my-16">
            <p className="text-white text-lg">Please select a category to view images.</p>
          </div>
        )}

        {activeCategory && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredItems.map((item, index) => (
              <div key={item.id} className={`transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <ImageReveal
                  src={item.src}
                  alt={item.alt}
                  aspectRatio="aspect-[4/3]"
                  className="rounded-sm overflow-hidden"
                  animation="fade"
                  delay={index * 100}
                />
                <p className="mt-2 text-sm text-gray-400">{item.alt}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
