import { ChartNetwork } from "lucide-react"

export const City = [
    { id: 1, name: "All Cities" },
    { id: 2, name: "Addis Ababa" },
    { id: 3, name: "Lalibela" },
    { id: 4, name: "Jimma" },
    { id: 5, name: "Gondar" },
    { id: 6, name: "Axum" },
    { id: 7, name: "Harar" },
    { id: 8, name: "Bahirdar" },
    { id: 9, name: "Dire Dawa" },
    { id: 10, name: "Adama" },
    { id: 11, name: "Mekele" },
    { id: 12, name: "Hawassa" }
]

export const Around = [
    { id: 1, name: "Kazanchis" },
    { id: 2, name: "Bole" },
    { id: 3, name: "Piassa" },
    { id: 4, name: "Mexico" },
    { id: 5, name: "4 Kilo" }
]

export const Price = [
    { id: 1, name: "All Price" },
    { id: 2, name: "$0-$50" },
    { id: 3, name: "$50-$100" },
    { id: 4, name: "$100-$200" },
    { id: 5, name: "$200-$500" },
    { id: 6, name: "$500+" }
]

export const Room_Type = [
    { id: 1, name: "All Room Type", },
    { id: 2, name: "Standard Room" },
    { id: 3, name: "Double Room" },
    { id: 4, name: "Suite" },
    { id: 5, name: "Deluxe Room" },
    { id: 6, name: "Family Room" }
]

export const Car_Type = [
    { id: 1, name: "Sedan" },
    { id: 2, name: "SUV" },
    { id: 3, name: "Hatchback" },
    { id: 4, name: "Pickup Truck" },
    { id: 5, name: "Van" },
    { id: 6, name: "Minivan" },
    { id: 7, name: "Sports Car" }
]

export const Transmission = [
    { id: 1, name: "Automatic" },
    { id: 2, name: "Manual" }
]

export const Seats = [
    { id: 1, name: "Any" },
    { id: 2, name: "2 Seats" },
    { id: 3, name: "4 Seats" },
    { id: 4, name: "7 Seats" },
    { id: 5, name: "8+ Seats" }
]

export const Rating = [
   
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
    { id: 6, name: "5+" },
]

export const Specialties = [
    { id: 1, name: "Historical Sites" },
    { id: 2, name: "Wildlife & Nature" },
    { id: 3, name: "Adventure Tours" },
    { id: 4, name: "Cultural Tours" },
    { id: 5, name: "Photography" }
]

export const Languages = [
    { id: 1, name: "English" },
    { id: 2, name: "Amharic" },
    { id: 3, name: "French" },
    { id: 4, name: "German" },
    { id: 5, name: "Spanish" },
    { id: 6, name: "Italian" }
]

export const Destionations_Categories = [
    { id: 1, name: "National Park" },
    { id: 2, name: "Historical Sites" },
    { id: 3, name: "Museums" },
    { id: 4, name: "Cultural Sites" },
    { id: 5, name: "Religious Sites" },
    { id: 6, name: "Natural Wonders" }
]

export const Durations = [
    { id: 1, name: "2-3 hours" },
    { id: 2, name: "Half Day" },
    { id: 3, name: "Full Day" },
    { id: 4, name: "Multi-Day" }
]

export const Regions = [
    { id: 1, name: "All Regions" },
    { id: 2, name: "Addis Ababa" },
    { id: 3, name: "Oromia Region" },
    { id: 4, name: "Amhara Region" },
    { id: 5, name: "Tigray Region" },
    { id: 6, name: "Benishangul" },
    { id: 7, name: "SNNP Region" }
]

export const Amenities = [
    { id: 1, name: "Free Wi-Fi" },
    { id: 2, name: "Swimming Pool" },
    { id: 3, name: "Fitness Center" },
    { id: 4, name: "Restaurant" },
    { id: 5, name: "Bar" },
    { id: 6, name: "Spa" },
    { id:7, name: "Airport Shuttle"}
]

