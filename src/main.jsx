// src/main.jsx or your main entry file
import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import Preloader from "./components/preloader/Preloader";
import "./index.css";

const App = () => {
  const [loading, setLoading] = useState(true); // Start with loading state

  // Simulate loading time with useEffect (you can replace it with real logic if needed)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a delay (2 seconds)
    }, 4000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // If loading is true, show the Preloader
  if (loading) {
    return <Preloader />;
  }

  // If loading is done, show the RouterProvider (your routes)
  return <RouterProvider router={router} />;
};

createRoot(document.getElementById("root")).render(<App />);

