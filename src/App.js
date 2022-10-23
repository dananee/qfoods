import React from "react";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import MainSection from "./components/MainSection";



function App() {
  return (
    <div className="App flex flex-col h-screen">
      <Header />
      <MainSection />
      <BottomNav />
    </div>
  );


}

export default App;
