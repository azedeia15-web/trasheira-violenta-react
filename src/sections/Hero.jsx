export default function Hero() {
  return (
    <section id="inicio" className="section-anchor hero-noise border-b border-zinc-900">
      <div className="mx-auto grid min-h-[610px] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="font-black uppercase tracking-[0.22em] text-red-600">
            BEM-VINDO AO
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            TRASHEIRA <span className="text-red-600">VIOLENTA</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Reviews, recomendações e conteúdos sobre jogos, filmes e séries,
            agora reunidos em uma experiência direta com a loja oficial do projeto.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#loja"
              className="rounded-full bg-red-600 px-7 py-3.5 font-black shadow-red transition hover:-translate-y-1 hover:bg-red-500"
            >
              VER A LOJA →
            </a>
            <a
              href="#sobre"
              className="rounded-full border border-zinc-700 px-7 py-3.5 font-black transition hover:border-red-600 hover:text-red-500"
            >
              CONHECER O PROJETO
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/80 p-7 shadow-red">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-red-600">
            Conteúdo
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ['🎮', 'Jogos', 'Dos clássicos aos lançamentos.'],
              ['🎬', 'Filmes', 'Terror, suspense, trash e muito mais.'],
              ['▣', 'Séries', 'Destaques para colocar na maratona.'],
            ].map(([icone, titulo, texto]) => (
              <div key={titulo} className="rounded-2xl border border-zinc-800 bg-black/60 p-5">
                <span className="text-3xl">{icone}</span>
                <h2 className="mt-3 text-lg font-black">{titulo}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
