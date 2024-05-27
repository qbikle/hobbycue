import React, { useState } from "react";
import "./Navbar.css"; // Custom CSS for additional styles

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-light border-bottom">
      <div className="container-fluid d-flex align-items-center justify-content-between py-2">
        <div className="d-flex align-items-center">
          <img
            src="logo.png"
            alt="Logo"
            className="me-2 logo"
            style={{ height: "40px" }}
          />
        </div>
        <div className="d-flex align-items-center d-none d-md-flex">
          <input
            type="text"
            className="form-control custom-rounded-right"
            placeholder="Search here..."
          />
          <button className="btn btn-primary custom-btn custom-rounded-left">
            Q
          </button>
        </div>
        <div className="d-flex align-items-center">
          <div className="dropdown me-3 d-none hide-1100">
            <button
              className="btn btn-light ms-2"
              type="button"
              id="exploreDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="images/explore.svg" alt="Explore" />
              <span class="text-black fs-6 fw-medium font-family-Poppins mt-1 px-1">
                Explore
              </span>
              <img src="images/expand_arrow.svg" alt="exarrow" />
            </button>
          </div>
          <div className="dropdown me-3 d-none hide-1100">
            <button
              className="btn btn-light"
              type="button"
              id="hobbiesDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="images/hobbies.png" alt="hobbies" />
              <span class="text-black fs-6 fw-medium font-family-Poppins mt-1 px-1">
                Hobbies
              </span>
              <img src="images/expand_arrow.svg" alt="exarrow" />
            </button>
          </div>
          <button className="btn btn-light d-md-none">
            <i class="bi bi-search"></i>
          </button>
          <button className="btn btn-light d-none d-md-flex">
            <img src="images/bookmark.svg" alt="bookmark" />
          </button>
          <button className="btn btn-light">
            <img src="images/notif.svg" alt="notifications" />
          </button>
          <button className="btn btn-light me-4 d-none d-md-flex">
            <img src="images/cart.svg" alt="cart" />
          </button>
          <button
            className="btn btn-outline-primary custom-outline-btn me-5 w-5 d-none d-md-flex justify-content-center"
            style={{ width: "100px" }}
          >
            Sign In
          </button>
          <button className="btn btn-light d-md-none" onClick={toggleMenu}>
            <i className="bi bi-list"></i>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container-fluid bg-light">
          <div className="d-flex flex-column align-items-start py-2">
            <div className="d-flex justify-content-between w-100 mb-2">
              <button className="btn btn-light d-md-none" onClick={toggleMenu}>
                <i className="bi bi-x"></i>
              </button>
            </div>
            <button className="btn btn-light w-100 mb-2">
              <img src="images/bookmark.svg" alt="bookmark" /> Bookmark
            </button>
            <button className="btn btn-light w-100 mb-2">
              <img src="images/notif.svg" alt="notifications" /> Notifications
            </button>
            <button className="btn btn-light w-100 mb-2">
              <img src="images/cart.svg" alt="cart" /> Cart
            </button>
            <button className="btn btn-outline-primary custom-outline-btn w-100 mb-2">
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
