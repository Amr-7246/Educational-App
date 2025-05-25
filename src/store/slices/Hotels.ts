// "use client"; 
// import   { createSlice } from '@reduxjs/toolkit';
// import { 
//     Room_1,
//     Room_2,
//     Room_3,
//     Room_4,
//     Room_5,
//     Room_6,
//     Room_7,
//     Room_8,
//     Room_9,
//     Room_10,
//     Room_11,
//     Room_12,
//     Room_13,
//     Room_14,
//     Room_15,
//     Room_16,
//     Room_17,
//     Room_18,
//     Room_19,
//     Room_20,
//     Room_21
//     } from '../../../assets/index';

// export interface Room {
//     id: number;
//     name: string;
//     images: string[];
//     amenities: string[];
//     details: {
//         size: string;
//         occupancy: string;
//         bedType: string;
//         bathroom: string;
//         extras: string[];
//     };
//     pricePerNight: number;
//     availableRooms: number;
// }

// export   interface Hotel {
//     id: number;
//     name: string;
//     address: string;
//     rooms: Room[];
//     popularLocations: string[];
//     amenities: string[];
//     mealPlansAvailable: string;
//     paymentType: string;
//     propertyType: string;
//     propertyBrand: string;
//     travellerExperience: string;
//     availability: string;
//     accessibility: string;
//     hotelsRewards: string;
//     pricePerNight: number;
//     stayOptions: string;
//     neighbourhood: string;
//     propertyClass: string;
//     rating: number;
//     description: string;
//     imageUrl: string;
// }   

