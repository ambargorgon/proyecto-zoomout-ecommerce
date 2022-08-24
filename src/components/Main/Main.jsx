import React from 'react'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import './main.css'
const Main = () => {
  return (
    <>
      <main className='main'>
      <ItemListContainer saludo="Bienvenidos" />
          <h3 className='text__main'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque natus odio quibusdam ducimus quae voluptate animi fugiat vitae maiores, neque, eveniet dolor perferendis labore, esse aliquid facere error porro ullam.
          </h3>
      </main>
    </>
  )
}

export default Main