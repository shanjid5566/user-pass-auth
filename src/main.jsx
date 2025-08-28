import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Main from "./layout/Main.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path: "login",
        element : <Login></Login>
      },
      {
        path : "register",
        element : <Register></Register>
      }
    ]
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
