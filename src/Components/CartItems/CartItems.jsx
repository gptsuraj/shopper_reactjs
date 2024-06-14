import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icn from '../Assests/cart_cross_icon.png'

const CartItems = () => {

  const {all_product, cartItem, removeFromCart}= useContext(ShopContext)
  console.log("cartItemsssssss",cartItem)
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Prices</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((item, i) => {
        if (cartItem[item.id] > 0) {
          return <div>
            <div className="cartitems-format">
              <img src={item.image} alt="" className='carticon-product-icon' />
              <p>{item.name}</p>
              <p>{item.new_price}</p>
              <button className='cartitems-quantity'>{cartItem[item.id]}</button>
              <p>{item.new_price * cartItem[item.id]}</p>
              <img src={remove_icn} alt="" onClick={() => { removeFromCart(item.id) }} />
            </div>
            <hr />
          </div>
        }
      })}


    </div>
  )
}

export default CartItems
