# ADR-0008 — Imagens hospedadas fora do projeto e referenciadas por URL

- **Status:** Proposto (a abordagem está decidida; falta confirmar a plataforma)
- **Data:** 25/11/2026
- **Etapa do roadmap:** [Etapa 2 — Definir a componentização](../roadmap/etapa-02-componentizacao/README.md)

## Contexto

Num e-commerce de verdade, as imagens (banners, fotos de produto) mudam o tempo todo e vêm de um CMS ou de uma API, não do código do front. Se as imagens ficarem dentro de `src/assets/` e forem importadas nos componentes, trocar um banner exige mexer no código e fazer um novo deploy.

O teste também avalia "Performance": imagens otimizadas e página carregando rápido.

## Opções consideradas

| Opção | Prós | Contras |
| --- | --- | --- |
| Imagens em `src/assets/`, importadas nos componentes | Simples. O Vite otimiza o nome do arquivo para cache. | Imagem presa ao código. Trocar um banner exige novo deploy. |
| Imagens em `public/`, referenciadas por caminho | Simples | Mesma limitação, e sem otimização |
| **Imagens numa plataforma externa, referenciadas por URL nos dados** | O front só recebe uma URL, como faria com uma API real. Trocar uma imagem não exige mexer no código. Plataformas de imagem entregam formato e tamanho otimizados. | Depende de um serviço externo. As URLs precisam ficar centralizadas para não se espalharem pelo código. |

## Decisão

Hospedar **todas as imagens de conteúdo** (banners, produtos, categorias) numa plataforma externa e referenciá-las **por URL nos dados** (mocks/service, ver etapa 3), nunca direto no componente.

### Plataforma (a confirmar)

| Plataforma | Plano gratuito | Otimização pela URL |
| --- | --- | --- |
| **Cloudinary** (sugerida) | Sim | Sim: formato automático (`f_auto`, entrega WebP/AVIF), qualidade (`q_auto`) e largura (`w_400`) direto na URL |
| ImageKit | Sim | Sim, parecida com o Cloudinary |
| Vercel Blob / Supabase Storage | Sim | Não: só guardam o arquivo |

## Consequências

- **Componentes não conhecem URLs:** recebem a imagem por props (`{ src, alt }`), vinda dos dados.
- **Um helper monta as URLs:** um `buildImageUrl(id, { width })` em `src/utils/` gera a URL da plataforma. Isso facilita gerar o `srcset` com vários tamanhos para as imagens responsivas, e trocar de plataforma vira uma mudança num arquivo só.
- **Endereço base em variável de ambiente:** `VITE_IMAGES_BASE_URL` no `.env`, com um `.env.example` no repositório.
- **Inventário de imagens:** a etapa 2 registra cada imagem do Figma, com o componente ao qual pertence e de onde ela é chamada.
- **Ficam no projeto:** logo e ícones (SVG). São parte da identidade da interface, não conteúdo, e ficam mais rápidos embutidos no bundle.
- **Pré-conexão:** adicionar `<link rel="preconnect">` para o domínio da plataforma no `index.html`, para a primeira imagem carregar mais rápido.
