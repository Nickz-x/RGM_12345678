
PROCESSO DE DESENVOLVIMENTO E TESTES DA API DE LIVROS

1. Criação do Diretório e Inicialização do NPM:
   $ mkdir desafio-nodejs-livros
   $ cd desafio-nodejs-livros
   $ npm init -y

2. Implementação do Servidor (index.js):
   - Configurado servidor HTTP na porta 3000.
   - Definidas rotas para /books com métodos GET, POST, PUT e DELETE.

3. Implementação da Lógica (booksController.js):
   - Funções para persistência de dados em formato JSON usando módulo 'fs'.

4. Testes Realizados:

   A) POST - Adicionar Livro:
      Comando: curl -X POST http://localhost:3000/books -H "Content-Type: application/json" -d '{"name": "Livro Exemplo"}'
      Resultado: {"id": 1, "name": "Livro Exemplo"}

   B) GET - Listar Livros:
      Comando: curl http://localhost:3000/books
      Resultado: [{"id": 1, "name": "Livro Exemplo"}]

   C) PUT - Atualizar Livro:
      Comando: curl -X PUT http://localhost:3000/books/1 -H "Content-Type: application/json" -d '{"name": "Livro Atualizado"}'
      Resultado: {"id": 1, "name": "Livro Atualizado"}

   D) DELETE - Deletar Livro:
      Comando: curl -X DELETE http://localhost:3000/books/1
      Resultado: "Livro deletado com sucesso"
