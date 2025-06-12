# Documentação do Projeto SSX

## 📋 Visão Geral

O TestsCalendrs é uma aplicação web desenvolvida em React que implementa um quadro Kanban para gerenciamento de disciplinas e provas. A aplicação permite visualizar, organizar e gerenciar disciplinas através de um sistema de arrastar e soltar (drag and drop).

## 🚀 Tecnologias Utilizadas

- React
- Vite
- @dnd-kit/core (para funcionalidade de drag and drop)
- CSS Modules
- ESLint (para padronização de código)

## 📁 Estrutura do Projeto

```
TestsCalendrs/
├── src/
│   ├── components/
│   │   ├── Kaban/
│   │   │   ├── KabanSquare.jsx
│   │   │   └── KabanSquare.module.css
│   │   ├── Column/
│   │   ├── TableProvas/
│   │   └── DownloadButton/
│   └── constats/
│       └── COLUMNS.js
├── public/
├── package.json
└── vite.config.js
```

## 🎯 Funcionalidades Principais

### 1. Quadro Kanban

- Visualização de disciplinas em colunas
- Sistema de arrastar e soltar para mover disciplinas entre colunas
- Atualização automática do estado ao mover itens

### 2. Tabela de Provas

- Visualização em formato tabular
- Exportação para PDF
- Atualização em tempo real

### 3. Download de Dados

- Exportação da tabela em formato PDF
- Interface intuitiva para download

## 💻 Componentes Principais

### KabanSquare

Componente principal que gerencia o quadro Kanban.

- Gerencia o estado das disciplinas
- Implementa a lógica de drag and drop
- Coordena a comunicação entre componentes

### Column

Componente que representa uma coluna individual do Kanban.

- Exibe as disciplinas pertencentes à coluna
- Gerencia o estado visual da coluna

### TabelaProvas

Componente responsável pela exibição tabular das provas.

- Renderiza os dados em formato de tabela
- Permite exportação para PDF

## 🔧 Configuração do Ambiente

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório

```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências

```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

## 📝 Convenções de Código

- Utilização de ESLint para padronização
- Componentes em PascalCase
- Arquivos de estilo com sufixo .module.css
- Comentários em português

## 🔄 Fluxo de Dados

1. O estado principal é gerenciado no componente KabanSquare
2. As disciplinas são movidas através do sistema de drag and drop
3. A tabela é atualizada automaticamente com as mudanças
4. O download reflete o estado atual da tabela

## 🛠️ Manutenção e Desenvolvimento

### Adicionando Novas Funcionalidades

1. Crie novos componentes na pasta `src/components`
2. Atualize a documentação conforme necessário
3. Siga as convenções de código estabelecidas

### Resolução de Problemas

- Verifique os logs do console para erros
- Consulte a documentação dos componentes
- Mantenha as dependências atualizadas

## 📚 Recursos Adicionais

- [Documentação do React](https://reactjs.org/docs/getting-started.html)
- [Documentação do @dnd-kit](https://dndkit.com/)
- [Documentação do Vite](https://vitejs.dev/guide/)

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
