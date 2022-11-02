import React, { useState } from 'react'
import SliderCategory from "./SliderCategory";
import SearchBar from "./SearchBar";
import FoodCards from './FoodCards';


function MainSection() {



  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  return (
    <main>
      <div id="category">
        <SliderCategory categoryChange={(category) => setCategory(category)} />
      </div>
      <div id="search">
        <SearchBar searchChanges={(search) => setSearch(search)} />
      </div>
      <FoodCards category={category} search={search} />

    </main>
  )
}

export default MainSection