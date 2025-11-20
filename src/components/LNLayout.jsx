import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight, Instagram, Youtube, Twitter } from 'lucide-react'

export default function LNLayout({ children }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-5">
            <a href="#" className="text-lg font-black tracking-tight">
              <span className="text-white">VIBES</span>
              <span className="ml-1 inline-block rounded-md px-2 py-1 bg-gradient-to-br from-orange-500 to-amber-600 text-black">LAB</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#latest" className="hover:text-white/90 text-slate-300">Latest</a>
              <a href="#gear" className="hover:text-white/90 text-slate-300">Gear</a>
              <a href="#show" className="hover:text-white/90 text-slate-300">Show</a>
              <a href="#contact" className="px-4 py-2 rounded-full bg-lime-400 text-black font-semibold hover:bg-lime-300">Contact <ArrowUpRight className="inline h-4 w-4" /></a>
            </nav>
            <button className="md:hidden h-10 w-10 grid place-items-center rounded-xl bg-white/5 border border-white/10" onClick={() => setOpen(!open)} aria-label="menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          {open && (
            <div className="md:hidden pb-4">
              <div className="grid gap-2">
                {['Latest','Gear','Show'].map((l) => (
                  <a key={l} href={`#${l.toLowerCase()}`} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-200">{l}</a>
                ))}
                <a href="#contact" className="px-3 py-2 rounded-lg bg-lime-400 text-black font-semibold">Contact</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {children}

      <footer className="mt-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex items-center justify-between">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Vibes Lab</p>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-white"><Youtube className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
