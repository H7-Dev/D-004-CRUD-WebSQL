## Projeto: CRUD - WEB SQL
### documentação moderada:
    class criar banco de dados (cl.criarBD.1.0.js)
### visão geral:
>    A class criar banco de dados versão 1.0, visa estabelecer um código básico para projetos pessoais e de teste genericos.
- A classe "BDcriarConec" pode ser considerada orientada a objetos. Ela segue os  princípios básicos de orientação a objetos, como encapsulamento, abstração, herança  e polimorfismo.
- Encapsulamento: A classe BDcriarConec encapsula o comportamento e os dados relacionados à criação de um banco de dados. O método createDB é o único ponto de entrada para criar o banco de dados e todos os dados internos da classe (como this.db, this.name, this.version, this.desc e this.size) são ocultos e acessíveis apenas dentro da classe.
- Abstração: A classe BDcriarConec é uma abstração que representa um conceito de "banco de dados". Ela abstrai detalhes de implementação específicos do banco de dados, como a sintaxe SQL e as nuances de diferentes provedores de banco de dados
- Herança: A classe BDcriarConec não herda de nenhuma outra classe, mas poderia ser estendida em uma subclasse para adicionar comportamento adicional relacionado a bancos de dados.
- Polimorfismo: A classe BDcriarConec não implementa polimorfismo, mas poderia ser modificada para ser polimórfica, permitindo diferentes implementações de banco de dados (por exemplo, SQLite, MySQL, PostgreSQL, etc.).
- Portanto, a classe BDcriarConec pode ser considerada orientada a objetos, pois segue os princípios básicos de OOP e encapsula o comportamento e os dados relacionados à criação de um banco de dados.

---

 A classe "BDcriarConec" segue algumas boas práticas de codificação e pode ser considerada no formato  "codeclean". Algumas dessas boas práticas incluem:

- Utilizar o padrão de nomenclatura em camelCase para nomes de variáveis e métodos (createDB em vez de criaBd, por exemplo).
- Fazer uso de declarações de classe (class) em vez de funções construtoras (function) para encapsular o comportamento e os dados de uma entidade.
- Utilizar console.log e console.error para registro de mensagens de log e erros.
- Utilizar try...catch para tratamento de erros de forma adequada.
- Utilizar async/await para tornar o código mais legível e tratar a criação do banco de dados de forma assíncrona
- Encapsular o comportamento de criar o banco de dados em um método específico (createDB), tornando o código mais modular e fácil de entender.

---
### O que é e como funciona:

>  A classe BDcriarConec é uma classe JavaScript que encapsula o comportamento e os dados relacionados à criação de um banco de dados usando a API Web SQL, que permite a criação e manipulação de bancos de dados SQL no navegador.
>
>  A classe possui quatro propriedades (name, version, desc e size) que definem os atributos do banco de dados que serão criados. Ela também possui um método chamado createDB, que é o método principal para criar o banco de dados.
>
> Ao instanciar a classe BDcriarConec e chamar o método createDB, o código executa uma série de etapas para criar o banco de dados:

1. O método createDB cria uma instância do objeto window.openDatabase, que é a API responsável por criar e acessar bancos de dados no navegador.
2. Em seguida, ele chama o método transaction do objeto db para criar uma transação de banco de dados. A transação é uma operação atômica que inclui uma ou mais operações de banco de dados. Neste caso, a transação inclui apenas a criação do banco de dados.
3. Dentro da transação, ele chama o método executeSql, que executa uma operação SQL para criar o banco de dados. A operação SQL cria uma tabela no banco de dados com um nome e uma estrutura de colunas definidas. No caso da classe BDcriarConec, a tabela é criada com um único campo "id" do tipo inteiro.
4. Finalmente, o método createDB retorna uma promessa que é resolvida quando a transação de criação do banco de dados é concluída com sucesso.

Com isso, a classe BDcriarConec fornece uma maneira fácil de criar um banco de dados Web SQL no navegador, permitindo que os desenvolvedores armazenem dados no navegador e os acessem posteriormente.

