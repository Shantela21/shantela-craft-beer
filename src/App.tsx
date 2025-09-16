import './App.css'
import Layout from './assets/pages/Layout'
import { Routes, Route } from "react-router-dom"
import FirstLayout from "./assets/pages/FirstLayout"
import SecondLayout from "./assets/pages/SecondLayout"
import ThirdLayout from "./assets/pages/ThirdLayout"
import FourZeroFour from './assets/pages/FourZeroFour'
import Template from './assets/pages/Template'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<FirstLayout />} />
        <Route path="SecondLayout" element={<SecondLayout />} />
        <Route path="/admin" element={<Layout />}>
          <Route path="ThirdLayout" element={<ThirdLayout/>} />
          <Route path='/admin/:firstName' element={<Template/>}/>
        </Route>
        <Route path='*' element={<FourZeroFour/>}/>
      </Routes>
    </>
  );
}

export default App
