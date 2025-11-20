export default function LNCTA() {
  return (
    <section id="show" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-8 md:p-12 overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_20%_0%,rgba(34,197,94,0.08),transparent_40%),radial-gradient(600px_200px_at_80%_100%,rgba(251,146,60,0.08),transparent_40%)]" />
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Pronto a spingere sul gas?</h3>
            <p className="mt-2 text-slate-300 max-w-2xl">Portiamo il tuo brand in pole con un design scuro, dettagli arancio e highlight lime. Pulito, audace, memorabile.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="px-5 py-3 rounded-full bg-lime-400 text-black font-semibold hover:bg-lime-300">Inizia ora</a>
              <a href="#latest" className="px-5 py-3 rounded-full border border-white/20 hover:bg-white/10">Guarda i lavori</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
