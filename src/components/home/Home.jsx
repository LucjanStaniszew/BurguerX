import React from 'react';
import Navbar from '../navbar/NavBar.jsx';
import Footer from '../footer/Footer.jsx';
import './Home.css'

const home = () => {
  return (
    <div>
        <Navbar />

        <main className='main'>
        Main
        </main>

        <Footer />
    </div>
  )
}

export default home
