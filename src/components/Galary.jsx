import imgh1 from "../images/imgh1.jpg";
import imgh2 from "../images/imgh2.jpg";
import imgh3 from "../images/imgh3.jpg";
import imgv1 from "../images/imgv1.jpg";
import imgv2 from "../images/imgv2.jpeg";
import imgv3 from "../images/imgv3.jpg";
import "../styles/Galary.css";
import { Link } from "react-router-dom";

export default function Galary() {
  return (
    
    <div className="row">
      
      <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
      <div className="Container">
        <h1 className= "Name">Echohomes</h1>
        <h2 className= "Sentences">"Discover New Homes, Swap Your Way Around the World!"</h2>
        <h3 className= "description">Unlock the Power of Community: Our Home Exchange Network Welcomes All. Share Homes and Stay for $0/Nightly.</h3>
        <Link to="/login" className="btn">
        <div className="button">
          <button type="button" class="btn btn-dark">Sign up</button>
        </div>
        </Link>
      </div>
      </div>
        <div className="col-lg-3 col-md-3 mb-4 mb-lg-0">
          <img
            src={imgh1}
            className="w-100 shadow-1-strong  mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src={imgv1}
            className="w-100 shadow-1-strong  mb-4"
            alt="Wintry Mountain Landscape"
          />

          <img
            src={imgh3}
            className="w-100 shadow-1-strong  mb-4"
            alt="Waves at Sea"
          />
        </div>

        <div className="col-lg-3 mb-3 mb-lg-0">
          <img
            src={imgv2}
            className="w-100 shadow-1-strong  mb-4"
            alt="Mountains in the Clouds"
          />

          <img
            src={imgh2}
            className="w-100 shadow-1-strong  mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src={imgv3}
            className="w-100 shadow-1-strong  mb-4"
            alt="Yosemite National Park"
          />
        </div>
      </div>
  );
}
