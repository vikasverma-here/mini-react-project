import React, { useEffect } from 'react'
import { getProducts } from './src/services/Getproduct'

const Details = () => {

const details = async()=>{
const res = await getProducts()
    
}

useEffect(()=> details(),[])



  return (
    <div>
      <h1>this is the details of product </h1>
    </div>
  )
}

export default Details
