import { useEffect, useRef } from 'react'

function MarqueeItem({ text, color = 'lime' }) {
  const colorClass = color === 'orange' ? 'from-orange-500 to-amber-600 text-black' : 'from-lime-300 to-lime-400 text-black'
  return (
    <span className={`mx-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-br ${colorClass} font-semibold text-sm shadow-[0_0_24px_rgba(0,0,0,0.25)]`}> 
      <span className="h-2 w-2 rounded-full bg-black/50"></span>
      {text}
    </span>
  )
}

export default function Marquee() {
  const refA = useRef(null)
  const refB = useRef(null)

  useEffect(() => {
    const a = refA.current
    const b = refB.current
    if (!a || !b) return
    const keyframes = [
      { transform: 'translateX(0)' },
      { transform: 'translateX(-50%)' },
    ]
    const options = { duration: 15000, iterations: Infinity, easing: 'linear' }
    const animA = a.animate(keyframes, options)
    const animB = b.animate(keyframes, options)
    return () => { animA.cancel(); animB.cancel() }
  }, [])

  const items = [
    { t: 'Retro-Tech', c: 'orange' },
    { t: 'Playful Corporate', c: 'lime' },
    { t: 'Creative Studio', c: 'orange' },
    { t: 'Neon Accents', c: 'lime' },
    { t: 'Glassmorphism', c: 'orange' },
    { t: 'Soft Glow', c: 'lime' },
  ]

  return (
    <section aria-label="ticker" className="relative bg-slate-950 border-y border-white/10 select-none">
      <div className="absolute inset-0 bg-[radial-gradient(400px_80px_at_10%_50%,rgba(34,197,94,0.08),transparent_50%),radial-gradient(400px_80px_at_90%_50%,rgba(251,146,60,0.08),transparent_50%)]" />
      <div className="relative overflow-hidden">
        <div className="flex whitespace-nowrap will-change-transform" ref={refA}>
          {Array.from({ length: 2 }).map((_, idx) => (
            <div key={idx} className="flex items-center py-4">
              {items.map((it, i) => (
                <MarqueeItem key={`${idx}-${i}`} text={it.t} color={it.c === 'orange' ? 'orange' : 'lime'} />
              ))}
            </div>
          ))}
        </div>
        <div className="flex whitespace-nowrap will-change-transform absolute inset-0" ref={refB} style={{ transform: 'translateX(50%)' }}>
          {Array.from({ length: 2 }).map((_, idx) => (
            <div key={idx} className="flex items-center py-4">
              {items.map((it, i) => (
                <MarqueeItem key={`b-${idx}-${i}`} text={it.t} color={it.c === 'orange' ? 'orange' : 'lime'} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
