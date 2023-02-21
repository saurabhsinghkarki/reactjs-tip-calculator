import { useState } from 'react';
import './App.css';
import TipInputForm from './components/TipInputForm';
import CustomerList from './components/CustomerList';
import TotalTip from './components/TotalTip';

function App() {
  const [tipData, setTipData] = useState([]);

  const onSaveTipData = (tipData) => {
    setTipData((prevState) => {
      return [tipData, ...prevState]
    });
  };



  const data = tipData.map((items) => {
    return (+items.billAmount * (+items.value));
  });
  
  const totalTip = data.reduce((pre , cur)=>{
    return pre + cur ;
  },0)
  
  const noOfCustomers = data.length;

  const totalObj = {
    totalTip : totalTip,
    noOfCustomers : noOfCustomers
  }
  
  const [clickData , setClickData] = useState("");
  const totalObjData = ()=>{
    setClickData(totalObj)
  }


  return (
    <div className='App'>
      <TipInputForm onSaveTipData={onSaveTipData} />
      <h2>Customer List</h2>
      <div className='customerList'>
      <ul>
        {
          tipData.map((items , index) => {
            return <CustomerList 
            key = {index}
            amount = {items.billAmount}
            value = {items.value}
            name = {items.name}
            />
          })
        }
      </ul>
      </div>
      <button onClick={()=>totalObjData()}>Calculate Tip & Customer</button>
      <TotalTip totalTip={clickData}/>

    </div>
  );
}

export default App;
