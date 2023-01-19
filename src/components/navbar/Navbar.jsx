import React from 'react';
import './NavBar.css'

const navbar = () => {
  return (
    <div>
        <header>
            <nav className='nav'>
            
              <a href='/'>
                <img src="./assets/BurguerX.png" alt='BurgerX Logo' className='logo'/>
              </a>

              <a href='/' className='title'>
                <h1>
                  Burgerx
                </h1>
              </a>

              <div>
                <a href='/sobreNosotros'>Sobre Nosotros</a>
              </div>

            </nav>
        </header>
    </div>
  )
}

export default navbar
