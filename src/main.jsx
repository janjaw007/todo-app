import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AddNewTaskProvider from "./context/AddNewTaskProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AddNewTaskProvider>
      <App />
    </AddNewTaskProvider>
  </StrictMode>
);
