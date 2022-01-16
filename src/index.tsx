import React from "react";
import ReactDOM from "react-dom";
import { initAnalytics } from "./analytics";
import App from "./app";

initAnalytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
