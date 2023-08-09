import React,{useState} from "react";
import MedicineInput from "./Components/MedicineInput";
import Navbar from "./Components/UI/Navbar";
import ListHeading from "./Components/ListHeading";
import MedicineProvider from "./Store/MedicineProvider";
import DisplayingCart from "./Components/UI/DisplayingCart";

const App = () => {
  const [showCart,SetShowCart]=useState(false);
  const [medicineList,setMedicineList]=useState([])


  const showCartHandler=()=>{
    SetShowCart(true);
  }
  const hideShowCartHandler=()=>{
    SetShowCart(false)
  }
  const medicineAddHandler=(data)=>{
    setMedicineList((prevmedicineList)=>{
      return[
        ...prevmedicineList,
        data,
      ]
    })
  }
  return (
    <MedicineProvider>
  
        <Navbar onShowCart={showCartHandler}  />
      
      <main>
        <MedicineInput  onAddMedicine={medicineAddHandler}/>
        <ListHeading  medicineData={medicineList}/>
        {showCart && <DisplayingCart onCloseCart={hideShowCartHandler}/>}
      </main>
    </MedicineProvider>
  );
};

export default App;
