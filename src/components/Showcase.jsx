import { motion } from 'framer-motion'

const shots = [
  {
    id: 1,
    title: 'Dashboard Retro-Tech',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1640&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Workspace Vibes',
    img: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1640&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'UI con accenti arancio',
    img: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1640&auto=format&fit=crop',
  },
]

function Showcase() {
  return (
    <section id="showcase" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Showcase</h2>
          <p className="mt-3 text-slate-300">Uno sguardo a mood e composizioni di esempio.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {shots.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={s.img} alt={s.title} className="h-64 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
              <div className="absolute bottom-0 p-4">
                <p className="text-white font-medium drop-shadow">{s.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
