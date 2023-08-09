import React, { useContext, useRef } from "react";
import "./MedicineInput.css";
import MedicineContext from "../Store/MedicineContext";

const MedicineInput = (props) => {
  const nameInputRef = useRef();
  const decriptionInputRef = useRef();
  const priceInpurRef = useRef();
  const quantityInputRef = useRef();
  const cartCtx=useContext(MedicineContext)

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredDescription = decriptionInputRef.current.value;
    const enteredPrice = priceInpurRef.current.value;
    const enteredQuantity = quantityInputRef.current.value;
    const medicineDetails = {
       id:Math.random().toString(), 
      name: enteredName,
      description: enteredDescription,
      price: enteredPrice,
      quantity: enteredQuantity,
      amount:1
    };
    props.onAddMedicine(medicineDetails)

    nameInputRef.current.value="";
    decriptionInputRef.current.value="";
    priceInpurRef.current.value="";
    quantityInputRef.current.value="";
    console.log(cartCtx)
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form">
          <div>
            <label>Medicine Name :</label>
            <input type="text" ref={nameInputRef}></input>
          </div>
          <div>
            <label>Description :</label>
            <input type="text" ref={decriptionInputRef}></input>
          </div>
          <div>
            <label>Medicine Price :</label>
            <input type="number" ref={priceInpurRef}></input>
          </div>
          <div>
            <label>Quantity Available :</label>
            <input type="number" ref={quantityInputRef}></input>
          </div>
          <button  type="submit">Add Medicine</button>
        </div>
      </form>
    </>
  );
};

export default MedicineInput;
