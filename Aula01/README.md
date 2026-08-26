# Introdução ao Versionamento e Deploy

- criar interfaces digitais funcionais e atraentes.
- Controle de Versões é a ideia de registrar as alterações em arquivos ao longo do tempo, permite:
-- Recuperar versões específicas;
-- Colaboração em equipe;
-- Ramificações (branches) para desenvolvimento paralelo;

- Conceito, importância e benefícios no desenvolvimento web.
- Deploy e métodos de implantação e ambientes de desenvolvimento;
- Sistemas de Controle de Versão (GitHub, GitLab e Bitbucket);
- Automação e Boas Práticas – Integração Contínua (CI/CD), ferramentas para deploy automatizado e monitoramento de aplicações.

# Automação de Pipelines

- Um pipeline representa a sequência automatizada de etapas executadas desde o desenvolvimento até a disponibilização da aplicação.
- Automatiza processos repetitivos como compilação, testes, análise de código e deploy.
- Reduz erros humanos e aumenta a confiabilidade das entregas.
- Permite feedback rápido para a equipe de desenvolvimento.

# Integração Contínua

- Prática de integrar frequentemente as alterações realizadas pelos desenvolvedores.
- Cada alteração dispara automaticamente processos de compilação e testes.
- Identifica problemas logo no início do desenvolvimento.
- Facilita o trabalho colaborativo e reduz conflitos entre versões.

# Qualidade de Software

- Qualidade deve ser validada durante todo o desenvolvimento.
- Ferramentas automatizadas analisam:
-- Padronização do código;
-- Segurança;
-- Complexidade;
-- Cobertura de testes;
-- Vulnerabilidades.
- Quanto antes um problema é identificado, menor é seu custo de correção.

# Testes Automatizados

- Garantem que novas alterações não comprometem funcionalidades existentes.
- Principais categorias:
-- Testes Unitários;
-- Testes de Integração;
-- Testes Funcionais;
-- Testes End-to-End.
- São executados automaticamente durante o pipeline de CI/CD.

# Entrega Contínua

- Após a aprovação dos testes, o sistema permanece pronto para publicação.
- O deploy ocorre de maneira rápida, segura e padronizada.
- Benefícios:
-- Redução do tempo de entrega;
-- Maior estabilidade das aplicações;
-- Menor risco durante implantações.

# Containers e Estratégias de Implantação

- Containers empacotam aplicação e dependências em um ambiente padronizado. Garantem que o software funcione da mesma forma em desenvolvimento, testes e produção.
- Estratégias comuns de implantação:
-- Rolling Update;
-- Blue-Green Deployment;
-- Canary Release.
- Essas estratégias reduzem indisponibilidade e facilitam rollback.
