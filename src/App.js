import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import CommunityPage from "./pages/CommunityPage";
import DarshanPage from "./pages/DarshanPage";
import PageLayout from "./layouts/PageLayout";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />} path="/">
          <Route element={<MainPage />} path="/" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<CommunityPage />} path="/community" />
          <Route element={<DarshanPage />} path="/darshan" />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
