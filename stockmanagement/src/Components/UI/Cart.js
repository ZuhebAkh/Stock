import React, { useContext } from 'react'
import './Cart.css'
import MedicineContext from '../../Store/MedicineContext';

const Cart = (props) => {
  const cartCtx=useContext(MedicineContext);
  console.log(cartCtx)
  const numberOfCartItems = cartCtx.MedicineDetails.reduce((curNumber, med) => {
    return curNumber + med.amount;
  }, 0);
  return (
    <button className='btn' onClick={props.onClick}>Your Cart({numberOfCartItems}) </button>
  )
}

export default Cart