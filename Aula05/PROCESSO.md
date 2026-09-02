# Aula 05 - Atividade de Pipeline CI/CD

## Projeto utilizado

A atividade foi realizada sobre o projeto oficial do professor:

<https://github.com/deivisontakatu/projeto-pipelines-devops>

O repositorio foi clonado dentro desta pasta em `Aula05/projeto-pipelines-devops`.

## O que o projeto ja possuia

O projeto e uma aplicacao web de geracao de frases aleatorias, com HTML, CSS e JavaScript. Ele ja possuia:

- Testes automatizados com Jest.
- Analise de qualidade com ESLint.
- Verificacao de vulnerabilidades com `npm audit`.
- Workflow com etapas encadeadas de build, teste, qualidade, seguranca, package, deploy, smoke test, performance, approval, release, monitoring e rollback.

## Implementacao realizada

Foi atualizado `.github/workflows/pipeline.yml` para publicar o pacote gerado na etapa `package`. O artefato recebe um nome com o SHA do commit, permitindo identificar exatamente qual versao foi produzida.

A pipeline agora utiliza estas tres Actions do GitHub Marketplace:

1. `actions/checkout@v4`: baixa o codigo do repositorio em cada job.
2. `actions/setup-node@v4`: configura o Node.js 22 para executar os comandos do projeto.
3. `actions/upload-artifact@v4`: publica a pasta `dist/` como artefato versionado no final da etapa de package.

## Fluxo da pipeline

```text
push ou pull request na main
        |
        v
Build -> Test -> Quality -> Security -> Package -> Deploy DEV
                                                    |
                                                    v
Smoke Test -> Performance -> Approval -> Release -> Monitoring
```

Cada job usa `needs` para depender da etapa anterior. Assim, quando uma etapa falha, as etapas seguintes nao avancam.

## Comandos de validacao executados

Todos os comandos foram executados dentro de `Aula05/projeto-pipelines-devops`:

```bash
npm ci
npm test -- --runInBand
npm run lint
npm audit --audit-level=high
```

Resultados:

- Jest: 1 suite aprovada e 2 testes aprovados.
- ESLint: concluido sem erros.
- npm audit: nenhuma vulnerabilidade encontrada.

## Execucao no GitHub

Para concluir a demonstracao hospedada, e necessario publicar o conteudo clonado em um repositorio GitHub sob uma conta com permissao de escrita. Depois:

1. Envie um commit para a branch `main` ou abra um Pull Request para `main`.
2. Abra a aba **Actions** do repositorio.
3. Acompanhe os jobs na ordem definida pelos `needs`.
4. No job `Package`, confira o artefato com nome iniciado por `gerador-de-frases-`.

Nenhum segredo e necessario para executar a pipeline atual, pois deploy, release e monitoramento sao simulados por comandos `echo`.
