import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import GlobalStyles from "./utils/globalStyle/globalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
