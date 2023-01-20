import React from 'react';
import Navbar from '../navbar/NavBar.jsx';
import Footer from '../footer/Footer.jsx';
import CarruselDeComida from '../carrusel/CarruselDeComida.jsx';
import './Home.css';

// import { useState } from 'react';
// import menu from '../../data.js'

const Home = () => {

  // Carrusel de comida
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const next = () => {
  //   setCurrentIndex((currentIndex + 1) % menu.length)
  // }

  // const prev = () => {
  //   setCurrentIndex((currentIndex - 1 + menu.length) % menu.length)
  // }

  return (
    <div>
        <Navbar />

        <main className='main'>
          
          <div className='slider'>
            
            <CarruselDeComida />
            
          </div>

        </main>

        <Footer />
    </div>
  )
}

export default Home
