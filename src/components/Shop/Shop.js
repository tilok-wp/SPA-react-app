import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] =useState([])

    useEffect(() => {
        fetch('products.json')
        .then(req => req.json())
        .then(data =>setProducts(data))
        // .then(data =>console.log(data))
    },[])

    const buttonClick = (product) =>{
        console.log(product)
        // cart.push(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }


    return (
        <div className='shop-conatiner'>
            <div className="products-conatiner">
                {
                    products.map(product => <Product 
                            key={product.id}
                            product={product}
                            buttonClick={buttonClick}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                {<Cart cart={cart}></Cart>}
                
            </div>
        </div>
    );
};

export default Shop;