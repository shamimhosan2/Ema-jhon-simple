import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img, name, seller, ratings, price}= props.product;
    //button click korla one lakha pabo
    const handlerAddCard = props.handlerAddCard;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
             <h6 className='Product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button onClick={()=> handlerAddCard(props.product)} className='Product-btn'>Add To Card</button>
        </div>
    );
};

export default Product;