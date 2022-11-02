import React from "react";
import Home from "./components/Home";
import DetailFood from "./components/DetailFood"
import { Routes, Route } from "react-router";
import CartDrawer from "./components/CartDrawer";

function App() {

  return (
    <div className="App flex flex-col h-screen">
      <Routes>
        <Route exact path="/" element={<Home />} />
       
        <Route path="/meal" element={<DetailFood />} />
        <Route path="/meal/:id" element={<DetailFood />} />
        <Route path="/shooping" element={ <CartDrawer />} />
      </Routes>
    </div>
  );


}

export default App;
