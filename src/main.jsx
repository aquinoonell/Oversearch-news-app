import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import NavbarMenu from "./component/navbar";
import NewsLetter from "./component/newsletter";
import RowGrid from "./component/rows";
import Showcase from "./component/showcase";
import CatFact from "./component/cats";

function App() {
    return (
        <>
            <NavbarMenu />
            <Showcase />
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
