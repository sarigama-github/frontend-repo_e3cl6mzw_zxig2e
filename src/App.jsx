import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Vibes from './components/Vibes'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-lime-300 selection:text-black">
      <div className="fixed inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(34,197,94,0.08),transparent_40%),radial-gradient(800px_circle_at_100%_100%,rgba(251,146,60,0.08),transparent_40%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Vibes />
        <Showcase />
      </main>
      <Footer />
    </div>
  )
}

export default App
