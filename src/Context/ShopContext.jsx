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
        // console.log("cartCheck==", cartItem)

    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        console.log("cartCheck11==", cartItem)
        for (let item in cartItem) {
            console.log(item, "hello===")
            if (cartItem[item] > 0) {
                console.log(item, "hello=111==")
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItem[item];
                console.log("===", totalAmount)
            }

        }
        return totalAmount;
    }

    const getTotalCartItem = () => {
        let totalItem = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                totalItem += cartItem[item];
            }
        }
        return totalItem;
    }
    const removeFromCart = (itemId) => {
        setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

    }
    const contextValue = { getTotalCartItem, getTotalCartAmount, all_product, cartItem, addToCart, removeFromCart };

    // console.log("cart:::",cartItem)
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;

