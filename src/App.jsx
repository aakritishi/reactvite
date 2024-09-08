import Header from '../src/components/navbar/Header';
import Footer from './components/navbar/Footer';
import Home from '../src/pages/Home';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './pages/Shop';
import Contact from './pages/Contact';
function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
