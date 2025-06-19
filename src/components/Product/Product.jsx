import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {

    const { img, name, seller, ratings, price } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <div className='product-image-container'>
                <img src={img} alt={name} />
                <div className='product-badge'>New</div>
            </div>
            <div className='product-content'>
                <div className='product-info'>
                    <h3 className='product-name'>{name}</h3>
                    <p className='product-seller'>{seller}</p>
                    <div className='product-rating'>
                        <FontAwesomeIcon icon={faStar} className='star-icon' />
                        <span>{ratings}</span>
                    </div>
                </div>
                <div className='product-footer'>
                    <div className='product-price'>
                        <span className='price-label'>Price</span>
                        <span className='price-value'>${price}</span>
                    </div>
                    <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;