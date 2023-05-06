import "./App.css";
import Header from "./Components/Header";
import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import SideBar from "./Components/SideBar";
import MainContainer from "./Components/MainContainer";
import Shorts from "./Components/Shorts";
import WatchPage from "./Components/Watchpage.js"
import Dictaphone1 from "./Components/SpeechToText";

function App() {
  return (
    <div className=" dark:text-gray-100 dark:bg-black transition-all duration-100 ease-in-out">
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
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path:"/mic",
        element : <Dictaphone1 />
      },
      {
        path: "/shorts",
        element: <Shorts />,
      },
      {
        path : "/Watch/:videoId",
        element : <WatchPage />
      }
    ],
  },
]);
export default AppRouter2;
