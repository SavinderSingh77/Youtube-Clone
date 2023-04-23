// import "./App.css";
// import Header from "./Components/Header";
// import React from "react";
// import { Provider } from "react-redux";
// import store from "./Components/Utilities/store.js";
// import Body from "./Components/Body";
// import { useSelector } from "react-redux";

// function App() {
//   const { isDarkMode } = useSelector((store) => store.toggleMode);

//   //bg-[#1d1d1dfd]
//   return (

//       <Provider store={store}>
//         <div className="bg-[#a75555fd]">
//           <Header />
//           <Body />
//         </div>
//       </Provider>

//   )
// }

// export default App;

import "./App.css";
import Header from "./Components/Header";
import React from "react";
import Body from "./Components/Body";


function App() {
  return (
    <div className="dark:text-gray-100 dark:bg-black transition-all duration-500 ease-in-out"> 
      <Header />
      <Body />
    </div>
  );
}

export default App;
