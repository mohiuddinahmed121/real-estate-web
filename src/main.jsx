import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Helmet } from "react-helmet";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <Helmet>
         <title>Good Home</title>
      </Helmet>
      <RouterProvider router={router}></RouterProvider>
   </StrictMode>
);
