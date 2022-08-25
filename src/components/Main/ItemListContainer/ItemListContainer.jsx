import React from 'react'
import '../main.css'
import ItemCount from './ItemCount'

      
const ItemListContainer = (props) => {

  const onAdd = () => {
    console.log('Agregado al carrito')
  }

  return (
    <>
      <h2>{props.saludo}</h2>    
      <ItemCount stock={10} initial={0} onAdd={onAdd} />
    </>
  )
}

export default ItemListContainer