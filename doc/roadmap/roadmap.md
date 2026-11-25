# Roadmap — Teste Prático Wicomm (Dev Júnior)

Objetivo: reproduzir o layout do Figma com o máximo de fidelidade, com página responsiva, interações funcionando (carrinho, mini cart, menus, carrosséis) e código organizado.

Prazo: 18/11, às 23h59.

Cada etapa tem uma pasta própria. O `README.md` da pasta resume a etapa e cada arquivo numerado é uma parte dela. Cada parte deve virar pelo menos um commit pequeno e descritivo.

As decisões tomadas ao longo das etapas ficam registradas em [`doc/adr/`](../adr/README.md).

## Etapas

| # | Etapa | Pasta | Status |
| --- | --- | --- | --- |
| 1 | Definir a stack | [etapa-01-stack](etapa-01-stack/README.md) | Decisões fechadas, configuração em andamento |
| 2 | Definir a componentização | [etapa-02-componentizacao](etapa-02-componentizacao/README.md) | Em andamento |
| 3 | Dados: mock via API ou mock direto | [etapa-03-dados-mock](etapa-03-dados-mock/README.md) | A fazer |
| 4 | Mobile e responsividade | [etapa-04-responsividade](etapa-04-responsividade/README.md) | A fazer |
| 5 | Deploy e hosting | [etapa-05-deploy](etapa-05-deploy/README.md) | Em andamento (hospedagem das imagens) |

## Padrão de commits

O formato segue o [Conventional Commits](https://www.conventionalcommits.org/pt-br/):

- `feat:` nova funcionalidade ou componente
- `fix:` correção
- `style:` ajuste visual ou de CSS
- `refactor:` mudança de código sem mudar o comportamento
- `test:` testes
- `docs:` documentação (README, roadmap)
- `chore:` configuração, dependências, build
