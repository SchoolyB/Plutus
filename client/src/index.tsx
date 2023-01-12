import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";



axios.get("/api/auth").then(console.log)

const root = ReactDOM.createRoot(document.getElementById("root")!); // adding ! tells typescript tha the the return is not null
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
