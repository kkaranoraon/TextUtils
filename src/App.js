
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#343538'
      document.body.style.color='white'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='dark'
    }
  }


  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm />
      </div>


      <footer className="bg-light text-center text-lg-start my-5 mb-0">

        <div className="text-center p-3" >
          © 2022 Copyright:
          <a className="text-dark" href="/">TextUtils by Karan</a>
        </div>

      </footer>
    </>
  );
}

export default App;
