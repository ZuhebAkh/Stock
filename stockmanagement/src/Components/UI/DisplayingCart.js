import React, { useContext } from 'react'
import Modal from './Modal'
import './DisplayingCart.css'
import MedicineContext from '../../Store/MedicineContext'

const DisplayingCart = (props) => {
   const cartCtx=useContext(MedicineContext);
   const totalAmount=cartCtx.totalAmount;
   return (
    <Modal >
      {cartCtx.MedicineDetails.map((med)=>(
         <li className='cart-item' key={med.id}>
         <div>
            <h2>{med.name}</h2>
            <div className='summary'>
               <span className='price'>{med.price}$</span>
               <span className='amount'>x   {med.amount}</span>
            </div>
         </div>
         <div className='actions'>
            <button>-</button>
            <button>+</button>
         </div>
       </li>
      ))}
       
       <div className='total'>
        <span>Total Amount</span>
        <span>{totalAmount}$</span>
      </div>
      <div className='action-close'>
        <button className="button" onClick={props.onCloseCart}>
          Close
        </button>
        <button className='button'>Order</button>
      </div>
    </Modal>
  )
}

export default DisplayingCart