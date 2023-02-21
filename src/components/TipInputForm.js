import { useState } from "react";
import "./TipInputForm.css"

const TipInputForm = (props)=>{
   
   const [ billAmount , setBillAmount] = useState("");
   const [selectValue , setSelectedValue] = useState("");
   const [customerName , setCustomerName] = useState("");

   const inputAmountChangeHandler = (event)=>{
      setBillAmount(event.target.value);
   }

   const serviceChangeHandler = (event) =>{
      setSelectedValue(event.target.value);
   }

   const nameChangeHandler = (event) =>{
      setCustomerName(event.target.value);
   }


   const onSubmitHandler = (event) =>{
       event.preventDefault();
       const tipData = {
         billAmount:billAmount,
         value:selectValue,
         name:customerName
       }
       setBillAmount("");
       setCustomerName("");
       setSelectedValue("");

       props.onSaveTipData(tipData);

   }
return(
   <div>
      <h1 className="mainHeading">Tip Calculator</h1>
      <form className="form-controls" onSubmit={onSubmitHandler}>
         <div className="amountDiv">
         <label htmlFor="inputAmount">Enter Bill Amount</label>
         <input type="number" id="inputAmount" value={billAmount} onChange={inputAmountChangeHandler} required/>
         </div>
         <div  className="form-controls_inside">
         <label htmlFor="selectService">How was the Service?</label>
         <select id="selectService" value={selectValue} onChange={serviceChangeHandler} >
         <option value="0.00">No Tip</option>
         <option value="0.2">Excellent 20%</option>
         <option value="0.1">Good 10%</option>
         <option value="0.05">Bad 5%</option>
         </select>
         <label htmlFor="customerName">Customer Name</label>
         <input id="customerName" type="text" value={customerName} onChange={nameChangeHandler} required/>
         </div>
         <button type="submit">Add Customer</button>
      </form>
   </div>
)
}

export default TipInputForm;