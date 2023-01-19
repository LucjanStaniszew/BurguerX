import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.jsx';
import AboutUs from './components/aboutus/AboutUs.jsx';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/sobrenosotros' element={<AboutUs/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
