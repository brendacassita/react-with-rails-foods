import axios from "axios";
import React, { useEffect, useState } from "react";
import Drink from "./Drink";
import DrinkForm from "./DrinkForm";


const Drinks = () => {
  const [drinks, setDrinks] = useState([])
  useEffect(() => {
    getDrinks();
  }, [])

  const getDrinks = async () => {
    try {
      let res = await axios.get("/api/drinks")
      setDrinks(res.data);
    } catch (err) {
      alert("err in getDrinks");
    }
  }

  const addDrink = async (drink) => {
    try {
      let res = await axios.post("/api/drinks", drink)
      setDrinks([res.data, ...drinks]);
    } catch (err) {
      alert("err occured");
    }
  }

  const deleteDrinksMethod = async (id) => {
    try {
      let res = await axios.delete(`/api/drinks/${id}`)
      setDrinks(drinks.filter((d) => d.id !== res.data.id))
    } catch (err) {
      alert("err occured");
    }
  }

  const updateDrink = async (drink) => {
    try{
       
      let res = await axios.put(`/api/drinks/${drink.id}`, drink)
      const updatedDrinks = drinks.map(d => d.id === res.data.id ?  res.data : d )
      setDrinks(updatedDrinks)
    }catch(err){
      alert('err occured')
    }
  }

  const renderDrinks = () => {
    return drinks.map((d) => {
      return (
        <Drink
          key={d.id}
          id={d.id}
          name={d.name}
          deleteDrink={deleteDrinksMethod}
          updateDrink={updateDrink}
        />
      )
    })
  }

  return (
    <div className="border">
      <h1>Drinks</h1>
      <DrinkForm addDrink={addDrink} />
      <hr />
      <p>{renderDrinks()}</p>
    </div>
  )
}
export default Drinks;