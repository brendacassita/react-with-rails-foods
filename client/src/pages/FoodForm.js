import React, { useEffect } from "react";

const FoodForm = (props) =>{
  useEffect (()=>{
    // runs when component mounts
    console.log('FoodForm mounted')
  },[])
  return(
<div className="border">
  <h1>Food Form</h1>
</div>
  )
}
export default FoodForm