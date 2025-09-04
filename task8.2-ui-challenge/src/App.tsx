import "./App.css";
import Button from "./components/Button";
// import Footer from './components/Footer';
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";

import Paragraph from "./components/Paragraph";
import Picture from "./components/Picture";
import Title from "./components/Title";
import hero from "./assets/images/image-hero-desktop.png";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="col1">
          <div className="col1-subdiv">
            <Title />
            <Paragraph />
            <Button />
          </div>
          <Logo />
          <div className="col2">
            <Picture image={hero} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
