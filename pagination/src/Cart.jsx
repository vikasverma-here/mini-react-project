import React from 'react';


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
            <button className='btn' >buy now</button>
        </div>
        </div>
       
    );
};

export default Cart;
