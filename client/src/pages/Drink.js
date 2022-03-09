import React from 'react'
import DrinkForm from './DrinkForm'


const Drink = (props)=>{
  const {name, id, deleteDrink, updateDrink} = props


  return(
    <div className='border'>
      <p>Drink Name: {name}</p>
      <p>id: {id}</p>
      <button onClick={()=>deleteDrink(id)}>delete drink</button>
      <DrinkForm id={id} name={name} updateDrink={updateDrink} />
    </div>
  )
}
export default Drink





    
     
         
  