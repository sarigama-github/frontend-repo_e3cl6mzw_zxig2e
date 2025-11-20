import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-40 pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 border border-white/15 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-lime-400"></span>
              <span className="text-xs text-slate-200">Live • Creative retro tech workspace vibes</span>
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Siti con energia retro-tech, tocchi arancioni e neon green
            </h1>
            <p className="mt-5 text-lg text-slate-300">
              Palette scura, texture morbide, vetro opaco e riflessi arancioni.
              Un mix giocoso e creativo, dall'anima corporate ma super umano.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#vibes" className="px-5 py-3 rounded-xl bg-lime-400 text-black font-semibold hover:bg-lime-300 transition-colors">
                Esplora le vibe
              </a>
              <a href="#contact" className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors">
                Parliamo del tuo progetto
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
    </section>
  )
}

export default Hero
