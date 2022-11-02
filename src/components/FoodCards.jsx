import React, { useState, useEffect } from 'react';
import { data } from '../data/data.js';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const FoodCards = ({ category, search}) => {


  const [foods, setFoods] = useState(data);

  useEffect(() => {

    const filterType = () => {
      setFoods(
        data.filter((item) => {
          if ((category === "" && search) === "" || category === "all") {
            return item.category;

          } else if (category !== "") {

            return item.category === category && item.name.toLowerCase().includes(search.toLowerCase());

          }
          return item.category === category || item.name.toLowerCase().includes(search.toLowerCase());
        })
      );
    };

    filterType();


  }, [category, search]);

  

  //   Filter by price
  // const filterPrice = (price) => {
  //   setFoods(
  //     data.filter((item) => {
  //       return item.price === price;
  //     })
  //   );
  // };

  //   Translate
  const [t] = useTranslation();

  return (
    <div className='max-w-[1640px] m-auto  px-4 mb-10'>
      <h1 className='text-orange-600 font-bold mb-5 text-4xl text-center'>
        {category === "" ? t('titleSection') : t(category)}
      </h1>

      <h2 className='text-xl '> {
        foods.length === 0 ? (<span>{t("empty")}</span>) : ""
      }</h2>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/*
        
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('burger')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Burgers
            </button>
            <button
              onClick={() => filterType('pizza')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Pizza
            </button>
            <button
              onClick={() => filterType('salad')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Salads
            </button>
            <button
              onClick={() => filterType('chicken')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        {/* <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $$$$
            </button>
          </div> */}
        {/* </div> */}
      </div>

      {/* Display foods */}
      <div  className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          
          <div
            key={index}
            className='border cursor-pointer shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <HashLink key={index} to={`/meal/${index}/#content`}  state={{meal:item}}>
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex flex-col md:flex-row  justify-between px-2 py-4'>
              <div>
              <p className='font-bold truncate '>{t(item.name)}</p>
            <p className='text-gray-400  capitalize font-bold'>{t(item.category)}</p>
              </div>
              <p>
                <span className='bg-orange-500 px-2 mb-2 mx-5 truncate text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
             
            </div>
            </HashLink>
               
          </div>
        
        ))}
      </div>
    </div>
  );
};

export default FoodCards;
