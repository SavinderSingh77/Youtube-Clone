import React from "react";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Shorts from "./Shorts";

// function Body() {
//   return (
//     <div className="w-full flex gap-8 justify-between items-start">
//       <MainContainer />
//     </div>
//   );
// }
// export default Body;

// const AppRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body />,
//     children: [
//       {
//         path: "/",
//         element: <MainContainer />,
//       },
//       {
//         path: "/shorts",
//         element: <Shorts />,
//       },
//     ],
//   },
// ]);
// export default AppRouter;
