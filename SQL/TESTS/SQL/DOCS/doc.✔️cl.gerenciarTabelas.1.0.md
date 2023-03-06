
##  Documentação da classe "GerenciadorTabelas":

### Parte 1 - Construtor:

*   Constructor(db): o construtor recebe como parâmetro um objeto que representa o banco de dados que será utilizado pelos métodos da classe. Esse objeto é armazenado na propriedade 'db' da instância criada.

### Parte 2 - Métodos:

*   async criarTabela(nomeTabela, colunas): cria uma tabela no banco de dados com o nome e colunas especificados. Recebe como parâmetros uma string contendo o nome da tabela e um array contendo as definições das colunas. Retorna uma promise que, se resolvida, retorna uma mensagem indicando que a tabela foi criada com sucesso. Caso ocorra algum erro, a promise é rejeitada com uma mensagem de erro.

*   async criarTabelas(tabelas): cria várias tabelas no banco de dados a partir de um array de objetos contendo o nome e colunas de cada tabela. Recebe como parâmetro um array contendo objetos com as definições de cada tabela. Retorna uma promise que, se resolvida, retorna um array contendo as mensagens de sucesso de cada tabela criada. Caso ocorra algum erro, a promise é rejeitada com uma mensagem de erro.

*   async excluirTabela(nomeTabela): exclui uma tabela do banco de dados com o nome especificado. Recebe como parâmetro uma string contendo o nome da tabela. Retorna uma promise que, se resolvida, retorna uma mensagem indicando que a tabela foi excluída com sucesso. Caso ocorra algum erro, a promise é rejeitada com uma mensagem de erro.

*   async excluirTabelas(nomesTabelas): exclui várias tabelas do banco de dados a partir de um array contendo os nomes de cada tabela. Recebe como parâmetro um array contendo os nomes das tabelas a serem excluídas. Retorna uma promise que, se resolvida, retorna um array contendo as mensagens de sucesso de cada tabela excluída. Caso ocorra algum erro, a promise é rejeitada com uma mensagem de erro.


> 📍 O que a "GerenciadorTabelas" pode realizar?

 - ✔️  A classe "GerenciadorTabelas" é responsável por gerenciar tabelas em um banco de dados local SQLite.
 - ✔️ Com ela, é possível criar e excluir tabelas individualmente ou em lote, através dos métodos
   - `criarTabela`
   - `criarTabelas`
   - `excluirTabela`
   - `excluirTabelas`


> 📍 Exemplo de como instanciar a class "GerenciadorTabelas"

Para instanciar a classe "GerenciadorTabelas", é necessário passar um objeto que representa o banco de dados SQLite como parâmetro do construtor. Por exemplo:

javascript

```javascript
const db = window.openDatabase("mydb", "1.0", "My Database", 1024 * 1024);
const gerenciador = new GerenciadorTabelas(db);
```

Nesse exemplo, o objeto `db` representa o banco de dados SQLite, criado com o método `window.openDatabase()`, e a classe "GerenciadorTabelas" é instanciada com esse objeto como parâmetro do construtor. A partir daí, é possível chamar os métodos da classe para criar e excluir tabelas no banco de dados.

> como instanciar para criar uma ou mais tabelas

Para criar uma tabela, é necessário chamar o método `criarTabela` do objeto `GerenciadorTabelas`. O método recebe como parâmetros o nome da tabela a ser criada e um array de strings que representa as colunas da tabela, seguindo o formato "nome\_da\_coluna tipo\_de\_dado". Por exemplo, para criar uma tabela chamada "clientes" com as colunas "id INTEGER", "nome TEXT" e "email TEXT", o código seria:

javascript

```javascript
const tabela = {
    nome: "clientes",
    colunas: ["id INTEGER", "nome TEXT", "email TEXT"]
};

const resultado = await gerenciador.criarTabela(tabela.nome, tabela.colunas);
console.log(resultado);
```

Para criar várias tabelas de uma vez, é possível chamar o método `criarTabelas` passando um array de objetos que representam as tabelas a serem criadas, seguindo o mesmo formato do objeto `tabela` do exemplo anterior. Por exemplo, para criar as tabelas "clientes" e "produtos", o código seria:

