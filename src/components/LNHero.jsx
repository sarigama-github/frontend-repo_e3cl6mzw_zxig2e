import Spline from '@splinetool/react-spline'

export default function LNHero() {
  return (
    <section className="relative min-h-[90vh] w-full" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Vibes da campione.
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-amber-400">Retro-tech con accenti neon</span>
          </h1>
          <p className="mt-4 text-slate-300 text-lg">Look & feel alla LN: grande hero immersivo, call-to-action chiara, e un ritmo visivo deciso. Palette scura, gradienti arancio, highlight lime.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#latest" className="px-5 py-3 rounded-full bg-lime-400 text-black font-semibold hover:bg-lime-300">Guarda le novità</a>
            <a href="#contact" className="px-5 py-3 rounded-full border border-white/20 hover:bg-white/10">Collabora con noi</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
    </section>
  )
}
