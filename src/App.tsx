import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components';
import { Home } from './pages/Home/Home'
import MainGenerator from './pages/mainGenerator/mainGenerator';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
            <Route path='/generator' element={<MainGenerator />}/>
            <Route path='/' element={<Home />} />
        </Routes>
        
      </div>
    </BrowserRouter>

  );
}

export default App;
