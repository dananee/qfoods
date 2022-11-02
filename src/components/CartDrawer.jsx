import React from 'react'
import { useTranslation } from 'react-i18next';
import { useStoreCard } from '../store/store';
import { IoMdArrowRoundForward } from 'react-icons/io'
import { BsTrash } from 'react-icons/bs'
import { VscDiffAdded, VscDiffRemoved } from 'react-icons/vsc'

function CartDrawer() {

    // Shooping Cart
    const cart = useStoreCard(state => state.cartItems);
    const cardAdd = useStoreCard(state => state.addToCard);
    const removeCard = useStoreCard(state => state.removeCard);
    const removeMeal = useStoreCard(state => state.removeMeal);

    // Total
    const totalPrice = cart.reduce((a, c) => a + c.qty * parseFloat(c.price), 0);


    // Translate
    const { t } = useTranslation();
    return (
        <>
            <h2 className='text-2xl p-4'>
                {t("order")}
            </h2>
            <div className='relative h-full '>
                <div className='overflow-y-auto h-[500px]  '>
                    {cart.map((meal, index) => (
                        <div key={index} className='flex flex-nowrap flex-row  mx-3 justify-between  my-5 mt-10 relative'>
                            <div className='w-[100px] h-20 overflow-hidden   relative rounded-lg'>

                                <img src={meal.image} alt={meal.name} className="absolute mx-auto block bg-center bg-contain bg-no-repeat " />
                            </div>
                            <div className='flex flex-col items-center ml-5'>
                                <h3 className='capitalize text-xl mb-10 text-gray-900 text-ellipsis	'>{meal.name}</h3>
                                <div className='flex flex-row items-center mt-8 bottom-0 absolute'>
                                    <button onClick={() => removeCard(meal)} >
                                        <VscDiffRemoved size="30" className="text-gray-600" />
                                    </button>
                                    <span className='text-gray-700   text-2xl mx-3'>{meal.qty}</span>
                                    <button onClick={() => cardAdd(meal)} >
                                        <VscDiffAdded size="30" className="text-gray-600" />
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-col items-center ml-5 justify-between'>
                                <h3 className=' uppercase text-xl font-medium truncate text-gray-900 '>{meal.price}</h3>
                                <button onClick={() => removeMeal(meal)}>
                                    <BsTrash size={25} className="text-red-400" />
                                </button>
                            </div>

                        </div>

                    ))}
                </div>
                <div className='bottom-0 drop-shadow-3xl overflow-none z-10 absolute bg-white left-0 w-full min-h-64 '>
                    <p className='text-2xl font-semibold my-5 text-gray-900 ml-4'>
                        Total : <span className='float-right mx-10 text-green-600 text-3xl'>{totalPrice} MAD</span></p>
                    <button className='flex flex-row w-full h-20 items-center justify-evenly  hover:bg-gray-700  bg-gray-900 px-10 '>
                        <span className='text-xl  uppercase truncate font-semibold text-white'>Procced to checkout</span>
                        <IoMdArrowRoundForward size="30" className='text-white' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default CartDrawer



