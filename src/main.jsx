import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./page";
import PredictionPage from "./pages/prediction-page";
import OverviewPage from "./pages/overview-page";
import GalleryPage from "./pages/gallery-page";
import { ThemeProvider } from "./components/ui/theme-provider";
import { Toaster } from "./components/ui/toaster";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/prediction",
    element: <PredictionPage />,
  },
  {
    path: "/overview",
    element: <OverviewPage />,
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
