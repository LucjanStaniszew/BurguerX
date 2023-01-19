import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.jsx';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
