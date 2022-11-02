import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { MdFavoriteBorder } from "react-icons/md";
import Navbar from './Navbar';
import { useStoreCard } from '../store/store';
import BottomNav from "./BottomNav";


function DetailFood() {

  const { state } = useLocation();
  const [t] = useTranslation();

  // Size

  const [size, setSize] = useState("M");

  const handleSize = event => {

    console.log(event.target.value)
    setSize(event.target.value);
  };
  // Type

  const [type, setType] = useState("Mexicano");

  const handleType = event => {
    console.log(event.target.value)
    setType(event.target.value);
  };

  // Shooping Card
  const addToCard = useStoreCard(state => state.addToCard)


  // ReadMore Description
  const [read, setRead] = useState(false)

  const readMore = () => {
    setRead(!read)
  }

  const desc = !read ? t('desc').slice(0, 70) : t('desc')

  return (
    <>
      <Navbar />
      <div className='flex flex-col md:flex-row md:mt-10' id="content">
        
          <img className='bg-contain bg-center md:m-10 w-full md:w-[700px] md:h-auto' src={state.meal.image} alt={state.meal.name} />
        
        <br></br>
        <div className='md:m-10 mx-5 mb-5' >
          <h1 className='text-4xl font-bold text-gray-900 camelcase'>{t(state.meal.name)}</h1>
          <h3 className='text-xl font-semiBold capitalize text-gray-600'>{t(state.meal.category)}</h3>
          <h3 className='text-2xl font-bold text-[#ed5300] my-5'>{t(state.meal.price)} MAD</h3>
          <p className='mb-8  '>{desc}<span onClick={readMore} className="font-bold text-[#ed5300] transition duration-300 ease-in-out cursor-pointer underline">
        {!read ? "...read more" : " show less"}
      </span> </p>
          <div className='flex flex-row rtl:flex-row-reverse items-baseline rtl:justify-end'>
            <div className="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
            <p className='uppercase  ml-4 font-semibold text-sm text-orange-400 underline'>5 {t("reviews")}</p>
          </div>

          {/* SIZE */}
          <div className='my-5'>
            <h3 className='camelcase font-bold text-gray-900 '>{t("size")}</h3>
            <ul className="flex flex-row  max-w-md mt-8">
              {["S", "M", "L", "XL"].map((sizes, index) => (
                <li key={index} className="relative ml-3 ">
                  <input onChange={handleSize} checked={size === sizes} className="sr-only peer" type="radio" value={sizes} name="answer" id={`answer_${sizes}`} />
                  <label className="p-5  bg-white border border-gray-300 rounded-lg cursor-pointer
                 focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2
                  peer-checked:border-transparent text-center " htmlFor={`answer_${sizes}`}>{sizes}</label>
                </li>
              ))}
            </ul>
          </div>{/* Type */}
          <div className='my-8'>
            <h3 className='camelcase font-bold text-gray-900 '>{t("type")}</h3>
            <ul className="flex flex-row  max-w-md mt-8">
              {["Spicy", "Mexicano", "Andalusi"].map((types, index) => (
                <li key={index} className="relative ml-3 ">
                  <input onChange={handleType} checked={type === types} className="sr-only peer" type="radio" value={types} name="type" id={`type_${types}`} />
                  <label className="p-5  bg-white border border-gray-300 rounded-lg cursor-pointer
                 focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2
                  peer-checked:border-transparent text-center" htmlFor={`type_${types}`}>{types}</label>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex  items-center ml-3 my-10 pt-8 '>
            <button className='outline outline-2 ltr:mr-3 rtl:ml-3 mb-10 text-gray-900 outline-gray-900 hover:bg-red-400  hover:text-white 
                  px-5 py-4 text-center uppercase font-bold'>
              <MdFavoriteBorder size="30" />
            </button>
            <button onClick={() => {
              addToCard(state.meal);
            }} className='shrink flex-none bg-gray-900 hover:bg-gray-800 mb-10 w-full text-white 
                 md:px-20 py-6  text-center truncate uppercase font-bold'>{t("add")}</button>
          </div>
        </div>
        <BottomNav />
      </div>

    </>
  )
}

export default DetailFood