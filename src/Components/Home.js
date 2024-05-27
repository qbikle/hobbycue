import "./Home.css"; // Custom CSS for additional styles
import React, { useState } from "react";

const Home = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="container-fluid home-container">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className="display-4 fst-italic fw-semibold fs-1">
            Explore your <span className="highlight-blue">hobby</span> or{" "}
            <span className="highlight">passion</span>
          </h1>
          <p className="lead mt-3 fw-medium fs-6">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities...
          </p>
          <p className="lead fw-medium fs-6">
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center">
          <div className="card sign-in-card p-4">
            <ul className="nav nav-tabs my-3">
              <li className="nav-item">
                <button className="nav-link active fs-5 fw-semibold font-family-Poppins m-0 px-3 py-2">
                  Sign In
                </button>
              </li>
              <li className="nav-item">
                <btn
                  className="nav-link not-active fs-5 fw-semibold font-family-Poppins m-0 px-3 py-2"
                  href="/"
                >
                  Join In
                </btn>
              </li>
            </ul>
            <button className="btn btn-outline-primary mt-3 google-btn">
              <img
                src="/images/google.svg"
                alt="google"
                height="20px"
                className="mb-1 me-1"
              />
              Continue with Google
            </button>
            <button className="btn btn-outline-primary mt-3 facebook-btn">
              <img
                src="/images/fb.svg"
                alt="facebook"
                height="20px"
                className="mb-1 me-1"
              />{" "}
              Continue with Facebook
            </button>
            <div className="or-connect mt-4 fw-semibold">
              <span>Or connect with</span>
            </div>
            <div className="input-group mt-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="input-group mt-3">
              <input
                type={passwordVisible ? "text" : "password"}
                className="form-control"
                placeholder="Password"
              />
              <span
                className="input-group-text"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                <i
                  className={
                    passwordVisible
                      ? "fas fa-eye-slash passbox"
                      : "fas fa-eye passbox"
                  }
                ></i>
              </span>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <div>
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe" className="ms-2">
                  Remember me
                </label>
              </div>
              <a href="/" className="forgot-password">
                Forgot password?
              </a>
            </div>
            <button className="btn btn-primary mt-3 custom-btn">
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className="artwork-container">
        <img
          src="/images/people1.svg"
          alt="People Artwork"
          className="people-artwork artwork"
        />
        <img
          src="/images/people2.svg"
          alt="Another Artwork"
          className="another-artwork artwork"
        />
      </div>
    </div>
  );
};

export default Home;
