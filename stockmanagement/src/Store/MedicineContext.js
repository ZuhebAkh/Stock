import React from "react";

const MedicineContext=React.createContext({
    MedicineDetails:[],
    totalAmount:0,
    addMedicine:(med)=>{},
    removeMedicine:(med)=>{},
    Quantity:null
});

export default MedicineContext;