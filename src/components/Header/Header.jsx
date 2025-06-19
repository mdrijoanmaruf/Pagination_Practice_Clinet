import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    
    return (
        <nav className='header'>
            <div className='header-brand'>
                <img src={logo} alt="Ema John" className='header-logo' />
            </div>
            <div className='header-nav'>
                <Link 
                    to="/" 
                    className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
                >
                    Shop
                </Link>
                <Link 
                    to="/orders" 
                    className={location.pathname === '/orders' ? 'nav-link active' : 'nav-link'}
                >
                    Orders
                </Link>
                <Link 
                    to="/inventory" 
                    className={location.pathname === '/inventory' ? 'nav-link active' : 'nav-link'}
                >
                    Inventory
                </Link>
                <Link 
                    to="/login" 
                    className={location.pathname === '/login' ? 'nav-link login-btn' : 'nav-link login-btn'}
                >
                    Login
                </Link>
            </div>
        </nav>
    );
};

export default Header;