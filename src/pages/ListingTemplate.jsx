import '../HomeListing.css';

const HomeListing = ({ listing }) => {
    return (
        <div className='main'> 
      <div className="listing-container">
        <h2>{listing.title}</h2>
        <div className="photos">
          {listing.photos.map((photo, index) => (
            <img key={index} src={photo.url} alt={photo.description} />
          ))}
        </div>
        <div className="description">
          <p>{listing.description}</p>
        </div>
        </div>
        <div className='details_amenities'> 
        <div className="details">
          <h3>Details</h3>
          <p>Location: {listing.location}</p>
          <p>Preferred length: {listing.stayLength}</p>
          <p>Start date: {listing.startDate}</p>
          <p>End date: {listing.endDate}</p>
          <p>Bedrooms: {listing.maxGuests}</p>
          <p>Roommates: {listing.roommates}</p>
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

