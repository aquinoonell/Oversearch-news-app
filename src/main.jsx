import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import NavbarMenu from "./component/navbar";
import NewsLetter from "./component/newsletter";
import RowGrid from "./component/rows";
import Showcase from "./component/showcase";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <body>
      <div>
        <NavbarMenu />
      </div>
      <div>
        <Showcase />
      </div>
      <div>
        <div>
          <RowGrid />
        </div>
        <NewsLetter />
      </div>
    </body>
  </StrictMode>,
);
