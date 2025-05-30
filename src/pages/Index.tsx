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
import LocationAmenities from '@/components/LocationAmenities';
import { MapPin, Home, Umbrella, Building, Compass, Car, Mountain, Wine, School, Store, Coffee, Calculator } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Index = () => {
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
      
      <section id="location" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto bg-noir">
        <div className="text-center mb-12">
          <AnimatedText
            text="LOCATION"
            tag="p"
            className="text-noir-gold text-sm tracking-widest"
            animation="slide-up"
          />
          <AnimatedText
            text="Stylish Coastal Townhouses in the Heart of Rosebud"
            tag="h2"
            className="text-3xl md:text-4xl font-light text-white tracking-tight mt-3"
            animation="slide-up"
            delay={100}
          />
          <div className="h-px w-16 bg-noir-gold/30 mx-auto mt-6 mb-6"></div>
          <AnimatedText
            text="Where Beachside Living Meets Modern Comfort"
            tag="p"
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            animation="slide-up"
            delay={150}
          />
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <ImageReveal
            src="/lovable-uploads/8d01b5ed-018a-457e-875a-faf6e3ad7e27.png"
            alt="Aerial view of Rosebud showing nearby amenities"
            className="w-full rounded-sm shadow-lg"
            aspectRatio="aspect-[16/9]"
            animation="fade"
          />
        </div>
        
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-white text-lg leading-relaxed mb-8">
            Step into a new chapter of effortless living with these brand-new, architecturally designed townhouses nestled in the vibrant heart of Rosebud. Perfect for first-home buyers, downsizers, or savvy investors, this boutique development delivers the ultimate blend of sleek contemporary style and relaxed coastal charm—just moments from the beach.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="bg-noir-light p-8 md:p-10 rounded-sm shadow-lg border border-noir-gold/20">
            <div className="flex items-center mb-6">
              <MapPin className="h-6 w-6 text-noir-gold mr-3" />
              <h3 className="text-2xl font-light text-white">The Location – A Coastal Culture with City Convenience</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-8">
              A Peninsula lifestyle has never been so enjoyable, with every indulgence at your doorstep. Located within walking distance to Rosebud's celebrated restaurants and cafés, buzzing bars, cinemas, and boutique shopping, and just a short stroll to the picturesque foreshore, these townhouses offer a life that's both tranquil and connected.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-8">
              With immediate access to local schools, Rosebud Plaza, and the Mornington Peninsula Freeway, you'll be just over an hour from Melbourne's CBD. This is the ultimate gateway to weekend adventures—think hiking, fishing, golfing, artisan markets, award-winning wineries, and breathtaking nature reserves.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-noir p-6 rounded-sm border border-noir-gold/10 hover:border-noir-gold/30 transition-all reveal reveal-delay-1">
                <Umbrella className="h-10 w-10 text-noir-gold mb-4" />
                <h4 className="text-lg font-medium text-white mb-2">Beach Lifestyle</h4>
                <p className="text-gray-400">Just a short stroll to Rosebud's picturesque foreshore and sandy beaches</p>
              </div>
              
              <div className="bg-noir p-6 rounded-sm border border-noir-gold/10 hover:border-noir-gold/30 transition-all reveal reveal-delay-2">
                <Coffee className="h-10 w-10 text-noir-gold mb-4" />
                <h4 className="text-lg font-medium text-white mb-2">Vibrant Culture</h4>
                <p className="text-gray-400">Walking distance to celebrated restaurants, cafés, bars, and boutique shopping</p>
              </div>
              
              <div className="bg-noir p-6 rounded-sm border border-noir-gold/10 hover:border-noir-gold/30 transition-all reveal reveal-delay-3">
                <Car className="h-10 w-10 text-noir-gold mb-4" />
                <h4 className="text-lg font-medium text-white mb-2">Easy Access</h4>
                <p className="text-gray-400">Immediate access to Mornington Peninsula Freeway, just over an hour from Melbourne CBD</p>
              </div>
            </div>
          </div>


          <LocationAmenities />
          
          <div className="max-w-4xl mx-auto">
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
                <p className="text-gray-400 mt-2">Enjoy the perfect blend of urban convenience and relaxed coastal living</p>
              </div>
            </div>
          </div>
          
          <div className="bg-noir-light p-8 md:p-10 rounded-sm shadow-lg border border-noir-gold/20">
            <div className="flex items-center mb-6">
              <Home className="h-6 w-6 text-noir-gold mr-3" />
              <h3 className="text-2xl font-light text-white">A Smart Move – Buy Off the Plan & Save</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-8">
              Take advantage of generous stamp duty savings by purchasing off the plan. This is a rare opportunity to invest early and maximise value in one of the Mornington Peninsula's most sought-after lifestyle destinations.
            </p>
            
            <div className="bg-noir-gold/10 p-6 rounded-sm border border-noir-gold/20 mt-6 reveal reveal-delay-4">
              <h4 className="text-xl font-medium text-white mb-3">Effortless Living, Exceptional Lifestyle</h4>
              <p className="text-gray-300 leading-relaxed">
                Each townhouse showcases light-filled open-plan living, premium finishes, and low-maintenance outdoor spaces—designed to suit modern lifestyles with a relaxed, coastal twist. Whether it's morning walks on the sand, long lunches by the sea, or wine weekends in the hinterland, this is living at its absolute best.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center reveal reveal-delay-1">
              <div className="rounded-full bg-noir-light p-4 inline-flex items-center justify-center mb-3 border border-noir-gold/20">
                <Umbrella className="h-8 w-8 text-noir-gold" />
              </div>
              <p className="text-white">Beach Access</p>
            </div>
            <div className="text-center reveal reveal-delay-2">
              <div className="rounded-full bg-noir-light p-4 inline-flex items-center justify-center mb-3 border border-noir-gold/20">
                <Store className="h-8 w-8 text-noir-gold" />
              </div>
              <p className="text-white">Shopping</p>
            </div>
            <div className="text-center reveal reveal-delay-3">
              <div className="rounded-full bg-noir-light p-4 inline-flex items-center justify-center mb-3 border border-noir-gold/20">
                <School className="h-8 w-8 text-noir-gold" />
              </div>
              <p className="text-white">Schools</p>
            </div>
            <div className="text-center reveal reveal-delay-4">
              <div className="rounded-full bg-noir-light p-4 inline-flex items-center justify-center mb-3 border border-noir-gold/20">
                <Wine className="h-8 w-8 text-noir-gold" />
              </div>
              <p className="text-white">Wineries</p>
            </div>
          </div>
          
          <div className="text-center mt-12 max-w-xl mx-auto reveal reveal-delay-1">
            <h3 className="text-2xl font-light text-white mb-6">Experience the Rosebud Lifestyle</h3>
            <a href="#contact" className="inline-block px-8 py-3 bg-noir-gold text-noir-dark font-medium rounded-sm hover:bg-noir-gold2 transition-colors">
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
      
      <section id="depreciation-schedule" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto bg-noir">
        <div className="text-center mb-12">
          <AnimatedText
            text="INVESTMENT OPPORTUNITY"
            tag="p"
            className="text-noir-gold text-sm tracking-widest"
            animation="slide-up"
          />
          <AnimatedText
            text="Depreciation Schedule for Investors"
            tag="h2"
            className="text-3xl md:text-4xl font-light text-white tracking-tight mt-3"
            animation="slide-up"
            delay={100}
          />
          <div className="h-px w-16 bg-noir-gold/30 mx-auto mt-6 mb-6"></div>
          <AnimatedText
            text="Maximize Your Investment Returns with Significant Tax Benefits"
            tag="p"
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            animation="slide-up"
            delay={150}
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-noir-light p-8 md:p-10 rounded-sm shadow-lg border border-noir-gold/20">
            <div className="flex items-center mb-6">
              <Calculator className="h-6 w-6 text-noir-gold mr-3" />
              <h3 className="text-2xl font-light text-white">Example Depreciation Schedule – Based on $900,000 Townhouse</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-8">
              Investors purchasing a brand-new $900,000 townhouse can benefit from substantial tax deductions through depreciation. Here's a sample 5-year breakdown:
            </p>
            
            <div className="overflow-x-auto">
              <Table className="w-full">
                <TableHeader className="bg-noir-dark/50">
                  <TableRow>
                    <TableHead className="text-noir-gold">Year</TableHead>
                    <TableHead className="text-noir-gold">Building Depreciation (2.5% p.a.)</TableHead>
                    <TableHead className="text-noir-gold">Fixtures & Fittings (Est.)</TableHead>
                    <TableHead className="text-noir-gold">Total Deduction (Est.)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-white font-medium">1</TableCell>
                    <TableCell className="text-white">$11,250</TableCell>
                    <TableCell className="text-white">$8,500</TableCell>
                    <TableCell className="text-white font-semibold">$19,750</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white font-medium">2</TableCell>
                    <TableCell className="text-white">$11,250</TableCell>
                    <TableCell className="text-white">$6,000</TableCell>
                    <TableCell className="text-white font-semibold">$17,250</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white font-medium">3</TableCell>
                    <TableCell className="text-white">$11,250</TableCell>
                    <TableCell className="text-white">$4,000</TableCell>
                    <TableCell className="text-white font-semibold">$15,250</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white font-medium">4</TableCell>
                    <TableCell className="text-white">$11,250</TableCell>
                    <TableCell className="text-white">$3,000</TableCell>
                    <TableCell className="text-white font-semibold">$14,250</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white font-medium">5</TableCell>
                    <TableCell className="text-white">$11,250</TableCell>
                    <TableCell className="text-white">$2,000</TableCell>
                    <TableCell className="text-white font-semibold">$13,250</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <p className="text-white font-medium mt-4 text-center">
              Estimated Total Deduction Over 5 Years: <span className="text-noir-gold">$79,750</span>
            </p>
            
            <div className="mt-10 bg-noir-gold/10 p-6 rounded-sm border border-noir-gold/20">
              <h4 className="text-xl font-medium text-white mb-3 flex items-center">
                <span className="text-noir-gold text-2xl mr-2">✓</span> Why It Matters
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Depreciation can significantly reduce your taxable income, improving your cash flow and boosting your long-term return on investment. These benefits are exclusive to brand-new properties, making off-the-plan purchases even more attractive.
              </p>
            </div>
            
            <div className="mt-6 text-sm text-gray-400 italic">
              <p>
                Note: This is a general example only. Actual amounts will vary depending on specific building costs, finishes, and your tax situation. Consult a qualified quantity surveyor or accountant for a detailed, compliant schedule.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12 max-w-xl mx-auto reveal reveal-delay-1">
            <h3 className="text-2xl font-light text-white mb-6">Ready to Discuss Your Investment Potential?</h3>
            <a href="#contact" className="inline-block px-8 py-3 bg-noir-gold text-noir-dark font-medium rounded-sm hover:bg-noir-gold2 transition-colors">
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
