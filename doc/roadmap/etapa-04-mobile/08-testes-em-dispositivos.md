# 4.8 — Testar em dispositivos

## Checklist de larguras (DevTools)

- [ ] 320px (celular pequeno)
- [ ] 375px / 390px (iPhone)
- [ ] 768px (tablet em retrato)
- [ ] 1024px (tablet em paisagem / notebook pequeno)
- [ ] 1440px (desktop, a referência do Figma)
- [ ] 1920px (tela grande: o conteúdo continua centralizado?)

## Checklist de comportamento

- [ ] Nenhum scroll horizontal em nenhuma largura
- [ ] Menu mobile abre, fecha e navega
- [ ] Carrosséis funcionam com swipe
- [ ] É possível adicionar ao carrinho e alterar quantidades pelo celular
- [ ] Alvos de toque com no mínimo 44px
- [ ] Testar em **um celular real**, com o link da Vercel ou acessando o `npm run dev -- --host` pela rede local

## Commits sugeridos

- `fix: ...` (um para cada problema encontrado)
- `docs: registra decisões de responsividade no README`
