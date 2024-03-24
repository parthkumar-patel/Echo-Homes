import imgh1 from "../images/imgh1.jpg"
import imgh2 from "../images/imgh2.jpg"
import imgh3 from "../images/imgh3.jpg"
import imgv1 from "../images/imgv1.jpg"
import imgv2 from "../images/imgv2.jpeg"
import imgv3 from "../images/imgv3.jpg"
import "../styles/Galary.css"

export default function Galary() {
    return(
    <div className="Container">
    <div className="row">
        <div className="col-lg-3 col-md-3 mb-4 mb-lg-0">
            <img
                src={imgh1}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
             />

            <img
                src={imgv1}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Wintry Mountain Landscape"
            />

            <img
                src={imgh3}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
            />
        </div>

        <div className="col-lg-3 mb-3 mb-lg-0">
            <img
                src={imgv2}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Mountains in the Clouds"
            />

            <img
                src={imgh2}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
            />
    
            <img
                src={imgv3}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
            />
        </div>

    </div>

    </div>
    );
}