export default function Navbar({}) {
  const fecharMenuMobile = () => {
    const menu = document.getElementById('menu-mobile')
    if (menu) menu.open = false
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/95 backdrop-blur">
      <div className="mx-auto flex min-h-[82px] max-w-7xl items-center justify-between gap-6 px-5 py-4">
        <a
          href="#inicio"
          className="blood-logo shrink-0 text-2xl font-black leading-[0.82]"
          aria-label="Ir para o início"
        >
          TRASHEIRA<br />VIOLENTA
        </a>

        <nav className="hidden items-center gap-7 text-sm font-bold md:flex" aria-label="Navegação principal">
          <a className="nav-link" href="#inicio">⌂ Início</a>
          <a className="nav-link" href="#sobre">ⓘ Sobre</a>
          <a className="nav-link" href="#loja">🛒 Loja</a>
        </nav>

        <a
          href="#loja"
          className="hidden rounded-full bg-red-600 px-5 py-2.5 text-sm font-black transition hover:bg-red-500 sm:inline-flex"
        >
          VER PRODUTOS
        </a>

        <details id="menu-mobile" className="relative md:hidden">
          <summary
            className="cursor-pointer list-none rounded-lg border border-zinc-700 px-4 py-2 font-black"
            aria-label="Abrir menu"
          >
            ☰
          </summary>
          <nav className="absolute right-0 mt-3 w-44 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl">
            <a onClick={fecharMenuMobile} className="block px-5 py-4 hover:bg-zinc-900" href="#inicio">Início</a>
            <a onClick={fecharMenuMobile} className="block px-5 py-4 hover:bg-zinc-900" href="#sobre">Sobre</a>
            <a onClick={fecharMenuMobile} className="block px-5 py-4 hover:bg-zinc-900" href="#loja">Loja</a>
          </nav>
        </details>
      </div>
    </header>
  )
}
