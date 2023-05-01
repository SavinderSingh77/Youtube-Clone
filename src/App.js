import "./App.css";
import Header from "./Components/Header";
import React from "react";
import AppRouter from "./Components/Body";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="dark:text-gray-100 dark:bg-black transition-all duration-100 ease-in-out">
      <Header />
      <RouterProvider router={AppRouter} />
    </div>
  );
}

export default App;
