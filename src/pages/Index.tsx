
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import FloorPlans from '@/components/FloorPlans';
import FittingsFinishes from '@/components/FittingsFinishes';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ImageReveal from '@/components/ImageReveal';
import AnimatedText from '@/components/AnimatedText';

const Index = () => {
  // Smooth scroll to sections when clicking on navigation links
  useEffect(() => {
    const handleNavLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleNavLinkClick);
    
    return () => {
      document.removeEventListener('click', handleNavLinkClick);
    };
  }, []);

  // Reveal animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Lazy loading images
  useEffect(() => {
    const lazyImages = document.querySelectorAll('.lazy-img');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });
      
      lazyImages.forEach((img) => imageObserver.observe(img));
    } else {
      // Fallback for browsers without IntersectionObserver support
      lazyImages.forEach((img) => {
        const imgEl = img as HTMLImageElement;
        imgEl.src = imgEl.dataset.src || '';
        imgEl.classList.add('loaded');
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-noir overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <FittingsFinishes />
      <FloorPlans />
      
      {/* Location Section */}
      <section id="location" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto bg-noir">
        <div className="text-center mb-12">
          <AnimatedText
            text="LOCATION"
            tag="p"
            className="text-noir-gold text-sm tracking-widest"
            animation="slide-up"
          />
          <AnimatedText
            text="23 Rosebud Parade, Rosebud, Vic 3939"
            tag="h2"
            className="text-3xl md:text-4xl font-light text-white tracking-tight mt-3"
            animation="slide-up"
            delay={100}
          />
          <div className="h-px w-16 bg-noir-gold/30 mx-auto mt-6 mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <ImageReveal
            src="/lovable-uploads/3a80180e-e196-4ff8-947c-18b1111a43af.png"
            alt="Location map of Rosebud"
            className="w-full rounded-sm shadow-lg"
            aspectRatio="aspect-[16/9]"
            animation="fade"
          />
        </div>
        
        {/* Community Lifestyle Image */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-noir-light p-6 rounded-sm shadow-lg">
            <ImageReveal
              src="/lovable-uploads/4d94bb69-1b2c-4300-99e5-cd3841beae9c.png"
              alt="Community lifestyle at Solis Rosebud"
              className="w-full rounded-sm shadow-inner"
              aspectRatio="aspect-[16/9]"
              animation="slide-up"
            />
            <div className="mt-6 text-center">
              <h3 className="text-xl font-light text-white">Community Living at Solis Rosebud</h3>
              <p className="text-gray-400 mt-2">Enjoy the perfect blend of urban convenience and relaxed community living</p>
            </div>
          </div>
        </div>
        
        {/* Amenities Section */}
        <div className="max-w-4xl mx-auto bg-noir-light shadow-lg rounded-sm overflow-hidden mb-12">
          <div className="p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Schools Column */}
              <div className="space-y-6 reveal reveal-delay-1">
                <h3 className="text-xl font-medium text-noir-gold border-b border-noir-gold/30 pb-2">SCHOOLS</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex justify-between">
                    <span>Rosebud High School</span>
                    <span className="text-noir-gold">1 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Rosebud South Primary School</span>
                    <span className="text-noir-gold">1 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Rosebud Secondary College</span>
                    <span className="text-noir-gold">2.2 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>St John's College Rosebud</span>
                    <span className="text-noir-gold">200 m</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Rosebud North East Primary School</span>
                    <span className="text-noir-gold">3.9 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sacred Heart Primary School</span>
                    <span className="text-noir-gold">500 m</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Rosebud West Primary School</span>
                    <span className="text-noir-gold">1.2 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Bell Primary School</span>
                    <span className="text-noir-gold">2.2 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Rosebud Primary School</span>
                    <span className="text-noir-gold">2.9 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>St. Raphael's Primary School</span>
                    <span className="text-noir-gold">1.8 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Gower St Kindergarten</span>
                    <span className="text-noir-gold">1.9 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Inspire Early Learning Journey Rosebud</span>
                    <span className="text-noir-gold">2.1 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Parade College</span>
                    <span className="text-noir-gold">600 m</span>
                  </li>
                </ul>
              </div>
              
              {/* Shopping & Medical Column */}
              <div className="space-y-6">
                <div className="reveal reveal-delay-2">
                  <h3 className="text-xl font-medium text-noir-gold border-b border-noir-gold/30 pb-2">SHOPPING</h3>
                  <ul className="space-y-3 text-gray-300 mt-3">
                    <li className="flex justify-between">
                      <span>Rosebud Plaza Shopping Centre</span>
                      <span className="text-noir-gold">3.4 km</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Rosebud South Shopping Centre</span>
                      <span className="text-noir-gold">1.4 km</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Rosebud Central</span>
                      <span className="text-noir-gold">750 m</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Rosebud Market</span>
                      <span className="text-noir-gold">1 km</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Beachcomber Shopping Centre</span>
                      <span className="text-noir-gold">3.3 km</span>
                    </li>
                  </ul>
                </div>
                
                <div className="reveal reveal-delay-3">
                  <h3 className="text-xl font-medium text-noir-gold border-b border-noir-gold/30 pb-2">MEDICAL</h3>
                  <ul className="space-y-3 text-gray-300 mt-3">
                    <li className="flex justify-between">
                      <span>Rosebud Medical & Dental Centre</span>
                      <span className="text-noir-gold">1.7 km</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Rosebud Family Medical</span>
                      <span className="text-noir-gold">700 m</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Rosebud Market Medical Centre</span>
                      <span className="text-noir-gold">1.4 km</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Complete Care Rosebud</span>
                      <span className="text-noir-gold">3.4 km</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Peninsula Medical Centre</span>
                      <span className="text-noir-gold">3.5 km</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Rosebud Medical Specialists</span>
                      <span className="text-noir-gold">2.4 km</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Peninsula Health Medical Centre</span>
                      <span className="text-noir-gold">1.3 km</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Rosebud Hospital</span>
                      <span className="text-noir-gold">5.6 km</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Peninsula Private Hospital</span>
                      <span className="text-noir-gold">5.4 km</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              {/* Parks Column */}
              <div className="space-y-6 reveal reveal-delay-4">
                <h3 className="text-xl font-medium text-noir-gold border-b border-noir-gold/30 pb-2">PARKS</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex justify-between">
                    <span>Rosebud Foreshore</span>
                    <span className="text-noir-gold">350 m</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Rosebud Bay Beach</span>
                    <span className="text-noir-gold">2.7 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Arthurs Seat State Park</span>
                    <span className="text-noir-gold">1.4 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Waterfall Gully Reserve</span>
                    <span className="text-noir-gold">2.8 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Rosebud Pier</span>
                    <span className="text-noir-gold">1.3 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Rosebud Recreation Reserve</span>
                    <span className="text-noir-gold">900 m</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Waterfall Gardens</span>
                    <span className="text-noir-gold">2.2 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Drummond Reserve</span>
                    <span className="text-noir-gold">2.0 km</span>
                  </li>
                </ul>
              </div>
              
              {/* Points of Interest & Walkability */}
              <div className="space-y-6">
                <div className="reveal reveal-delay-5">
                  <h3 className="text-xl font-medium text-noir-gold border-b border-noir-gold/30 pb-2">POINTS OF INTEREST</h3>
                  <ul className="space-y-3 text-gray-300 mt-3">
                    <li className="flex justify-between">
                      <span>Rosebud Library</span>
                      <span className="text-noir-gold">1.6 km</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Rosebud Pier</span>
                      <span className="text-noir-gold">1.2 km</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Rosebud Community Centre</span>
                      <span className="text-noir-gold">4.0 km</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Peninsula Hot Springs</span>
                      <span className="text-noir-gold">8.3 km</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-noir-gold/10 p-6 rounded-sm mt-6 border border-noir-gold/20 reveal reveal-delay-6">
                  <h3 className="text-xl font-medium text-white mb-2">Walkability Score: <span className="text-noir-gold">92</span></h3>
                  <p className="text-gray-300">Most daily errands can be done without a car</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-noir-light shadow-lg rounded-sm overflow-hidden">
          <div className="p-8 md:p-10 space-y-8">
            <AnimatedText
              text="Invest in Rosebud, Mornington Peninsula – A Prime Opportunity for High Rental Yields!"
              tag="h3"
              className="text-2xl font-medium text-white text-center"
              animation="slide-up"
              delay={150}
            />
            
            <AnimatedText
              text="Rosebud is rapidly emerging as one of Mornington Peninsula's most promising investment hotspots, offering exceptional opportunities for property investors seeking strong rental yields, capital growth, and long-term stability."
              tag="p"
              className="text-gray-300 leading-relaxed"
              animation="slide-up"
              delay={200}
            />
            
            <div className="mt-8">
              <AnimatedText
                text="Why Invest in Rosebud?"
                tag="h4"
                className="text-xl font-medium text-noir-gold mb-4"
                animation="slide-up"
                delay={250}
              />
              
              <div className="space-y-5">
                <div className="flex items-start gap-4 reveal reveal-delay-1">
                  <span className="text-noir-gold text-xl flex-shrink-0">✅</span>
                  <div>
                    <span className="font-medium text-white">High Rental Demand</span>
                    <p className="text-gray-300 mt-1">With its proximity to Melbourne, excellent access to beaches, and thriving local economy, Rosebud attracts a diverse tenant base, including young professionals, retirees, and families.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 reveal reveal-delay-2">
                  <span className="text-noir-gold text-xl flex-shrink-0">✅</span>
                  <div>
                    <span className="font-medium text-white">Strong Rental Yields</span>
                    <p className="text-gray-300 mt-1">Investors can expect above-average rental returns due to the increasing demand for quality apartments. With the Mornington Peninsula's rental market tightening, properties in Rosebud are achieving low vacancy rates and competitive rental prices.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 reveal reveal-delay-3">
                  <span className="text-noir-gold text-xl flex-shrink-0">✅</span>
                  <div>
                    <span className="font-medium text-white">Capital Growth Potential</span>
                    <p className="text-gray-300 mt-1">As one of Mornington Peninsula's fastest-growing suburbs, Rosebud has seen significant property value appreciation over the years. With continued infrastructure developments, modern amenities, and lifestyle upgrades, capital growth prospects remain strong.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 reveal reveal-delay-4">
                  <span className="text-noir-gold text-xl flex-shrink-0">✅</span>
                  <div>
                    <span className="font-medium text-white">Lifestyle & Connectivity</span>
                    <p className="text-gray-300 mt-1">Rosebud offers a vibrant mix of café culture, shopping districts, beautiful beaches, and entertainment options, making it an attractive place to live. The suburb also boasts excellent transport links, ensuring seamless connectivity to Melbourne and surrounding areas.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 reveal reveal-delay-5">
                  <span className="text-noir-gold text-xl flex-shrink-0">✅</span>
                  <div>
                    <span className="font-medium text-white">Affordable Investment Entry Point</span>
                    <p className="text-gray-300 mt-1">Compared to neighboring beach suburbs, Rosebud provides affordable apartment prices while still delivering strong rental yields—a perfect combination for savvy investors looking for the best of both worlds.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-noir-gold/10 p-6 rounded-sm reveal reveal-delay-6 border border-noir-gold/20">
              <h4 className="text-xl font-medium text-white mb-2">The Time to Invest is Now!</h4>
              <p className="text-gray-300">With rising rental demand, increasing property values, and continued suburban revitalization, Rosebud is an outstanding location to secure a high-performing investment property. Whether you're a first-time investor or expanding your portfolio, this is your chance to capitalize on one of Mornington Peninsula's most promising suburbs.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
