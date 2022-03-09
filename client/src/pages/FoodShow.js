import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import { useParams, useLocation } from "react-router-dom";
import { DataContext } from "../providers/DataProvider";

const FoodShow = (props) =>{
  const params = useParams()
  const {state} = useLocation()
  
  useEffect(()=>{
    getFoodFromApi()  
  }, [])
  
 
  const [foodFromApi, setFoodFromApi] = useState(null)

  const getFoodFromApi = async ()=>{
    try{
      let res = await axios.get(`/api/foods/${params.id}`)
      setFoodFromApi(res.data)
    }catch(err){
    alert('err')
    }
  }


  return(
<div className="border">
  <h1>FoodShow</h1>
  {/* <p>id: {params.id}</p> */}
  <code>{JSON.stringify(foodFromApi)}</code>
</div>
  )
}
export default FoodShow