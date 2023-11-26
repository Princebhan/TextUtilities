import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react';
import About from './components/About';
import {BrowserRouter,Route,Routes} from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light');

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#084049';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
     
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        <div className="container">
          
              {/* <TextForm heading="Enter Text" mode={mode} /> */}
          <BrowserRouter>
              <Routes>
                    <Route exact path="/" element={<TextForm />} />
                    <Route exact path="/About" element={<About />} />
                    
                </Routes>
         </BrowserRouter>
        </div>
      
    </>
  );
}

export default App;