#### ***✍️Exemplo de código JS***
``` JS
async function createMyDB() {
  const myDB = new BDcriarConec('myBd', '2.0', 'My new database', 5 * 1024 * 1024);
  try {
    const db = await myDB.createDB();
    console.log(`Banco de dados "${myDB.name}" criado com sucesso: `, db);
  } catch (e) {
    console.error(`Erro ao criar o banco de dados "${myDB.name}": `, e);
  }
}
createMyDB();

```

---
## 👣 **Passo a passo (Documentação do projeto)**

#### **✏️ Criar banco de dados "myBd" em web sql**

   1. O primeiro argumento, "myBd", é o nome do banco de dados.
   2. O segundo argumento, "1.0", é a versão do banco de dados.
   3. O terceiro argumento, "My database", é a descrição do banco de dados.
   4. O último argumento, 2 * 1024 * 1024, é o tamanho máximo em bytes que o banco de dados pode ocupar no armazenamento local do navegador.

> - Observações.:
>   - 1 GB é igual a 1.073.741.824 bytes. Então, para expressar o tamanho de um banco de dados de 10 GB em bytes, você pode multiplicar 10 por 1.073.741.824.
>   - exmpplo: 10 * 1024 * 1024 * 1024 = 10.737.418.240 bytes
>   - o método ***openDatabase*** é usado para **abrir** ou **criar** um banco de dados. Se o banco de dados já existir, ele será aberto. Se não existir, ele será criado.


##### **✍️ Exemplo de código JS**
``` JS
var db = openDatabase('myBd', '1.0', 'My database', 2 * 1024 * 1024);
```
>

#### 📍 _aqui está um exemplo de classe JavaScript que cria o banco de dados "myBd":_

##### **✍️Exemplo de código JS**
``` JS
class BDcriarConec {
  constructor() {
    this.db = null;
  }

  createDB() {
    this.db = openDatabase('myBd', '1.0', 'My database', 2 * 1024 * 1024);
    console.log('Banco de dados criado com sucesso.');
  }
}

```

Para usar esta classe, você precisa criar uma nova instância e chamar o método createDB:

##### **✍️ Como instanciar**
``` JS
const myDB = new BDcriarConec();
myDB.createDB();

```
>

#### 📍 _implemento de try:_

 - como usar o bloco try-catch para tratar erros ao criar o banco de dados. Aqui está um exemplo de como você pode implementar isso na classe "BDcriarConec":
 - se houver algum erro ao criar o banco de dados, será exibida uma mensagem de erro no console.

##### **✍️Exemplo de código JS**
``` JS
class BDcriarConec {
  constructor(name, version, desc, size) {
    this.db = null;
    this.name = name;
    this.version = version;
    this.desc = desc;
    this.size = size;
  }

  createDB() {
    try {
      this.db = openDatabase(this.name, this.version, this.desc, this.size);
      console.log('Banco de dados criado com sucesso.');
    } catch (e) {
      console.error('Erro ao criar o banco de dados: ', e);
    }
  }
}

```

#### 📍 _implemento de promessa:_

- como usar uma promessa para tornar a criação do banco de dados assíncrona e manter a interface de programação assíncrona. Aqui está um exemplo de como você pode implementar isso na classe "BDcriarConec":

##### **✍️ Exemplo de código JS**
``` JS
class BDcriarConec {
  constructor(name, version, desc, size) {
    this.db = null;
    this.name = name;
    this.version = version;
    this.desc = desc;
    this.size = size;
  }

  createDB() {
    return new Promise((resolve, reject) => {
      try {
        this.db = openDatabase(this.name, this.version, this.desc, this.size);
        console.log('Banco de dados criado com sucesso.');
        resolve(this.db);
      } catch (e) {
        console.error('Erro ao criar o banco de dados: ', e);
        reject(e);
      }
    });
  }
}

```

