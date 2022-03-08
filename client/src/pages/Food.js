import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../providers/DataProvider";

const Food = (props) =>{
  const {deleteFood} = useContext(DataContext)
  const navigate = useNavigate()
  const {id, name, price} = props
  return(
    <div className="border">
      <h1>Food:{name}</h1>
      <p>ID:{id}</p>
      <p>${price}</p>
      

    <div className="border">
      <p onClick={()=>navigate(`/foods${id}/edit`)}>edit</p>
      <p onClick={()=>deleteFood(id)}>delete</p>
      <p onClick={()=>navigate(`/foods${id}`, {state: props})}>show</p>


</div>
</div>
  )
}
export default Food