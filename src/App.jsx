import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import Sobre from './sections/Sobre.jsx'
import Loja from './sections/Loja.jsx'
import ChamadaFinal from './sections/ChamadaFinal.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Loja />
        <ChamadaFinal />
      </main>
      <Footer />
    </div>
  )
}
