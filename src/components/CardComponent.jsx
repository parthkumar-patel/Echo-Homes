import "../styles/card.css";

export default function CardComponent(prop) {
  return (
    <div className="image-container">
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
            >
              <img src={room} className="d-block" alt="pic" />
            </div>
          ))}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={"#carouselExampleControlsNoTouching" + prop.item.id}
            data-bs-slide="prev"
          >
            <div className="carousel-control-wrapper">
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </div>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={"#carouselExampleControlsNoTouching" + prop.item.id}
            data-bs-slide="next"
          >
            <div className="carousel-control-wrapper">
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </div>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="contact-info">
        <p>
          <b>Contact No. -</b> {prop.item.contact}
        </p>
      </div>
    </div>
  );
}
