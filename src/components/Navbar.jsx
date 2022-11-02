import React, { useState } from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt2 } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import { restaurantInfos } from '../data/data';
import DropLanguage from '../components/DropLanguage';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import CartDrawer from './CartDrawer';
import { useStoreCard } from '../store/store';

function Navbar({ cartItems }) {

    // Drawer Menu 
    const [nav, setNav] = useState(false)
    const [menu, setMenu] = useState(false);

    // Cart Shooping
    const cart = useStoreCard(state => state.cartItems);

    // Translate
    const [t] = useTranslation();

    return (
        <>
            <nav className=' w-full fixed z-10 mx-auto top-0 left-0 '>

                {/* Navigation Bar */}
                <ul className={`md:flex  inline-block float-right md:items-center bg-gray-900 z-10 
                 md:my-0 duration-500 ease-in md:absolute md:shadow-2xl 
                    text-white flex-row  md:text-sm w-full ${menu ? 'left-0' : 'hidden'}`}>

                    <li className={`cursor-pointer uppercase text-3xl font-bold m-10
                        font-robot text-[#F86615]`}>
                        <Link to="/">{restaurantInfos[0].name}</Link></li>

                    <li onClick={() => setMenu(false)} className={`cursor-pointer uppercase ltr:ml-10 rtl:mr-10 md:my-0
                      whitespace-nowrap text-xl m-6 items-center hover:text-[#F86615]`}>
                        <Link to="/">{t('home')} </Link>
                    </li>

                    <li onClick={() => setMenu(false)} className={`cursor-pointer uppercase ltr:ml-10 rtl:mr-10 m-6 text-xl hover:text-[#F86615]`}>
                        <HashLink to="/#category" smooth>{t("category")}</HashLink></li>

                    <li onClick={() => setMenu(false)} className={`cursor-pointer uppercase ltr:ml-10 rtl:mr-10 text-xl m-6 hover:text-[#F86615]`}>
                        <Link to="/Promo">{t("promo")}</Link></li>

                    <li className='invisble w-full'>
                        <div></div>
                    </li>

                    {/* Dropdown Language */}
                    <li className='ltr:ml-10 rtl:mr-10 hidden md:block right-0 ltr:float-right rtl:float-left'>
                        <DropLanguage />
                    </li>


                    {/* Cart Shooping Button */}
                    <li className='cursor-pointer indicator md:visible block relative invisible ltr:float-right rtl:pl-12 mx-12'>
                        <button onClick={() => setNav(!nav)} className={`truncate justify-content items-center flex
                         flex-row outline outline-2 right-0 outline-white  rounded-lg py-2 px-4`} >
                            <HiOutlineShoppingCart className='text-3xl text-white' />
                            <span className="indicator-item badge bg-orange-500">{cart.length}</span>
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Overlay */}
            {nav ? <div onClick={() => setNav(false)} className='bg-transparent fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

            {/* Side drawer Orders */}
            <div className={nav ? 'fixed top-0 shadow-2xl md:visible invisible ltr:right-0 rtl:left-0 w-[500px] h-screen bg-white z-10 duration-300' : 'fixed top-0  right-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    size={30}
                    className='absolute ltr:right-4 rtl:left-4 top-4 cursor-pointer'
                />
                <CartDrawer cartItems={cartItems} />
            </div>
            {/* Mobile Nav  */}
            <div className='flex flex-row justify-between top-0  p-5 items-center '>
                {/* Mobile Nav Menu Button */}
                <div onClick={() => setMenu(true)} className={`cursor-pointer  md:hidden ${!menu ? '' : "hidden"}`}>
                    <HiMenuAlt2 size={36} />
                </div>

                <Link to="/" className={`text-2xl px-10 text-[#F86615] font-bold`}>QFood</Link>

                {/* Close Mobile Nav Menu  */}
                <div onClick={() => setMenu(false)} className={`cursor-pointer z-20 md:hidden text-white absolute ltr:right-8 rtl:left-8 top-6
                ${menu ? '' : "hidden"}`}>
                    <AiOutlineClose size={30} color="white" />
                </div>

                {/* DropDown Language Menu */}
                <div className='cursor-pointer md:invisible'>
                    <DropLanguage />
                </div>
            </div>
        </>
    )
}

export default Navbar