export const Hotels_List = [
  {
    id: 1,
    name: "Skylight Hotel",
    url: "/Skylight_Hotel.jpg",
    city: "Addis Ababa",
    around: "Bole International Airport",
    rating: 4,
    room_type: [
      { id: 1, room: "Suite", description: "Luxurious suite with separate living area", image: "/Suite.png", price: "$100" },
      { id: 2, room: "Deluxe Room", description: "Spacious room with premium furnishings", image: "/Deluxe_Room.png", price: "$80" },
      { id: 3, room: "Standard Room", description: "Comfortable room with essential amenities", image: "/Standard_Room.png", price: "$50" },
      { id: 4, room: "Family Room", description: "Large room perfect for families", image: "/Family_Room.png", price: "$120" },
    ],
    amenities: ["WiFi", "Airport Shuttle", "Pool", "Spa"],
    contact: { phone: "+251-11-1234567", email: "info@skylighthotel.com" },
    policies: { check_in: "2 PM", check_out: "12 PM", cancellation: "Free until 24h before" }
  },
  {
    id: 2,
    name: "Sheraton Addis Luxury Collection",
    url: "/Sheraton.jpg",
    city: "Addis Ababa",
    around: "Central Addis",
    rating: 5,
    room_type: [
      { id: 1, room: "Suite", description: "Luxurious suite with separate living area", image: "/Suite.png", price: "$500" },
      { id: 2, room: "Deluxe Room", description: "Spacious room with premium furnishings", image: "/Deluxe_Room.png", price: "$250" },
      { id: 3, room: "Standard Room", description: "Comfortable room with essential amenities", image: "/Standard_Room.png", price: "$180" },
      { id: 4, room: "Family Room", description: "Large room perfect for families", image: "/Family_Room.png", price: "$320" },

    ],
    amenities: ["Luxury Spa", "Pool", "Business Center"],
    contact: { phone: "+251-11-5171717", email: "reservations@sheratonaddis.com" },
    policies: { check_in: "3 PM", check_out: "11 AM", cancellation: "Free until 48h before" }
  },
  {
    id: 3,
    name: "Marriott Executive Apartments",
    url: "/Marriott-Executive.jpg",
    city: "Addis Ababa",
    around: "Meskel Square",
    rating: 4,
    room_type: [
      { id: 1, room: "Suite", description: "Luxurious suite with separate living area", image: "/Suite.png", price: "$150" },
      { id: 2, room: "Deluxe Room", description: "Spacious room with premium furnishings", image: "/Deluxe_Room.png", price: "$200" },
      { id: 3, room: "Standard Room", description: "Comfortable room with essential amenities", image: "/Standard_Room.png", price: "$300" },
      { id: 4, room: "Family Room", description: "Large room perfect for families", image: "/Family_Room.png", price: "$320" },
    ],
    amenities: ["Kitchenette", "Gym", "Pool", "Lounge"],
    contact: { phone: "+251-11-1237890", email: "stay@marriottaddis.com" },
    policies: { check_in: "2 PM", check_out: "12 PM", cancellation: "Free until 24h before" }
  },
  {
    id: 4,
    name: "Hilton Addis Ababa",
    url: "/Hilton.jpg",
    city: "Addis Ababa",
    around: "Kazanchis",
    rating: 4,
    room_type: [
      { id: 1, room: "Suite", description: "Luxurious suite with separate living area", image: "/Suite.png", price: "$160" },
      { id: 2, room: "Deluxe Room", description: "Spacious room with premium furnishings", image: "/Deluxe_Room.png", price: "$140" },
      { id: 3, room: "Standard Room", description: "Comfortable room with essential amenities", image: "/Standard_Room.png", price: "$280" },
      { id: 4, room: "Family Room", description: "Large room perfect for families", image: "/Family_Room.png", price: "$320" },

    ],
    amenities: ["Pool", "Tennis Court", "Spa"],
    contact: { phone: "+251-11-5170000", email: "hilton@hiltonaddis.com" },
    policies: { check_in: "2 PM", check_out: "12 PM", cancellation: "Free until 24h before" }
  },
  {
    id: 5,
    name: "Radisson Blu Hotel",
    url: "/Radisson_Blu.jpg",
    city: "Addis Ababa",
    around: "Kazanchis",
    rating: 5,
    room_type: [
      { id: 1, room: "Suite", description: "Luxurious suite with separate living area", image: "/Suite.png", price: "$220" },
      { id: 2, room: "Deluxe Room", description: "Spacious room with premium furnishings", image: "/Deluxe_Room.png", price: "$150" },
      { id: 3, room: "Standard Room", description: "Comfortable room with essential amenities", image: "/Standard_Room.png", price: "$350" },
      { id: 4, room: "Family Room", description: "Large room perfect for families", image: "/Family_Room.png", price: "$220" },

    ],
    amenities: [ "Spa", "Airport Shuttle"],
    contact: { phone: "+251-11-5157600", email: "info@radissonbluaddis.com" },
    policies: { check_in: "2 PM", check_out: "12 PM", cancellation: "Free until 24h before" }
  },
  
  {
    id: 6,
    name: "Haile Resort",
    url: "/Haile_resort_hawassa.jpg",
    city: "Hawassa",
    around: "Lake Hawassa",
    rating: 4,
    room_type: [
      { id: 1, room: "Suite", description: "Luxurious suite with separate living area", image: "/Suite.png", price: "$180" },
      { id: 2, room: "Deluxe Room", description: "Spacious room with premium furnishings", image: "/Deluxe_Room.png", price: "$90" },
      { id: 3, room: "Standard Room", description: "Comfortable room with essential amenities", image: "/Standard_Room.png", price: "$350" },
      { id: 4, room: "Family Room", description: "Large room perfect for families", image: "/Family_Room.png", price: "$220" }
    ],
    amenities: ["Lake View", "Pool", "Spa", "Restaurant"],
    contact: { phone: "+251-46-2202000", email: "info@haileresoeth.com" },
    policies: { check_in: "2 PM", check_out: "12 PM", cancellation: "Free until 24h before" }
  },
  
  
  
  
]

