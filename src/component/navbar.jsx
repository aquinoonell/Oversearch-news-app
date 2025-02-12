import { useState } from "react";
import "bootstrap";

function NavbarMenu() {
  return (
    <>
      <body>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
          <div class="container">
            <a href="#" class="navbar-brand">
              Over Search
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navmenu"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navmenu">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a href="#learn" class="nav-link">
                    What can we find here
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#questions" class="nav-link">
                    Questions
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#aboutUs" class="nav-link">
                    About us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </body>
    </>
  );
}

export default NavbarMenu;
