# 📌 Automation Demo Site
- Descrição: Site para testar automação para fim de estudo
- Documentação: [Automation Testing](https://demo.automationtesting.in/Index.html)
  
<br>

## 💾 Sistema
Antes de começar, certifique-se de que os seguintes sistemas estejam instalados em seu computador.
- git (versão 2.48.1 no momento do script)
- Node.js (versão 20.8.1 no momento do script)
- npm (versão 8.5.1 no momento do script)
- Visual Studio Code ou alguma outra IDE de sua preferência

> Obs. 1: Recomendo usar as mesmas versões ou versões mais recentes de suporte de longo prazo (LTS) dos sistemas listados acima.  
>  <a href="https://nodejs.org/pt"><img src="https://img.shields.io/npm/v/npm.svg?logo=nodedotjs"/></a>  
> Obs. 2: Ao instalar o Node.js, o npm é instalado junto.   
> Obs. 3: Para verificar as versões do git, Node.js e npm instaladas em seu computador, execute o comando `git --version && node --version && npm --version` em seu terminal de linha de comando.  

<br>

## 💻 Instalando
1. Na raiz do projeto, execute o comando `npm install cypress@13.12.0 --save-dev` (ou `npm i cypress@13.12.0 -D` para a versão curta).    
2. Execute o comando `npx cypress open` para abrir o Cypress pela primeira vez e deixe-o guiá-lo na criação de uma suite de testes de ponta a ponta (E2E).    
3. Por fim, com a Cypress App aberta, crie um arquivo com o nome desejado com a extensão .cy.js e feche a Cypress App.    

> Obs.: Quando iniciado pela primeira vez, o Cypress cria automaticamente o arquivo `cypress.config.js` e o diretório `cypress/`, com seus subdiretórios `e2e/`, `fixtures/` e `support/`, com seus respectivos arquivos.

<br>

## ⚙️ Configuração Extra
- Atualize o arquivo `cypress.config.js` da seguinte maneira.

```javascript
  const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {},
})
```

<br>  

## 📊 Resultados e Demonstrações

- ...

  <br>

## 🛠 Tecnologias Utilizadas
- Linguagem: JavaScript
- Ferramentas: Cypress
- Tipos de Teste: Teste Automatizado

<br>

## 📂 Estrutura do Projeto
- README.md = Arquivo de informação sobre o projeto de teste

<br>

## 👩‍💻 Contatos
 
<div style="display: inline">
<a href="https://www.linkedin.com/in/in%C3%AAs-m-065b8681/">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>     
