import { Cpu, Monitor, MousePointerClick } from 'lucide-react'

const gear = [
  { icon: Cpu, t: 'Setup', d: 'Build con performance F1: Vite, React, Tailwind' },
  { icon: Monitor, t: 'Display', d: 'Interfacce bold su fondali slate-950' },
  { icon: MousePointerClick, t: 'Controls', d: 'CTA chiare, motion preciso, UX consistente' },
]

export default function LNGear() {
  return (
    <section id="gear" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Gear</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {gear.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 grid place-items-center shadow-[0_0_24px_rgba(251,146,60,0.35)]">
                <Icon className="h-5 w-5 text-black/80" />
              </div>
              <h3 className="mt-4 font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-slate-300">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
