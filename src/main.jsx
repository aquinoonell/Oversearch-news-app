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
  return (
    <>
      <NavbarMenu />
      <Showcase />
      <ArticleFetcher />
      <RowGrid />
      <CatFact />
      <NewsLetter />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
