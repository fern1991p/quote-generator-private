import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
