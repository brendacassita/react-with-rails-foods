import React, { useState } from 'react'


const DrinkForm = (props)=>{
  const [name, setName] =  useState(props.name || '')

  const handleSubmit =(e)=>{
    e.preventDefault()
    if(props.id){
       props.updateDrink({name, id:props.id})
    } else{
        props.addDrink({name})
    }
}
return (
    <form onSubmit={handleSubmit}>
        <p>Add a Drink: </p>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <hr />
        <button>{props.id ? 'Update' : 'New'}</button> 
    </form>
)
}

export default DrinkForm




    
    
    
