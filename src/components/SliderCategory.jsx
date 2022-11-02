import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import {
  Barbecue, Burger, Drinks, Cupcake, Tacos, Shawarma, Sushi,
  IceCream, Sandwich, Diet, FreeLactoz, Pizza, VegetablesSalad, Vegetables, Food
} from '../Icons/BunchIcons';


function SliderCategory({ categoryChange }) {

  // Translate
  const [t] = useTranslation();

  // Select Hover
  const [select, setSelected] = useState("all");

  const handleChange = event => {
    
    setSelected(event.target.value);
  };


  const data = [
    { title: "all", icon: Food, active: false },
    { title: "burger", icon: Burger, active: false },
    { title: "tacos", icon: Tacos, active: false },
    { title: "drinks", icon: Drinks, active: false },
    { title: "sandwich", icon: Sandwich, active: false },
    { title: "sushi", icon: Sushi, active: false },
    { title: "icecream", icon: IceCream, active: false },
    { title: "shawarma", icon: Shawarma, active: false },
    { title: "dessert", icon: Cupcake, active: false },
    { title: "barbecue", icon: Barbecue, active: false },
    { title: "diet", icon: Diet, active: false },
    { title: "freelactoz", icon: FreeLactoz, active: false },
    { title: "pizza", icon: Pizza, active: false },
    { title: "vegetable", icon: Vegetables, active: false },
    { title: "salad", icon: VegetablesSalad, active: false },
  ];


  return (
    <section >
      <h3 className='font-bold text-xl text-gray-900 rtl:text-2xl my-3 mx-5'>{t('category')}</h3>
      <ul className='flex items-center justify-content md:ltr:pl-5 md:rtl:pr-5 relative md:my-0 my-10 overflow-y-auto'>
        {
          data.map((name, index) => (
            <li key={index} className="relative " onClick={() => {
              categoryChange(name.title);
            }}
            >

              <input className="sr-only peer" type="radio" value={name.title} name="category" id={`category_${index}`} 
              onChange={handleChange} checked={select === name.title}  />
              <label className="flex flex-col items-center mx-2 p-5  bg-white border border-gray-300 rounded-lg cursor-pointer
                 focus:outline-none hover:bg-gray-50 peer-checked:bg-[#F86615] peer-checked:text-white
                 peer-checked:font-bold
                  peer-checked:border-transparent" htmlFor={`category_${index}`}>
                {name.icon}
                <span className='mt-2 truncate'>{t(name.title)}</span>
              </label>

            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default SliderCategory