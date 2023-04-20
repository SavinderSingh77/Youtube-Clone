import "./App.css";
import Header from "./Components/Header";
import React from "react";
import { Provider } from "react-redux";
import store from "./Components/Utilities/store.js";
import Body from "./Components/Body";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-[#1d1d1dfd]">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
