import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginPage from "./page";
import { ThemeProvider } from "./components/ui/theme-provider";
import { Toaster } from "./components/ui/toaster";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OverviewPage from "./pages/overview-page";
import PredictionPage from "./pages/prediction-page";
import GalleryPage from "./pages/gallery-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/overview",
    element: <OverviewPage />,
  },
  {
    path: "/prediction",
    element: <PredictionPage />,
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>,
);
