import React, { useContext, useEffect, useState } from "react";
import "./ShowDetails.css";
import MedicineContext from "../Store/MedicineContext";

const ShowDetails = (props) => {
  const cartCtx = useContext(MedicineContext);
  const [quantityState, setQuantityState] = useState(props.quantity);
  const [inStock, setInstock] = useState(true);

  useEffect(() => {
    if (quantityState === 0) {
      setInstock(false);
    }
  });
  const addItemToCartHandler = () => {
    cartCtx.addMedicine({
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      quantity: props.quantity,
      amount: props.amount,
    });
    setQuantityState(quantityState - 1);
  };

  return (
    <React.Fragment>
      <table className="med-table">
        <tbody>
          <tr>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>{props.price}</td>
            <td>
              {quantityState}{" "}
              <button
                style={{ backgroundColor: inStock ? "green" : "grey" ,cursor:!inStock ? 'not-allowed':''}}
                onClick={addItemToCartHandler}
                className="add-btn"
              >
                + Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ShowDetails;
