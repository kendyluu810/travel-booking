import logo from "./LH_Logo.svg";
import hero_img from "./1.jpg";
import feature_1 from "./2.jpg";
import feature_2 from "./3.jpg";
import feature_3 from "./4.jpg";
import Property_1 from "./5.jpg";
import Property_2 from "./6.jpg";
import Property_3 from "./7.jpg";
import Property_4 from "./8.jpg";
import news from "./9.jpg";
import The_Glass_House from "./the-glass-house-villa-1.jpg";
import Riverbend_Retreat from "./Riverbend Retreat.jpg";
import Alpine_Chalet from "./Alpine Chalet.jpg";
import The_Old_Barn from "./old-barn-39.jpg";
import Oceanfront_Oasis from "./Oceanfront Oasis.jpg";
import Forest_Hideaway from "./Forest Hideaway.jpg";
import City_View_Loft from "./City View Loft.jpg";
import Mountain_Top_Cabin from "./Mountain Top Cabin.jpg";
import mission1 from "./Peaceful-Valley.jpg";

export const assets = {
  logo,
  hero_img,
  feature_1,
  feature_2,
  feature_3,
  Property_1,
  Property_2,
  Property_3,
  Property_4,
  news,
  The_Glass_House,
  Riverbend_Retreat,
  Alpine_Chalet,
  The_Old_Barn,
  Oceanfront_Oasis,
  Forest_Hideaway,
  City_View_Loft,
  Mountain_Top_Cabin,
  mission1,
};

export const allProperties = [
  {
    id: 1,
    title: "The Glass House",
    price: 450,
    location: "Aspen, Colorado",
    type: "Villa",
    rating: 4.9,
    amenities: ["wifi", "pool", "kitchen"],
    image: assets.The_Glass_House,
  },
  {
    id: 2,
    title: "Riverbend Retreat",
    price: 250,
    location: "Lake Como, Italy",
    type: "Cottage",
    rating: 4.7,
    amenities: ["wifi", "kitchen", "parking"],
    image: assets.Riverbend_Retreat,
  },
  {
    id: 3,
    title: "Alpine Chalet",
    price: 350,
    location: "Malibu, California",
    type: "Chalet",
    rating: 4.8,
    amenities: ["wifi", "pool", "ac"],
    image: assets.Alpine_Chalet,
  },
  {
    id: 4,
    title: "The Old Barn",
    price: 200,
    location: "Aspen, Colorado",
    type: "Barn",
    rating: 4.5,
    amenities: ["wifi", "parking"],
    image: assets.The_Old_Barn,
  },
  {
    id: 5,
    title: "Oceanfront Oasis",
    price: 600,
    location: "Malibu, California",
    type: "Villa",
    rating: 5.0,
    amenities: ["wifi", "pool", "ac", "kitchen"],
    image: assets.Oceanfront_Oasis,
  },
  {
    id: 6,
    title: "Forest Hideaway",
    price: 180,
    location: "Aspen, Colorado",
    type: "Cottage",
    rating: 4.6,
    amenities: ["wifi", "kitchen"],
    image: assets.Forest_Hideaway,
  },
  {
    id: 7,
    title: "City View Loft",
    price: 300,
    location: "Lake Como, Italy",
    type: "Apartment",
    rating: 4.8,
    amenities: ["wifi", "ac", "kitchen"],
    image: assets.City_View_Loft,
  },
  {
    id: 8,
    title: "Mountain Top Cabin",
    price: 220,
    location: "Malibu, California",
    type: "Chalet",
    rating: 4.9,
    amenities: ["wifi", "parking"],
    image: assets.Mountain_Top_Cabin,
  },
];

export const blogPosts = [
  {
    id: 1,
    category: "Travel Tips",
    title: "The Ultimate Guide to Packing for a Weekend Getaway",
    excerpt:
      "Forget the stress of overpacking. Here’s our foolproof guide to packing light and smart for your next weekend adventure.",
    author: "Alex Johnson",
    authorImage: "https://placehold.co/100x100/ddd/333?text=AJ",
    date: "September 5, 2024",
    image: assets.The_Glass_House,
  },
  {
    id: 2,
    category: "Destinations",
    title: "Top 10 Hidden Gems to Visit This Summer in Colorado",
    excerpt:
      "Escape the crowds and discover these breathtaking, off-the-beaten-path locations in the heart of the Rockies.",
    author: "Maria Garcia",
    authorImage: "https://placehold.co/100x100/ddd/333?text=MG",
    date: "August 28, 2024",
    image: assets.feature_3,
  },
  {
    id: 3,
    category: "Food & Drink",
    title: "Exploring Local Cuisine on Your Next Trip to Italy",
    excerpt:
      "From street food to fine dining, here’s how to eat like a local and find the best culinary experiences in Italy.",
    author: "James Smith",
    authorImage: "https://placehold.co/100x100/ddd/333?text=JS",
    date: "August 15, 2024",
    image: assets.news,
  },
  {
    id: 4,
    category: "Lifestyle",
    title: "How to Disconnect and Find Peace in Nature",
    excerpt:
      "Learn the benefits of a digital detox and how spending time in nature can improve your mental well-being.",
    author: "Emily White",
    authorImage: "https://placehold.co/100x100/ddd/333?text=EW",
    date: "August 5, 2024",
    image: assets.mission1,
  },
  {
    id: 5,
    category: "Tips & Tricks",
    title: "Booking Your Vacation Rental: A First-Timer’s Guide",
    excerpt:
      "Navigating the world of vacation rentals can be tricky. Follow these essential tips to book with confidence.",
    author: "Alex Johnson",
    authorImage: "https://placehold.co/100x100/ddd/333?text=AJ",
    date: "July 22, 2024",
    image: assets.feature_1,
  },
  {
    id: 6,
    category: "Destinations",
    title: "A Weekend Itinerary for the Perfect Malibu Getaway",
    excerpt:
      "Sun, surf, and serenity. Here’s how to make the most of 48 hours in beautiful Malibu, California.",
    author: "Maria Garcia",
    authorImage: "https://placehold.co/100x100/ddd/333?text=MG",
    date: "July 14, 2024",
    image: assets.feature_2,
  },
];
