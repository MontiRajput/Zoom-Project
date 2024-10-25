import { useState, useRef } from "react";
import Product from "./product";
import Solutions from "./solutions";
import Resources from "./resources";
import Plans from "./plans_pricing";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null); // Tracks which section is active
  const navbarCollapseRef = useRef(null); // Ref for the navbar collapse

  const toggleIcon = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const closeNavbar = () => {
    if (
      navbarCollapseRef.current &&
      navbarCollapseRef.current.classList.contains("show")
    ) {
      navbarCollapseRef.current.classList.remove("show"); // Remove 'show' class to collapse
    }
  };

  return (
    <div className="Container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-0">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-1" to={"/"}>
            <img src="/logo.svg" style={{ height: "30px" }} alt="Logo" /> Zoom
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
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            ref={navbarCollapseRef}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeIndex === 0 ? "red-color" : ""}`}
                  onClick={(event) => toggleIcon(0)}
                >
                  Products
                  <i
                    className={`fa-solid fa-angle-down icon ${
                      activeIndex === 0 ? "rotate-icon" : ""
                    }`}
                  ></i>
                </a>
                {activeIndex === 0 && <Product />}
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link ${activeIndex === 1 ? "red-color" : ""}`}
                  onClick={(event) => toggleIcon(1)}
                >
                  Solutions
                  <i
                    className={`fa-solid fa-angle-down icon ${
                      activeIndex === 1 ? "rotate-icon" : ""
                    }`}
                  ></i>
                </a>
                {activeIndex === 1 && <Solutions />}
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link ${activeIndex === 2 ? "red-color" : ""}`}
                  onClick={(event) => toggleIcon(2)}
                >
                  Resources
                  <i
                    className={`fa-solid fa-angle-down icon ${
                      activeIndex === 2 ? "rotate-icon" : ""
                    }`}
                  ></i>
                </a>
                {activeIndex === 2 && <Resources />}
              </li>

              <li className="nav-item">
                <Link
                  to="/plans_pricing"
                  className={` nav-link ${
                    activeIndex === 3 ? "red-color" : ""
                  }`}
                  onClick={closeNavbar}
                >
                  Plans & Pricing
                </Link>
              </li>
            </ul>

            <div className="address d-md-none px-3 fw-bold">
              <p>Support</p>
              <p>1.888.789.9989</p>
              <p>Sign in</p>
              <p>Request a Demo</p>
            </div>

            <ul className="navbar-nav ms-auto right">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <button type="button" className="btn btn-out px-4 btn-md">
                    Contact Sales
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <button type="button" className="btn px-4 btn-md">
                    Sign Up Free
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
