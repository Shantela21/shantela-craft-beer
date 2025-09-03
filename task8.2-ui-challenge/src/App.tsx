import './App.css'
// import Footer from './components/Footer';
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import Rightbuttons from './components/navbuttons/Rightbuttons';

function App() {
  

  return (
    <>
      <div id="container">
        <div id="logo"></div>
        <div id="nav"></div>
      </div>

      {/* <Logo /> */}
      <Navbar />
      {/* <Rightbuttons/> */}
      {/* <Footer/> */}
    </>
  );
}

export default App
