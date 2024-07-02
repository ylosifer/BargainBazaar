import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import CreateAd from "./components/CreateAd";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/createAd",
      element: <CreateAd />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path:"*",
      element: <NotFound />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
