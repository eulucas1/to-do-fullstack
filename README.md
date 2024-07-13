# Projeto TO-DO Full-Stack - React, TypeScript, Node.js, Sequelize e SQLite

## Configuração e Execução

- Faça o download do zip.

### Frontend:
- No terminal do VSCode digite `cd frontend` redirecionado para o código Front-end.
- Continue no mesmo terminal e digite `npm install` ou apenas `npm i`.
- Digite `npm start` e então a aplicação será aberta e só terá acesso às suas tarefas seguindo o próximo passo:

### Backend:
- Abra um novo terminal do VSCode digite `cd backend` redirecionado para o código Back-end.
- Continue no mesmo terminal e digite `npm install` ou apenas `npm i`.
- Agora digite `npm run dev` e no terminal vai mostrar em qual porta e se o servidor já está funcionando.

Feito esses processos, será capaz de realizar operações como adição, edição, remoção e marcação de tarefas como concluídas através de requisições.

### Escolha das Tecnologias

Neste projeto de gerenciador de tarefas, escolhi usar TypeScript, Node.js, Express e Sequelize. Aqui está um resumo do porquê de cada escolha, explicado de forma leve e clara.

#### TypeScript

1. **Tipagem Estática**: TypeScript é uma versão turbinada do JavaScript que adiciona tipos estáticos. Isso significa que posso definir tipos para variáveis e funções, ajudando a pegar erros antes de rodar o código. Isso deixa o código mais seguro e confiável.

2. **Código Legível e Fácil Manutenão**: Com TypeScript, o código fica mais organizado e fácil de entender. Os tipos e interfaces documentam automaticamente a estrutura do código, facilitando a vida, principalmente em projetos grandes ou com várias pessoas.

#### Node.js e Express

1. **Desempenho e Escalabilidade**:
   - **Node.js**: Usa o motor V8 do Google Chrome, então é super rápido e eficiente. O modelo de I/O não bloqueante (non-blocking) permite lidar com muitas conexões ao mesmo tempo, sem perder o desempenho.
   - **Express**: É um framework leve e flexível para Node.js, perfeito para construir APIs e aplicações web rápidas e de alto desempenho.

2. **Facilidade de Uso e Desenvolvimento Rápido**:
   - **Express**: Simplifica o desenvolvimento com uma estrutura simples e utilitários para lidar com HTTP, rotas, middleware e mais. Isso acelera o desenvolvimento.
   - **Node.js**: Permite escrever tanto o frontend quanto o backend em JavaScript, o que facilita muito o aprendizado e a troca de código entre as partes do aplicativo.

#### ORM Sequelize

1. **Abstração de Banco de Dados**: Sequelize me permite trabalhar com modelos de dados em vez de escrever SQL diretamente. Isso torna o desenvolvimento mais intuitivo e reduz erros.

2. **Suporte a Vários Bancos de Dados**: Sequelize funciona com vários bancos de dados relacionais, como PostgreSQL, MySQL, MariaDB, SQLite e MSSQL. Isso me dá flexibilidade na escolha do banco de dados.

3. **Migrations e Seeders**: Sequelize facilita a evolução do esquema do banco de dados com migrações e permite a criação de dados iniciais com seeders.

4. **Validações e Associação de Modelos**: Ajuda a definir validações e relacionamentos entre os modelos, garantindo a integridade dos dados.

#### SQLite

1. **Desenvolvimento Local e Testes**: SQLite é ótimo para desenvolvimento local e testes porque é fácil de usar, leve e não precisa de configuração complexa. Permite trabalhar rapidamente sem a necessidade de configurar um servidor de banco de dados.

2. **Aplicações Leves e Individuais**: Para pequenas aplicações ou projetos que não precisam de grandes volumes de dados ou múltiplos acessos simultâneos, SQLite é suficiente, especialmente se você precisa de um banco de dados embutido que não requer administração complexa.
