import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import "../styles/navbar.css"; 

export default function Navbar({ user }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  const handleHomeClick = (e) => {
    if (!user) {
      e.preventDefault(); 
      alert("Please log in first!");
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Blogs
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleHomeClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">
                Create
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>

          {user ? (
            <button onClick={handleLogout} className="logout-btn px-4">
              Logout
            </button>
          ) : (
            <Link to="/auth" className="login-btn px-4">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
