import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
const [product,setProduct]= useState([]);
useEffect(()=>{
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    .then(res =>res.json())
    //.then(data => console.log(data))
     .then(data => setProduct(data))


},[])




    return (
        <div className='Shoping-container'>
            
            <div className='Product-container'>
                {/* <h1>Product Comming Here:{product.length}</h1> */}
                {

                        product.map(product => console.log(product))
                }



                {

                product.map(product => <Product 
                key={product.id}
                product={product}
                ></Product> )
                }
            </div>
            <div className='cart-container'>
                <p>Ordersummery</p>
            </div>

        </div>
    );
};

export default Shop;