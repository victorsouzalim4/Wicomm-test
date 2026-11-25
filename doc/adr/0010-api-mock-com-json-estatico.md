# ADR-0010 — API mock com arquivos JSON servidos pelo próprio site

- **Status:** Aceito
- **Data:** 25/11/2026
- **Etapa do roadmap:** [Etapa 3 — Dados](../roadmap/etapa-03-dados-mock/README.md)

## Contexto

O conteúdo da página (produtos, banners, blog, causas, redes sociais, menu, footer) precisa vir de algum lugar. As imagens já estão no Cloudinary ([ADR-0008](0008-imagens-hospedadas-externamente.md)), e o objetivo é mostrar que o front é **dinâmico**: ele recebe os dados e as URLs das imagens, em vez de tê-los escritos no código.

O deploy é estático (Vercel), então não pode depender de um servidor rodando.

## Opções consideradas

| Opção | Prós | Contras |
| --- | --- | --- |
| Mock importado direto (`import products from './products'`) | Simples e tipado | Não há requisição: não existe carregamento, erro, nem troca fácil por uma API real |
| **JSON em `public/api/`, buscado com `fetch`, atrás de uma camada de service** | Requisição HTTP de verdade (aparece na aba Network). Estados de carregamento e erro reais. Funciona no deploy estático. Trocar por uma API real é mudar uma variável de ambiente. | O TypeScript não garante o formato do JSON: precisa de validação em tempo de execução |
| MSW (Mock Service Worker) | O mais realista | Dependência e configuração extra para pouco ganho |
| json-server | API REST completa | Precisa de um servidor rodando, o que quebra o deploy estático |

## Decisão

Os dados ficam em **arquivos JSON em `public/api/`**, que o Vite copia para o build e a Vercel serve como qualquer arquivo. O front busca esses arquivos com `fetch`, sempre por uma **camada de service** (`src/services/`), nunca direto do componente.

### Endpoints

| Endpoint | Conteúdo |
| --- | --- |
| `/api/products.json` | Catálogo: id, nome, preços, parcelas, tags, imagem |
| `/api/shelves.json` | As 3 vitrines: título e ids dos produtos |
| `/api/banners.json` | Banners por posição: `hero`, `launches`, `haircare`, `reseller` |
| `/api/blog.json` | Posts: título, resumo, link, imagem |
| `/api/causes.json` | Causas: título, descrição, imagem |
| `/api/social.json` | Perfil (@amakhaoficial) e posts com imagem |
| `/api/navigation.json` | Menu principal, com os dropdowns |
| `/api/footer.json` | Colunas de links, contato, endereços, redes sociais, formas de pagamento |

### Formato das imagens no JSON

Toda imagem tem a URL completa do Cloudinary, o texto alternativo e as dimensões originais (usadas para reservar espaço e evitar CLS):

```json
{
  "id": "athena",
  "name": "Perfume Feminino Athena 100ml Amakha Paris",
  "price": 25500,
  "listPrice": 32000,
  "image": {
    "url": "https://res.cloudinary.com/ycsxevam/image/upload/produto-athena",
    "alt": "Frasco do perfume Athena 100ml com a caixa rosa",
    "width": 210,
    "height": 210
  }
}
```

## Consequências

- **Endereço da API em variável de ambiente:** `VITE_API_URL`, com padrão `/api`. Apontar para um backend real não exige mudar código.
- **O JSON guarda a URL original, e o front escolhe o tamanho.** Um helper `optimizeImage(url, { width })` insere `f_auto,q_auto,w_<largura>` depois de `/upload/` na URL do Cloudinary. É assim que geramos o `srcset`. Isso refina o `buildImageUrl` do ADR-0008: em vez de montar a URL a partir de um id, transformamos a URL que veio da API.
- **Validação em tempo de execução:** um `fetchJson<T>()` genérico trata erro HTTP. Cada service confere os campos obrigatórios antes de devolver os dados tipados, para um JSON quebrado não quebrar a página inteira.
- **Atraso simulado:** o service espera ~300ms em desenvolvimento, para o skeleton de carregamento aparecer como numa API real.
- **Preços em centavos** (`25500` = R$ 255,00), formatados só na exibição com `Intl.NumberFormat('pt-BR')`.
- **Os componentes não sabem que é mock:** recebem os dados por props, vindos dos hooks (`useProducts`, `useBanners`...).
