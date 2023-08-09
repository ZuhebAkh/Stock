import React,{useReducer} from 'react'
import MedicineContext from './MedicineContext'

const defaultcartstate={
  MedicineDetails:[],
  totalAmount: 0,
  Quantity:null


}

const cartReducer=(state,action)=>{
  if (action.type === "ADD") {
    const UpdatedTotal =
    state.totalAmount + action.med.price * action.med.amount ;
    let UpdatedQuantity;
  if(state.Quantity === null){
      UpdatedQuantity=action.med.quantity - 1;
  }else if(state.Quantity > 0){
    UpdatedQuantity=state.Quantity - 1;
  }
  console.log(UpdatedQuantity)

    const existingCartItemIndex = state.MedicineDetails.findIndex(
      (med) => med.id === action.med.id
    );
    const existingCartItem = state.MedicineDetails[existingCartItemIndex];

    let UpdatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        //repair
        amount: existingCartItem.amount + action.med.amount,
      };
      UpdatedItems = [...state.MedicineDetails];
      UpdatedItems[existingCartItemIndex] = updatedItem;
    } else {
      UpdatedItems = state.MedicineDetails.concat(action.med);
    }

    return {
      MedicineDetails: UpdatedItems,
      totalAmount: UpdatedTotal,
      Quantity: UpdatedQuantity
    };
  }
}

const MedicineProvider = (props) => {
  const [cartState,dispatchFunction]=useReducer(cartReducer,defaultcartstate)

    const addMedicineHandler=(med)=>{
        dispatchFunction({type:'ADD',med:med})
    }
    const removeMedicineHandler=(id)=>{
       dispatchFunction({type:'REMOVE',id:id})
    }
    const medicineContext={
        MedicineDetails:cartState.MedicineDetails,
        totalAmount:cartState.totalAmount,
        addMedicine: addMedicineHandler,
        removeMedicine: removeMedicineHandler,
        Quantity:cartState.Quantity
    }
  return (
    <MedicineContext.Provider value={medicineContext}>
        {props.children}
    </MedicineContext.Provider>
  )
}

export default MedicineProvider