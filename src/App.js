import "./App.css";
import Header from "./Components/Header";
import React from "react";
import Body from "./Components/Body";

function App() {

  return (
    <div className="dark:text-gray-100 dark:bg-black transition-all duration-100 ease-in-out"> 
      <Header />
      <Body />
    </div>
  );
}

export default App;
