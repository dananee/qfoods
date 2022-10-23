import React, { useState } from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt2 } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import { restaurantInfos } from '../data/data';
import DropLanguage from '../components/DropLanguage';

function Navbar() {

    // Drawer Menu 
    const [nav, setNav] = useState(false)
    const [menu, setMenu] = useState(false);

    const [t] = useTranslation();

    return (
        <>
            <nav className=' w-full  mx-auto top-0 left-0 '>

                {/* Navigation Bar */}
                <ul className={`md:flex inline-block float-right md:items-center bg-gray-900 z-10 
                 md:my-0 duration-500 ease-in md:fixed md:shadow-2xl
                    text-white flex-row  md:text-sm w-full ${menu ? 'left-0' : 'hidden'}`}>

                    <li className={`cursor-pointer uppercase text-3xl font-bold m-10
                        font-robot text-[#F86615]`}>{restaurantInfos[0].name}</li>

                    <li onClick={() => setMenu(false)} className={`cursor-pointer uppercase ltr:ml-10 rtl:mr-10 md:my-0  whitespace-nowrap text-xl m-6 items-center hover:text-[#F86615]`}>
                        <a href="/Home">{t('home')}</a></li>

                    <li onClick={() => setMenu(false)} className={`cursor-pointer uppercase ltr:ml-10 rtl:mr-10 m-6 text-xl hover:text-[#F86615]`}>
                        <a href="/Categories">{t("category")}</a></li>

                    <li onClick={() => setMenu(false)} className={`cursor-pointer uppercase ltr:ml-10 rtl:mr-10 text-xl m-6 hover:text-[#F86615]`}>
                        <a href="/Promo">{t("promo")}</a></li>

                    {/* Dropdown Language */}
                    <li className='ltr:ml-10 rtl:mr-10 right-0 ltr:float-right   rtl:float-left'>
                        <DropLanguage />
                    </li>

                    {/* Cart Shooping Button */}
                    <li className='cursor-pointer md:visible block invisible p-6 ltr:float-right rtl:pl-12 mx-10'>
                        <button onClick={() => setNav(!nav)} className={`bg-[#F86615] truncate justify-content items-center flex
                         flex-row outline outline-1 right-0 outline-[#F86615] hover:bg-[#F86615] rounded-lg py-2 px-4`} >
                            <HiOutlineShoppingCart className='text-2xl' />
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Overlay */}
            {nav ? <div onClick={() => setNav(false)} className='bg-black/80 fixed w-full md:hidden h-screen z-10 top-0 left-0'></div> : ''}

            {/* Side drawer Orders */}
            <div className={nav ? 'fixed  top-0 shadow-2xl md:visible invisible ltr:right-0 rtl:left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0  right-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    size={30}
                    className='absolute ltr:right-4 rtl:left-4 top-4 cursor-pointer'
                />
                <h2 className='text-2xl p-4'>
                    {t("order")}
                </h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li>1 - Item</li>
                    </ul>
                </nav>
            </div>

            {/* Mobile Nav  */}
            <div className='flex flex-row justify-between top-0  p-5 items-center '>
                {/* Mobile Nav Menu Button */}
                <div onClick={() => setMenu(true)} className={`cursor-pointer  md:hidden ${!menu ? '' : "hidden"}`}>
                    <HiMenuAlt2 size={36} />
                </div>

                <div className={`text-2xl px-10 text-[#F86615] font-bold`}>QFood</div>

                {/* Close Mobile Nav Menu  */}
                <div onClick={() => setMenu(false)} className={`cursor-pointer z-[2] md:hidden text-white absolute ltr:right-8 rtl:left-8 top-6
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