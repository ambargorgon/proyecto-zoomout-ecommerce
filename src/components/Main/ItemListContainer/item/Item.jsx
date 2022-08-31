import React from 'react'
import './item.css'

const Item = ({product}) => {
 
  return( <>
                <img src={product.img} alt={product.title} className='card-img'></img>
                <h3 className='card-title'>{product.title}</h3>
                <h4 className='card-price'>${product.price}</h4>
          </>
)
}

export default Item