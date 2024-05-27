import React from "react";
import "./PreFooter.css"; // Import a CSS file for custom styles if needed

const PreFooter = () => {
  return (
    <div className="container d-flex flex-column">
      <div className="ms-5 mt-5">
        <h2 className="mb-4">
          Your <span className="highlight hobby">Hobby</span>, Your{" "}
          <span className="highlight community">Community</span>...
        </h2>
        <button className="btn btn-primary mb-4 smol-btn">Get started</button>
      </div>

      <div className="d-flex justify-content-center flex-wrap">
        <img src="/images/toon1.png" className="img-fluid" alt="Placeholder" />
        <img src="/images/toon2.png" className="img-fluid" alt="Placeholder" />
      </div>
    </div>
  );
};

export default PreFooter;
