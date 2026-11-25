# 4.6 — Tipografia e espaçamentos fluidos

## Proposta

- Títulos grandes com `clamp()`, por exemplo `font-size: clamp(1.5rem, 4vw, 2.5rem)`, para crescerem suavemente entre o celular e o desktop sem precisar de muitos breakpoints
- Paddings verticais das seções menores no celular (tokens de espaçamento por breakpoint)
- Fonte base de no mínimo 16px no celular, o que também evita o zoom automático do iOS em inputs

## Passos

- [ ] Definir os tamanhos de fonte com `clamp()` nos tokens
- [ ] Ajustar os espaçamentos das seções por breakpoint

## Commits sugeridos

- `style: adiciona tipografia fluida com clamp`
