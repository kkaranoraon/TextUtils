import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" />

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

      <footer className="bg-light text-center text-lg-start">
        
        <div className="text-center p-3" >
          © 2020 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">TextUtils</a>
        </div>
       
      </footer>
    </>
  );
}

export default App;
