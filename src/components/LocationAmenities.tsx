import React from 'react';
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table";
import { School, ShoppingBag, Stethoscope, Trees, Compass } from "lucide-react";

interface AmenityItem {
  name: string;
  distance: string;
}

interface AmenityCategory {
  title: string;
  icon: React.ElementType;
  items: AmenityItem[];
}

const LocationAmenities = () => {
  const amenityCategories: AmenityCategory[] = [
    {
      title: "SCHOOLS",
      icon: School,
      items: [
        { name: "Rosebud High School", distance: "1 km" },
        { name: "Rosebud South Primary School", distance: "1 km" },
        { name: "Rosebud Secondary College", distance: "2.2 km" },
        { name: "St John's College Rosebud", distance: "200 m" },
        { name: "Rosebud North East Primary School", distance: "3.9 km" },
        { name: "Sacred Heart Primary School", distance: "500 m" },
        { name: "Rosebud West Primary School", distance: "1.2 km" },
        { name: "Bell Primary School", distance: "2.2 km" },
        { name: "Rosebud Primary School", distance: "2.9 km" },
        { name: "St. Raphael's Primary School", distance: "1.8 km" },
        { name: "Gower St Kindergarten", distance: "1.9 km" },
        { name: "Inspire Early Learning Journey Rosebud", distance: "2.1 km" },
        { name: "Parade College", distance: "600 m" }
      ]
    },
    {
      title: "SHOPPING",
      icon: ShoppingBag,
      items: [
        { name: "Rosebud Plaza Shopping Centre", distance: "3.4 km" },
        { name: "Rosebud South Shopping Centre", distance: "1.4 km" },
        { name: "Rosebud Central", distance: "750 m" },
        { name: "Rosebud Market", distance: "1 km" },
        { name: "Beachcomber Shopping Centre", distance: "3.3 km" }
      ]
    },
    {
      title: "MEDICAL",
      icon: Stethoscope,
      items: [
        { name: "Rosebud Medical & Dental Centre", distance: "1.7 km" },
        { name: "Rosebud Family Medical", distance: "700 m" },
        { name: "Rosebud Market Medical Centre", distance: "1.4 km" },
        { name: "Complete Care Rosebud", distance: "3.4 km" },
        { name: "Peninsula Medical Centre", distance: "3.5 km" },
        { name: "Rosebud Medical Specialists", distance: "2.4 km" },
        { name: "Peninsula Health Medical Centre", distance: "1.3 km" },
        { name: "Rosebud Hospital", distance: "5.6 km" },
        { name: "Peninsula Private Hospital", distance: "5.4 km" }
      ]
    },
    {
      title: "PARKS",
      icon: Trees,
      items: [
        { name: "Rosebud Foreshore", distance: "350 m" },
        { name: "Rosebud Bay Beach", distance: "2.7 km" },
        { name: "Arthurs Seat State Park", distance: "1.4 km" },
        { name: "Waterfall Gully Reserve", distance: "2.8 km" },
        { name: "Rosebud Pier", distance: "1.3 km" },
        { name: "Rosebud Recreation Reserve", distance: "900 m" },
        { name: "Waterfall Gardens", distance: "2.2 km" },
        { name: "Drummond Reserve", distance: "2.0 km" }
      ]
    },
    {
      title: "POINTS OF INTEREST",
      icon: Compass,
      items: [
        { name: "Rosebud Library", distance: "1.6 km" },
        { name: "Rosebud Pier", distance: "1.2 km" },
        { name: "Rosebud Community Centre", distance: "4.0 km" },
        { name: "Peninsula Hot Springs", distance: "8.3 km" }
      ]
    }
  ];

  return (
    <div className="bg-noir-light p-8 md:p-10 rounded-sm shadow-lg border border-noir-gold/20">
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Compass className="h-6 w-6 text-noir-gold mr-3" />
          <h3 className="text-2xl font-light text-white">Local Amenities</h3>
        </div>
        
        <div className="flex items-center mb-6 bg-noir-gold/10 p-3 rounded-sm border border-noir-gold/20">
          <div className="mr-3 bg-noir-gold/20 p-2 rounded-full">
            <Compass className="h-5 w-5 text-noir-gold" />
          </div>
          <div>
            <p className="text-white font-medium">Walkability Score: 92</p>
            <p className="text-gray-400 text-sm">Most daily errands can be done without a car</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-10">
        {amenityCategories.map((category, index) => (
          <div key={index} className="reveal reveal-delay-1">
            <div className="flex items-center mb-4">
              <category.icon className="h-5 w-5 text-noir-gold mr-2" />
              <h4 className="text-xl font-light text-white">{category.title}</h4>
            </div>
            
            <div className="bg-noir rounded-sm overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-noir-light/50">
                    <TableHead className="text-noir-gold font-medium">Name</TableHead>
                    <TableHead className="text-noir-gold font-medium text-right w-24">Distance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {category.items.map((item, itemIndex) => (
                    <TableRow key={itemIndex} className="hover:bg-noir-light/50 border-b border-noir-gold/10">
                      <TableCell className="text-white">{item.name}</TableCell>
                      <TableCell className="text-gray-400 text-right">{item.distance}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationAmenities;
