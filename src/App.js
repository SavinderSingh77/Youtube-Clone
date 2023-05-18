import "./App.css";
import Header from "./Components/Header";
import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import SideBar from "./Components/SideBar";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/Watchpage.js";
import Error from "./Components/Error";

function App() {
  return (
    <div className=" mx-auto dark:text-gray-100 dark:bg-black transition-all duration-100 ease-in-out">
      <Header />
      <div className="flex justify-between gap-3 transition-all relative ">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}

const AppRouter2 = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/Watch/:videoId",
        element: <WatchPage />,
 
      },
    ],
  },
]);
export default AppRouter2;
