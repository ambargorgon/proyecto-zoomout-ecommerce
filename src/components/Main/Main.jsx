import React from 'react'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import './main.css'

const Main = () => {
  return (
    <main>
        <ItemListContainer />
        <ItemDetailContainer />
    </main>
  )
}

export default Main