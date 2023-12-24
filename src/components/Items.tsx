import { ItemInterface } from "../types/ItemInterface";
import Item from "./Item";


export default function Items({items, setOrder}:{items:ItemInterface[], setOrder: (func: (order: ItemInterface[]) => ItemInterface[]) => void}) {
    return (
      <main>
          {items.map(el => 
              <Item item={el} key={el.id} setOrder={setOrder}/>
              )}
      </main>
    )
  }