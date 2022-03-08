import React, { useEffect, useState } from "react";
import axios from "axios"

// createContext HERE this doing a lot for
// create Context/Provider, get and set out data
export const DataContext = React.createContext([]);

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
      let res = await axios.get('api/foods') // going to server to get data
      console.log(res)
      setFoods(res.data)
    }catch(err){
      alert('err getting foods')
    }
  }

  // create an object that will be 'global state'
  const foodProviderThing = {
    getFoods,
    foods,
    
};
  // return the provider which will wrap my all app
  return (
    <DataContext.Provider value={foodProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
