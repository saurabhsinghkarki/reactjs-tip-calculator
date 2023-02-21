import "./TotalTip.css";

const TotalTip = (props) => {
   return (
      <div className="mainDiv">
         <div className="totalTip">
            <h3>Total Tip</h3>
            <h6>{props.totalTip.totalTip}</h6>
         </div>
         <div className="totalCustomers">
            <h3>Total Customers</h3>
            <h6>{props.totalTip.noOfCustomers}</h6>
         </div>
      </div>
   )
}

export default TotalTip;