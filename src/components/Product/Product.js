import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons'

// const Product = (props) => {
const Product = ({product, buttonClick}) => {
    // const {product, buttonClick} = props
    const {id, name, price, img, ratings, seller} = product
    return (
        <div className='product'>
            <img src={img} alt="Product" />
            <h2 className='product-name'>{name}</h2>
            <p>Price: {price}</p>
            <p>Price: {price}</p>
            <p><small>Menufacturar: {seller}</small></p>
            <p><small>Ratings: {ratings}</small></p>
            <p>{id}</p>
            <button onClick={() =>buttonClick(product)} className='cartBtn'>Add to Cart       {<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>}</button>
      
            {/* <button onClick={() =>props.buttonClick(props.product)} className='cartBtn'>Add to Cart</button> */}
        </div>
    );
};

export default Product;