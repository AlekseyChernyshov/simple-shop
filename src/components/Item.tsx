import { ItemInterface } from "../types/ItemInterface"

export default function Item({item, setOrder}: {item: ItemInterface, setOrder: (func: (order: ItemInterface[]) => ItemInterface[]) => void}) {
    function addItemToCart() {
        if(item.count) item.count++
        else item.count=1
        setOrder((prevOrder)=>{
            let index = prevOrder.findIndex(product=>product.id===item.id)
            if((index) !== -1) {
                prevOrder[index]=item
                return [...prevOrder]
            }
           else return [...prevOrder, item]
        })
    }
    
  return (
    <div className='item flex'>
        <img className='item-image' src={item.image} />
        <h2 className='item-title'>{item.title}</h2>
        <p className='item-descr'>{item.category}</p>
        <span className='item-price'>{item.price}$</span>
        <button className='item-button' onClick={()=>{addItemToCart()}}>Добавить</button>
    </div>
  )
}