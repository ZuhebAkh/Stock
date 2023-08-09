import React from "react";
import "./ListHeading.css";
import ShowDetails from "./ShowDetails";

const ListHeading = (props) => {
  console.log(props.medicineData)

  return (
    <React.Fragment>
      <table className="med-table">
      <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
      </table>
    
      {props.medicineData.map((med) => (

        <ShowDetails
          key={med.id}
          id={med.id}
          name={med.name}
          description={med.description}
          price={med.price}
          quantity={med.quantity}
          amount={med.amount}

        />
        
      ))}
    </React.Fragment>
  );
};

export default ListHeading;
