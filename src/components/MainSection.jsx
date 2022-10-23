import React,{useState} from 'react'
import SliderCategory from "./SliderCategory";
import SearchBar from "./SearchBar";
import FoodCards from './FoodCards';


function MainSection() {

  const [category,setCategory] = useState("");
  const [search,setSearch] = useState("");

  return (
    <main>
      <SliderCategory categoryChange={(category)=> setCategory(category)}/>
      <SearchBar searchChanges={(search) => setSearch(search)} />
      <FoodCards category={category} search={search}/>
    </main>
  )
}

export default MainSection