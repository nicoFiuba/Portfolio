// src/App.jsx
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Habilidades from './components/Habilidades'
import Trayectoria from './components/Trayectoria'
import GaleriaDeProyectos from './components/GaleriaDeProyectos'
import Footer from './components/Footer'


function App() {
  return (
  <div className="app-container">
    <Navbar />
    <Hero />
    <Habilidades />
    <Trayectoria />
    <GaleriaDeProyectos />
    <Footer />
  </div>
  )
}

export default App
