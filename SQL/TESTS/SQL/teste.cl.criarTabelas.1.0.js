class criarTabelas {
    constructor(db) {
      this.db = db;
    }

    criarTabela(nomeTabela, colunas) {
      const colunasQuery = colunas.join(", ");
      const sql = `CREATE TABLE IF NOT EXISTS ${nomeTabela} (${colunasQuery})`;
      this.db.transaction(tx => {
        tx.executeSql(sql);
      });
    }

    criarTabelas(tabelas) {
      tabelas.forEach(tabela => {
        this.criarTabela(tabela.nome, tabela.colunas);
      });
    }
  }

  const db = window.openDatabase("myBd", "1.0", "My Database", 5 * 1024 * 1024 * 1024);
const tabela1 = {
  nome: "clientes",
  colunas: [
    "id INTEGER PRIMARY KEY AUTOINCREMENT",
    "nome TEXT NOT NULL",
    "email TEXT NOT NULL",
  ],
};
const tabela2 = {
  nome: "produtos",
  colunas: [
    "id INTEGER PRIMARY KEY AUTOINCREMENT",
    "nome TEXT NOT NULL",
    "preco REAL NOT NULL",
  ],
};
const ct = new criarTabelas(db);
ct.criarTabelas([tabela1, tabela2]);
