import React, { useEffect, useState } from "react";
import axios from "axios"

// createContext HERE this doing a lot for
// create Context/Provider, get and set out data
export const DataContext = React.createContext();

const DataProvider = (props) => {
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
    deleteFood
    
};
  // return the provider which will wrap my all app
  return (
    <DataContext.Provider value={foodProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
