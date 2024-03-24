import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
// import Logo from "../assets/logo.png";
// import DefaultProfile from "../assets/default.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/nav.css";

// const API_KEY = "AIzaSyCk4iCG3RB70rBv2uIdPfepGnuRMs17e6U";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg shadow-sm sticky-top p-3 bg-white">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src="/"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top me-2"
          />
          Echo Homes
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <Link to="/Fav" className="navbar">
            <img
              src="/"
              alt="Fav"
              className="d-inline-block align-text-top ms-2"
              id="favid"
              style={{
                backgroundColor: "#f2f2f2",
                scale: "0.83",
                backgroundRepeat: "no-repeat",
                border: "#d8d8d8 solid",
                borderRadius: "10px",
                padding: "8px",
                marginBlock: "-8px",
                marginRight: "2px",
              }}
            />
          </Link>
        </div>
        <div className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
          </a>
          <ul className="dropdown-menu">
            <div className="dropdown-item ms-1">
              {user ? (
                <a onClick={handleSignOut} className="btn">
                  Logout
                </a>
              ) : (
                <Link to="/login" className="btn">
                  Log in
                </Link>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
