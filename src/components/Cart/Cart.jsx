import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faShoppingBag, faTruck, faCalculator, faReceipt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, handleClearCart, children }) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <div className='cart-header'>
                <FontAwesomeIcon icon={faShoppingBag} className='cart-icon' />
                <h3>Order Summary</h3>
            </div>
            
            <div className='cart-content'>
                <div className='cart-item'>
                    <span className='item-label'>
                        <FontAwesomeIcon icon={faShoppingBag} className='item-icon' />
                        Selected Items
                    </span>
                    <span className='item-value'>{quantity}</span>
                </div>

                <div className='cart-item'>
                    <span className='item-label'>
                        <FontAwesomeIcon icon={faReceipt} className='item-icon' />
                        Total Price
                    </span>
                    <span className='item-value'>${totalPrice.toFixed(2)}</span>
                </div>

                <div className='cart-item'>
                    <span className='item-label'>
                        <FontAwesomeIcon icon={faTruck} className='item-icon' />
                        Shipping
                    </span>
                    <span className='item-value'>${totalShipping.toFixed(2)}</span>
                </div>

                <div className='cart-item'>
                    <span className='item-label'>
                        <FontAwesomeIcon icon={faCalculator} className='item-icon' />
                        Tax (7%)
                    </span>
                    <span className='item-value'>${tax.toFixed(2)}</span>
                </div>

                <div className='cart-divider'></div>

                <div className='cart-total'>
                    <span className='total-label'>Grand Total</span>
                    <span className='total-value'>${grandTotal.toFixed(2)}</span>
                </div>
            </div>

            <div className='cart-actions'>
                <button onClick={handleClearCart} className='btn-clear-cart'>
                    <FontAwesomeIcon icon={faTrashAlt} />
                    <span>Clear Cart</span>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Cart;