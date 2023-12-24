import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Items from './components/Items';
import { ItemInterface } from './types/ItemInterface';

const src = 'https://fakestoreapi.com/products?limit=6'

function App() {
  const [item, setItem] = useState<ItemInterface[]>([])
  const [order, setOrder] = useState<ItemInterface[]>([])

  useEffect(()=>{
    axios.get(src)
    .then(data => {
      setItem(data.data)
    })
    .catch((e) => {
      alert(e.message)
    })
  },[])

  function removeFromCart(id:string) {
    const newCart = order.filter(item => item.id !== id)
    setOrder(newCart)
  }
  

  return (
    <div className="wrapper">
      <Header order={order} removeFromCart={removeFromCart}/>
      <Items items={item} setOrder={setOrder}/>
    </div>
  )

}

export default App;