// const   initialState = {
//     hotels: [
//     {   
//         id: 1,
//         name: 'Hyatt Regency Cairo West',
//         address: '6th of October City, Cairo, Egypt',
//         // * ########## Start Rooms Data 
//         rooms: [
//           {
//                 id: 1,
//                 name: 'Deluxe King Room',
//                 images: [Room_1],
//                 amenities: ['King Bed', 'City View', 'Free WiFi', 'Air Conditioning', 'Smart TV'],
//                 details: {
//                     size: '35 sqm',
//                     occupancy: '2 Adults',
//                     bedType: '1 King Bed',
//                     bathroom: 'Private bathroom with shower and bathtub',
//                     extras: ['Work Desk', 'Mini Bar', 'Coffee Machine']
//                 },
//                 pricePerNight: 180,
//                 availableRooms: 5
//           },
//           {
//                 id: 2,
//                 name: 'Superior Twin Room',
//                 images: [Room_2],
//                 amenities: ['Twin Beds', 'Garden View', 'Smart TV', 'Mini Fridge', 'Room Service'],
//                 details: {
//                     size: '32 sqm',
//                     occupancy: '2 Adults',
//                     bedType: '2 Twin Beds',
//                     bathroom: 'Private bathroom with walk-in shower',
//                     extras: ['Seating Area', 'Tea & Coffee Facilities', 'Safe Box']
//                 },
//                 pricePerNight: 160,
//                 availableRooms: 12
//           },
//           {
//                 id: 3,
//                 name: 'Executive Suite',
//                 images: [Room_3],
//                 amenities: ['King Bed', 'Living Area', 'Balcony', 'Free WiFi', 'Smart TV'],
//                 details: {
//                     size: '50 sqm',
//                     occupancy: '3 Adults',
//                     bedType: '1 King Bed + Sofa Bed',
//                     bathroom: 'Luxury bathroom with Jacuzzi',
//                     extras: ['Dining Area', 'Exclusive Lounge Access', 'Butler Service']
//                 },
//                 pricePerNight: 250,
//                 availableRooms: 2
//           },
//           {
//                 id: 4,
//                 name: 'Family Room',
//                 images: [Room_4],
//                 amenities: ['2 Queen Beds', 'Smart TV', 'Free WiFi', 'Kids Amenities'],
//                 details: {
//                     size: '45 sqm',
//                     occupancy: '2 Adults + 2 Children',
//                     bedType: '2 Queen Beds',
//                     bathroom: 'Private bathroom with bathtub',
//                     extras: ['Crib Available', 'Kid-Friendly Snacks', 'Board Games']
//                 },
//                 pricePerNight: 190,
//                 availableRooms: 35
//           },
//           {
//                 id: 5,
//                 name: 'Penthouse Suite',
//                 images: [Room_5],
//                 amenities: ['Private Terrace', 'Jacuzzi', 'Personal Bar', 'Smart Home Controls'],
//                 details: {
//                     size: '75 sqm',
//                     occupancy: '4 Adults',
//                     bedType: '1 King Bed + 1 Sofa Bed',
//                     bathroom: 'Luxury bathroom with rain shower and Jacuzzi',
//                     extras: ['Exclusive Rooftop View', 'Private Dining', 'VIP Concierge']
//                 },
//                 pricePerNight: 500,
//                 availableRooms: 16
//           }
//       ],
//         // * ########## End Rooms Data 
//         popularLocations: ['Pyramids of Giza', 'Egyptian Museum'],
//         amenities: ['Pool', 'Ocean View', 'Spa', 'Gym', 'Hot Tub', 'Free WiFi'],
//         mealPlansAvailable: 'Dinner Included',
//         paymentType: 'Reserve now, Pay later',
//         propertyType: 'Hotel',
//         propertyBrand: 'Hyatt',
//         travellerExperience: 'Luxury, Business',
//         availability: 'Available',
//         accessibility: 'Wheelchair accessible',
//         hotelsRewards: 'Hyatt Rewards',
//         pricePerNight: 150,
//         stayOptions: 'Nightly, Weekend, Weekly',
//         neighbourhood: 'Cairo West',
//         propertyClass: '5-star',
//         rating: 4.7,
//         description:
//           'Experience luxury and comfort at Hyatt Regency Cairo West, ideally located near iconic landmarks.',
//         imageUrl: '/images/hyatt-cairo-west.jpg'
//     },  
//     {   
//         id: 2,
//         name: 'Marriott Hotel Alexandria',
//         address: 'Corniche Road, Alexandria, Egypt',
//         // * ########## Start Rooms Data 
//         rooms: [
//           {
//               id: 1,
//               name: 'Deluxe King Room',
//               images: ['/images/rooms/deluxe-king-1.jpg', '/images/rooms/deluxe-king-2.jpg'],
//               amenities: ['King Bed', 'City View', 'Free WiFi', 'Air Conditioning', 'Smart TV'],
//               details: {
//                   size: '35 sqm',
//                   occupancy: '2 Adults',
//                   bedType: '1 King Bed',
//                   bathroom: 'Private bathroom with shower and bathtub',
//                   extras: ['Work Desk', 'Mini Bar', 'Coffee Machine']
//               },
//               pricePerNight: 180,
//               availableRooms: 5
//           },
//           {
//               id: 2,
//               name: 'Superior Twin Room',
//               images: ['/images/rooms/superior-twin-1.jpg', '/images/rooms/superior-twin-2.jpg'],
//               amenities: ['Twin Beds', 'Garden View', 'Smart TV', 'Mini Fridge', 'Room Service'],
//               details: {
//                   size: '32 sqm',
//                   occupancy: '2 Adults',
//                   bedType: '2 Twin Beds',
//                   bathroom: 'Private bathroom with walk-in shower',
//                   extras: ['Seating Area', 'Tea & Coffee Facilities', 'Safe Box']
//               },
//               pricePerNight: 160,
//               availableRooms: 12
//           },
//           {
//               id: 3,
//               name: 'Executive Suite',
//               images: ['/images/rooms/executive-suite-1.jpg', '/images/rooms/executive-suite-2.jpg'],
//               amenities: ['King Bed', 'Living Area', 'Balcony', 'Free WiFi', 'Smart TV'],
//               details: {
//                   size: '50 sqm',
//                   occupancy: '3 Adults',
//                   bedType: '1 King Bed + Sofa Bed',
//                   bathroom: 'Luxury bathroom with Jacuzzi',
//                   extras: ['Dining Area', 'Exclusive Lounge Access', 'Butler Service']
//               },
//               pricePerNight: 250,
//               availableRooms: 2
//           },
//           {
//               id: 4,
//               name: 'Family Room',
//               images: ['/images/rooms/family-room-1.jpg', '/images/rooms/family-room-2.jpg'],
//               amenities: ['2 Queen Beds', 'Smart TV', 'Free WiFi', 'Kids Amenities'],
//               details: {
//                   size: '45 sqm',
//                   occupancy: '2 Adults + 2 Children',
//                   bedType: '2 Queen Beds',
//                   bathroom: 'Private bathroom with bathtub',
//                   extras: ['Crib Available', 'Kid-Friendly Snacks', 'Board Games']
//               },
//               pricePerNight: 190,
//               availableRooms: 35
//           },
//           {
//               id: 5,
//               name: 'Penthouse Suite',
//               images: ['/images/rooms/penthouse-1.jpg', '/images/rooms/penthouse-2.jpg'],
//               amenities: ['Private Terrace', 'Jacuzzi', 'Personal Bar', 'Smart Home Controls'],
//               details: {
//                   size: '75 sqm',
//                   occupancy: '4 Adults',
//                   bedType: '1 King Bed + 1 Sofa Bed',
//                   bathroom: 'Luxury bathroom with rain shower and Jacuzzi',
//                   extras: ['Exclusive Rooftop View', 'Private Dining', 'VIP Concierge']
//               },
//               pricePerNight: 500,
//               availableRooms: 16
//           }
//       ],
//         // * ########## End Rooms Data 
//         popularLocations: ['Bibliotheca Alexandrina', 'Montaza Palace'],
//         amenities: ['Pool', 'Gym', 'Spa', 'Free Breakfast', 'WiFi'],
//         mealPlansAvailable: 'Breakfast Included',
//         paymentType: 'Pay at hotel',
//         propertyType: 'Hotel',
//         propertyBrand: 'Marriott',
//         travellerExperience: 'Family, Business',
//         availability: 'Available',
//         accessibility: 'Accessible parking',
//         hotelsRewards: 'Marriott Bonvoy',
//         pricePerNight: 130,
//         stayOptions: 'Nightly, Extended Stay',
//         neighbourhood: 'Corniche',
//         propertyClass: '4-star',
//         rating: 4.5,
//         description:
//         'Enjoy a seaside retreat with modern amenities and a prime location at Marriott Hotel Alexandria.',
//         imageUrl: '/images/marriott-alexandria.jpg'
//       },  
//     //  * ###################################################
//     {   
//       id: 3,
//         name: 'Four Seasons Hotel Cairo at Nile Plaza',
//         address: 'Nile Road, Cairo, Egypt',
//         popularLocations: ['Egyptian Museum', 'Cairo Tower'],
//         amenities: ['Pool', 'Spa', 'Gym', 'Rooftop Bar', 'Concierge'],
//         mealPlansAvailable: 'Full Board',
//         paymentType: 'Reserve now, Pay later',
//         propertyType: 'Hotel',
//         propertyBrand: 'Four Seasons',
//         travellerExperience: 'Luxury, Business',
//         availability: 'Available',
//         accessibility: 'Wheelchair accessible',
//         hotelsRewards: 'Four Seasons Rewards',
//         pricePerNight: 250,
//         stayOptions: 'Nightly, Weekend',
//         neighbourhood: 'Nile Plaza',
//         propertyClass: '5-star',
//         rating: 4.9,
//         description:
//           'Discover unparalleled luxury and service at Four Seasons Hotel Cairo at Nile Plaza.',
//         imageUrl: '/images/four-seasons-cairo.jpg'
//       },  
//       //  * ###################################################
//     {   
//         id: 4,
//         name: 'Steigenberger Hotel El Tahrir',
//         address: 'Tahrir Square, Cairo, Egypt',
//         // * ########## Start Rooms Data 
//         rooms: [
//           {
//               id: 1,
//               name: 'Deluxe King Room',
//               images: ['/images/rooms/deluxe-king-1.jpg', '/images/rooms/deluxe-king-2.jpg'],
//               amenities: ['King Bed', 'City View', 'Free WiFi', 'Air Conditioning', 'Smart TV'],
//               details: {
//                   size: '35 sqm',
//                   occupancy: '2 Adults',
//                   bedType: '1 King Bed',
//                   bathroom: 'Private bathroom with shower and bathtub',
//                   extras: ['Work Desk', 'Mini Bar', 'Coffee Machine']
//               },
//               pricePerNight: 180,
//               availableRooms: 5
//           },
//           {
//               id: 2,
//               name: 'Superior Twin Room',
//               images: ['/images/rooms/superior-twin-1.jpg', '/images/rooms/superior-twin-2.jpg'],
//               amenities: ['Twin Beds', 'Garden View', 'Smart TV', 'Mini Fridge', 'Room Service'],
//               details: {
//                   size: '32 sqm',
//                   occupancy: '2 Adults',
//                   bedType: '2 Twin Beds',
//                   bathroom: 'Private bathroom with walk-in shower',
//                   extras: ['Seating Area', 'Tea & Coffee Facilities', 'Safe Box']
//               },
//               pricePerNight: 160,
//               availableRooms: 12
//           },
//           {
//               id: 3,
//               name: 'Executive Suite',
//               images: ['/images/rooms/executive-suite-1.jpg', '/images/rooms/executive-suite-2.jpg'],
//               amenities: ['King Bed', 'Living Area', 'Balcony', 'Free WiFi', 'Smart TV'],
//               details: {
//                   size: '50 sqm',
//                   occupancy: '3 Adults',
//                   bedType: '1 King Bed + Sofa Bed',
//                   bathroom: 'Luxury bathroom with Jacuzzi',
//                   extras: ['Dining Area', 'Exclusive Lounge Access', 'Butler Service']
//               },
//               pricePerNight: 250,
//               availableRooms: 2
//           },
//           {
//               id: 4,
//               name: 'Family Room',
//               images: ['/images/rooms/family-room-1.jpg', '/images/rooms/family-room-2.jpg'],
//               amenities: ['2 Queen Beds', 'Smart TV', 'Free WiFi', 'Kids Amenities'],
//               details: {
//                   size: '45 sqm',
//                   occupancy: '2 Adults + 2 Children',
//                   bedType: '2 Queen Beds',
//                   bathroom: 'Private bathroom with bathtub',
//                   extras: ['Crib Available', 'Kid-Friendly Snacks', 'Board Games']
//               },
//               pricePerNight: 190,
//               availableRooms: 35
//           },
//           {
//               id: 5,
//               name: 'Penthouse Suite',
//               images: ['/images/rooms/penthouse-1.jpg', '/images/rooms/penthouse-2.jpg'],
//               amenities: ['Private Terrace', 'Jacuzzi', 'Personal Bar', 'Smart Home Controls'],
//               details: {
//                   size: '75 sqm',
//                   occupancy: '4 Adults',
//                   bedType: '1 King Bed + 1 Sofa Bed',
//                   bathroom: 'Luxury bathroom with rain shower and Jacuzzi',
//                   extras: ['Exclusive Rooftop View', 'Private Dining', 'VIP Concierge']
//               },
//               pricePerNight: 500,
//               availableRooms: 16
//           }
//       ],
//         // * ########## End Rooms Data 
//         popularLocations: ['Tahrir Square', 'Egyptian Museum'],
//         amenities: ['Pool', 'Gym', 'Spa', 'Restaurant', 'Free WiFi'],
//         mealPlansAvailable: 'Breakfast and Dinner',
//         paymentType: 'Pay at hotel',
//         propertyType: 'Hotel',
//         propertyBrand: 'Steigenberger',
//         travellerExperience: 'Business, Leisure',
//         availability: 'Available',
//         accessibility: 'Elevator access',
//         hotelsRewards: 'Steigenberger Rewards',
//         pricePerNight: 110,
//         stayOptions: 'Nightly, Weekend',
//         neighbourhood: 'Downtown Cairo',
//         propertyClass: '4-star',
//         rating: 4.3,
//         description:
//           'Stay in the heart of Cairo with modern amenities and stylish design at Steigenberger Hotel El Tahrir.',
//         imageUrl: '/images/steigenberger-cairo.jpg'
//     },  
//     // * ###################################################
//     {   
//         id: 5,
//         name: 'InterContinental Dahab Resort',
//         address: 'Dahab, South Sinai, Egypt',
//         // * ########## Start Rooms Data 
//         rooms: [
//           {
//               id: 1,
//               name: 'Deluxe King Room',
//               images: ['/images/rooms/deluxe-king-1.jpg', '/images/rooms/deluxe-king-2.jpg'],
//               amenities: ['King Bed', 'City View', 'Free WiFi', 'Air Conditioning', 'Smart TV'],
//               details: {
//                   size: '35 sqm',
//                   occupancy: '2 Adults',
//                   bedType: '1 King Bed',
//                   bathroom: 'Private bathroom with shower and bathtub',
//                   extras: ['Work Desk', 'Mini Bar', 'Coffee Machine']
//               },
//               pricePerNight: 180,
//               availableRooms: 5
//           },
//           {
//               id: 2,
//               name: 'Superior Twin Room',
//               images: ['/images/rooms/superior-twin-1.jpg', '/images/rooms/superior-twin-2.jpg'],
//               amenities: ['Twin Beds', 'Garden View', 'Smart TV', 'Mini Fridge', 'Room Service'],
//               details: {
//                   size: '32 sqm',
//                   occupancy: '2 Adults',
//                   bedType: '2 Twin Beds',
//                   bathroom: 'Private bathroom with walk-in shower',
//                   extras: ['Seating Area', 'Tea & Coffee Facilities', 'Safe Box']
//               },
//               pricePerNight: 160,
//               availableRooms: 12
//           },
//           {
//               id: 3,
//               name: 'Executive Suite',
//               images: ['/images/rooms/executive-suite-1.jpg', '/images/rooms/executive-suite-2.jpg'],
//               amenities: ['King Bed', 'Living Area', 'Balcony', 'Free WiFi', 'Smart TV'],
//               details: {
//                   size: '50 sqm',
//                   occupancy: '3 Adults',
//                   bedType: '1 King Bed + Sofa Bed',
//                   bathroom: 'Luxury bathroom with Jacuzzi',
//                   extras: ['Dining Area', 'Exclusive Lounge Access', 'Butler Service']
//               },
//               pricePerNight: 250,
//               availableRooms: 2
//           },
//           {
//               id: 4,
//               name: 'Family Room',
//               images: ['/images/rooms/family-room-1.jpg', '/images/rooms/family-room-2.jpg'],
//               amenities: ['2 Queen Beds', 'Smart TV', 'Free WiFi', 'Kids Amenities'],
//               details: {
//                   size: '45 sqm',
//                   occupancy: '2 Adults + 2 Children',
//                   bedType: '2 Queen Beds',
//                   bathroom: 'Private bathroom with bathtub',
//                   extras: ['Crib Available', 'Kid-Friendly Snacks', 'Board Games']
//               },
//               pricePerNight: 190,
//               availableRooms: 35
//           },
//           {
//               id: 5,
//               name: 'Penthouse Suite',
//               images: ['/images/rooms/penthouse-1.jpg', '/images/rooms/penthouse-2.jpg'],
//               amenities: ['Private Terrace', 'Jacuzzi', 'Personal Bar', 'Smart Home Controls'],
//               details: {
//                   size: '75 sqm',
//                   occupancy: '4 Adults',
//                   bedType: '1 King Bed + 1 Sofa Bed',
//                   bathroom: 'Luxury bathroom with rain shower and Jacuzzi',
//                   extras: ['Exclusive Rooftop View', 'Private Dining', 'VIP Concierge']
//               },
//               pricePerNight: 500,
//               availableRooms: 16
//           }
//       ],
//         // * ########## End Rooms Data 
//         popularLocations: ['Blue Hole', 'Mount Sinai'],
//         amenities: ['Pool', 'Spa', 'Diving Center', 'Beach Access', 'Gym'],
//         mealPlansAvailable: 'All-Inclusive',
//         paymentType: 'Reserve now, Pay later',
//         propertyType: 'Resort',
//         propertyBrand: 'InterContinental',
//         travellerExperience: 'Adventure, Luxury',
//         availability: 'Available',
//         accessibility: 'Accessible rooms',
//         hotelsRewards: 'IHG Rewards Club',
//         pricePerNight: 180,
//         stayOptions: 'Nightly, Weekly',
//         neighbourhood: 'Dahab',
//         propertyClass: '5-star',
//         rating: 4.6,
//         description:
//           'Experience the ultimate desert resort with stunning views and adventure activities at InterContinental Dahab Resort.',
//         imageUrl: '/images/intercontinental-dahab.jpg'
//       },  
//       // * ######################################################
//       {   
//         id: 6,
//         name: 'Hilton Luxor Resort & Spa',
//         address: 'Luxor, Egypt',
//         // * ########## Start Rooms Data 
//         rooms: [
//           {
//               id: 1,
//               name: 'Deluxe King Room',
//               images: ['/images/rooms/deluxe-king-1.jpg', '/images/rooms/deluxe-king-2.jpg'],
//               amenities: ['King Bed', 'City View', 'Free WiFi', 'Air Conditioning', 'Smart TV'],
//               details: {
//                   size: '35 sqm',
//                   occupancy: '2 Adults',
//                   bedType: '1 King Bed',
//                   bathroom: 'Private bathroom with shower and bathtub',
//                   extras: ['Work Desk', 'Mini Bar', 'Coffee Machine']
//               },
//               pricePerNight: 180,
//               availableRooms: 5
//           },
//           {
//               id: 2,
//               name: 'Superior Twin Room',
//               images: ['/images/rooms/superior-twin-1.jpg', '/images/rooms/superior-twin-2.jpg'],
//               amenities: ['Twin Beds', 'Garden View', 'Smart TV', 'Mini Fridge', 'Room Service'],
//               details: {
//                   size: '32 sqm',
//                   occupancy: '2 Adults',
//                   bedType: '2 Twin Beds',
//                   bathroom: 'Private bathroom with walk-in shower',
//                   extras: ['Seating Area', 'Tea & Coffee Facilities', 'Safe Box']
//               },
//               pricePerNight: 160,
//               availableRooms: 12
//           },
//           {
//               id: 3,
//               name: 'Executive Suite',
//               images: ['/images/rooms/executive-suite-1.jpg', '/images/rooms/executive-suite-2.jpg'],
//               amenities: ['King Bed', 'Living Area', 'Balcony', 'Free WiFi', 'Smart TV'],
//               details: {
//                   size: '50 sqm',
//                   occupancy: '3 Adults',
//                   bedType: '1 King Bed + Sofa Bed',
//                   bathroom: 'Luxury bathroom with Jacuzzi',
//                   extras: ['Dining Area', 'Exclusive Lounge Access', 'Butler Service']
//               },
//               pricePerNight: 250,
//               availableRooms: 2
//           },
//           {
//               id: 4,
//               name: 'Family Room',
//               images: ['/images/rooms/family-room-1.jpg', '/images/rooms/family-room-2.jpg'],
//               amenities: ['2 Queen Beds', 'Smart TV', 'Free WiFi', 'Kids Amenities'],
//               details: {
//                   size: '45 sqm',
//                   occupancy: '2 Adults + 2 Children',
//                   bedType: '2 Queen Beds',
//                   bathroom: 'Private bathroom with bathtub',
//                   extras: ['Crib Available', 'Kid-Friendly Snacks', 'Board Games']
//               },
//               pricePerNight: 190,
//               availableRooms: 35
//           },
//           {
//               id: 5,
//               name: 'Penthouse Suite',
//               images: ['/images/rooms/penthouse-1.jpg', '/images/rooms/penthouse-2.jpg'],
//               amenities: ['Private Terrace', 'Jacuzzi', 'Personal Bar', 'Smart Home Controls'],
//               details: {
//                   size: '75 sqm',
//                   occupancy: '4 Adults',
//                   bedType: '1 King Bed + 1 Sofa Bed',
//                   bathroom: 'Luxury bathroom with rain shower and Jacuzzi',
//                   extras: ['Exclusive Rooftop View', 'Private Dining', 'VIP Concierge']
//               },
//               pricePerNight: 500,
//               availableRooms: 16
//           }
//       ],
//         // * ########## End Rooms Data 
//         popularLocations: ['Karnak Temple', 'Valley of the Kings'],
//         amenities: ['Pool', 'Spa', 'Gym', 'Rooftop Bar', 'Free WiFi'],
//         mealPlansAvailable: 'Breakfast Included',
//         paymentType: 'Pay at hotel',
//         propertyType: 'Resort',
//         propertyBrand: 'Hilton',
//         travellerExperience: 'Family, Business',
//         availability: 'Available',
//         accessibility: 'Wheelchair accessible',
//         hotelsRewards: 'Hilton Honors',
//         pricePerNight: 140,
//         stayOptions: 'Nightly, Extended Stay',
//         neighbourhood: 'Luxor City',
//         propertyClass: '4-star',
//         rating: 4.4,
//         description:
//         'Enjoy a mix of ancient charm and modern comfort at Hilton Luxor Resort & Spa, near iconic historical sites.',
//         imageUrl: '/images/hilton-luxor.jpg'
//       },  
//       // * ###################################################### 
//     {   
//         id: 7,
//         name: 'Sofitel Winter Palace Aswan',
//         address: 'Aswan, Egypt',
//         // * ########## Start Rooms Data 
//         rooms: [
//           {
//               id: 1,
//               name: 'Deluxe King Room',
//               images: ['/images/rooms/deluxe-king-1.jpg', '/images/rooms/deluxe-king-2.jpg'],
//               amenities: ['King Bed', 'City View', 'Free WiFi', 'Air Conditioning', 'Smart TV'],
//               details: {
//                   size: '35 sqm',
//                   occupancy: '2 Adults',
//                   bedType: '1 King Bed',
//                   bathroom: 'Private bathroom with shower and bathtub',
//                   extras: ['Work Desk', 'Mini Bar', 'Coffee Machine']
//               },
//               pricePerNight: 180,
//               availableRooms: 5
//           },
//           {
//               id: 2,
//               name: 'Superior Twin Room',
//               images: ['/images/rooms/superior-twin-1.jpg', '/images/rooms/superior-twin-2.jpg'],
//               amenities: ['Twin Beds', 'Garden View', 'Smart TV', 'Mini Fridge', 'Room Service'],
//               details: {
//                   size: '32 sqm',
//                   occupancy: '2 Adults',
//                   bedType: '2 Twin Beds',
//                   bathroom: 'Private bathroom with walk-in shower',
//                   extras: ['Seating Area', 'Tea & Coffee Facilities', 'Safe Box']
//               },
//               pricePerNight: 160,
//               availableRooms: 12
//           },
//           {
//               id: 3,
//               name: 'Executive Suite',
//               images: ['/images/rooms/executive-suite-1.jpg', '/images/rooms/executive-suite-2.jpg'],
//               amenities: ['King Bed', 'Living Area', 'Balcony', 'Free WiFi', 'Smart TV'],
//               details: {
//                   size: '50 sqm',
//                   occupancy: '3 Adults',
//                   bedType: '1 King Bed + Sofa Bed',
//                   bathroom: 'Luxury bathroom with Jacuzzi',
//                   extras: ['Dining Area', 'Exclusive Lounge Access', 'Butler Service']
//               },
//               pricePerNight: 250,
//               availableRooms: 2
//           },
//           {
//               id: 4,
//               name: 'Family Room',
//               images: ['/images/rooms/family-room-1.jpg', '/images/rooms/family-room-2.jpg'],
//               amenities: ['2 Queen Beds', 'Smart TV', 'Free WiFi', 'Kids Amenities'],
//               details: {
//                   size: '45 sqm',
//                   occupancy: '2 Adults + 2 Children',
//                   bedType: '2 Queen Beds',
//                   bathroom: 'Private bathroom with bathtub',
//                   extras: ['Crib Available', 'Kid-Friendly Snacks', 'Board Games']
//               },
//               pricePerNight: 190,
//               availableRooms: 35
//           },
//           {
//               id: 5,
//               name: 'Penthouse Suite',
//               images: ['/images/rooms/penthouse-1.jpg', '/images/rooms/penthouse-2.jpg'],
//               amenities: ['Private Terrace', 'Jacuzzi', 'Personal Bar', 'Smart Home Controls'],
//               details: {
//                   size: '75 sqm',
//                   occupancy: '4 Adults',
//                   bedType: '1 King Bed + 1 Sofa Bed',
//                   bathroom: 'Luxury bathroom with rain shower and Jacuzzi',
//                   extras: ['Exclusive Rooftop View', 'Private Dining', 'VIP Concierge']
//               },
//               pricePerNight: 500,
//               availableRooms: 16
//           }
//       ],
//         // * ########## End Rooms Data 
//         popularLocations: ['Aswan High Dam', 'Philae Temple'],
//         amenities: ['Pool', 'Spa', 'Gym', 'Luxury Rooms', 'Free Breakfast'],
//         mealPlansAvailable: 'Full Board',
//         paymentType: 'Reserve now, Pay later',
//         propertyType: 'Hotel',
//         propertyBrand: 'Sofitel',
//         travellerExperience: 'Luxury, Business',
//         availability: 'Available',
//         accessibility: 'Elevator access',
//         hotelsRewards: 'Sofitel Rewards',
//         pricePerNight: 160,
//         stayOptions: 'Nightly, Weekend',
//         neighbourhood: 'Aswan Riverside',
//         propertyClass: '5-star',
//         rating: 4.8,
//         description:
//           'Immerse yourself in regal luxury and stunning views at Sofitel Winter Palace Aswan.',
//         imageUrl: '/images/sofitel-aswan.jpg'
//     },  
//     // * ###################################################################
//     {   
//         id: 8,
//         name: 'Ritz-Carlton Sharm El Sheikh',
//         address: 'Sharm El Sheikh, Egypt',
//         // * ########## Start Rooms Data 
//         rooms: [
//           {
//               id: 1,
//               name: 'Deluxe King Room',
//               images: ['/images/rooms/deluxe-king-1.jpg', '/images/rooms/deluxe-king-2.jpg'],
//               amenities: ['King Bed', 'City View', 'Free WiFi', 'Air Conditioning', 'Smart TV'],
//               details: {
//                   size: '35 sqm',
//                   occupancy: '2 Adults',
//                   bedType: '1 King Bed',
//                   bathroom: 'Private bathroom with shower and bathtub',
//                   extras: ['Work Desk', 'Mini Bar', 'Coffee Machine']
//               },
//               pricePerNight: 180,
//               availableRooms: 5
//           },
//           {
//               id: 2,
//               name: 'Superior Twin Room',
//               images: ['/images/rooms/superior-twin-1.jpg', '/images/rooms/superior-twin-2.jpg'],
//               amenities: ['Twin Beds', 'Garden View', 'Smart TV', 'Mini Fridge', 'Room Service'],
//               details: {
//                   size: '32 sqm',
//                   occupancy: '2 Adults',
//                   bedType: '2 Twin Beds',
//                   bathroom: 'Private bathroom with walk-in shower',
//                   extras: ['Seating Area', 'Tea & Coffee Facilities', 'Safe Box']
//               },
//               pricePerNight: 160,
//               availableRooms: 12
//           },
//           {
//               id: 3,
//               name: 'Executive Suite',
//               images: ['/images/rooms/executive-suite-1.jpg', '/images/rooms/executive-suite-2.jpg'],
//               amenities: ['King Bed', 'Living Area', 'Balcony', 'Free WiFi', 'Smart TV'],
//               details: {
//                   size: '50 sqm',
//                   occupancy: '3 Adults',
//                   bedType: '1 King Bed + Sofa Bed',
//                   bathroom: 'Luxury bathroom with Jacuzzi',
//                   extras: ['Dining Area', 'Exclusive Lounge Access', 'Butler Service']
//               },
//               pricePerNight: 250,
//               availableRooms: 2
//           },
//           {
//               id: 4,
//               name: 'Family Room',
//               images: ['/images/rooms/family-room-1.jpg', '/images/rooms/family-room-2.jpg'],
//               amenities: ['2 Queen Beds', 'Smart TV', 'Free WiFi', 'Kids Amenities'],
//               details: {
//                   size: '45 sqm',
//                   occupancy: '2 Adults + 2 Children',
//                   bedType: '2 Queen Beds',
//                   bathroom: 'Private bathroom with bathtub',
//                   extras: ['Crib Available', 'Kid-Friendly Snacks', 'Board Games']
//               },
//               pricePerNight: 190,
//               availableRooms: 35
//           },
//           {
//               id: 5,
//               name: 'Penthouse Suite',
//               images: ['/images/rooms/penthouse-1.jpg', '/images/rooms/penthouse-2.jpg'],
//               amenities: ['Private Terrace', 'Jacuzzi', 'Personal Bar', 'Smart Home Controls'],
//               details: {
//                   size: '75 sqm',
//                   occupancy: '4 Adults',
//                   bedType: '1 King Bed + 1 Sofa Bed',
//                   bathroom: 'Luxury bathroom with rain shower and Jacuzzi',
//                   extras: ['Exclusive Rooftop View', 'Private Dining', 'VIP Concierge']
//               },
//               pricePerNight: 500,
//               availableRooms: 16
//           }
//       ],
//         // * ########## End Rooms Data 
//         popularLocations: ['Naama Bay', 'Ras Mohammed National Park'],
//         amenities: ['Pool', 'Spa', 'Gym', 'Beach Access', 'Free WiFi'],
//         mealPlansAvailable: 'All-Inclusive',
//         paymentType: 'Reserve now, Pay later',
//         propertyType: 'Resort',
//         propertyBrand: 'Ritz-Carlton',
//         travellerExperience: 'Luxury, Leisure',
//         availability: 'Available',
//         accessibility: 'Accessible facilities',
//         hotelsRewards: 'Ritz Rewards',
//         pricePerNight: 220,
//         stayOptions: 'Nightly, Weekly',
//         neighbourhood: 'Sharm El Sheikh Center',
//         propertyClass: '5-star',
//         rating: 4.9,
//         description:
//           'Indulge in a luxurious retreat with stunning sea views at Ritz-Carlton Sharm El Sheikh.',
//         imageUrl: '/images/ritz-sharm.jpg'
//     },  
//     // * ####################################################################
//     {   
//         id: 9,
//         name: 'Mövenpick Resort El Gouna',
//         address: 'El Gouna, Egypt',
//         // * ########## Start Rooms Data 
//         rooms: [
//           {
//               id: 1,
//               name: 'Deluxe King Room',
//               images: ['/images/rooms/deluxe-king-1.jpg', '/images/rooms/deluxe-king-2.jpg'],
//               amenities: ['King Bed', 'City View', 'Free WiFi', 'Air Conditioning', 'Smart TV'],
//               details: {
//                   size: '35 sqm',
//                   occupancy: '2 Adults',
//                   bedType: '1 King Bed',
//                   bathroom: 'Private bathroom with shower and bathtub',
//                   extras: ['Work Desk', 'Mini Bar', 'Coffee Machine']
//               },
//               pricePerNight: 180,
//               availableRooms: 5
//           },
//           {
//               id: 2,
//               name: 'Superior Twin Room',
//               images: ['/images/rooms/superior-twin-1.jpg', '/images/rooms/superior-twin-2.jpg'],
//               amenities: ['Twin Beds', 'Garden View', 'Smart TV', 'Mini Fridge', 'Room Service'],
//               details: {
//                   size: '32 sqm',
//                   occupancy: '2 Adults',
//                   bedType: '2 Twin Beds',
//                   bathroom: 'Private bathroom with walk-in shower',
//                   extras: ['Seating Area', 'Tea & Coffee Facilities', 'Safe Box']
//               },
//               pricePerNight: 160,
//               availableRooms: 12
//           },
//           {
//               id: 3,
//               name: 'Executive Suite',
//               images: ['/images/rooms/executive-suite-1.jpg', '/images/rooms/executive-suite-2.jpg'],
//               amenities: ['King Bed', 'Living Area', 'Balcony', 'Free WiFi', 'Smart TV'],
//               details: {
//                   size: '50 sqm',
//                   occupancy: '3 Adults',
//                   bedType: '1 King Bed + Sofa Bed',
//                   bathroom: 'Luxury bathroom with Jacuzzi',
//                   extras: ['Dining Area', 'Exclusive Lounge Access', 'Butler Service']
//               },
//               pricePerNight: 250,
//               availableRooms: 2
//           },
//           {
//               id: 4,
//               name: 'Family Room',
//               images: ['/images/rooms/family-room-1.jpg', '/images/rooms/family-room-2.jpg'],
//               amenities: ['2 Queen Beds', 'Smart TV', 'Free WiFi', 'Kids Amenities'],
//               details: {
//                   size: '45 sqm',
//                   occupancy: '2 Adults + 2 Children',
//                   bedType: '2 Queen Beds',
//                   bathroom: 'Private bathroom with bathtub',
//                   extras: ['Crib Available', 'Kid-Friendly Snacks', 'Board Games']
//               },
//               pricePerNight: 190,
//               availableRooms: 35
//           },
//           {
//               id: 5,
//               name: 'Penthouse Suite',
//               images: ['/images/rooms/penthouse-1.jpg', '/images/rooms/penthouse-2.jpg'],
//               amenities: ['Private Terrace', 'Jacuzzi', 'Personal Bar', 'Smart Home Controls'],
//               details: {
//                   size: '75 sqm',
//                   occupancy: '4 Adults',
//                   bedType: '1 King Bed + 1 Sofa Bed',
//                   bathroom: 'Luxury bathroom with rain shower and Jacuzzi',
//                   extras: ['Exclusive Rooftop View', 'Private Dining', 'VIP Concierge']
//               },
//               pricePerNight: 500,
//               availableRooms: 16
//           }
//       ],
//         // * ########## End Rooms Data 
//         popularLocations: ['El Gouna Marina', 'Mangroves'],
//         amenities: ['Pool', 'Spa', 'Gym', 'Water Sports', 'Beach Access'],
//         mealPlansAvailable: 'Half Board',
//         paymentType: 'Reserve now, Pay later',
//         propertyType: 'Resort',
//         propertyBrand: 'Mövenpick',
//         travellerExperience: 'Family, Luxury',
//         availability: 'Available',
//         accessibility: 'Wheelchair accessible',
//         hotelsRewards: 'Mövenpick Rewards',
//         pricePerNight: 170,
//         stayOptions: 'Nightly, Extended Stay',
//         neighbourhood: 'El Gouna',
//         propertyClass: '5-star',
//         rating: 4.5,
//         description:
//             'Enjoy the perfect blend of luxury and nature at Mövenpick Resort El Gouna, an oasis in the desert.',
//         imageUrl: '/images/movenpick-elgouna.jpg'
//     },  
//     //  * #############################################
//     {   
//         id: 10,
//         name: 'Barcelo Cairo',
//         address: 'Cairo, Egypt',
//         // * ########## Start Rooms Data 
//         rooms: [
//           {
//               id: 1,
//               name: 'Deluxe King Room',
//               images: ['/images/rooms/deluxe-king-1.jpg', '/images/rooms/deluxe-king-2.jpg'],
//               amenities: ['King Bed', 'City View', 'Free WiFi', 'Air Conditioning', 'Smart TV'],
//               details: {
//                   size: '35 sqm',
//                   occupancy: '2 Adults',
//                   bedType: '1 King Bed',
//                   bathroom: 'Private bathroom with shower and bathtub',
//                   extras: ['Work Desk', 'Mini Bar', 'Coffee Machine']
//               },
//               pricePerNight: 180,
//               availableRooms: 5
//           },
//           {
//               id: 2,
//               name: 'Superior Twin Room',
//               images: ['/images/rooms/superior-twin-1.jpg', '/images/rooms/superior-twin-2.jpg'],
//               amenities: ['Twin Beds', 'Garden View', 'Smart TV', 'Mini Fridge', 'Room Service'],
//               details: {
//                   size: '32 sqm',
//                   occupancy: '2 Adults',
//                   bedType: '2 Twin Beds',
//                   bathroom: 'Private bathroom with walk-in shower',
//                   extras: ['Seating Area', 'Tea & Coffee Facilities', 'Safe Box']
//               },
//               pricePerNight: 160,
//               availableRooms: 12
//           },
//           {
//               id: 3,
//               name: 'Executive Suite',
//               images: ['/images/rooms/executive-suite-1.jpg', '/images/rooms/executive-suite-2.jpg'],
//               amenities: ['King Bed', 'Living Area', 'Balcony', 'Free WiFi', 'Smart TV'],
//               details: {
//                   size: '50 sqm',
//                   occupancy: '3 Adults',
//                   bedType: '1 King Bed + Sofa Bed',
//                   bathroom: 'Luxury bathroom with Jacuzzi',
//                   extras: ['Dining Area', 'Exclusive Lounge Access', 'Butler Service']
//               },
//               pricePerNight: 250,
//               availableRooms: 2
//           },
//           {
//               id: 4,
//               name: 'Family Room',
//               images: ['/images/rooms/family-room-1.jpg', '/images/rooms/family-room-2.jpg'],
//               amenities: ['2 Queen Beds', 'Smart TV', 'Free WiFi', 'Kids Amenities'],
//               details: {
//                   size: '45 sqm',
//                   occupancy: '2 Adults + 2 Children',
//                   bedType: '2 Queen Beds',
//                   bathroom: 'Private bathroom with bathtub',
//                   extras: ['Crib Available', 'Kid-Friendly Snacks', 'Board Games']
//               },
//               pricePerNight: 190,
//               availableRooms: 35
//           },
//           {
//               id: 5,
//               name: 'Penthouse Suite',
//               images: ['/images/rooms/penthouse-1.jpg', '/images/rooms/penthouse-2.jpg'],
//               amenities: ['Private Terrace', 'Jacuzzi', 'Personal Bar', 'Smart Home Controls'],
//               details: {
//                   size: '75 sqm',
//                   occupancy: '4 Adults',
//                   bedType: '1 King Bed + 1 Sofa Bed',
//                   bathroom: 'Luxury bathroom with rain shower and Jacuzzi',
//                   extras: ['Exclusive Rooftop View', 'Private Dining', 'VIP Concierge']
//               },
//               pricePerNight: 500,
//               availableRooms: 16
//           }
//       ],
//         // * ########## End Rooms Data 
//         popularLocations: ['Khan el-Khalili', 'Coptic Cairo'],
//         amenities: ['Pool', 'Gym', 'Spa', 'Restaurant', 'Free WiFi'],
//         mealPlansAvailable: 'Breakfast Included',
//         paymentType: 'Pay at hotel',
//         propertyType: 'Hotel',
//         propertyBrand: 'Barcelo',
//         travellerExperience: 'Business, Leisure',
//         availability: 'Available',
//         accessibility: 'Accessible facilities',
//         hotelsRewards: 'Barcelo Rewards',
//         pricePerNight: 120,
//         stayOptions: 'Nightly, Weekend',
//         neighbourhood: 'Downtown Cairo',
//         propertyClass: '4-star',
//         rating: 4.2,
//         description:
//         'Discover modern comfort and style in the heart of Cairo at Barcelo Cairo.',
//         imageUrl: '/images/barcelo-cairo.jpg'
//     }
// ] as Hotel[]
// };

// const Hotels = createSlice({
//     name: 'hotels',
//     initialState,
//     reducers: {
//     }
// });

// export default Hotels.reducer;
