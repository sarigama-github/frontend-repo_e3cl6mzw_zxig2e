import { motion } from 'framer-motion'

const posts = [
  { t: 'Nuovo drop: UI Pack Retro-Tech', d: 'Palette scura, glow arancione, neon lime', c: 'orange' },
  { t: 'Dev Log 07: motion & microinterazioni', d: 'Scroll, reveal, parallax morbidi', c: 'lime' },
  { t: 'Preset: Ambient Lighting', d: 'Riflessi caldi e highlights freddi', c: 'orange' },
]

export default function LNLatest() {
  return (
    <section id="latest" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Latest</h2>
          <a href="#" className="text-sm text-slate-300 hover:text-white">Vedi tutto</a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <div className={`h-1 ${p.c === 'orange' ? 'bg-gradient-to-r from-orange-500 to-amber-400' : 'bg-gradient-to-r from-lime-300 to-lime-400'}`} />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.t}</h3>
                <p className="mt-1 text-sm text-slate-300">{p.d}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
