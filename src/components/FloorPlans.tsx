
import React, { useState } from 'react';
import AnimatedText from './AnimatedText';
import ImageReveal from './ImageReveal';

type FloorPlanType = {
  id: number;
  title: string;
  image: string;
  specs: {
    bedrooms: number;
    bathrooms: number;
    carpark: number;
    internalArea: string;
    externalArea: string;
    totalArea: string;
  };
};

const FloorPlans: React.FC = () => {
  const [activePlan, setActivePlan] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);
  
  // Updated floor plan data with new image for Residence One only
  const floorPlans: FloorPlanType[] = [
    {
      id: 1,
      title: "Residence One",
      image: "/lovable-uploads/2372da53-fe16-4399-86bf-afd013912415.png",
      specs: {
        bedrooms: 4,
        bathrooms: 3.5,
        carpark: 2,
        internalArea: "228.3sqm",
        externalArea: "174.0sqm",
        totalArea: "402.3sqm"
      }
    },
    {
      id: 2,
      title: "Residence Two",
      image: "/lovable-uploads/0ae54b26-c04b-47b5-8935-722fea74443c.png",
      specs: {
        bedrooms: 4,
        bathrooms: 3.5,
        carpark: 2,
        internalArea: "248.0sqm",
        externalArea: "179.0sqm",
        totalArea: "427.0sqm"
      }
    },
    {
      id: 3,
      title: "Residence Three",
      image: "/lovable-uploads/82cf0388-899e-47b0-84ff-60f99dee3a7c.png",
      specs: {
        bedrooms: 4,
        bathrooms: 3.5,
        carpark: 2,
        internalArea: "255.0sqm",
        externalArea: "100.9sqm",
        totalArea: "355.9sqm"
      }
    },
    {
      id: 4,
      title: "Residence Eight",
      image: "/lovable-uploads/efe936fe-72bf-48f3-9321-653b949b793b.png",
      specs: {
        bedrooms: 4,
        bathrooms: 3.5,
        carpark: 2,
        internalArea: "240.0sqm",
        externalArea: "96.0sqm",
        totalArea: "336.0sqm"
      }
    },
    {
      id: 5,
      title: "Residence Ten",
      image: "/lovable-uploads/fdbd07fe-473a-4153-87c2-00f9d9032c29.png",
      specs: {
        bedrooms: 3,
        bathrooms: 2.5,
        carpark: 2,
        internalArea: "183.0sqm",
        externalArea: "81.0sqm",
        totalArea: "264.0sqm"
      }
    },
    {
      id: 6,
      title: "Residence Sixteen",
      image: "/lovable-uploads/77937997-5f14-4102-9e71-8e3e1de8cfa0.png",
      specs: {
        bedrooms: 3,
        bathrooms: 2.5,
        carpark: 2,
        internalArea: "191.0sqm",
        externalArea: "106.0sqm",
        totalArea: "297.0sqm"
      }
    }
  ];

  // Intersection Observer for animations
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const sectionElement = document.getElementById('floor-plans');
    if (sectionElement) observer.observe(sectionElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, []);

  return (
    <section id="floor-plans" className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <AnimatedText
            text="FLOOR PLANS"
            tag="p"
            className="text-noir-gold text-sm tracking-widest"
            animation="slide-up"
          />
          <AnimatedText
            text="Choose Your Perfect Space"
            tag="h2"
            className="text-3xl md:text-4xl font-light text-white tracking-tight mt-3"
            animation="slide-up"
            delay={100}
          />
          <div className="h-px w-16 bg-noir-gold/30 mx-auto mt-6 mb-6"></div>
          <AnimatedText
            text="Explore our range of thoughtfully designed floor plans tailored to suit various lifestyle needs."
            tag="p"
            className="text-gray-300 max-w-2xl mx-auto"
            animation="slide-up"
            delay={200}
          />
        </div>

        {/* Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {floorPlans.map((plan, index) => (
            <button
              key={plan.id}
              onClick={() => setActivePlan(activePlan === index ? null : index)}
              className={`px-5 py-3 transition-colors duration-300 ${
                activePlan === index
                  ? 'bg-noir-gold text-white'
                  : 'bg-noir-dark border border-gray-700 text-white hover:bg-noir-gold/20'
              }`}
            >
              <div className="text-left">
                <div className={`font-medium ${activePlan === index ? 'text-white' : 'text-white'}`}>
                  {plan.title}
                </div>
                <div className={`text-sm ${activePlan === index ? 'text-white/80' : 'text-gray-400'}`}>
                  {plan.specs.bedrooms} Bed • {plan.specs.bathrooms} Bath • {plan.specs.totalArea}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Message when no plan is selected */}
        {activePlan === null && (
          <div className="text-center my-16">
            <p className="text-white text-lg">Please select a floor plan to view details.</p>
          </div>
        )}

        {/* Current Floor Plan Display */}
        {activePlan !== null && (
          <div className={`transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-noir-light shadow-md rounded-sm overflow-hidden">
              <div className="md:flex">
                {/* Floor Plan Image - Updated to prevent cropping */}
                <div className="md:w-3/4">
                  <ImageReveal
                    src={floorPlans[activePlan].image}
                    alt={`Floor plan for ${floorPlans[activePlan].title}`}
                    aspectRatio="aspect-auto" 
                    className="w-full h-full object-contain" 
                    animation="fade"
                  />
                </div>
                
                {/* Specifications */}
                <div className="md:w-1/4 p-6 md:p-8 bg-noir-dark">
                  <h3 className="text-2xl font-light text-white mb-6">
                    {floorPlans[activePlan].title}
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                      <span className="text-gray-300">Bedrooms</span>
                      <span className="font-medium text-white">{floorPlans[activePlan].specs.bedrooms}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                      <span className="text-gray-300">Bathrooms</span>
                      <span className="font-medium text-white">{floorPlans[activePlan].specs.bathrooms}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                      <span className="text-gray-300">Car Parks</span>
                      <span className="font-medium text-white">{floorPlans[activePlan].specs.carpark}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                      <span className="text-gray-300">Internal Area</span>
                      <span className="font-medium text-white">{floorPlans[activePlan].specs.internalArea}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                      <span className="text-gray-300">External Area</span>
                      <span className="font-medium text-white">{floorPlans[activePlan].specs.externalArea}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Total Area</span>
                      <span className="font-medium text-white">{floorPlans[activePlan].specs.totalArea}</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="bg-noir-gold/10 p-4 rounded-sm">
                      <h4 className="text-sm font-medium text-white">Legend:</h4>
                      <ul className="text-sm text-gray-300 mt-2 space-y-1">
                        <li><span className="font-medium">CL</span> - Clothesline</li>
                        <li><span className="font-medium">D</span> - Dishwasher</li>
                        <li><span className="font-medium">F</span> - Fridge</li>
                        <li><span className="font-medium">P</span> - Pantry</li>
                        <li><span className="font-medium">S</span> - Storage</li>
                        <li><span className="font-medium">TAP</span> - Outdoor Water Tap</li>
                        <li><span className="font-medium">WM</span> - Washing Machine</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FloorPlans;
