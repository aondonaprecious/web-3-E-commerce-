/** @format */

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import Layouts
import MainLayout from "./layouts/MainLayouts";
import Checkout from "./pages/Checkout";
// Import Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";

// Define the route tree
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // The master wrapper
    // Any errors inside this layout will be caught here (good for 404s)
    errorElement: (
      <div className="p-10 text-center text-error">Oops! Page not found.</div>
    ),
    children: [
      {
        index: true, // This means it loads at the exact "/" path
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "about",
        element: <About />,
      },

      { path: "checkout", element: <Checkout /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
