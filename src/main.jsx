import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  Route,
  RouterProvider, // Ensure this is imported
} from "react-router-dom";
import Contact from "./components/Body 3/Contact Support/Contact.jsx";

// Define your router using an array of route objects
const router = createBrowserRouter([
  {
    path: "/", // Main app route
    element: <App />,
  },
  {
    path: "/Contact", // Contact route
    element: <Contact />,
  },
]);

// Render the application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Use RouterProvider here */}
  </StrictMode>
);
