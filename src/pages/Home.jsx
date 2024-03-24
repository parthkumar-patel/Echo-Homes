import React from "react";
import HomeTemplate from "./HomeTemplate";
import  bedroomCabin from "../images/bedroom_cabin.jpg";
import frontCabin from "../images/front_mountain_cabin.jpg";
import kitchenCabin from "../images/kitchen_cabin.jpg";


const Home = () => {
  return (
    <div className="text-center">
      <HomeTemplate listing={listingExample}/>
    </div>
  ); 
};


const listingExample = {
  title: "Mountainside Cabin",
  photos: [
    { url: frontCabin, description: "Front view of the cabin" },
    { url: bedroomCabin, description: "Living room" },
    { url: kitchenCabin, description: "Kitchen" },
  ],
  description: "A cozy cabin in the mountains perfect for your next getaway. Enjoy the peace and quiet of nature.",
  location: "Mountain View, CO",
  stayLength: "2 months", 
  maxGuests: 4,
  amenities: ["Wi-Fi", "Kitchen", "Parking",  "Heating"],
  reviews: [
    { comment: "I loved the views here, would recommend!", rating: 5 },
    { comment: "Almost died to a bear but it had a nice view!", rating: 3 },
    { comment: "Recommend bringing something to protect yourself", rating: 2 }
  ],
};

export default Home;
  