// import HomeTemplate from "./ListingTemplate";
import bedroomCabin from "../images/bedroom_cabin.jpg";
import frontCabin from "../images/front_mountain_cabin.jpg";
import kitchenCabin from "../images/kitchen_cabin.jpg";

const listingExample = {
  title: "Mountainside Cabin",
  photos: [
    { url: frontCabin, description: "Front view of the cabin" },
    { url: bedroomCabin, description: "Living room" },
    { url: kitchenCabin, description: "Kitchen" },
  ],
  description:
    "A cozy cabin in the mountains perfect for your next getaway. Enjoy the peace and quiet of nature.",
  location: "Mountain View, CO",
  startDate: "May 3 2024",
  endDate: "August 31, 2024",
  stayLength: "2 months",
  roomates: "Yes",
  maxGuests: 4, // bedrooms
  amenities: ["Wi-Fi", "Kitchen", "Parking", "Heating"],
  reviews: [
    { comment: "I loved the views here, would recommend!", rating: 5 },
    { comment: "Almost died to a bear but it had a nice view!", rating: 3 },
    { comment: "Recommend bringing something to protect yourself", rating: 2 },
  ],
};

export default listingExample;
