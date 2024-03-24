import HomeListing from "../pages/HomeListing";
import "../styles/card.css";
import { useState } from "react";

export default function CardComponent(prop) {
  const [showHomeListing, setShowHomeListing] = useState(false);

  const handleDesc = () => {
    setShowHomeListing(true); // Show the HomeListing when clicked
  };

  const handleClose = () => {
    setShowHomeListing(false); // Hide the HomeListing and show the carousel
  };

  return (
    <div className="image-container">
      {!showHomeListing ? (
        <>
          <div
            id={"carouselExampleControlsNoTouching" + prop.item.id}
            className="carousel carousel-dark slide"
            data-bs-touch="false"
          >
            <div className="carousel-inner">
              {prop.item.Images.map((room, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  onClick={handleDesc} // Show HomeListing on click
                >
                  <img src={room} className="d-block w-100" alt="pic" />
                </div>
              ))}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={"#carouselExampleControlsNoTouching" + prop.item.id}
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target={"#carouselExampleControlsNoTouching" + prop.item.id}
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="contact-info">
            <p><b>Contact No. -</b> {prop.item.contact}</p>
          </div>
        </>
      ) : (
        <>
          <button onClick={handleClose} className="back-button">
            Back
          </button>
          <HomeListing item={prop.item} />
        </>
      )}
    </div>
  );
}
