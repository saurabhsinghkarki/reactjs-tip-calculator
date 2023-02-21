import "./CustomerList.css"

const CustomerList = (props) => {
   const calculation = (props.amount) * (+props.value)
   return (
            <p>{`${props.name.toUpperCase()} offered a tip of ${calculation.toFixed(2)} rupees`}</p>
         
   )
}

export default CustomerList;