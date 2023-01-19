import React from 'react';
import './CarruselDeComida.css';

import { useState } from 'react';
import menu from '../../data.js';

const CarruselDeComida = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % menu.length)
  }

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + menu.length) % menu.length)
  }

  return (
    <div>
        <div className='carrusel'>
                {
                menu.map((photo) => (
                    <div key={photo.id} className={menu[currentIndex].id === photo.id ? 'fade' : 'slide fade'}>
                    <img src={photo.img} alt={photo.name} className="promo" />
                    <div className='title'>{photo.name}</div>                  
                    </div>
                ))
                }
                {/* Boton retroceder fotos */}
                <button onClick={prev} className="prev">
                &lt;
                </button>
                {/* Boton para adelantar fotos */}
                <button onClick={ next} className="next">
                &gt;
                </button>

            </div>

            {/* Indicadores de Slider */}

            <div className='indicadores'>
                {menu.map((photo) => {
                <span key={photo.id} 
                className={menu[currentIndex].id === photo.id ? "indicador activo" : "indicador"}>
                    onClick={() =>  setCurrentIndex(menu.indexOf(photo))}
                </span>
                })}
            </div>
          </div>
  )
}

export default CarruselDeComida