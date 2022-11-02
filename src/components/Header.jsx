import React from 'react'
import { FiMapPin } from 'react-icons/fi';
import { BiTimeFive } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import Navbar from "./Navbar";
import { restaurantInfos } from '../data/data';
import colors from '../constants/colors';

function Header({cartItems}) {

  // Translate
  const [t, I18n] = useTranslation();

  // Working Days
  const day = I18n.t(['days', 'mon']);

  const data = restaurantInfos[0];
  const status = data.status === "true" ? t('open') : t('close');

  return (
    <header >
      <Navbar cartItems={cartItems} />
      <div className='w-full mx-auto lg:p-4 lg:my-10'>
        <div className='max-h-[500px] relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/70 flex flex-col justify-center'>
            <h1 className='font-bold md:mb-10 md:ml-20 ltr:ml-3 mb-5 rtl:mr-20 text-3xl md:text-9xl'>{t('welcome')} <span className={`text-[${colors.primaryColor}]`}>{restaurantInfos[0].name}</span></h1>
            <div className='flex flex-row items-center justify-content truncate'>
              <FiMapPin  className='m-3 md:text-2xl ltr:md:ml-20 rtl:md:mr-20' />
              <a href={data.location} target="_blank" rel="noreferrer"  className={` md:text-2xl underline
               hover:text-[${colors.primaryColor}]`}>{restaurantInfos[0].address} (Google Maps) </a>
            </div>
            <div className='flex flex-row md:text-xl md:pt-3 items-center truncate ltr:ml-3 rtl:mr-3 ltr:md:ml-20 rtl:md:mr-20 justify-content'>
              <BiTimeFive className='md:text-2xl' />
              <span className={`mx-2 rtl:text-2xl font-bold ${data.status === "true" ? "text-green-300": "text-red-500"}`}>({status})</span>
              <p className='font-bold md:text-2xl'>{day['mon']} - {day['fri']}</p>
              <p className='ltr:md:ml-5 rtl:md:text-2xl ltr:ml-2 rtl:md:mr-5 rtl:mr-2'>8:00h - 22:00h </p>
            </div>
          </div>
          <img className='w-full max-h-[500px] object-cover' src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="restaurant front side" />
        </div>
      </div>
    </header>
  )
}

export default Header