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
  const {setSelecte} = useState([false]);


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
    <>
      <h3 className='font-bold text-xl text-gray-900 rtl:text-2xl my-3 mx-5'>{t('category')}</h3>
      <div className='flex items-center justify-content md:ltr:pl-5 md:rtl:pr-5 relative md:my-0 my-10 overflow-y-auto'>
        {
          data.map((name, index) => (
            <button key={index} type='submit' onClick={() => {
              categoryChange(name.title);
              name.title === "sushi" ? setSelecte(name.active = true) : setSelecte(false);
            }} className={`flex flex-col px-4 bg-gray-200 rounded-lg  mx-2 hover:bg-[#f88f33] ${data[index].active ? "bg-[#f88f33]" : ""} py-3 items-center  justify-content`}>
              {name.icon}
              <span className='pt-2 truncate'>{t(name.title)}</span>
            </button>
          ))
        }
      </div>
    </>
  )
}

export default SliderCategory