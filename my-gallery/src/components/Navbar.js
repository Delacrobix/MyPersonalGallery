import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          My personal gallery
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/home">
                All
              </Link>
            </li>
            <div className="nav-item">
              <Link className="nav-link" to="/home/animals">
                Animals
              </Link>
            </div>
            <li className="nav-item">
              <Link className="nav-link" to="/home/people">
                People
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => navigate(`/home/others`)}
                to="/home/others"
              >
                Others
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/home/about"
              >
                About me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
