
import React, { useState } from 'react';
import AnimatedText from './AnimatedText';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ListChecks, Home, Bath, ChefHat, Bed, Warehouse, Wrench, Snowflake, FileSpreadsheet } from 'lucide-react';
import ImageReveal from './ImageReveal';

type SpecificationCategory = 
  'general' | 
  'underground' | 
  'structure' | 
  'external' | 
  'electrical' | 
  'hotwater' | 
  'communication' | 
  'internal' | 
  'insulation' | 
  'doors' | 
  'kitchen' | 
  'laundry' | 
  'bathroom' | 
  'bedroom' | 
  'stairs';

interface SpecificationItem {
  item: string;
  description: string;
}

const FittingsFinishes: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SpecificationCategory | null>(null);

  const handleTabChange = (value: string) => {
    setActiveTab(prev => prev === value as SpecificationCategory ? null : value as SpecificationCategory);
  };

  // Define the specifications data based on the images
  const specificationData: Record<SpecificationCategory, SpecificationItem[]> = {
    general: [
      { item: 'INSURANCE', description: 'HOUSING INDEMNITY INSURANCE' },
      { item: 'MAINTENANCE PERIOD', description: 'TBA' },
      { item: 'ENERGY RATING', description: 'MINIMUM ENERGY EFFICIENCY RATING - 6 STAR' },
    ],
    underground: [
      { item: 'NBN PROVISION', description: 'TELEPHONE AND DATA, PRE-WIRED AND READY FOR NBN CABLING, CONDUIT AND DRAW WIRE FROM SUPPLY AUTHORITY PIT TO BOX IN HOME. MINIMUM 1 X OUTLET' },
      { item: 'GAS', description: 'GAS CONNECTION TO DWELLING' },
      { item: 'ELECTRICITY', description: 'UNDERGROUND 3 PHASE ELECTRICITY CONNECTION TO DWELLING' },
      { item: 'STORM WATER, SEWER, DRAINAGE & WATER', description: 'CONNECTION TO DWELLING AND ASSOCIATED FIXTURES' },
    ],
    structure: [
      { item: 'FOUNDATIONS/SLAB', description: 'ENGINEERED AND CERTIFIED CONCRETE RAFT SLAB TO SUIT CLASSIFICATION OF SITE' },
      { item: 'ROOF TRUSSES', description: 'PREFABRICATED ENGINEERED AND CERTIFIED ROOF TRUSSES' },
      { item: 'WALL FRAMES', description: '70MM & 90MM LIGHTWEIGHT STUD FRAME THROUGHOUT IN ACCORDANCE WITH AUSTRALIAN STANDARDS' },
      { item: 'FIRST FLOOR JOISTS', description: 'FLOOR JOISTS TO ENGINEER\'S SPECIFICATION' },
    ],
    external: [
      { item: 'HORIZONTAL WEATHERBOARD CLADDING (WHERE APPLICABLE)', description: 'JAMES HARDIE STRIA FIBRE CEMENT CLADDING 325MM OR SIMILAR\nPAINT FINISH: COLORBOND DOVER WHITE OR SIMILAR' },
      { item: 'VERTICAL WEATHERBOARD CLADDING (WHERE APPLICABLE)', description: 'JAMES HARDIE OBLIQUE LINEA CLADDING 200MM OR SIMILAR\nPAINT FINISH: COLORBOND DOVER WHITE OR SIMILAR' },
      { item: 'CORRUGATED IRON (WHERE APPLICABLE)', description: 'CUSTOM ORB (CORRUGATED IRON) OR SIMILAR\nFINISH: COLORBOND DOVER WHITE OR SIMILAR' },
      { item: 'TIMBER LOOK VERTICAL BATTENS (WHERE APPLICABLE)', description: 'COVET EVER ART WOOD BATTENS OR SIMILAR' },
      { item: 'SHROUDS', description: 'ALUMINIUM POWDER COATED METAL\nFINISH: COLORBOND DOVER WHITE OR SIMILAR' },
      { item: 'PARAPET CAPPING', description: 'COLORBOND DOVER WHITE OR SIMILAR' },
      { item: 'ENTRANCE DOOR', description: '920MM WIDE DOOR, PAINTED FINISH' },
      { item: 'EXTERNAL WINDOWS & DOORS', description: 'ALUMINIUM WINDOWS AND SLIDING DOOR SYSTEMS WITH COLORBOND DOVER WHITE POWDER COATING OR SIMILAR. GLAZING TO MEET ENERGY RATING CERTIFICATE.' },
      { item: 'WINDOW LOCKS', description: 'LOCKS TO ALL OPENABLE WINDOWS. COLOUR SHALL MATCH WINDOW FRAMES' },
      { item: 'VEHICLE GARAGE DOOR', description: 'SECTIONAL MOTORISED GARAGE DOOR OR TILT UP MOTORISED GARAGE DOOR\nFIXED GARAGE DOOR OPERATION BUTTON & 2X REMOTE CONTROLS PROVIDED' },
      { item: 'SKYLIGHT', description: 'N/A' },
      { item: 'DRIVEWAY', description: 'CONCRETE FINISH / EXPOSED AGGREGATE OR SIMILAR' },
      { item: 'FRONT YARD PATHS & STEPS', description: 'CONCRETE FINISH / EXPOSED AGGREGATE OR SIMILAR' },
      { item: 'REAR YARD PATHS & PAVED AREAS', description: 'CONCRETE FINISH / EXPOSED AGGREGATE OR SIMILAR' },
      { item: 'REAR YARD DECK PAVING', description: 'TIMBER LOOK DECK BOARDS, DECODECK WHITE ANTIQUE OR SIMILAR' },
      { item: 'ROOF CLADDING', description: 'COLORBOND TRAY DECK ROOF CLADDING OR SIMILAR' },
      { item: 'DOWNPIPES & RAINHEADS', description: 'COLORBOND DOVER WHITE OR SIMILAR' },
      { item: 'WATER TANK', description: 'WATER TANK WITH RAINWATER RE-USE SYSTEM OR SIMILAR' },
      { item: 'CLOTHESLINE', description: 'LIFESTYLE CLOTHESLINE ECO 210 FOLDING FRAME CLOTHESLINE OR SIMILAR\nFINISH: SHALE GREY OR SIMILAR' },
      { item: 'WATER TAPS', description: '2 EXTERNAL WATER TAPS - 1 FRONT & 1 REAR' },
      { item: 'EXTERNAL LIGHTS', description: 'SUITABLE LIGHTING TO EXTERNAL AREAS' },
    ],
    electrical: [
      { item: 'ELECTRICAL METER BOX', description: 'RCD SAFETY SWITCH AND CIRCUIT BREAKER TO METER BOX' },
      { item: 'LIGHT FITTINGS', description: 'LED DOWNLIGHTS TO INTERNAL LIVING AREAS' },
      { item: 'EXTERNAL LIGHT FITTINGS', description: 'TO SUIT LIGHTING LEVELS OF FUNCTION OF SPACE' },
      { item: 'LIGHT SWITCHES', description: 'CLIPSAL ICONIC RANGE OR SIMILAR IN WHITE' },
      { item: 'POWER POINTS', description: 'CLIPSAL ICONIC RANGE OR SIMILAR DOUBLE POWER POINTS THROUGHOUT' },
      { item: 'SMOKE ALARM / DETECTORS', description: 'IN ACCORDANCE WITH NCC REQUIREMENTS' },
    ],
    hotwater: [
      { item: 'HOT WATER', description: 'RINNAI OR EQUIVALENT, CONTINUOUS FLOW HOT WATER SERVICE' },
    ],
    communication: [
      { item: 'TELEVISION', description: 'WALL POINTS, PRE-CABLED FOR FREE TO AIR TV (3 POINTS)' },
      { item: 'AERIAL', description: 'ROOF MOUNTED TV AERIAL' },
      { item: 'TELEPHONE', description: 'LANDLINE PROVISION' },
      { item: 'DATA / WIFI', description: '2X DATA OUTLETS. WIFI ROUTER SUPPLIED BY OWNER/NBN PROVIDER' },
    ],
    internal: [
      { item: 'WALLS & CEILINGS', description: '10MM PLASTERBOARD WALLS AND CEILINGS FINISHED WITH WASHABLE PAINT (FLAT PAINT TO CEILING)' },
      { item: 'CORNICE', description: 'SQUARE SET CORNICE THROUGHOUT' },
      { item: 'PAINTING', description: 'ONE COLOUR THROUGHOUT, PREMIUM 3 COAT PAINT SYSTEM' },
      { item: 'WET AREAS', description: 'WET AREA BOARD TO ALL WET AREAS (BATHROOMS, ENSUITES)' },
      { item: 'WATERPROOFING', description: 'TO ALL WET AREAS - BATHROOMS, TOILET AND LAUNDRY - AS REQUIRED BY THE NCC' },
      { item: 'CEILING HEIGHT', description: '2600 - 2700MM (NOMINAL) CEILING HEIGHTS' },
      { item: 'SKIRTING BOARDS', description: 'MDF PAINTED PROFILES' },
      { item: 'ARCHITRAVES', description: 'MDF PAINTED PROFILES' },
      { item: 'DOORS', description: 'SEMI-SOLID DOORS, PAINT FINISH' },
      { item: 'FLOOR COVERINGS', description: 'HYBRID TIMBER LOOK FLOOR BOARDS TO LIVING & CIRCULATION SPACES, CARPET GENERALLY TO BEDROOMS, TILES TO WET AREAS' },
      { item: 'STAIR COVERING', description: 'SOLID POLISHED TIMBER TO MATCH' },
      { item: 'WALL TILING', description: 'PORCELAIN TILES TO WET AREAS' },
      { item: 'AIR CONDITIONING', description: 'REFRIGERATED BULKHEAD & SPLIT SYSTEMS' },
      { item: 'HEATING', description: 'REFRIGERATED BULKHEAD & SPLIT SYSTEMS' },
    ],
    insulation: [
      { item: 'EXTERNAL WALLS', description: 'WALL INSULATION - REFERS TO ENERGY RATING TO MEET MINIMUM REQUIREMENT OF ENERGY CERTIFICATE AND NCC' },
      { item: 'ROOF AND CEILING', description: 'MINIMUM R4.0 CEILING INSULATION, EXCLUDING GARAGE AND OUTDOOR AREAS. INSULATION TO MEET MINIMUM REQUIREMENT OF ENERGY CERTIFICATE AND THE NCC' },
    ],
    doors: [
      { item: 'ENTRY DOOR FURNITURE', description: 'QUALITY FRONT DOOR LOCK, FIXED DOOR PULL' },
      { item: 'HINGED DOOR FURNITURE', description: 'LEVER TYPE DOOR HANDLE' },
      { item: 'HINGED DOOR HINGES', description: '3X HINGES TO EACH DOOR' },
      { item: 'INTERNAL CAVITY SLIDING DOOR FURNITURE', description: 'RECESSED TYPE DOOR PULLS' },
      { item: 'INTERNAL CAVITY SLIDING DOOR SYSTEM', description: 'CS CAVITY SLIDERS SQUARE FORMED SYSTEM OR SIMILAR' },
      { item: 'DOOR STOPS', description: 'TO ALL HINGED DOORS' },
    ],
    kitchen: [
      { item: 'JOINERY', description: 'CUSTOM BUILT FUNCTIONAL JOINERY IN LAMINATE FINISH OR SIMILAR' },
      { item: 'BENCHTOPS', description: 'RECONSTITUTED STONE BENCHTOPS' },
      { item: 'SPLASHBACKS', description: 'TILES' },
      { item: 'BULKHEADS (WHERE APPLICABLE)', description: 'PAINTED PLASTER FINISH' },
      { item: 'COOKTOP', description: 'EUROPEAN 750MM - 900MM GAS COOKTOP OR SIMILAR' },
      { item: 'OVEN', description: 'EUROPEAN 600MM OR SIMILAR' },
      { item: 'RANGEHOOD', description: 'EUROPEAN (SIZE TO SUIT COOKTOP) AND FLUED TO EXTERIOR AIR OR SIMILAR' },
      { item: 'DISHWASHER', description: 'EUROPEAN 600MM OR SIMILAR' },
      { item: 'REFRIGERATOR (WHERE APPLICABLE)', description: 'INTEGRATED 600MM COLUMN OR SIMILAR (UNITS 2 & 8 ONLY)' },
      { item: 'FREEZER (WHERE APPLICABLE)', description: 'INTEGRATED 600MM COLUMN OR SIMILAR (UNITS 2 & 8 ONLY)' },
      { item: 'SINK', description: 'STAINLESS STEEL UNDERMOUNT SINGLE BOWL SINK' },
      { item: 'TAPWARE', description: 'DORF OR SIMILAR' },
    ],
    laundry: [
      { item: 'JOINERY', description: 'CUSTOM BUILT FUNCTIONAL JOINERY IN LAMINATE FINISH OR SIMILAR' },
      { item: 'BENCHTOPS', description: 'RECONSTITUTED STONE BENCHTOP' },
      { item: 'SPLASHBACKS', description: 'TILES' },
      { item: 'SINK', description: 'STAINLESS STEEL UNDERMOUNT SINGLE BOWL SINK' },
      { item: 'TAPWARE', description: 'DORF OR SIMILAR' },
      { item: 'VENTILATION / EXHAUST', description: 'EXHAUST FANS INSTALLED IN ACCORDANCE WITH AUSTRALIAN STANDARDS AND THE NCC REQUIREMENTS—BUILDER\'S SELECTION. (IF NO OUTSIDE WINDOW IN LAUNDRY)' },
    ],
    bathroom: [
      { item: 'VANITY JOINERY', description: 'CUSTOM BUILT FUNCTIONAL JOINERY IN LAMINATE FINISH OR SIMILAR' },
      { item: 'VANITY BENCHTOP', description: 'RECONSTITUTED STONE BENCHTOP' },
      { item: 'VANITY BASIN', description: 'ROUND BASIN OR SIMILAR' },
      { item: 'VANITY TAPWARE', description: 'ABI INTERIORS WALL MIXER & OUTLET OR SIMILAR' },
      { item: 'SHOWER MIXER', description: 'ABI INTERIORS WALL MIXER WITH DIVERTER OR SIMILAR' },
      { item: 'SHOWER ROSE', description: 'ABI INTERIORS OR SIMILAR' },
      { item: 'SHOWER HAND SHOWER ON RAIL', description: 'ABI INTERIORS OR SIMILAR' },
      { item: 'SHOWER SCREEN', description: 'GLASS SHOWER SCREEN AND DOOR' },
      { item: 'SHOWER FLOOR WASTE', description: 'STAINLESS STEEL FLOOR WASTE OR SIMILAR' },
      { item: 'BATHTUB (WHERE APPLICABLE)', description: 'HIGHGROVE MOANA FREESTANDING BATH OR SIMILAR' },
      { item: 'TOILET SUITE', description: 'CAROMA LUNA CLEANFLUSH WITH WHITE PAN & SEAT OR SIMILAR' },
      { item: 'HAND TOWEL RAIL (WHERE APPLICABLE)', description: 'LINEAR STANDARD PILLAR 300MM HAND TOWEL RAIL OR SIMILAR' },
      { item: 'TOWEL RAIL (WHERE APPLICABLE)', description: 'LINEAR STANDARD PILLAR 600MM OR 900MM HAND TOWEL RAIL OR SIMILAR' },
      { item: 'TOILET ROLL HOLDER', description: 'LINEAR STANDARD PILLAR TOILET ROLL HOLDER OR SIMILAR' },
      { item: 'VENTILATION / EXHAUST', description: 'EXHAUST FANS INSTALLED IN ACCORDANCE WITH AUSTRALIAN STANDARDS AND THE NCC REQUIREMENTS—BUILDER\'S SELECTION. (IF NO OUTSIDE WINDOW IN BATHROOM / ENSUITE)' },
    ],
    bedroom: [
      { item: 'JOINERY', description: 'CUSTOM BUILT FUNCTIONAL JOINERY IN LAMINATE FINISH OR SIMILAR' },
    ],
    stairs: [
      { item: 'CONSTRUCTION', description: 'CUSTOM MADE CLOSED TREAD MDF STAIRS' },
      { item: 'OPEN BALUSTRADE (WHERE APPLICABLE)', description: 'CUSTOM RECTANGULAR STEEL BALUSTERS IN DOVER WHITE FINISH OR SIMILAR' },
      { item: 'LEVEL 1 OPEN BALUSTRADE TO VOID PERIMETER (WHERE APPLICABLE)', description: 'CUSTOM RECTANGULAR STEEL BALUSTERS IN DOVER WHITE FINISH OR SIMILAR' },
      { item: 'LEVEL 1 OPEN BALUSTRADE HAND RAIL (WHERE APPLICABLE)', description: 'CUSTOM RECTANGULAR 10MM X 50MM HAND RAIL IN DOVER WHITE FINISH OR SIMILAR' },
      { item: 'SOLID STAIR BALUSTRADE (WHERE APPLICABLE)', description: 'PLASTERED 90MM STUD WALL BALUSTRADE IN DOVER WHITE OR SIMILAR FINISH' },
      { item: 'LEVEL 1 SOLID BALUSTRADE TO VOID PERIMETER (WHERE APPLICABLE)', description: 'PLASTERED 90MM STUD WALL BALUSTRADE IN DOVER WHITE OR SIMILAR FINISH' },
      { item: 'LEVEL 1 OPEN BALUSTRADE HAND RAIL (WHERE APPLICABLE)', description: 'PLASTERED 90MM STUD WALL BALUSTRADE IN DOVER WHITE OR SIMILAR FINISH' },
    ],
  };

  // Maps for icons and titles
  const categoryIcons: Record<SpecificationCategory, React.ReactNode> = {
    general: <FileSpreadsheet className="h-5 w-5" />,
    underground: <Wrench className="h-5 w-5" />,
    structure: <Home className="h-5 w-5" />,
    external: <Home className="h-5 w-5" />,
    electrical: <ListChecks className="h-5 w-5" />,
    hotwater: <Bath className="h-5 w-5" />,
    communication: <ListChecks className="h-5 w-5" />,
    internal: <Home className="h-5 w-5" />,
    insulation: <Snowflake className="h-5 w-5" />,
    doors: <ListChecks className="h-5 w-5" />,
    kitchen: <ChefHat className="h-5 w-5" />,
    laundry: <Warehouse className="h-5 w-5" />,
    bathroom: <Bath className="h-5 w-5" />,
    bedroom: <Bed className="h-5 w-5" />,
    stairs: <ListChecks className="h-5 w-5" />,
  };

  const categoryTitles: Record<SpecificationCategory, string> = {
    general: 'General Inclusions',
    underground: 'Underground Services',
    structure: 'Structure',
    external: 'External Finishes',
    electrical: 'Electrical',
    hotwater: 'Hot Water System',
    communication: 'Communication',
    internal: 'Internal Finishes',
    insulation: 'Insulation',
    doors: 'Door Furniture',
    kitchen: 'Kitchen',
    laundry: 'Laundry',
    bathroom: 'Bathroom / Ensuites',
    bedroom: 'Bedrooms',
    stairs: 'Stairs & Void Balustrade',
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

        {/* Display the three specification images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="aspect-auto overflow-hidden rounded-sm border border-noir-gold/20">
            <ImageReveal 
              src="/lovable-uploads/787fb7f8-d525-4393-89a3-91454aca003d.png" 
              alt="Solis Rosebud Specifications Sheet 1"
              className="w-full h-full object-contain"
              aspectRatio="aspect-auto"
              animation="fade"
            />
          </div>
          <div className="aspect-auto overflow-hidden rounded-sm border border-noir-gold/20">
            <ImageReveal 
              src="/lovable-uploads/2c1397b1-fd20-4697-ab55-b21f7ce11748.png" 
              alt="Solis Rosebud Specifications Sheet 2"
              className="w-full h-full object-contain"
              aspectRatio="aspect-auto"
              animation="fade"
            />
          </div>
          <div className="aspect-auto overflow-hidden rounded-sm border border-noir-gold/20">
            <ImageReveal 
              src="/lovable-uploads/15d8c0bb-15fa-4209-8a39-646b6afc9691.png" 
              alt="Solis Rosebud Specifications Sheet 3"
              className="w-full h-full object-contain"
              aspectRatio="aspect-auto"
              animation="fade"
            />
          </div>
        </div>
        
        <Tabs value={activeTab || ""} onValueChange={handleTabChange} className="w-full">
          <div className="flex justify-center mb-10 overflow-x-auto pb-2">
            <TabsList className="bg-noir-dark p-1 border border-noir-gold/10 flex flex-wrap gap-1">
              <TabsTrigger 
                value="general" 
                className={cn(
                  "px-3 py-2 text-xs transition-colors duration-200 whitespace-nowrap flex items-center gap-1",
                  activeTab === 'general' ? 'text-noir-dark bg-noir-gold' : 'text-gray-300'
                )}
              >
                {categoryIcons.general}
                <span>General</span>
              </TabsTrigger>
              
              <TabsTrigger 
                value="structure" 
                className={cn(
                  "px-3 py-2 text-xs transition-colors duration-200 whitespace-nowrap flex items-center gap-1",
                  activeTab === 'structure' ? 'text-noir-dark bg-noir-gold' : 'text-gray-300'
                )}
              >
                {categoryIcons.structure}
                <span>Structure</span>
              </TabsTrigger>
              
              <TabsTrigger 
                value="external" 
                className={cn(
                  "px-3 py-2 text-xs transition-colors duration-200 whitespace-nowrap flex items-center gap-1",
                  activeTab === 'external' ? 'text-noir-dark bg-noir-gold' : 'text-gray-300'
                )}
              >
                {categoryIcons.external}
                <span>External</span>
              </TabsTrigger>

              <TabsTrigger 
                value="internal" 
                className={cn(
                  "px-3 py-2 text-xs transition-colors duration-200 whitespace-nowrap flex items-center gap-1",
                  activeTab === 'internal' ? 'text-noir-dark bg-noir-gold' : 'text-gray-300'
                )}
              >
                {categoryIcons.internal}
                <span>Internal</span>
              </TabsTrigger>
              
              <TabsTrigger 
                value="kitchen" 
                className={cn(
                  "px-3 py-2 text-xs transition-colors duration-200 whitespace-nowrap flex items-center gap-1",
                  activeTab === 'kitchen' ? 'text-noir-dark bg-noir-gold' : 'text-gray-300'
                )}
              >
                {categoryIcons.kitchen}
                <span>Kitchen</span>
              </TabsTrigger>
              
              <TabsTrigger 
                value="bathroom" 
                className={cn(
                  "px-3 py-2 text-xs transition-colors duration-200 whitespace-nowrap flex items-center gap-1",
                  activeTab === 'bathroom' ? 'text-noir-dark bg-noir-gold' : 'text-gray-300'
                )}
              >
                {categoryIcons.bathroom}
                <span>Bathroom</span>
              </TabsTrigger>
              
              <TabsTrigger 
                value="laundry" 
                className={cn(
                  "px-3 py-2 text-xs transition-colors duration-200 whitespace-nowrap flex items-center gap-1",
                  activeTab === 'laundry' ? 'text-noir-dark bg-noir-gold' : 'text-gray-300'
                )}
              >
                {categoryIcons.laundry}
                <span>Laundry</span>
              </TabsTrigger>
              
              <TabsTrigger 
                value="bedroom" 
                className={cn(
                  "px-3 py-2 text-xs transition-colors duration-200 whitespace-nowrap flex items-center gap-1",
                  activeTab === 'bedroom' ? 'text-noir-dark bg-noir-gold' : 'text-gray-300'
                )}
              >
                {categoryIcons.bedroom}
                <span>Bedroom</span>
              </TabsTrigger>
              
              <TabsTrigger 
                value="electrical" 
                className={cn(
                  "px-3 py-2 text-xs transition-colors duration-200 whitespace-nowrap flex items-center gap-1",
                  activeTab === 'electrical' ? 'text-noir-dark bg-noir-gold' : 'text-gray-300'
                )}
              >
                {categoryIcons.electrical}
                <span>Electrical</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Message when no tab is selected */}
          {!activeTab && (
            <div className="text-center my-16">
              <p className="text-white text-lg">Please select a category to view detailed specifications.</p>
            </div>
          )}

          {/* Generate tab content for each category */}
          {Object.keys(specificationData).map((category) => (
            <TabsContent key={category} value={category} className="mt-4">
              <div className="bg-noir-dark rounded-sm shadow-md overflow-hidden border border-noir-gold/20">
                <div className="p-6 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    {categoryIcons[category as SpecificationCategory]}
                    <h3 className="text-2xl font-medium text-white">{categoryTitles[category as SpecificationCategory]}</h3>
                  </div>
                  
                  <div className="overflow-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="text-left py-3 px-4 bg-noir-gold/10 text-white font-medium border-b border-noir-gold/30 w-1/3">Item</th>
                          <th className="text-left py-3 px-4 bg-noir-gold/10 text-white font-medium border-b border-noir-gold/30 w-2/3">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {specificationData[category as SpecificationCategory].map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-noir-dark' : 'bg-noir-light/10'}>
                            <td className="py-3 px-4 border-b border-noir-gold/10 text-gray-300">{item.item}</td>
                            <td className="py-3 px-4 border-b border-noir-gold/10 text-gray-300 whitespace-pre-line">{item.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-8 text-sm text-gray-400">
          * Items and descriptions shown are based on standard inclusions. <br />
          The developer reserves the right to make changes or substitute with alternatives should it be needed.
        </div>
      </div>
    </section>
  );
};

export default FittingsFinishes;
