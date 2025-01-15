import React from 'react';
import {Link} from 'react-router-dom'

const Cart = (props) => {
    const { thumbnail, brand, category, description } = props.product;
    console.log(props);
    return (
       
      
        <div className="main">

<div className="cart-container">
            <img src={thumbnail} alt={brand} />
            <h2>{brand}</h2>
            <p>{category}</p>
            <p>{description}</p>
           <Link to="/details"  > <button className='btn' >Details</button></Link>  
        </div>

       
        </div>
         
         
       
    );
};

export default Cart;
