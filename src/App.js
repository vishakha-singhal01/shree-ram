import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Culture from "./components/Culture";
import Gallery from "./components/Gallery";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AboutDarshan from "./components/AboutDarshan";

const App = () => (
    <>
    <Navbar/>
    <Hero/>
    <Culture/>
    <Gallery/>
    </>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
