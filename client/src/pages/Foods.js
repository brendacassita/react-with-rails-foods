import React, { useContext, useEffect } from "react";
import { DataContext } from "../providers/DataProvider";


const Foods = (props) =>{
  const {foods} = useContext(DataContext)
  useEffect (()=>{
    // runs when component mounts
    console.log('Foods mounted')
    
  },[])
  return(
<div className="border">
  <h1>Foods</h1>
  <div className="border">
    <code>{JSON.stringify(foods)}</code>
  </div>
</div>
  )
}
export default Foods