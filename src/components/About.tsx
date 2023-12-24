import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function About() {

    return (
        <div className="wrapper">
            <div className='flex header-top'>
                <span className='logo'>Shop</span>
                <ul className='header-nav list-reset flex'>
                    <li className='header-arrow'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='header-arrow'>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='header-arrow'>
                        <Link to='/contacts'>Contacts</Link>
                    </li>
                </ul>

                <div style={{width: "30px"}}></div>
            </div>
            <div className='about-descr'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem rerum pariatur minus unde beatae modi, fugit nostrum consectetur nesciunt sint perspiciatis repudiandae quia et maiores. Obcaecati enim, magni aliquid eius esse explicabo deserunt error quibusdam vel cumque alias non, asperiores facilis quo ut illum. Earum, voluptatum! Odio maiores tenetur suscipit dolore fugiat cum ducimus incidunt distinctio consectetur tempora possimus harum, doloribus, aperiam inventore illo, esse repellendus mollitia modi in quisquam. Delectus ipsum, accusantium a accusamus sapiente quia eligendi aperiam aut quasi obcaecati. Eveniet dolorem ducimus velit quidem mollitia, exercitationem consequuntur libero maiores corrupti illum praesentium cupiditate ratione doloremque et nobis.
            </div>
        </div>

    )
}
