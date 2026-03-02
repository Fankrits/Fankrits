import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
//import { createRoot } from 'react-dom/client'
import "./index.css";
import App from "./App.jsx";
import Aurora from "/src/Backgrounds/Aurora/Aurora.jsx";
import SplashCursor from "/src/Animations/SplashCursor/SplashCursor.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="w-full h-screen relative flex justify-center">
        <div
          style={{ width: "100dvw", height: "100dvh", position: "relative" }}
        >
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>
        <div className="absolute  w-full h-full p-5">
          <App />
        </div>
        <SplashCursor className="opacity-10" />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
