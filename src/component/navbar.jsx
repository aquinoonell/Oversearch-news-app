import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function NavbarMenu() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Contact links configuration
  const contactLinks = [
    {
      name: "GitHub",
      url: "https://github.com/aquinoonell",
      icon: "github",
      action: () => window.open("https://github.com/aquinoonell", "_blank"),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/onell-aquino",
      icon: "linkedin",
      action: () =>
        window.open("https://linkedin.com/in/onell-aquino", "_blank"),
    },
    {
      name: "Email",
      url: "mailto:oversearch.customerservice@gmail.com",
      icon: "envelope",
      action: () => (window.location.href = "mailto:oversearh.customerservice@gmail.com"),
    },
  ];

  useEffect(() => {
    // Apply dark mode class to the body
    document.body.classList.toggle("bg-dark", isDarkMode);
    document.body.classList.toggle("text-light", isDarkMode);

    // Handle scroll effect
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Initialize Bootstrap's collapse functionality
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    if (navbarToggler && navbarCollapse) {
      // Add event listener to close mobile menu when a nav-link is clicked
      const navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          if (navbarCollapse.classList.contains("show")) {
            // Use Bootstrap's API to hide the collapsed menu
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
              toggle: false,
            });
            bsCollapse.hide();
          }
        });
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDarkMode]);

  const toggleDarkMode = (e) => {
    // Stop event propagation to prevent conflicts
    e.stopPropagation();
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav
      className={`
      navbar 
      navbar-expand-lg
      fixed-top 
      ${isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-white"} 
      border-bottom 
      py-3 
      ${scrolled ? "shadow-sm" : ""}
    `}
      style={{
        transition: "all 0.3s ease",
        paddingTop: scrolled ? "10px" : "1rem",
        paddingBottom: scrolled ? "10px" : "1rem",
      }}
    >
      <div className="container">
        <div
          className="form-check form-switch me-3"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="darkModeSwitch"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            style={{
              width: "2.5em",
              height: "1.2em",
              cursor: "pointer",
            }}
          />
        </div>

        <a
          href="#"
          className={`
          navbar-brand 
          fs-3 
          fw-bold 
          ${isDarkMode ? "text-light" : "text-dark"}
        `}
        >
          OverSearch
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          aria-controls="navmenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                href="#learn"
                className={`nav-link ${isDarkMode ? "text-light" : "text-muted"}`}
              >
                What can we find here
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link ${isDarkMode ? "text-light" : "text-muted"}`}
              >
                Questions
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#aboutUs"
                className={`nav-link ${isDarkMode ? "text-light" : "text-muted"}`}
              >
                About us
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${isDarkMode ? "text-light" : "text-muted"}`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contact Us
              </a>
              <ul
                className={`dropdown-menu ${isDarkMode ? "dropdown-menu-dark" : ""}`}
              >
                {contactLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href={link.url}
                      onClick={(e) => {
                        e.preventDefault();
                        link.action();
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="me-2">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarMenu;