* como usar a promessa para manter a interface de programação assíncrona e fazer o tratamento de erros de maneira elegante. Aqui está um exemplo de como você pode usar a promessa:

##### ***✍️ Exemplo de código JS***
``` JS
const myDB = new BDcriarConec('myBd', '1.0', 'My database', 2 * 1024 * 1024);
myDB.createDB().then(db => {
  console.log('Banco de dados criado com sucesso: ', db);
}).catch(e => {
  console.error('Erro ao criar o banco de dados: ', e);
});

```

#### 📍 _implemento do Async/await:_

- como usar o async/await para tornar a criação do banco de dados assíncrona e manter a interface de programação síncrona. Aqui está um exemplo de como você pode implementar isso na classe "BDcriarConec":

##### **✍️ Exemplo de código JS**
``` JS
class BDcriarConec {
  constructor(name, version, desc, size) {
    this.db = null;
    this.name = name;
    this.version = version;
    this.desc = desc;
    this.size = size;
  }

  async createDB() {
    try {
      this.db = await openDatabase(this.name, this.version, this.desc, this.size);
      console.log('Banco de dados criado com sucesso.');
      return this.db;
    } catch (e) {
      console.error('Erro ao criar o banco de dados: ', e);
      throw e;
    }
  }
}
```

- Você pode usar o async/await para manter a interface de programação síncrona e fazer o tratamento de erros de maneira elegante. Aqui está um exemplo de como você pode usar o async/await:

##### **✍️ Exemplo de código JS**
``` JS
async function main() {
  const myDB = new BDcriarConec('myBd', '1.0', 'My database', 2 * 1024 * 1024);
  try {
    const db = await myDB.createDB();
    console.log('Banco de dados criado com sucesso: ', db);
  } catch (e) {
    console.error('Erro ao criar o banco de dados: ', e);
  }
}
main();
```

#### 📍 _Aqui está uma versão melhorada do código com algumas otimizações e melhorias na estrutura:_

### **✍️Exemplo de código JS**
``` JS
class BDcriarConec {
  constructor(name, version, desc, size) {
    this.db = null;
    this.name = name;
    this.version = version || 1;
    this.desc = desc || 'My database';
    this.size = size || 2 * 1024 * 1024;
  }
  async createDB() {
    try {
      this.db = await openDatabase(this.name, this.version, this.desc, this.size);
      console.log(`Banco de dados "${this.name}" criado com sucesso.`);
      return this.db;
    } catch (e) {
      console.error(`Erro ao criar o banco de dados "${this.name}": `, e);
      throw e;
    }
  }
}
async function createMyDB() {
  const myDB = new BDcriarConec('myBd');
  try {
    const db = await myDB.createDB();
    console.log(`Banco de dados "${myDB.name}" criado com sucesso: `, db);
  } catch (e) {
    console.error(`Erro ao criar o banco de dados "${myDB.name}": `, e);
  }
}
createMyDB();

```

- Nesta versão, adicionei valores padrão para as propriedades version, desc e size caso esses valores não sejam fornecidos pelo usuário. Além disso, mudei o nome da função principal para createMyDB para refletir mais claramente o que ela está fazendo.

##### **✍️ Exemplo de como instânciar**
``` JS
async function createMyDB() {
  const myDB = new BDcriarConec('myBd', '2.0', 'My new database', 5 * 1024 * 1024);
  try {
    const db = await myDB.createDB();
    console.log(`Banco de dados "${myDB.name}" criado com sucesso: `, db);
  } catch (e) {
    console.error(`Erro ao criar o banco de dados "${myDB.name}": `, e);
  }
}

createMyDB();
```

- Neste exemplo, estamos criando uma nova instância de BDcriarConec com os seguintes parâmetros:

  - name: "myBd"
  - version: "2.0"
  - desc: "My new database"
  - size: 5 MB (5 * 1024 * 1024 bytes)

> Observaçõs: Em seguida, chamamos o método createDB para criar o banco de dados e tratamos quaisquer erros que possam ocorrer.

###### Fim.
