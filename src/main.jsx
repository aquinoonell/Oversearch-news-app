import React, { useState } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import NavbarMenu from "./component/navbar";
import NewsLetter from "./component/newsletter";
import RowGrid from "./component/rows";
import Showcase from "./component/showcase";
import CatFact from "./component/cats";
import ArticleFetcher from "./component/articles";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`app-container ${isDarkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}>
      <NavbarMenu 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
      />
      <Showcase isDarkMode={isDarkMode} />
      <ArticleFetcher isDarkMode={isDarkMode} />
      <RowGrid isDarkMode={isDarkMode} />
      <CatFact isDarkMode={isDarkMode} />
      <NewsLetter isDarkMode={isDarkMode} />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