export const Cars = [
    { id: 1, name: "Toyota Camry", url: "/Toyota_Camry.webp", type: "Sedan", transmission: "Automatic", seats: "4 Seats", price: "$50/day", rating: 4 },
    { id: 2, name: "Honda CR-V", url: "/Honda_CR-V.webp", type: "SUV", transmission: "Automatic", seats: "5 Seats", price: "$70/day", rating: 5 },
    { id: 3, name: "Ford Focus", url: "/Ford_Focus.webp", type: "Hatchback", transmission: "Manual", seats: "4 Seats", price: "$40/day", rating: 3 },
    { id: 4, name: "Chevrolet Silverado", url: "/Chevrolet_Silverado.webp", type: "Pickup Truck", transmission: "Automatic", seats: "2 Seats", price: "$80/day", rating: 4 },
    { id: 5, name: "Dodge Grand Caravan", url: "/Dodge_Grand_Caravan.webp", type: "Minivan", transmission: "Automatic", seats: "7 Seats", price: "$90/day", rating: 5 },
    { id: 6, name: "Mazda MX-5 Miata", url: "/Mazda_MX-5_Miata.webp", type: "Sports Car", transmission: "Manual", seats: "2 Seats", price: "$60/day", rating: 4 },
    { id: 7, name: "Toyota RAV4", url: "/Toyota_RAV4.webp", type: "SUV", transmission: "Automatic", seats: "5 Seats", price: "$75/day", rating: 5 },
    { id: 8, name: "Honda Accord", url: "/Honda_Accord.webp", type: "Sedan", transmission: "Automatic", seats: "4 Seats", price: "$55/day", rating: 4 },
    { id: 9, name: "Ford Explorer", url: "/Ford_Explorer.webp", type: "SUV", transmission: "Automatic", seats: "7 Seats", price: "$85/day", rating: 5 },
    { id: 10, name: "Chevrolet Malibu", url: "/Chevrolet_Malibu.webp", type: "Sedan", transmission: "Automatic", seats: "4 Seats", price: "$45/day", rating: 3 },
    { id: 11, name: "Dodge Charger", url: "/Dodge_Charger.webp", type: "Sports Car", transmission: "Manual", seats: "4 Seats", price: "$65/day", rating: 4 },
    { id: 12, name: "Mazda CX-5", url: "/Mazda_CX-5.webp", type: "SUV", transmission: "Automatic", seats: "5 Seats", price: "$70/day", rating: 5 }
]

