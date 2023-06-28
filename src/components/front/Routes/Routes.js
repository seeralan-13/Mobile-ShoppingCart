import React  from "react";
import Products from "../Products/Products";
import Signup from "../Signup/Signup";
import Cart from "../cart/Cart";
import {Route, Switch } from "react-router-dom";


const Routes = ({productItems, cartItems, handleAddProduct,handleRemoveProduct,handleCartClearance }) => {
    return (
         <div>
        <Switch>
            <Route path="/" exact>
                <Products productItems={productItems} handleAddProduct={handleAddProduct} cartItems={cartItems}/>
            </Route>
            <Route path="/Signup" exact>
                <Signup />
            </Route>
            <Route path="/Cart" exact>
             <Cart cartItems ={cartItems} handleAddProduct={handleAddProduct} 
             handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} />
            </Route>
        </Switch>
    </div>
    )
};

export default Routes;