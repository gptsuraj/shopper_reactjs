import React, { createContext, useState } from "react"
import all_product from '../Components/Assests/all_product'

export const ShopContext = createContext(null);

const getdefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItem, setcartItem] = useState(getdefaultCart());


    const addToCart = (itemId) => {
        setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log("cartCheck==",cartItem)

    }
    const removeFromCart = (itemId) => {
        setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

    }
    const contextValue = { all_product, cartItem, addToCart, removeFromCart };

    // console.log("cart:::",cartItem)
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;

