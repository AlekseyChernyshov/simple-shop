import { ItemInterface } from "../types/ItemInterface";
import { FaTrash } from 'react-icons/fa'

export default function CarteElements({ order, removeFromCart }: { order: ItemInterface[], removeFromCart: (item: string) => void }) {

  return <div>
    {order.map(item => (
      <div key={item.id} className='item flex'>
        <img className='item-image' src={item.image} alt={item.title} />
        <h2 className='item-title'>{item.title}</h2>
        <p className='item-descr'>{item.category}</p>
        <span className='item-price'>{Math.floor((Number(item.price) * item.count!) * 100) / 100}$</span>
        <span>количество {item.count}</span>
        <FaTrash className='delete-item' onClick={() => removeFromCart(item.id)} />
      </div>
    ))}
  </div>

}