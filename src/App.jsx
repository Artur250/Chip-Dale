import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import Regions from './pages/Regions/Regions'
import Tours from './pages/Tours/Tours'

import './App.css'

function App() {


  return (
    <>
     <Header />
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/regions" element={<Regions />}/>
        <Route path="/tours" element={<Tours />}/>
      </Routes> 
     <Footer />
    </>
  )
}

export default App
