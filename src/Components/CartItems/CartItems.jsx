import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icn from '../Assests/cart_cross_icon.png'

const CartItems = () => {

  const { getTotalCartItem,getTotalCartAmount, all_product, cartItem, removeFromCart } = useContext(ShopContext)

  console.log("cartItemsssssss", getTotalCartAmount())
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
            <div className="cartitems-format cartitems-format-main">
              <img src={item.image} alt="" className='carticon-product-icon' />
              <p>{item.name}</p>
              <p>${item.new_price}</p>
              <button className='cartitems-quantity'>{cartItem[item.id]}</button>
              <p>${item.new_price * cartItem[item.id]}</p>
              <img className='cartitems-remove-icon' src={remove_icn} alt="" onClick={() => { removeFromCart(item.id) }} />
            </div>
            <hr />
          </div>
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Proceed To Checkout</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartItems
