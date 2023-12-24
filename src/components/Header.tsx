import { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import CarteElement from './CarteElement'
import { ItemInterface } from '../types/ItemInterface'
import { Link } from 'react-router-dom'


export default function Header({ order, removeFromCart }: { order: ItemInterface[], removeFromCart: (id: string) => void }) {
    const [cartOpen, setCartOpen] = useState(false)
    const [summa, setSumma] = useState(0);

    useEffect(() => {
        let sum = 0;
        order.forEach(el => {
            sum = Math.floor((sum + (Number(el.price) * Number(el.count))) * 100) / 100;
        })
        setSumma(sum)
    }, [order])

    return (
        <header>
            <div className='flex header-top'>
                <span className='logo'>Shop</span>
                <ul className='header-nav list-reset flex'>
                    <li className='header-arrow'>
                        <a href='#'>Home</a>
                    </li>
                    <li className='header-arrow'>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='header-arrow'>
                        <Link to='/contacts'>Contacts</Link>
                    </li>
                </ul>
                <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

                {cartOpen && (
                    <div className='shop-cart'>
                        <CarteElement order={order} removeFromCart={removeFromCart} />
                        <p className='summa'>Сумма: {summa}$</p>
                    </div>
                )}
            </div>

        </header>
    )
}