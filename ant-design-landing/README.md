## Documentação

## Clonagem do Repositório
- Fizemos a clonagem do repositório com o comando git clone https://github.com/ant-design/ant-design-landing.git

- O local: c:\Users\thoma\Desktop\meu-app\ant-design-landing

## Análise da Estrutura do Projeto

- feito: npm start 
  - inicia o servidor de desenvolvimento com problemas no Windows, 
- feito: npm run start-index 
  - inicia apenas o site principal, 
- feito: npm run start-edit 
  - inicia o editor, 
- feito: npm run start-templates 
  - inicia os templates e 
- feito: npm run build 
  - faz o build para produção

## Instalação de Dependências
- primeira tentativa com npm install
- Erro de conflito apos o install
- Aplicamos o npm install --legacy-peer-deps para resolver
- A instalação foi concluída com sucesso
- Também encontramos vários warnings de pacotes deprecated, comum em projetos mais antigos

## Execução do Projeto
- Fizemos a primeira tentativa com npm start
- Encontramos o erro 'rm' não é reconhecido como um comando interno
- Aplicamos a solução executando diretamente npm run start-index, pulando o pré-processamento
- O servidor foi iniciado na URL http://localhost:7111/

## Visualização no Navegador
- Acessamos a URL http://localhost:7111/
- Usamos o proxy http://127.0.0.1:60776
- O site do Ant Design Landing apareceu no navegador