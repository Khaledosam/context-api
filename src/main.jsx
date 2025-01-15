import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Global from "./context/Global.jsx";

createRoot(document.getElementById("root")).render(
  <Global>
    <App />
  </Global>
);
