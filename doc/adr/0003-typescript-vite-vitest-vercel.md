# ADR-0003 — TypeScript, Vite, Vitest e Vercel

- **Status:** Aceito
- **Data:** 25/11/2026
- **Etapa do roadmap:** [Etapa 1 — Definir a stack](../roadmap/etapa-01-stack/README.md)

## Contexto

Com React e Tailwind definidos ([ADR-0002](0002-react-e-tailwind.md)), faltava escolher a linguagem, a ferramenta de build, a ferramenta de testes e onde publicar a página. O teste lista TypeScript, testes e uma boa nota no Lighthouse como diferenciais, e pede o link de uma página publicada (sugere Vercel, Netlify ou GitHub Pages).

## Opções consideradas

| Ponto | Opções | Escolha |
| --- | --- | --- |
| Linguagem | JavaScript, **TypeScript** | TypeScript: é diferencial no teste e pega erros de props e de dados antes de rodar |
| Build | Create React App (descontinuado), Next.js, **Vite** | Vite: ambiente rápido e build otimizado. Next.js traria servidor e rotas, que uma página única não precisa. |
| Testes | Jest, **Vitest** | Vitest: usa a mesma configuração do Vite e tem a API compatível com a do Jest. Testing Library para testar componentes do jeito que o usuário usa. |
| Deploy | Netlify, GitHub Pages, **Vercel** | Vercel: detecta o Vite sozinho e faz deploy a cada push. O GitHub Pages pediria configurar o `base` do Vite e uma action. |

## Decisão

Usar **TypeScript** como linguagem, **Vite** como ferramenta de build, **Vitest + Testing Library** para os testes e **Vercel** para a hospedagem.

## Consequências

- Os tipos compartilhados (`Product`, `CartItem`...) ficam em `src/types/` e são usados pelos dados mockados, pelos componentes e pelos testes.
- Um comando só (`npm run test`) roda os testes, e não há configuração extra de Babel ou Jest.
- O primeiro deploy pode ser feito logo depois da etapa 1, para validar o caminho até a produção cedo.
- O repositório precisa ser público no GitHub e conectado à Vercel.
