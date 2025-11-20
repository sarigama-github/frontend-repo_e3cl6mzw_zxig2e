import LNLayout from './components/LNLayout'
import LNHero from './components/LNHero'
import Marquee from './components/Marquee'
import LNStripes from './components/LNStripes'
import LNLatest from './components/LNLatest'
import LNGear from './components/LNGear'
import LNCTA from './components/LNCTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-lime-300 selection:text-black">
      <div className="fixed inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(34,197,94,0.08),transparent_40%),radial-gradient(800px_circle_at_100%_100%,rgba(251,146,60,0.08),transparent_40%)] pointer-events-none" />

      <LNLayout>
        <main className="relative">
          <LNHero />
          <LNStripes />
          <Marquee />
          <LNLatest />
          <LNGear />
          <LNCTA />
        </main>
      </LNLayout>
    </div>
  )
}

export default App
