const redes = [
  { nome: 'Instagram', valor: '@trasheiraviolenta', href: 'https://www.instagram.com/trasheiraviolenta/' },
  { nome: 'Facebook', valor: 'Trasheira Violenta', href: 'https://www.facebook.com/trasheiraviolenta/' },
  { nome: 'YouTube', valor: '@TrasheiraViolenta', href: 'https://www.youtube.com/@TrasheiraViolenta' },
]

export default function Sobre() {
  return (
    <section id="sobre" className="section-anchor bg-zinc-950/35">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="font-black uppercase tracking-[0.22em] text-red-600">
            SOBRE
          </p>
          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            ENTRETENIMENTO SEM FRESCURA.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            A Trasheira Violenta reúne análises, críticas e recomendações de
            filmes, séries e jogos, com destaque para terror, suspense e cinema trash.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
          <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 shadow-red">
            <h3 className="text-2xl font-black">Trasheira Violenta</h3>
            <p className="mt-4 leading-7 text-zinc-300">
              Um espaço para quem gosta de descobrir títulos, rever clássicos
              e acompanhar opiniões sobre cultura pop e entretenimento.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                ['🎥', 'Reviews', 'Opiniões e avaliações diretas.'],
                ['👾', 'Cultura pop', 'Jogos, filmes e séries no mesmo lugar.'],
                ['🛒', 'Loja', 'Produtos temáticos do projeto.'],
              ].map(([icone, titulo, texto]) => (
                <div key={titulo} className="rounded-2xl border border-zinc-800 bg-black p-5">
                  <span className="text-2xl">{icone}</span>
                  <h3 className="mt-3 font-black">{titulo}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">{texto}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7">
            <h3 className="text-xl font-black text-red-600">Acompanhe o canal</h3>
            <div className="mt-5 space-y-4">
              {redes.map((rede) => (
                <a
                  key={rede.nome}
                  href={rede.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl border border-zinc-800 bg-black p-4 transition hover:border-red-800"
                >
                  <span className="block font-black text-white">{rede.nome}</span>
                  <span className="mt-1 block text-sm text-zinc-500">{rede.valor}</span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
