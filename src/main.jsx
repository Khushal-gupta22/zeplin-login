import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import Signup from "./components/Signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
