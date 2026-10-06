export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm text-zinc-400 md:grid-cols-2">
        <div>
          <p className="blood-logo inline-block text-xl font-black leading-[0.85]">
            TRASHEIRA<br />VIOLENTA
          </p>
          <p className="mt-5 max-w-md leading-6">
            Projeto acadêmico desenvolvido em React com base no site original.
          </p>
        </div>

        <div className="md:text-right">
          <p className="font-bold text-white">Redes</p>
          <div className="mt-3 flex flex-wrap gap-4 md:justify-end">
            <a className="hover:text-red-500" href="https://www.instagram.com/trasheiraviolenta/" target="_blank" rel="noreferrer">Instagram</a>
            <a className="hover:text-red-500" href="https://www.facebook.com/trasheiraviolenta/" target="_blank" rel="noreferrer">Facebook</a>
            <a className="hover:text-red-500" href="https://www.youtube.com/@TrasheiraViolenta" target="_blank" rel="noreferrer">YouTube</a>
          </div>
          <p className="mt-5">© 2026 — Projeto demonstrativo.</p>
        </div>
      </div>
    </footer>
  )
}
