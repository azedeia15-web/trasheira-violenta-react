# Trasheira Violenta | Landing Page em React

Parte 2 individual do trabalho de Desenvolvimento Frontend II.

## Autor
KEVEN DE SOUZA OLIVEIRA DO CARMO

## Origem
- Site original: projeto em HTML/CSS/JavaScript da Parte 1.
- Página migrada para a Landing: `loja.html`.
- O conteúdo de início e sobre foi reorganizado para formar uma única página.
- Os arquivos originais usados como comparação estão na pasta `referencia-html/`.

## Site publicado
**COLE AQUI O LINK DO NETLIFY**

## Tecnologias
- React
- Vite
- Tailwind CSS
- JavaScript
- localStorage para persistir o carrinho demonstrativo

## Como executar

```bash
npm install
npm run dev
```

Para testar a versão de produção:

```bash
npm run build
npm run preview
```

## Seções da Landing Page

| Seção | Origem |
|---|---|
| Início / Hero | `index.html` |
| Sobre | conteúdo reorganizado de `index.html` + `sobre.html` |
| Loja | `loja.html` |
| Chamada final | criada para dar um CTA claro à Landing |
| Rodapé | unificado |

## Decisões da migração
- Um único menu.
- Um único `h1`.
- Um único rodapé.
- Navegação por âncoras (`#inicio`, `#sobre`, `#loja`).
- Cada seção foi transformada em componente React.
- Os produtos ficam em um array e são renderizados com `map()`.
- O filtro de categorias usa `useState`.
- O carrinho usa `useState`, `useEffect` e `localStorage`.
- O layout foi preparado para computador e celular.
- A Landing é pública para abrir diretamente no link do Netlify.

## Observação
Checkout e pagamentos são demonstrativos. Nenhuma compra real é realizada.
