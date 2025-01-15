import React, { useEffect } from 'react'
import { getProducts } from './services/Getproduct';
import { useState } from 'react';
import Cart from './Cart';
const Pagination = () => {
   const [count, setcount] = useState(0)
  //  const [showpage, setshowpage] = useState(0)
    const [Allproducts, setAllproducts] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const prooduct = async()=>{



        try{
            const products = await getProducts(count)
            setAllproducts(products.data.products)
            console.log(Allproducts)
        }
        catch(err){
            console.log(err)   
        }
        }


        useEffect(()=>{
            prooduct()
        },[count])
        const currentPage = Math.floor(count / itemsPerPage) ;
  return (
    <div className='box'>
      {
        Allproducts.map((product, index) => {
           
            return <Cart  key={product.id} product={product} count={count} />
        })
      }
      <div className="btn">
      <button onClick={() => setcount((prev) => (prev > 0 ? prev - 10 : 0))} >Privious</button>
         <h1>{currentPage}</h1>


         <button onClick={() => setcount((prev) =>
                            prev + itemsPerPage < 200 ? prev + itemsPerPage : prev)}>Next</button>
      </div>
    </div>
  )
}

export default Pagination
