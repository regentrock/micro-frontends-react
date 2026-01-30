# Sistema de Pedidos – Micro-Frontends

Projeto simples de micro-frontends usando **React**, **Vite** e **Module Federation**.
Nas imagens presentes na raiz do projeto, há uma demonstração do projeto rodando funcionalmente.

O sistema possui três aplicações:

- **Container**: aplicação principal
- **Cardápio**: micro-frontend com lista de pratos
- **Pedido**: micro-frontend com itens adicionados

## Comunicação
A comunicação entre **Cardápio** e **Pedido** é feita por eventos globais do navegador (`window.dispatchEvent` e `window.addEventListener`).

## Como Rodar o Projeto

É necessário **um terminal para cada aplicação**.

### Cardápio
```bash
cd cardapio
npm install
npm run build
npm run preview
```
### Pedido
```bash
cd pedido
npm install
npm run build
npm run preview
```
### Container
```bash
cd container
npm install
npm run dev
```
Acesse o container no navegador para visualizar o sistema funcionando.
