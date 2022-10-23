import React from 'react';
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineFeedback,MdFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useTranslation } from 'react-i18next';
import colors from '../constants/colors';

function BottomNav() {

  const [t] = useTranslation();

  return (

    <nav className='bottom-0  md:hidden py-1 pt-1 bg-white shadow-xl w-screen px-3 sticky z-[20]'>
      <ul className='flex flex-row items-center justify-between '>
        <li>
          <div className='flex flex-col justify-content items-center '>
            <AiOutlineHome size="30" className='text-gray-700' />
            <span className='text-[14px] text-gray-700'>{t("home")}</span>
          </div>
        </li>
        <li>
          <div className='flex flex-col justify-content items-center '>
            <AiOutlineSearch size="30" className='text-gray-700'/>
            <span className='text-[14px] text-gray-700'>{t("search")}</span>
          </div>
        </li>
        <li>
          <div className='flex flex-col justify-content items-center '>
            <MdFavoriteBorder size="30" className='text-gray-700'/>
            <span className='text-[14px] text-gray-700'>{t('fav')}</span>
          </div>
        </li>
        <li>
          <div className='flex flex-col justify-content items-center '>
            <MdOutlineFeedback size="30" className='text-gray-700'/>
            <span className='text-[14px] text-gray-700'>{t('feedback')}</span>
          </div>
        </li>
        <li>
          <div className='flex flex-col justify-content items-center '>
             
              <button className={`outline outline-2 outline-[${colors.primaryColor}] rounded-lg py-2 px-4 `}>
                <HiOutlineShoppingCart className={`text-2xl text-[${colors.primaryColor}]`}/>
              </button>
             
            <span className={`text-[14px] font-bold text-[${colors.primaryColor}]`}>{t('basket')}</span>
          </div>
        </li>
      </ul>
    </nav>

  )
}

export default BottomNav