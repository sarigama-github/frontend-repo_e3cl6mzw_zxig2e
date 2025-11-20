import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Vibes', href: '#vibes' },
    { label: 'Studio', href: '#studio' },
    { label: 'Showcase', href: '#showcase' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-md bg-slate-900/60 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="inline-flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 shadow-[0_0_40px_rgba(251,146,60,0.35)] grid place-items-center">
                <Sparkles className="h-5 w-5 text-black/80" />
              </div>
              <span className="text-white font-semibold tracking-tight">Vibes Studio</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="text-sm text-black bg-lime-400 hover:bg-lime-300 rounded-full px-4 py-2 font-medium transition-colors">
                Get in touch
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 text-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 animate-in">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block w-full text-left px-3 py-2 rounded-lg text-slate-200 bg-white/5 border border-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="block w-full text-left px-3 py-2 rounded-lg bg-lime-400 text-black font-medium" onClick={() => setOpen(false)}>
                  Get in touch
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
