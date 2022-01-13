# 🚀 Shopping Cart

## Feito para o processo seletivo da Liven Tech

Por Luan Panno

[![Build Status](https://www.travis-ci.com/luanpanno/teste-liven.svg?token=5qXE3ZkgbPXsh4vZ5czV&branch=main)](https://www.travis-ci.com/luanpanno/teste-liven) [![Netlify Status](https://api.netlify.com/api/v1/badges/e8f5336e-6f80-43ee-a474-795f63991345/deploy-status)](https://app.netlify.com/sites/shopping-cart-lp/deploys)

## 🔧 Como rodar o projeto

1.  Instale as dependências do projeto rodando o seguinte comando:

        yarn

2.  Adicione um arquivo `.env` na raiz do projeto, seguindo o modelo do arquivo `.env.example` (que se encontra na raiz do projeto)

        BROWSER=none
        REACT_APP_API_URL=https://5d6da1df777f670014036125.mockapi.io

3.  Execute o projeto com o seguinte comando:

        yarn start

Não esqueça de se certificar que as extensões do Editor Config, ESLint e Prettier estão instaladas no seu Editor de Texto e ativadas no projeto.

<hr />

## 🔎 Testes

Neste projetos, os testes são feitos utilizando o Cypress. O Cypress é uma ferramenta de testes end to end (e2e), e neste caso, está sendo utilizado para testar a integração no Front-End.

Comandos para testes:

- Para rodar os testes pela visão do browser, insira o seguinte comando:

       yarn run cy:open

- Para rodar os testes pelo terminal, insira o seguinte comando:

       yarn run cy:run

- Para iniciar o servidor e logo em seguida rodar os testes, insira o seguinte comando:

       yarn test

OBS: Para os comandos iniciados com _cy_ (ex: `yarn run cy:open`), o projeto deve estar rodando na sua máquina (com o comando `yarn start`). O comando `yarn test` inicia o projeto automaticamente e testa em seguida.

<hr />

## 📋 Especificações

- React 17.0.2
- TypeScript 4.1.2
- Node 14.17.2
- Yarn 1.22.5
- Cypress 7.7.0

<hr />

## ⚙️ Configurações

- [ESLint](https://eslint.org/)
- [ESLint Config Airbnb](https://github.com/airbnb/javascript)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)
- [Git Commit Msg Linter](https://github.com/legend80s/commit-msg-linter#readme)

<hr />

## 📝︎ Extensões recomendadas para o VSCode

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

<hr />

## 🪧 Texto Inicial

Enunciado
Desenvolver uma loja simples em React, com um catálogo de produtos e um carrinho de compras. O usuário deve poder adicionar/remover produtos do catálogo no carrinho de compras.

Especificações
Tela de produtos 🎁
Será responsável por apresentar todos os produtos disponíveis para o usuário em uma lista. Será necessário que você estabeleça comunicação com o back-end, para obter informações relativas a cada um dos produtos.

Requisição HTTP para pegar a lista de produtos: GET https://5d6da1df777f670014036125.mockapi.io/api/v1/product

Tela do carrinho de compras 🛒
Responsável por guardar os itens e quantidades adicionadas pelo usuário. É desejável que o usuário possa aumentar ou diminuir a quantidade de um produto do carrinho, além de remover por completo.

Extra: Testes automatizados ✅
Criação de suite de testes automatizados para o repositório.
Sobre a entrega
Estimativa de tempo para entrega: O primeiro ponto de entrega deste projeto é o próprio tempo de estimativa para a entrega final do projeto.
Apresentação de 30 minutos (3ª etapa do processo): Durante a apresentação, é importante demonstrar o funcionamento da aplicação, assim como trazer as motivações para cada escolha do projeto. Demonstrações de trechos importantes do código também são valiosas!
Cópia do repositório: O repositório será entregue para avaliação da estrutura do projeto. Por isso, quaisquer pontos de documentação/comentários em código são bem vindos.
Boa sorte!
