import { useEffect, useMemo, useState } from 'react'
import { produtos } from '../data/produtos.js'

const categorias = ['Todos', 'Roupas', 'Canecas', 'Copos', 'Acessórios']

const moeda = (valor) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor)

export default function Loja() {
  const [categoria, setCategoria] = useState('Todos')
  const [carrinho, setCarrinho] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('carrinho-react')) || []
    } catch {
      return []
    }
  })
  const [aberto, setAberto] = useState(false)

  useEffect(() => {
    localStorage.setItem('carrinho-react', JSON.stringify(carrinho))
  }, [carrinho])

  const produtosFiltrados = useMemo(() => {
    if (categoria === 'Todos') return produtos
    return produtos.filter((produto) => produto.categoria === categoria)
  }, [categoria])

  const adicionar = (produto) => {
    setCarrinho((atual) => {
      const existente = atual.find((item) => item.id === produto.id)

      if (existente) {
        return atual.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item,
        )
      }

      return [...atual, { ...produto, quantidade: 1 }]
    })
    setAberto(true)
  }

  const alterarQuantidade = (id, delta) => {
    setCarrinho((atual) =>
      atual
        .map((item) =>
          item.id === id
            ? { ...item, quantidade: item.quantidade + delta }
            : item,
        )
        .filter((item) => item.quantidade > 0),
    )
  }

  const totalItens = carrinho.reduce((soma, item) => soma + item.quantidade, 0)
  const total = carrinho.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0,
  )

  return (
    <section id="loja" className="section-anchor">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="font-black uppercase tracking-[0.22em] text-red-600">
              LOJA
            </p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              PRODUTOS DA TRASHEIRA
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              Produtos demonstrativos inspirados no projeto. O carrinho funciona
              no navegador e os itens são organizados por categoria.
            </p>
          </div>

          <button
            onClick={() => setAberto(true)}
            className="rounded-full border border-red-600 px-6 py-3 font-black transition hover:bg-red-600"
          >
            🛒 CARRINHO ({totalItens})
          </button>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          {categorias.map((item) => (
            <button
              key={item}
              onClick={() => setCategoria(item)}
              className={`rounded-full border px-5 py-2.5 text-sm font-black transition ${
                categoria === item
                  ? 'border-red-600 bg-red-600 text-white'
                  : 'border-zinc-700 bg-zinc-950 text-zinc-300 hover:border-red-600'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {produtosFiltrados.map((produto) => (
            <article
              key={produto.id}
              className="produto-card overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950"
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="h-60 w-full object-contain bg-black p-3"
              />

              <div className="p-6">
                <span className="rounded-full bg-red-950 px-3 py-1 text-xs font-black text-red-500">
                  {produto.categoria}
                </span>

                <h3 className="mt-4 text-xl font-black">{produto.nome}</h3>
                <p className="mt-2 min-h-[72px] text-sm leading-6 text-zinc-400">
                  {produto.descricao}
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-wide text-zinc-500">
                  Tamanho: {produto.tamanhos}
                </p>

                <div className="mt-5 text-2xl font-black text-red-500">
                  {moeda(produto.preco)}
                </div>

                <button
                  onClick={() => adicionar(produto)}
                  className="mt-5 w-full rounded-full bg-red-600 p-3 font-black transition hover:bg-red-500"
                >
                  🛒 Adicionar
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {aberto && (
        <div className="fixed inset-0 z-[100] bg-black/80" role="dialog" aria-modal="true" aria-label="Carrinho">
          <div className="fixed right-0 top-0 h-screen w-full max-w-md overflow-y-auto border-l border-red-900 bg-zinc-950 p-7 shadow-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black">🛒 SEU CARRINHO</h2>
              <button
                onClick={() => setAberto(false)}
                className="text-3xl text-zinc-400 hover:text-red-500"
                aria-label="Fechar carrinho"
              >
                ×
              </button>
            </div>

            <div className="mt-8 space-y-4">
              {carrinho.length === 0 ? (
                <div className="rounded-2xl border border-zinc-800 bg-black p-6 text-center text-zinc-500">
                  Seu carrinho está vazio.
                </div>
              ) : (
                carrinho.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-zinc-800 bg-black p-4">
                    <h3 className="font-black">{item.nome}</h3>
                    <p className="mt-1 text-sm text-zinc-500">{moeda(item.preco)} cada</p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => alterarQuantidade(item.id, -1)}
                          className="h-9 w-9 rounded-full border border-zinc-700 font-black hover:border-red-600 hover:bg-red-600"
                        >
                          −
                        </button>
                        <span className="min-w-6 text-center font-black">{item.quantidade}</span>
                        <button
                          onClick={() => alterarQuantidade(item.id, 1)}
                          className="h-9 w-9 rounded-full border border-zinc-700 font-black hover:border-red-600 hover:bg-red-600"
                        >
                          +
                        </button>
                      </div>

                      <strong className="text-red-500">
                        {moeda(item.preco * item.quantidade)}
                      </strong>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-8 border-t border-zinc-800 pt-6">
              <div className="flex justify-between text-xl font-black">
                <span>Total</span>
                <span className="text-red-500">{moeda(total)}</span>
              </div>

              <button
                disabled={!carrinho.length}
                onClick={() => alert('Checkout demonstrativo: nenhuma compra real será realizada.')}
                className="mt-6 w-full rounded-full bg-red-600 p-3 font-black transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                FINALIZAR COMPRA
              </button>

              <button
                onClick={() => setCarrinho([])}
                className="mt-3 w-full rounded-full border border-zinc-700 p-3 font-bold text-zinc-400 transition hover:border-red-600 hover:text-white"
              >
                Limpar carrinho
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
