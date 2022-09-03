import React from 'react'
import './itemDetail.css'

const ItemDetail = ({item}) => {
  return (
    <div key={item.id} className='item-detail-container'>
      <div className='item-text'>
        <h1 className='item-title'>{item.title} ${item.price}</h1>
        <h4 className='item-description'>{item.description}</h4>
      </div>
      <img src={item.img} className='item-img' alt='product-img'></img>
    </div>
  )
}

export default ItemDetail