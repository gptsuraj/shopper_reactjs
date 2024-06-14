import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Brand is just a perception, and perception will match reality over time.
                    Sometimes it will be ahead, other times it will be behind.
                    But brand is simply a collective impression some have about a product.</p>
                <p>
                    Globally, retail e-commerce sales in 2020 neared $4.3 trillion compared to $3.35 trillion in 2019, according to Statista.
                     In 2021, this figure rose 16.8% to $4.92 billion. For 2022, it is forecasted that global retail e-commerce sales will reach $5.55 trillion. 
                    The market's value will continue rising till it reaches $7.385 trillion by 2025. (Credit Summit)
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox
