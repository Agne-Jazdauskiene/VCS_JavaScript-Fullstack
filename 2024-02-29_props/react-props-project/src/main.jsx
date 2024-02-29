import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode> //vyksta papildomasa testavimas. Naudojamas tik dev aplinkoj. Productione jo nebelieka.
);
