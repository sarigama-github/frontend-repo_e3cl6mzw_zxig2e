export default function LNStripes() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 -top-6 h-6 bg-gradient-to-b from-transparent to-black/20" />
      <div className="grid grid-cols-12">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className={`h-2 ${i % 2 === 0 ? 'bg-gradient-to-r from-lime-400/40 to-transparent' : 'bg-gradient-to-r from-orange-500/40 to-transparent'}`}></div>
        ))}
      </div>
    </div>
  )
}
