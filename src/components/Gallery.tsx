
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
      src: "/lovable-uploads/bd5f2521-70ea-4f72-bce4-c000c9194971.png",
      alt: "Contemporary kitchen with walnut cabinetry, sea-green backsplash and minimalist pendant lighting",
      category: "kitchens"
    },
    {
      id: 3,
      src: "/lovable-uploads/e6568951-984e-4fa2-b662-6e62f694e27c.png",
      alt: "Master bedroom with large windows, custom bedhead and designer lighting",
      category: "bedrooms"
    },
    {
      id: 4,
      src: "/lovable-uploads/19de20ef-d1cb-4a7e-9687-bb9a7f729222.png",
      alt: "Elegant kitchen with breakfast bar seating, timber accents and abundant natural light",
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
      src: "/lovable-uploads/b341d09f-fa96-4546-9f96-426ac6cf9f2c.png",
      alt: "Serene bedroom with garden views, built-in storage and contemporary furnishings",
      category: "bedrooms"
    },
    {
      id: 7,
      src: "/lovable-uploads/8a7d6138-7e2f-4b5d-831b-925fac741d3b.png",
      alt: "Elegant ensuite bathroom with dual vessel sinks, timber vanity and vertical wall paneling",
      category: "bathrooms"
    },
    {
      id: 8,
      src: "/lovable-uploads/2d4a6752-6157-4c40-8780-0762eed4a3aa.png",
      alt: "Minimalist bathroom with glass shower screen, timber vanity and seamless terrazzo flooring",
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
      src: "/lovable-uploads/bd5f2521-70ea-4f72-bce4-c000c9194971.png",
      alt: "Designer kitchen with mint-green backsplash, white countertops and breakfast bar seating",
      category: "kitchens"
    },
    {
      id: 11,
      src: "/lovable-uploads/da1c5fcd-6fa6-4972-bafb-a904e93d4cfe.png",
      alt: "Bright bedroom with glass doors opening to private courtyard and outdoor dining",
      category: "bedrooms"
    },
    {
      id: 12,
      src: "/lovable-uploads/3f9207d7-6d6c-4653-abe0-abea99fb1f6e.png",
      alt: "Spacious bathroom with natural lighting, double vanity and elegant fixtures",
      category: "bathrooms"
    },
    {
      id: 13,
      src: "/lovable-uploads/6df284a5-d090-4abb-bd88-d31f9a8d052b.png",
      alt: "Luxury bedroom with ensuite access, custom joinery and contemporary art",
      category: "bedrooms"
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
