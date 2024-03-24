import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import "../styles/browse.css";
import CardComponent from "../components/CardComponent";

const Browse = () => {
  const [entireData, setentireData] = useState([]);
  const [conditionalData, setconditionalData] = useState([]);
  const [activeButtons, setActiveButtons] = useState([]);
  const [duration, setDuration] = useState(0);
  const [selectedCity, setSelectedCity] = useState("");

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAEKCwNSFllLu5zfSPtv2CuG5N-o8agztg",
    authDomain: "echohouse-a308d.firebaseapp.com",
    projectId: "echohouse-a308d",
    storageBucket: "echohouse-a308d.appspot.com",
    messagingSenderId: "611969960248",
    appId: "1:611969960248:web:70944b1ef2144ea61559cd",
    measurementId: "G-0E6X8MF7Q9",
  };

  initializeApp(firebaseConfig);
  const db = getFirestore();
  const colRef = collection(db, "houses");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(colRef);
        let houses = [];
        snapshot.docs.forEach((doc) => {
          houses.push({ ...doc.data(), id: doc.id });
        });
        setentireData(houses);
        setconditionalData(houses);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = (buttonId) => {
    if (activeButtons.includes(buttonId)) {
      setActiveButtons(activeButtons.filter((id) => id !== buttonId));
    } else {
      setActiveButtons([...activeButtons, buttonId]);
    }
  };

  const handleDuration = (e) => {
    setDuration(parseInt(e.target.value));
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleTheFilter = () => {
    let filteredData = [...entireData];

    // Check if any filters are selected
    if (duration !== 0 || activeButtons.length > 0 || selectedCity !== "") {
      // Filter by duration
      filteredData = filteredData.filter(
        (item) => item["duration(months)"] <= duration
      );

      // Filter by roommate preference
      if (activeButtons.includes("roommate")) {
        filteredData = filteredData.filter((item) => item.roommate === true);
      }

      // Filter by city
      if (selectedCity) {
        filteredData = filteredData.filter(
          (item) =>
            item.City && item.City.toLowerCase() === selectedCity.toLowerCase()
        );
      }
    }

    setconditionalData(filteredData);
  };

  const cards = conditionalData.map((item, index) => {
    return <CardComponent key={index} item={item} />;
  });

  return (
    <div className="filteredData">
      <div className="filters">
        {console.log(conditionalData)}
        <h2
          style={{
            marginLeft: "16px",
            marginTop: "-49.5px",
            position: "absolute",
            fontSize: "40px",
            fontFamily: "Quicksand",
          }}
        >
          Filters
        </h2>
        <button
          type="button"
          className={
            activeButtons.includes("roommate")
              ? "btn btn-dark"
              : "btn btn-outline-secondary"
          }
          onClick={() => {
            handleButtonClick("roommate");
          }}
          style={{
            marginLeft: "10px",
            marginTop: "20px",
            position: "absolute",
          }}
        >
          With roommates
        </button>

        <label
          htmlFor="customRange2"
          className="form-label"
          style={{
            marginTop: "100px",
            position: "absolute",
            marginLeft: "15px",
            fontSize: "16px",
          }}
        >
          Length of stay (months)
        </label>
        <label
          htmlFor="customRange2"
          className="form-label"
          style={{
            marginTop: "110px",
            position: "absolute",
            marginLeft: "290px",
            fontSize: "15px",
          }}
        >
          {duration}
        </label>

        <input
          type="range"
          className="form-range"
          min="0"
          max="12"
          id="customRange2"
          onChange={handleDuration}
          value={duration} // Added value attribute to set the initial value
          style={{
            width: "300px",
            marginTop: "140px",
            marginLeft: "15px",
            position: "absolute",
          }}
        />

        <label
          htmlFor="cityFilter"
          className="form-label"
          style={{
            marginTop: "200px",
            position: "absolute",
            marginLeft: "15px",
            fontSize: "16px",
          }}
        >
          City
        </label>
        {console.log(entireData)}
        <select
          id="cityFilter"
          className="form-select"
          onChange={handleCityChange}
          style={{
            marginTop: "230px",
            marginLeft: "15px",
            position: "absolute",
            width: "200px",
          }}
        >
          <option value="">Select a city</option>
          <option value="Toronto">Toronto</option>
          <option value="New York">New York</option>
          <option value="Vancouver">Vancouver</option>
          <option value="Houston">Houston</option>
          <option value="Miami">Miami</option>
          <option value="San Francisco">San Francisco</option>
        </select>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleTheFilter}
          style={{
            width: "300px",
            marginTop: "565px",
            position: "absolute",
            fontWeight: "bold",
          }}
        >
          Apply Filters
        </button>
      </div>
      <div className="cards">
        {conditionalData.length > 0 ? (
          <section className="cards-lists">{cards}</section>
        ) : (
          <p className="card-text">No matching houses found.</p>
        )}
      </div>
    </div>
  );
};

export default Browse;
