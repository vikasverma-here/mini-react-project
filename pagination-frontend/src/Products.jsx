import React from 'react'
import "./App.css"
const Products = ({title,thumbnail}) => {
  return (
    <div className='box'>
      
      <img src={thumbnail} alt={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default Products
