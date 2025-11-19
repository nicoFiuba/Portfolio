// src/App.jsx
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GaleriaDeProyectos from './components/GaleriaDeProyectos'
import Footer from './components/Footer'

function App() {
  return (
  <div className="app-container">
    <Navbar />
    <Hero />
    <GaleriaDeProyectos />
    <Footer />
  </div>
  )
}

export default App
