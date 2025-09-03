import "./App.css";
import Button from "./components/Button";
// import Footer from './components/Footer';
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";

import Paragraph from "./components/Paragraph";
import Picture from "./components/Picture";
import Title from "./components/Title";

function App() {
  return (
    <>
    <Navbar/>
      <div className="container">
        
        <div className="col">
          <Title />
          <Paragraph />
          <Button />
          <Logo />
        </div>

        <div className="col">
          <Picture />
        </div>
      </div>
    </>
  );
}

export default App;
