function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-white text-xl font-semibold">Parliamo del tuo progetto</h3>
            <p className="mt-2 text-slate-300">Scrivimi cosa vuoi creare e ti propongo una direzione visiva con queste vibe.</p>
          </div>
          <form className="grid sm:grid-cols-2 gap-3">
            <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400" placeholder="Nome" />
            <input type="email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400" placeholder="Email" />
            <input className="sm:col-span-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400" placeholder="Sito/brand" />
            <textarea rows="3" className="sm:col-span-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400" placeholder="Messaggio" />
            <button type="button" className="sm:col-span-2 bg-lime-400 hover:bg-lime-300 text-black font-semibold rounded-xl px-5 py-3 transition-colors">Invia</button>
          </form>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Vibes Studio</p>
          <div className="flex items-center gap-4 text-slate-400 text-sm">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Dribbble</a>
            <a href="#" className="hover:text-white">Behance</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
