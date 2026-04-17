import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DemoModal from './components/DemoModal'
import { DemoModalContext } from './context/DemoModalContext'
import Home from './pages/Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import EarlyAccess from './pages/EarlyAccess'

function App() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <DemoModalContext.Provider value={() => setDemoOpen(true)}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/early-access" element={<EarlyAccess />} />
          </Routes>
        </main>
        <Footer />

        <DemoModal
          isOpen={demoOpen}
          onClose={() => setDemoOpen(false)}
        />
      </div>
    </DemoModalContext.Provider>
  )
}

export default App
