import React, { useEffect } from 'react'
import { getProducts } from './services/Getproduct';
import { useState } from 'react';
import Cart from './Cart';
const Pagination = () => {

    const [Allproducts, setAllproducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const prooduct = async()=>{
        try{
            const products = await getProducts()
            setAllproducts(products.data.products)
            console.log(Allproducts)
        }
        catch(err){
            console.log(err)   
        }
        }


        useEffect(()=>{
            prooduct()
        },[])

  return (
    <div>
      {
        Allproducts.map((product, index) => {
           
            return <Cart  key={product.id} product={product} />
        })
      }
    </div>
  )
}

export default Pagination
