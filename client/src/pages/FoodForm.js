import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../providers/DataProvider";

const FoodForm = (props) =>{
  const navigate = useNavigate ()
  const {createFood, updateFood } = useContext(DataContext)
  const {state} = useLocation()
  console.log(state)
  // (state && state.name) also works or use a ternary
  const [name, setName] = useState (state ? state.name : '')
  const [price, setPrice] = useState (state ? state.price : '')

  useEffect (()=>{
    // runs when component mounts
    console.log('FoodForm mounted')
  },[])

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(state && state.id){
      //update
      console.log('update food')
      updateFood({name, price, id: state.id}, navigate)
    }else{
      //new case
      console.log('new food', name, price)
      createFood({name,price}, navigate)
      
    }
  }



  return(
<div className="border">
  <h1>Food Form</h1>
  <form onSubmit={handleSubmit}>
    <p>Food Item:</p>
    <input value={name} onChange={(e)=>setName(e.target.value)}></input>
    
    <p>Price: </p>
    <input value={price} onChange={(e)=>setPrice(e.target.value)}></input>
    <button>{state && state.id ? 'Edit' : 'New'}</button>
  </form>
  {/* <p>state: {JSON.stringify}</p>
  <p>state && state.text {JSON.stringify(state && state.text)}</p> */}
</div>
  )
}
export default FoodForm