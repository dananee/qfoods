import React from 'react';
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineFeedback, MdFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useTranslation } from 'react-i18next';
import colors from '../constants/colors';
import { useStoreCard } from '../store/store';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function BottomNav() {

  const [t] = useTranslation();

  // Cart Shooping
  const cart = useStoreCard(state => state.cartItems);



  return (
    <div className="btm-nav md:hidden px-5">
      <NavLink to="/#category" >
        <AiOutlineHome size="30" className='text-gray-700' />
      </NavLink>

      <HashLink to="/#search" smooth>
        <AiOutlineSearch size="30" className='text-gray-700' />
      </HashLink>
      <NavLink to="/" >
        <MdFavoriteBorder size="30" className='text-gray-700' />
      </NavLink>
      <NavLink to="/" >
        <MdOutlineFeedback size="30" className='text-gray-700' />
      </NavLink>

      <NavLink to="/shooping" className="indicator" >
        <span className="indicator-item badge my-4 mx-5 outline outline-none bg-orange-500  ">{cart.length}</span>
        <HiOutlineShoppingCart size="30" className={` text-[${colors.primaryColor}]`} />
      </NavLink>
    </div>

    // <nav className='bottom-0 left-0 mx-auto fixed w-full'>
    //   <ul className='flex flex-row items-center justify-between 
    //      md:hidden py-1 pt-1 bg-white shadow-xl  px-6 h-[65px] z-[20]'>

    //     <li>
    //       <div className='flex flex-col justify-content items-center 
    //       '>
    //         <AiOutlineHome size="30" className='text-gray-700' />
    //         <span className='text-[14px] text-gray-700'>{t("home")}</span>
    //       </div>
    //     </li>
    //     <li>
    //       <div className='flex flex-col justify-content items-center '>
    //         <AiOutlineSearch size="30" className='text-gray-700' />
    //         <span className='text-[14px] text-gray-700'>{t("search")}</span>
    //       </div>
    //     </li>
    //     <li>
    //       <div className='flex flex-col justify-content items-center '>
    //         <MdFavoriteBorder size="30" className='text-gray-700' />
    //         <span className='text-[14px] text-gray-700'>{t('fav')}</span>
    //       </div>
    //     </li>
    //     <li>
    //       <div className='flex flex-col justify-content items-center '>
    //         <MdOutlineFeedback size="30" className='text-gray-700' />
    //         <span className='text-[14px] text-gray-700'>{t('feedback')}</span>
    //       </div>
    //     </li>
    //     <li>
    //       <div className='flex flex-col justify-content items-center '>

    //         <NavLink to="/#category" > className={`outline outline-2 outline-[${colors.primaryColor}] rounded-lg py-2 px-4 `}>
    //           <HiOutlineShoppingCart className={`text-2xl text-[${colors.primaryColor}]`} />
    //         </NavLink>

    //         <span className={`text-[14px] font-bold text-[${colors.primaryColor}]`}>{t('basket')}</span>
    //       </div>
    //     </li>
    //   </ul>
    // </nav>

  )
}

export default BottomNav