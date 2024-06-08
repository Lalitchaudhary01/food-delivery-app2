import React from 'react'
import RestaurantList from '../components/RestaurantList'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../utlis/cartSlice';


function Cart() {


    const dispatch = useDispatch();
    const clearhandler = () => {
        dispatch(removeItem());
    }

    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className=' 3/12 md:w-6/12 md:m-auto mx-4 mb-96'>
            <h1 className='mt-4 text-center text-[2rem] '> Yours Cart Details</h1>

            <div>
                { cartItems.length > 0 ?
                <p className='text-center text-[1.3rem] cursor-pointer active:text-red-600 ' onClick={clearhandler}>clear cart</p>
                : <p></p> }
                {cartItems.length === 0 && (

                    <h1 className=' text-center text-[1.2rem] '> <span  className=' text-center block  '>
                     <span>😕 Ooops!! </span> No items present.",
                    </span> please add an items in your cart</h1>
                )}

                <RestaurantList item={cartItems} />
            </div>

        </div>
    )
}

export default Cart