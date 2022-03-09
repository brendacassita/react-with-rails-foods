import React, { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

// createContext HERE this doing a lot for
// create Context/Provider, get and set out data
export const DataContext = React.createContext();

const DataProvider = (props) => {
  // const navigate =  useNavigate()
  const [foods, setFoods] = useState();
  // onMount i want to run getFoods

  useEffect(()=>{
    // runs when component mounts
    console.log('DataProvider mounted')
    getFoods()
  },[])

  const getFoods = async()=>{
    try{
      let res = await axios.get('/api/foods') // going to server to get data
      setFoods(res.data)
    }catch(err){
      alert('err getting foods')
      console.log(err.response.data)
    }
  }

  const createFood = async (food, navigate) =>{
    try{
      let res = await axios.post('/api/foods', food)
      setFoods([res.data, ...foods])
      navigate('/foods')
    }catch(err){
      console.log(err)
      console.log(err.response)
    }
  }

  const updateFood = async (food, navigate)=>{
    console.log('food:', food)
    try{
      let res = await axios.put(`/api/foods/${food.id}`, food)
      const updatedFoods = foods.map(f => f.id === res.data.id ? res.data : f)
      setFoods(updatedFoods)
      navigate('/foods')
      console.log(res)
    }catch(err){
      console.log(err)
    }
  }
  const deleteFood = async (id)=>{
    try{
      // step 1
      let res = await axios.delete(`/api/foods/${id}`)
      // step 2
      let filteredFoods = foods.filter(f=> f.id !==id)
      setFoods(filteredFoods)
    }catch(err){
      alert('err in deleting')
    }
  }

  // create an object that will be 'global state'
  const foodProviderThing = {
    getFoods,
    foods,
    deleteFood,
    createFood,
    updateFood
    
};
  // return the provider which will wrap my all app
  return (
    <DataContext.Provider value={foodProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