export const TourGuides = [
    { id: 1, name: "John Doe", specialty: "Historical Sites", languages: "English, Amharic", rating: 4 },
    { id: 2, name: "Jane Smith", specialty: "Wildlife & Nature", languages: "English, French", rating: 5 },
    { id: 3, name: "Robert Johnson", specialty: "Cultural Tours", languages: "English, Spanish", rating: 4 },
    { id: 4, name: "Emily Davis", specialty: "Adventure Activities", languages: "English, German", rating: 5 },
    { id: 5, name: "Michael Wilson", specialty: "Religious Sites", languages: "English, Amharic", rating: 4 }
]

export const Destinations = [
  {
    "id": 1,
    "name": "Lalibela Rock-Hewn Churches",
    "region": "Amhara",
    "city": "Lalibela",
    "category": "Historical",
    "description": "UNESCO site with 11 medieval monolithic churches carved from rock.",
    "highlights": ["St. George Church", "Ancient architecture"],
    "activities": ["Guided tours", "Photography"],
    "entry_fee": [{ "local": "ETB 200", "foreign": "ETB 1500" }],
    "rating": 4.7,
    "image": "/Lalibela.jpg"
  },
  {
    "id": 2,
    "name": "Simien Mountains National Park",
    "region": "Amhara",
    "city": "Debark",
    "category": "Natural",
    "description": "Jagged peaks, deep valleys, and endemic wildlife like Gelada baboons.",
    "highlights": ["Ras Dashen peak", "Gelada baboons"],
    "activities": ["Trekking", "Camping"],
    "entry_fee": [{ "local": "ETB 150", "foreign": "ETB 600" }],
    "rating": 4.8,
    "image": "Simien_Mountain.jpg"
  },
  {
    "id": 3,
    "name": "National Museum of Ethiopia",
    "region": "Addis Ababa",
    "city": "Addis Ababa",
    "category": "Museum",
    "description": "Houses Ethiopia’s most important artifacts, including 'Lucy'.",
    "highlights": ["Lucy fossil", "Royal regalia"],
    "activities": ["Museum tours"],
    "entry_fee": [{ "local": "ETB 50", "foreign": "ETB 200" }],
    "rating": 3.8,
    "image": "National_Museum_of_Ethiopia.jpg"
  },
  {
    "id": 4,
    "name": "Danakil Depression",
    "region": "Afar",
    "city": "Dallol",
    "category": "Natural",
    "description": "Colorful sulfur springs, salt flats, and Erta Ale volcano.",
    "highlights": ["Erta Ale", "Dallol pools"],
    "activities": ["Adventure tours", "Photography"],
    "entry_fee": [{ "local": "ETB 300", "foreign": "ETB 1000" }],
    "rating": 5.0,
    "image": "/Danakil_Depression.jpg"
  },
  {
    "id": 5,
    "name": "Unity Park",
    "region": "Addis Ababa",
    "city": "Addis Ababa",
    "category": "Modern Attraction",
    "description": "Inside the National Palace, showcasing heritage, wildlife, and history.",
    "highlights": ["Palace museum", "Zoo"],
    "activities": ["Family tours"],
    "entry_fee": [{ "local": "ETB 200", "foreign": "ETB 400" }],
    "rating": 4.4,
    "image": "/Unity_Park.jpg"
  },
  {
    "id": 6,
    "name": "Ethnological Museum",
    "region": "Addis Ababa",
    "city": "Addis Ababa University",
    "category": "Museum",
    "description": "Located in Haile Selassie’s former palace, showcasing diverse cultures.",
    "highlights": ["Cultural artifacts", "Royal chambers"],
    "activities": ["Museum tours"],
    "entry_fee": [{ "local": "ETB 50", "foreign": "ETB 150" }],
    "rating": 4.1,
    "image": "/Ethnological_Museum.jpg"
  },
  {
    "id": 7,
    "name": "Lake Tana & Blue Nile Falls",
    "region": "Amhara",
    "city": "Bahir Dar",
    "category": "Natural",
    "description": "Ethiopia’s largest lake and source of the Blue Nile.",
    "highlights": ["Blue Nile Falls", "Island monasteries"],
    "activities": ["Boating", "Sightseeing"],
    "entry_fee": [{ "local": "ETB 100", "foreign": "ETB 300" }],
    "rating": 4.5,
    "image": "/Lake_Tana_&_Blue_Nile_Falls.jpg"
  },
  {
    "id": 8,
    "name": "Gondar Castles",
    "region": "Amhara",
    "city": "Gondar",
    "category": "Historical",
    "description": "Medieval royal enclosure, often called the 'Camelot of Africa'.",
    "highlights": ["Fasil Ghebbi", "Royal baths"],
    "activities": ["Historical tours"],
    "entry_fee": [{ "local": "ETB 150", "foreign": "ETB 400" }],
    "rating": 4.5,
    "image": "/Gondar_Castles.jpg"
  },
  {
    "id": 9,
    "name": "Entoto Park",
    "region": "Addis Ababa",
    "city": "Addis Ababa",
    "category": "Modern Attraction",
    "description": "Eco-park on Mount Entoto with panoramic city views.",
    "highlights": ["Zipline", "Hiking trails"],
    "activities": ["Hiking", "Picnicking"],
    "entry_fee": [{ "local": "ETB 100", "foreign": "ETB 300" }],
    "rating": 4.2,
    "image": "/Entoto_Park.jpg"
  },
  {
    "id": 10,
    "name": "Harar Jugol",
    "region": "Harari",
    "city": "Harar",
    "category": "Cultural",
    "description": "Walled city known for Islamic heritage and hyena feeding tradition.",
    "highlights": ["Harar walls", "Hyena feeding"],
    "activities": ["City walks", "Cultural immersion"],
    "entry_fee": [{ "local": "ETB 100", "foreign": "ETB 300" }],
    "rating": 4.3,
    "image": "/Harar_Jugol.jpg"
  },
  {
    "id": 11,
    "name": "Omo Valley",
    "region": "SNNPR",
    "city": "Jinka",
    "category": "Cultural",
    "description": "Home to diverse tribes with unique traditions and ceremonies.",
    "highlights": ["Hamar tribe", "Mursi lip plates"],
    "activities": ["Cultural tours", "Photography"],
    "entry_fee": [{ "local": "ETB 200", "foreign": "ETB 500" }],
    "rating": 4.6,
    "image": "/Omo_Valley.jpg"
  },
  {
  "id": 12,
  "name": "Axum",
  "region": "Tigray",
  "city": "Axum",
  "category": "Historical",
  "description": "Ancient capital of the Aksumite Empire, famous for its obelisks, archaeological sites, and religious heritage.",
  "highlights": ["Obelisks of Axum", "Queen of Sheba's Palace", "Church of St. Mary of Zion"],
  "activities": ["Historical tours", "Archaeological exploration", "Photography"],
  "entry_fee": [{ "local": "ETB 150", "foreign": "ETB 400" }],
  "rating": 4.7,
  "image": "/Axum.jpg"
}

]





