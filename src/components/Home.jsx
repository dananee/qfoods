import React,{useState} from 'react'
import BottomNav from "./BottomNav";
import MainSection from "./MainSection";
import Header from "./Header";


function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <BottomNav />
    </>
  )
}

export default Home