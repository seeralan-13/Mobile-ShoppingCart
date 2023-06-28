import React from "react";
import {Link} from "react-router-dom";
import "../Header/Header.css";


const Header = (cartItems) => {
    return (
        <>
                <header className="header">
            <div>
            <h1>
                <Link to= "/" className="logo">
                    shopping Cart
                </Link>
            </h1>
            </div>
            <div className="header-links">
                <ul>
                    <li>
                        <Link to= "/">Home</Link>
                    </li>

                    <li>
                        <Link to= "/Signup">Signup</Link>
                    </li>

                    <li>
                        <Link to= "/Cart" className="cart">🛒{cartItems.length === 0 ? " " : cartItems.length}
                        <span className="cart-length">
                            {cartItems.length === 0 ? " " : cartItems.length}
                        </span></Link>
                    </li>
                </ul>

            </div>
        </header>
        </> 
    )
};

export default Header;
