
import React, { useState } from 'react';
import AnimatedText from './AnimatedText';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PaletteIcon } from 'lucide-react';
import ImageReveal from './ImageReveal';

type RoomType = 'kitchen' | 'bathroom' | 'living' | 'laundry';

const FittingsFinishes: React.FC = () => {
  const [activeTab, setActiveTab] = useState<RoomType | null>(null);

  const handleTabChange = (value: string) => {
    setActiveTab(prev => prev === value as RoomType ? null : value as RoomType);
  };

  return (
    <section id="fittings-finishes" className="py-20 md:py-32 bg-noir">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <AnimatedText
            text="FITTINGS & FINISHES"
            tag="p"
            className="text-noir-gold text-sm tracking-widest"
            animation="slide-up"
          />
          <AnimatedText
            text="Premium Quality Specifications"
            tag="h2"
            className="text-3xl md:text-4xl font-light text-white tracking-tight mt-3"
            animation="slide-up"
            delay={100}
          />
          <div className="h-px w-16 bg-noir-gold/30 mx-auto mt-6 mb-6"></div>
          <AnimatedText
            text="Solis Rosebud offers exceptional finishes throughout, combining style and functionality."
            tag="p"
            className="text-gray-300 max-w-2xl mx-auto"
            animation="slide-up"
            delay={200}
          />
        </div>

        <Tabs value={activeTab || ""} onValueChange={handleTabChange} className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-noir-dark p-1 border border-noir-gold/10">
              <TabsTrigger 
                value="kitchen" 
                className={cn(
                  "px-4 py-2 text-sm transition-colors duration-200",
                  activeTab === 'kitchen' ? 'text-noir-dark bg-noir-gold' : 'text-gray-300'
                )}
              >
                Kitchen
              </TabsTrigger>
              <TabsTrigger 
                value="bathroom" 
                className={cn(
                  "px-4 py-2 text-sm transition-colors duration-200",
                  activeTab === 'bathroom' ? 'text-noir-dark bg-noir-gold' : 'text-gray-300'
                )}
              >
                Bathroom & Ensuite
              </TabsTrigger>
              <TabsTrigger 
                value="living" 
                className={cn(
                  "px-4 py-2 text-sm transition-colors duration-200",
                  activeTab === 'living' ? 'text-noir-dark bg-noir-gold' : 'text-gray-300'
                )}
              >
                Living & Bedroom
              </TabsTrigger>
              <TabsTrigger 
                value="laundry" 
                className={cn(
                  "px-4 py-2 text-sm transition-colors duration-200",
                  activeTab === 'laundry' ? 'text-noir-dark bg-noir-gold' : 'text-gray-300'
                )}
              >
                Laundry & External
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Message when no tab is selected */}
          {!activeTab && (
            <div className="text-center my-16">
              <p className="text-white text-lg">Please select a category to view specifications and images.</p>
            </div>
          )}

          {/* Kitchen Tab */}
          {activeTab === 'kitchen' && (
            <TabsContent value="kitchen" className="mt-4">
              <div className="bg-noir-dark rounded-sm shadow-md overflow-hidden border border-noir-gold/20">
                <div className="p-6 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <PaletteIcon className="text-noir-gold h-6 w-6" />
                    <h3 className="text-2xl font-medium text-white">Kitchen, Island Bench, Pantry</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Appliances */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-medium text-white">Appliances</h4>
                        <p className="text-sm font-semibold uppercase text-noir-gold mt-1">Premium Quality Appliances Set</p>
                        <p className="text-sm text-gray-300 mt-1">
                          Next generation appliances offering cutting edge, energy efficiency and multi-cooking
                          technology. The appliances are designed to enhance cooking performance perfectly combining
                          innovative design and premium performance for all your cooking and cleaning needs.
                        </p>
                      </div>
                    </div>
                    
                    {/* Kitchen Sink */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-medium text-white">Kitchen Sink</h4>
                        <p className="text-sm font-semibold uppercase text-noir-gold mt-1">Undermount Sink</p>
                        <p className="text-sm text-gray-300 mt-1">
                          700mm (nom.) 1 & 1/2 or double bowl Undermount Sink<br />
                          Finish: Brushed Gold
                        </p>
                      </div>
                    </div>
                    
                    {/* Kitchen Mixer */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-medium text-white">Kitchen Mixer</h4>
                        <p className="text-sm font-semibold uppercase text-noir-gold mt-1">Tall Sink Mixer</p>
                        <p className="text-sm text-gray-300 mt-1">
                          Tall kitchen mixer fit for kitchen sink<br />
                          Finish: Black
                        </p>
                      </div>
                    </div>
                    
                    {/* Benchtop & Splashback */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-medium text-white">Benchtop & Splashback</h4>
                        <p className="text-sm font-semibold uppercase text-noir-gold mt-1">Reconstituted Stone</p>
                        <p className="text-sm text-gray-300 mt-1">
                          20mm (nom.) thick reconstituted stone in light colour<br />
                          Finish: Smooth
                        </p>
                      </div>
                    </div>
                    
                    {/* Feature Light */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-medium text-white">Feature Light</h4>
                        <p className="text-sm font-semibold uppercase text-noir-gold mt-1">LED Strip Lighting</p>
                        <p className="text-sm text-gray-300 mt-1">
                          Featured LED strip lighting under O/H cabinets<br />
                          Finish: Per Light fitting
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Detailed Kitchen Image */}
                  <div className="mt-12">
                    <div className="border border-noir-gold/30 rounded-md overflow-hidden">
                      <ImageReveal 
                        src="/lovable-uploads/d3feac66-49b1-4345-8401-0a6f91519e8b.png" 
                        alt="Detailed Kitchen Specifications"
                        className="w-full"
                        aspectRatio="aspect-[2/1]"
                        animation="fade"
                      />
                    </div>
                    <p className="text-xs text-center text-gray-400 mt-2">
                      Detailed kitchen specifications and finishes
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          )}

          {/* Bathroom Tab */}
          {activeTab === 'bathroom' && (
            <TabsContent value="bathroom" className="mt-4">
              <div className="bg-noir-dark rounded-sm shadow-md overflow-hidden border border-noir-gold/20">
                <div className="p-6 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <PaletteIcon className="text-noir-gold h-6 w-6" />
                    <h3 className="text-2xl font-medium text-white">Bathroom, Ensuite</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Basin / Benchtop */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-medium text-white">Basin / Benchtop</h4>
                        <p className="text-sm font-semibold uppercase text-noir-gold mt-1">Round Ceramic</p>
                        <p className="text-sm text-gray-300 mt-1">
                          White ceramic above counter round basin<br />
                          Finish: Ceramic
                        </p>
                      </div>
                    </div>
                    
                    {/* Basin Mixer */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-medium text-white">Basin Mixer</h4>
                        <p className="text-sm font-semibold uppercase text-noir-gold mt-1">Tall Bench-Mount</p>
                        <p className="text-sm text-gray-300 mt-1">
                          Bench-mount basin mixer to all vanities<br />
                          Finish: Black
                        </p>
                      </div>
                    </div>
                    
                    {/* Toilet Suite */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-medium text-white">Toilet Suite</h4>
                        <p className="text-sm font-semibold uppercase text-noir-gold mt-1">Toilet Pan w/ In-wall Cistern</p>
                        <p className="text-sm text-gray-300 mt-1">
                          Ceramic toilet pan & in-wall cistern with chrome button/plate<br />
                          Finish: Ceramic/Chrome
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Detailed Bathroom Image */}
                  <div className="mt-12">
                    <div className="border border-noir-gold/30 rounded-md overflow-hidden">
                      <ImageReveal 
                        src="/lovable-uploads/552a1a19-da65-4726-ae0c-6b9ea58bb760.png" 
                        alt="Detailed Bathroom Specifications"
                        className="w-full"
                        aspectRatio="aspect-[2/1]"
                        animation="fade"
                      />
                    </div>
                    <p className="text-xs text-center text-gray-400 mt-2">
                      Detailed bathroom and ensuite specifications and finishes
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          )}

          {/* Living Tab */}
          {activeTab === 'living' && (
            <TabsContent value="living" className="mt-4">
              <div className="bg-noir-dark rounded-sm shadow-md overflow-hidden border border-noir-gold/20">
                <div className="p-6 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <PaletteIcon className="text-noir-gold h-6 w-6" />
                    <h3 className="text-2xl font-medium text-white">Living / Bedroom</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Timber Floor */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-medium text-white">Timber Floor (Living)</h4>
                        <p className="text-sm font-semibold uppercase text-noir-gold mt-1">Engineered Timber</p>
                        <p className="text-sm text-gray-300 mt-1">
                          Floating engineered oak timber floorboards w/ underlay<br />
                          Finish: Oak Timber
                        </p>
                      </div>
                    </div>
                    
                    {/* Carpet Floor */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-medium text-white">Carpet Floor (Bedroom)</h4>
                        <p className="text-sm font-semibold uppercase text-noir-gold mt-1">Plush/Textured</p>
                        <p className="text-sm text-gray-300 mt-1">
                          Fire compliant carpet finish in grey colour w/ underlay<br />
                          Finish: Plush / Textured
                        </p>
                      </div>
                    </div>
                    
                    {/* Robe Doors */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-medium text-white">Robe Doors</h4>
                        <p className="text-sm font-semibold uppercase text-noir-gold mt-1">Mirror Sliding Door</p>
                        <p className="text-sm text-gray-300 mt-1">
                          Black frame with top/bottom sliding tracks and side jambs<br />
                          Finish: Mirror Finish / Black
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Detailed Living & Bedroom Image */}
                  <div className="mt-12">
                    <div className="border border-noir-gold/30 rounded-md overflow-hidden">
                      <ImageReveal 
                        src="/lovable-uploads/d8f79b2f-2b7e-42ed-88e0-ad294196139e.png" 
                        alt="Detailed Living & Bedroom Specifications"
                        className="w-full"
                        aspectRatio="aspect-[2/1]"
                        animation="fade"
                      />
                    </div>
                    <p className="text-xs text-center text-gray-400 mt-2">
                      Detailed living and bedroom specifications and finishes
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          )}

          {/* Laundry Tab */}
          {activeTab === 'laundry' && (
            <TabsContent value="laundry" className="mt-4">
              <div className="bg-noir-dark rounded-sm shadow-md overflow-hidden border border-noir-gold/20">
                <div className="p-6 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <PaletteIcon className="text-noir-gold h-6 w-6" />
                    <h3 className="text-2xl font-medium text-white">Laundry / External</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Laundry Trough */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-medium text-white">Laundry Trough Cabinet</h4>
                        <p className="text-sm font-semibold uppercase text-noir-gold mt-1">Drop-in Type</p>
                        <p className="text-sm text-gray-300 mt-1">
                          Drop-in type stainless steel laundry trough w/ tap hole<br />
                          Finish: Stainless Steel
                        </p>
                      </div>
                    </div>
                    
                    {/* Laundry Mixer */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-medium text-white">Laundry Mixer</h4>
                        <p className="text-sm font-semibold uppercase text-noir-gold mt-1">Swivel Laundry Faucet</p>
                        <p className="text-sm text-gray-300 mt-1">
                          Standard laundry faucet swivel type<br />
                          Finish: Chrome
                        </p>
                      </div>
                    </div>
                    
                    {/* Window */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-medium text-white">Window</h4>
                        <p className="text-sm font-semibold uppercase text-noir-gold mt-1">Double Glazing</p>
                        <p className="text-sm text-gray-300 mt-1">
                          Aluminium extrusions double-glazing window system<br />
                          Finish: Powdercoat / Glazing
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Detailed Laundry & External Image */}
                  <div className="mt-12">
                    <div className="border border-noir-gold/30 rounded-md overflow-hidden">
                      <ImageReveal 
                        src="/lovable-uploads/cb85fd16-8c63-4b3c-8f5b-6c46c41aea96.png" 
                        alt="Detailed Laundry & External Specifications"
                        className="w-full"
                        aspectRatio="aspect-[2/1]"
                        animation="fade"
                      />
                    </div>
                    <p className="text-xs text-center text-gray-400 mt-2">
                      Detailed laundry and external specifications and finishes
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          )}
        </Tabs>

        <div className="text-center mt-8 text-sm text-gray-400">
          * Items and descriptions shown are for theme and illustration purpose only. <br />
          The developer reserves the right to make changes or substitute with alternatives should it be needed.
        </div>
      </div>
    </section>
  );
};

export default FittingsFinishes;
