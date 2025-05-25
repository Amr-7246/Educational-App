"use client"; 
export interface Room {
    id: number;
    name: string;
    images: string[];
    amenities: string[];
    details: {
        size: string;
        occupancy: string;
        bedType: string;
        bathroom: string;
        extras: string[];
    };
    pricePerNight: number;
    availableRooms: number;
  }
  
  export interface Hotel {
    id: number;
    name: string;
    address: string;
    rooms: Room[];
    popularLocations: string[];
    amenities: string[];
    mealPlansAvailable: string;
    paymentType: string;
    propertyType: string;
    propertyBrand: string;
    travellerExperience: string;
    availability: string;
    accessibility: string;
    hotelsRewards: string;
    pricePerNight: number;
    stayOptions: string;
    neighbourhood: string;
    propertyClass: string;
    rating: number;
    description: string;
    imageUrl: string;
  }
  