export const TourAgents = [
  {
    id: 1,
    name: "King Dawit Tours Ethiopia",
    city: "Addis Ababa",
    specialty: "Culture, history, adventure tours",
    rating: 5,
    contact: { phone: "+251913066990" },
    url: "/King Dawit Tours & Travel Ethiopia.jpg",
    price: "start $500"
  },
  {
    id: 2,
    name: "Mamaru Ethiopian Tours",
    city: "Addis Ababa",
    specialty: "Omo Valley tribes, landscapes",
    rating: 5,
    contact: { phone: "+251913048155" },
    url: "/Simien-Mountains-Ethiopia-Welcome-Ethiopia-Tours.jpg",
    price: "start $500"
  },
  {
    id: 3,
    name: "VowLand Ethiopia Tour",
    city: "Lalibela",
    specialty: "Trekking, Danakil Depression",
    rating: 4,
    contact: { phone: "+251936598727" },
    url: "Trekking Simien Mountains Trekking Tour  Liyu Ethiopia Tours.webp",
    price: "start $500"
  },
  {
    id: 4,
    name: "Simien url Tour & Travel",
    city: "Addis Ababa",
    specialty: "Simien Mountains trekking",
    rating: 5,
    contact: { phone: "+251960451389" },
    url: "/Simien-Mountains-National-Park-in-Northern-Ethio-Target-Tour-Travel.jpg",
    price: "start $500"
  },
  {
    id: 5,
    name: "Green Land Tours",
    city: "Addis Ababa",
    specialty: "Bale Mountains, Lalibela",
    rating: 4,
    contact: { phone: "+251911234567" },
    url: "/Green Land Tours.jpg",
    price: "start $500"
  },
  {
    id: 6,
    name: "Discover Simien Tour Ethiopia",
    city: "Addis Ababa",
    specialty: "Adventure & cultural tours",
    rating: 4,
    contact: { phone: "+251936598727" },
    url: "/Discover Simien Tour Ethiopia.jpg",
    price: "start $500"
  },
  {
    id: 7,
    name: "Best Ethiopia Travel & Tours",
    city: "Mekelle",
    specialty: "Custom tours, heritage",
    rating: 5,
    contact: { phone: "+251992163536" },
    url: "/Best Ethiopia Travel & Tours.webp",
    price: "start $500"
  },
  {
    id: 8,
    name: "Prime Ethiopia Tours",
    city: "Jinka",
    specialty: "Omo Valley tribal tours",
    rating: 4,
    contact: { phone: "+251946623440" },
    url: "/Prime Ethiopia Tours.jpg",
    price: "start $500"
  },
  {
    id: 9,
    name: "Magic Ethiopia Tours",
    city: "Addis Ababa",
    specialty: "Private custom tours",
    rating: 4,
    contact: { phone: "+251960451389" },
    url: "/Magic Ethiopia Tours.webp",
    price: "start $500"
  },
  {
    id: 10,
    name: "Barok Tours & Car Rent",
    city: "Addis Ababa",
    specialty: "Car rentals + tours",
    rating: 4,
    contact: { phone: "+251930802324" },
    url: "/Barok Tours & Car Rent.webp",
    price: "start $500"
  },
  {
    id: 11,
    name: "Edom Harar Tours",
    city: "Harar",
    specialty: "Hyena feeding, heritage tours",
    rating: 4,
    contact: { phone: "+251924009496" },
    url: "Edom Harar Tours.webp",
    price: "start $500"
  },
  {
    id: 12,
    name: "Teddy Zion Tour & Travel",
    city: "Mekelle",
    specialty: "Customized tours",
    rating: 4,
    contact: { phone: "+251913912656" },
    url: "/Teddy Zion Tour & Travel.jpg",
    price: "start $500"
  }
]
