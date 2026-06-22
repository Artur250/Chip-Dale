import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import Regions from './pages/Regions/Regions'
import Tours from './pages/Tours/Tours'

import Batken from './pages/Regions/Batken/Batken'
import Chuy from './pages/Regions/Chuy/Chuy'
import IssykKul from './pages/Regions/IssykKul/IssykKul'
import JalalAbad from './pages/Regions/JalalAbad/JalalAbad'
import Naryn from './pages/Regions/Naryn/Naryn'
import Osh from './pages/Regions/Osh/Osh'
import Talas from './pages/Regions/Talas/Talas'

import './App.css'

function App() {


  return (
    <>
     <Header />
       <Routes>
        <Route path="/" element={<Home />}/>

        <Route path="/regions" element={<Regions />}/>

        <Route path="/regions/batken" element={<Batken />} />
        <Route path="/regions/chuy" element={<Chuy />} />
        <Route path="/regions/issyk-kul" element={<IssykKul />} />
        <Route path="/regions/jalal-abad" element={<JalalAbad />} />
        <Route path="/regions/naryn" element={<Naryn />} />
        <Route path="/regions/osh" element={<Osh />} />
        <Route path="/regions/talas" element={<Talas />} />

        <Route path="/tours" element={<Tours />}/>


      </Routes> 
     <Footer />
    </>
  )
}

export default App
