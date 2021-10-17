# Rockeseat Trilha Node - Criando API com Node.js

## Commands

- Terminal

```bash
yarn add express
yarn add typescript @types/express -D
yarn add ts-node-dev -D
yarn tsc --init
yarn add eslint -D
```

```bash
yarn add eslint -D

# depois de responder conforme tutorial

yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest @typescript-eslint/parser@latest

yarn add -D eslint-plugin-import-helpers eslint-import-resolver-typescript

yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

- package.json

```json
  "scripts": {
    "dev": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts"
  },
```

## Configurando ESLint

[Click aqui](configurando_eslint.md) para visualizar a configuração do ESLint deste projeto.
