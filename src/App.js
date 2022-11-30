
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" />
      <div className="container">
        <TextForm />
      </div>


      <footer className="bg-light text-center text-lg-start my-5">

        <div className="text-center p-3" >
          © 2022 Copyright:
          <a className="text-dark" href="/">TextUtils by Karan</a>
        </div>

      </footer>
    </>
  );
}

export default App;
