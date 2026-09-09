# Análise Completa de Fluxos de Trabalho e Mapeamento de Ações do GitHub Marketplace

Este documento detalha cada um dos fluxos de trabalho encontrados na aba Actions de cada um dos 3 projetos do GitHub. Vamos explicar a função de cada pipeline e demonstrar como 3 Ações do GitHub Marketplace se interligam para satisfazer as exigências estabelecidas para a automação.

---

## Estrutura do Projeto

> Diretrizes para Automação: Três Ações disponíveis no GitHub Marketplace foram escolhidas para a construção de uma pipeline automatizada. Cada Ação será aplicada em uma etapa distinta do processo. O fluxo de trabalho foi configurado no GitHub Actions, rodando a pipeline e verificando o funcionamento de cada parte, documentando as Ações utilizadas, suas funções específicas e como elas contribuíram para o processo de CI/CD.

---

## Projeto 1: [Next. js Boilerplate]https://github.com/ixartz/Next-js-Boilerplate

- CI `. github/workflows/build. yml`: "Roda quando existe `push` ou `pull_request`. Instala as dependências, faz o linting, roda os testes com Jest e executa o `npm run build`."

- Copilot coding agent `. github/workflows/copilot-setup-step. yml`: "Prepara o ambiente para o Copilot trabalhar no repositório e executar tarefas de desenvolvimento."

- Crowdin Action `. github/workflows/crowdin. yml`: "Faz a sincronização das traduções do projeto com o Crowdin e cria Pull Requests com as traduções atualizadas."

- Dependabot Updates `. github/workflows/dependabot. yml` / de-sistema: "Verifica as dependências do projeto e cria Pull Requests quando encontra pacotes desatualizados ou com problemas de segurança."

- Release `. github/workflows/release. yml`: "Cuida das releases do projeto. Cria uma nova versão, gera o changelog e publica os pacotes."

---

## Projeto 2: [FastAPI Starter Kit]https://github.com/fastapi/fastapi

- Check version `. github/workflows/check-version. yml`: "Verifica se a versão do projeto foi alterada corretamente antes de uma nova publicação."

- ci `. github/workflows/ci. - `test` `.github/workflows/test.yml`: Roda os testes em diferentes versões do Python e sistemas operacionais. Também verifica os endpoints, a cobertura e o build."

- CodeQL `.github/workflows/codeql.yml`: Executa uma análise do código para encontrar problemas e vulnerabilidades de segurança.

- CodeQL Security Analysis `.github/workflows/codeql-analysis.yml`: Faz outra análise de segurança no código, procurando possíveis ataques e problemas com dados.

- Dependabot Updates `.github/workflows/dependabot.yml`: Verifica as dependências do Python e abre Pull Requests para atualizar pacotes com problemas ou desatualizados.

- Dependency Graph `.github/workflows/dependency-graph.yml`: Mostra as dependências usadas pelo projeto no gráfico de dependências do GitHub.

- Release changelog `.github/workflows/release-changelog.yml`: Cria e atualiza o changelog usando os commits e Pull Requests da nova release.

- Semgrep AppSec Analysis `.github/workflows/semgrep-appsec.yml`: Analisa o código procurando erros, dados expostos e problemas de segurança.

- Semgrep CE Analysis `.github/workflows/semgrep-ce.yml`: Faz uma análise do código usando o Semgrep Community Edition.

- Snyk Code Analysis `.github/workflows/snyk-code.yml`: Usa o Snyk para analisar o código e as dependências em busca de vulnerabilidades.

---

## Projeto 3 Vite

- Preparar Release `. github/workflows/prepare-release. yml`: Prepara os arquivos e a versão do projeto para uma nova release.

- . github/workflows/copilot-setup-steps. yml: Configura o ambiente usado pelo GitHub Copilot no projeto.

- Bot `. github/workflows/bot. yml`: Executa bots para responder e organizar issues e pull requests.

- CI `. github/workflows/ci. yml`: Executa a compilação, os testes e as checagens de tipos do TypeScript.

- Claude `. github/workflows/claude. yml`: Usa o Claude para ajudar em revisões de código, respostas e análise de issues.

- CodeQL `. github/workflows/codeql. yml`: Analisa o código para encontrar vulnerabilidades e problemas de segurança.

- Codespell `. github/workflows/codespell. yml`: Procura erros de digitação no código, documentação e comentários.

- Copilot `. github/workflows/copilot. yml`: Gerencia as interações do GitHub Copilot com o projeto.

- Copilot cloud agent `. github/workflows/copilot-cloud-agent. yml`: Prepara o ambiente para os agentes do Copilot trabalharem no código.

- Copilot code review `. github/workflows/copilot-code-review. yml`: Faz revisões automáticas de código nos pull requests e sugere melhorias.

- Dependabot Updates `. github/workflows/dependabot. yml`: Verifica as dependências e abre pull requests para atualizar bibliotecas com problemas de segurança.

- ecosystem-ci trigger `. github/workflows/ecosystem-ci-trigger. yml`: Testa bibliotecas e projetos que dependem do Vite para verificar a compatibilidade entre versões.

- Issue Close Require `. github/workflows/issue-close-require. yml`: Verifica se os requisitos necessários foram preenchidos antes de fechar uma issue.

- Issue Labeled `. github/workflows/issue-labeled. yml`: Coloca labels nas issues de acordo com categorias ou palavras encontradas no texto.

- Fechamento Automático de Issues `.github/workflows/lock-closed-issues.yml`: Bloqueia comentários em issues antigas que já foram fechadas.

- Preview de Releases `.github/workflows/preview-release.yml`: Gera versões de teste das releases antes da publicação final.

- Publicação de Pacotes `.github/workflows/publish-package.yml`: Publica os pacotes aprovados nos gerenciadores de dependências, como npm.

- Checagem de Modelo de Pull Request `.github/workflows/pr-template-check.yml`: Verifica se o template do pull request foi preenchido corretamente.

- Pull Request Semântico `.github/workflows/semantic-pr.yml`: Verifica se o título do pull request segue o padrão Conventional Commits, como `feat:` ou `fix:`.

- Semgrep `.github/workflows/semgrep.yml`: Analisa o código procurando erros e problemas de segurança.

- Zizmor `.github/workflows/zizmor.yml`: Analisa os arquivos YAML dos workflows procurando problemas de segurança.

---

## OBRIGATÓRIO mapeamento: As 3 Actions do GitHub Marketplace Que foram Usadas

Para que a pipeline automatizada de CI/CD seja construída, as seguintes 3 Actions do GitHub Marketplace foram incorporadas:

### 1. `actions/checkout` Versão v4

Fase: Captação e Clonagem do Código Início da Pipeline

Objetivo: Faz o clone do repositório para o runner do GitHub Actions.

O que agrega à automação: Deixa o código do projeto disponível para os próximos passos da pipeline.

### 2. `actions/setup-node` Versão v4

Fase: Preparo e Configuração do Ambiente de Execução

Objetivo: Configura o Node.js v20 e o cache do `npm`.

O que agrega à automação: Deixa a versão do Node.js definida e evita baixar as dependências toda vez.

### 3. `JamesIves/github-pages-deploy-action` Versão v4

Etapa do processo: Publicação e Entrega Contínua Deploy ou CD.

Propósito principal: Pega os arquivos da pasta `dist` ou `build` e atualiza a branch `gh-pages`.

O que ajuda a automatizar: Faz o deploy automaticamente, sem precisar publicar o site manualmente.