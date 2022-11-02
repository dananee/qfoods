import React from 'react'
import { useTranslation } from 'react-i18next';
import { useStoreCard } from '../store/store';
import { IoMdArrowRoundForward } from 'react-icons/io'

function CartDrawer() {

    // Shooping Cart
    const cart = useStoreCard(state => state.cartItems);
    const cardAdd = useStoreCard(state => state.addToCard);
    const removeCard = useStoreCard(state => state.removeCard);

    // Total
    const totalPrice = cart.reduce((a, c) => a + c.qty * parseFloat(c.price), 0);


    // Translate
    const { t } = useTranslation();
    return (
        <>
            <h2 className='text-2xl p-4'>
                {t("order")}
            </h2>
            <nav>
                <div className="overflow-y-auto w-full h-[500px] ">
                    {cart.length === 0 ? <div>Cart is empty</div> :
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <td></td>
                                    <th>Meal</th>
                                    <th>Price (MAD)</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody  >
                                {cart.map((meal, index) => (
                                    <tr key={index}>
                                        <td className='m-0'>
                                            <img src={meal.image} alt={meal.name} className="mr-8 h-12" />
                                        </td>
                                        <td className=''>{meal.name}</td>
                                        <td>{meal.price}</td>
                                        <td>
                                            <div className='flex flex-row '>
                                                <button onClick={() => cardAdd(meal)} className='bg-gray-200 rounded-md px-2 font-bold mx-2'>+</button>
                                                <span className='text-gray-900 font-bold text-xl'>{meal.qty}</span>
                                                <button onClick={() => removeCard(meal)} className='bg-gray-200 rounded-md px-2 font-bold mx-2'>-</button>
                                            </div>
                                        </td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>}
                    <div className='bottom-0 drop-shadow-3xl z-10 absolute bg-white left-0 w-full min-h-64 '>
                        <p className='text-2xl font-semibold my-5 text-gray-900 ml-4'>
                            Total : <span className='float-right mx-10 text-green-600 text-3xl'>{totalPrice} MAD</span></p>
                        <button className='flex flex-row w-full h-20 items-center justify-evenly  hover:bg-gray-700  bg-gray-900 px-10 '>
                            <span className='text-xl  uppercase truncate font-semibold text-white'>Procced to checkout</span>
                            <IoMdArrowRoundForward size="30" className='text-white' />
                        </button>
                    </div>
                </div>
                
            </nav>
        </>
    )
}

export default CartDrawer