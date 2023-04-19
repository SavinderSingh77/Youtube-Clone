import "./App.css";
import Header from "./Components/Header";
import React from "react";
import { Provider } from "react-redux";
import store from "./Components/Utilities/store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-[#0f0f0f]">
        <Header />
      </div>
    </Provider>
  );
}

export default App;
