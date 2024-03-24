import "../styles/HomeListing.css";
import listing from "./listingExample";

const HomeListing = (prop) => {
  return (
    <div className="main">
      {console.log(prop.item)}
      <div className="listing-container">
        <h2>{listing.title}</h2>
        <div className="photos">
          {listing.photos.map((photo, index) => (
            <img key={index} src={photo.url} alt={photo.description} />
          ))}
        </div>
        <div className="description">
          <p>{prop.item.Description}</p>
        </div>
      </div>
      <div className="details_amenities">
        <div className="details">
          <h3>Details</h3>
          <p>Location: {prop.item.City}</p>
          <p>Preferred length: {prop.item.duration}</p>
          <p>Start date: {prop.item.startDate}</p>
          <p>End date: {prop.item.endDate}</p>
          <p>Bedrooms: {prop.item.bedroom}</p>
          <p>Roommates: {prop.item.roommate ? "Yes" : "No"}</p>
        </div>
        <div className="amenities">
          <h4>Amenities</h4>
          <ul>
            {listing.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="reviews">
        <h3>Reviews</h3>
        {listing.reviews.map((review, index) => (
          <div key={index} className="review">
            <p>{review.comment}</p>
            <p>Rating: {review.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeListing;

