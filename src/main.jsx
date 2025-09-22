import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./Routes/router.jsx";
import { RouterProvider } from "react-router-dom";
// 👇 import ThemeProvider
import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <div className="w-full mx-auto">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  </StrictMode>
);
