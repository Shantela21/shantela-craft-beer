import './App.css'
import Layout from './pages/Layout'
import { Routes, Route } from "react-router-dom"
import FirstLayout from "./pages/FirstLayout"
import SecondLayout from "./pages/SecondLayout"
import ThirdLayout from "./pages/ThirdLayout"
import FourZeroFour from './pages/FourZeroFour'
import Template from './pages/Template'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<FirstLayout />} />
        <Route path="/SecondLayout" element={<SecondLayout />} />
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
