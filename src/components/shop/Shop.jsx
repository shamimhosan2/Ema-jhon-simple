import React, { useEffect, useState } from 'react';
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
            
            <div>
                <h1>Product Comming Here:{product.length}</h1>
            </div>
            <div>
                <p>Ordersummery</p>
            </div>

        </div>
    );
};

export default Shop;