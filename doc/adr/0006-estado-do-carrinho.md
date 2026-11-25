# ADR-0006 — Estado do carrinho com Context, `useReducer` e `localStorage`

- **Status:** Aceito
- **Data:** 25/11/2026
- **Etapa do roadmap:** [Etapa 1 — Definir a stack](../roadmap/etapa-01-stack/README.md)

## Contexto

O carrinho é usado em partes diferentes da página: o botão "comprar" no card do produto, o contador no header e o mini cart. Esses componentes ficam em ramos diferentes da árvore, então o estado precisa ser compartilhado. O carrinho também deve continuar lá quando a pessoa recarrega a página.

## Opções consideradas

| Opção | Prós | Contras |
| --- | --- | --- |
| Biblioteca de estado (Redux, Zustand) | Ferramentas maduras | Dependência a mais para um estado pequeno |
| Só `localStorage`, lido direto pelos componentes | Simples | O React não sabe quando o `localStorage` muda, então a tela não atualiza sozinha |
| **Context + `useReducer`, salvo no `localStorage`** | Nativo do React. O reducer concentra todas as regras do carrinho e é fácil de testar. O `localStorage` mantém os dados depois de recarregar. | Um pouco de código para ler e salvar no `localStorage` |

## Decisão

- O **estado** do carrinho fica num `CartContext`, controlado por um `useReducer`.
- O **`localStorage`** guarda uma cópia do estado: o carrinho é lido de lá quando a página abre e salvo a cada mudança.

## Consequências

- **Ações do reducer:** `ADD_ITEM`, `REMOVE_ITEM`, `UPDATE_QUANTITY`, `OPEN_CART` e `CLOSE_CART`. Toda regra (somar quantidade de um produto já adicionado, remover quando a quantidade chega a zero) fica no reducer.
- **O que é salvo:** só o `id` do produto e a quantidade. Nome, preço e imagem vêm dos dados mockados, para o carrinho nunca mostrar um preço desatualizado.
- **O estado de aberto/fechado do mini cart não é salvo:** ao recarregar, o mini cart começa fechado.
- **Leitura segura:** a leitura do `localStorage` fica num `try/catch`. Se o JSON estiver inválido ou o navegador bloquear o acesso (modo privado), o carrinho começa vazio em vez de quebrar a página.
- **Chave com versão:** `wicomm-cart:v1`. Se o formato mudar, a versão muda e os dados antigos são ignorados.
- **Testes:** o reducer é uma função pura e ganha testes unitários. É a prioridade de testes do projeto.
- **Opcional:** sincronizar o carrinho entre abas com o evento `storage`.
