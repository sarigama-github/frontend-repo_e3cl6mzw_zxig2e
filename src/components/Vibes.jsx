import { Monitor, Camera, LampWallDown, Palette } from 'lucide-react'

function Pill({ children }) {
  return (
    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200 text-xs">
      {children}
    </div>
  )
}

function Vibes() {
  const cards = [
    {
      title: 'Retro Workspace',
      icon: Monitor,
      desc: 'Monitor old-school, tastiera chunky, tazze di caffè. Atmosfera dark elegante.',
      tags: ['nero grafite', 'arancio vivo', 'neon green'],
    },
    {
      title: 'Playful Corporate',
      icon: Palette,
      desc: 'Linee pulite, vetro opaco e bagliori morbidi per un tocco premium.',
      tags: ['glassmorphism', 'ombre morbide', 'gradiente'],
    },
    {
      title: 'Creative Studio',
      icon: Camera,
      desc: 'Visivo forte, tipografia audace e micro-interazioni leggere.',
      tags: ['motion', 'tipografia', 'hero 3D'],
    },
    {
      title: 'Ambient Lighting',
      icon: LampWallDown,
      desc: 'Riflessi arancioni e accenti verde neon per guidare l’attenzione.',
      tags: ['accenti arancio', 'neon verde', 'soft glow'],
    },
  ]

  return (
    <section id="vibes" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Vibes principali</h2>
          <p className="mt-3 text-slate-300">Ispirate alle reference: dark, techy, retro, ma accoglienti.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ title, icon: Icon, desc, tags }) => (
            <div key={title} className="group rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/7 transition-colors">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 shadow-[0_0_35px_rgba(251,146,60,0.25)] grid place-items-center">
                <Icon className="h-5 w-5 text-black/80" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-slate-300">{desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  )
}

export default Vibes
