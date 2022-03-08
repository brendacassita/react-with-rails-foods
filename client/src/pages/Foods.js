import React, { useContext, useEffect } from 'react'
import { DataContext } from '../providers/DataProvider'
import Food from './Food'

const Foods = (props)=>{
    const {foods} = useContext(DataContext)
    useEffect(()=>{
        // runs when component mounts 
        console.log('Foods mounted')
      },[])
      
    const renderFoods = ()=> {
      console.log(foods)
      return foods.map((food)=>{
         return <Food key={food.id}{...food} />
      })
    } 
    return (
        <div className='border'>
            <h1>Foods</h1>
            <div className='border'>
                <code>{renderFoods()}</code>
            </div>
            <div className='border'>
                <code>{JSON.stringify(foods)}</code>
            </div>
        </div>
    )
}

export default Foods