javascript

```javascript
const tabelas = [
    {
        nome: "clientes",
        colunas: ["id INTEGER", "nome TEXT", "email TEXT"]
    },
    {
        nome: "produtos",
        colunas: ["id INTEGER", "nome TEXT", "preco REAL"]
    }
];

const resultados = await gerenciador.criarTabelas(tabelas);
console.log(resultados);
```

No exemplo acima, o método `criarTabelas` retorna um array de strings com o resultado de cada criação de tabela, na mesma ordem em que as tabelas foram passadas como parâmetro.

> como instanciara para excluir tabelas.

Para instanciar a classe `GerenciadorTabelas` e excluir uma ou mais tabelas, é necessário primeiro obter uma referência ao objeto do banco de dados. Em seguida, a classe pode ser instanciada passando essa referência como argumento do construtor:

javascript

```javascript
const db = window.openDatabase("mydb", "1.0", "My Database", 1024 * 1024);
const gerenciador = new GerenciadorTabelas(db);
```

Para excluir uma tabela, chame o método `excluirTabela(nomeTabela)` passando o nome da tabela como argumento:

javascript

```javascript
gerenciador.excluirTabela("nomeDaTabela")
  .then(resultado => {
    console.log(resultado);
  })
  .catch(erro => {
    console.error(erro);
  });
```

Para excluir várias tabelas de uma vez, chame o método `excluirTabelas(nomesTabelas)` passando um array contendo os nomes das tabelas a serem excluídas:

javascript

```javascript
gerenciador.excluirTabelas(["tabela1", "tabela2", "tabela3"])
  .then(resultados => {
    console.log(resultados);
  })
  .catch(erro => {
    console.error(erro);
  });
```

Lembre-se de que o método `excluirTabela()` só pode excluir uma tabela por vez, enquanto o método `excluirTabelas()` pode excluir várias tabelas de uma só vez.

> ❗❓ O que pode ser melhorado na classs "GerenciadorTabelas"?

Existem algumas melhorias que poderiam ser feitas na classe "GerenciadorTabelas" para torná-la mais robusta e escalável. Algumas sugestões incluem:

1.  Validação mais rigorosa de entrada: Atualmente, a classe realiza algumas validações básicas de entrada para garantir que os nomes das tabelas e as definições de colunas sejam fornecidos. No entanto, pode ser útil adicionar validações mais detalhadas para garantir que as definições de colunas sejam válidas, que as tabelas não sejam duplicadas e que as operações de exclusão de tabela não excluam tabelas que ainda possam estar em uso.

2.  ***Suporte a chaves primárias e estrangeiras: A classe atualmente não suporta a definição de chaves primárias e estrangeiras, o que pode limitar sua utilidade em casos mais avançados. Adicionar suporte para esses recursos permitiria que os usuários criassem tabelas mais complexas com relações entre elas.***

3.  Tratamento de erros mais sofisticado: A classe atualmente usa erros simples para lidar com casos em que a entrada é inválida ou a operação falha. Adicionar um tratamento de erros mais sofisticado permitiria que os usuários obtivessem informações mais detalhadas sobre o que deu errado e tomar ações apropriadas para corrigir o problema.

4.  Métodos para atualizar tabelas: Atualmente, a classe só permite criar e excluir tabelas. Adicionar métodos para atualizar tabelas existentes, adicionando ou removendo colunas, alterando tipos de dados e outros recursos, permitiria que os usuários façam modificações mais avançadas nas tabelas.


Essas são apenas algumas sugestões para melhorar a classe "GerenciadorTabelas". Em geral, a melhoria contínua é uma parte importante do desenvolvimento de software e há sempre oportunidades para tornar o código mais robusto e eficiente.


[VER MAIS TARDE -CONCEITO IMPORTANTE RELACIONADOS](https://github.com/H7-Dev/D-004---CRUD---Web-SQL/blob/master/SQL/TESTS/SQL/DOCS/%F0%9F%9A%A7%E2%9B%94%20%E2%9C%94%EF%B8%8Fcl.gerenciarTabelas.1.0.md)
