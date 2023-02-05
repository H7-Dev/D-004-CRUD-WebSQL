class DBTable {
    constructor(db, tableName, columns) {
      this.db = db;
      this.tableName = tableName;
      this.columns = columns;
    }

    createTable() {
      return new Promise((resolve, reject) => {
        this.db.transaction((tx) => {
          tx.executeSql(
            `CREATE TABLE IF NOT EXISTS ${this.tableName} (${this.columns})`,
            [],
            (tx, res) => {
              resolve(res);
            },
            (tx, error) => {
              reject(error);
            }
          );
        });
      });
    }
  }

  async function createDBTable() {

    const db = window.openDatabase("mydb", "1.0", "My Database", 2 * 1024 * 1024);

    const usersTable = new DBTable(db, "users", "id INTEGER PRIMARY KEY, name TEXT, age TEXT, email TEXT");
    try {
      await usersTable.createTable();
      console.log("Tabela criada com sucesso");
    } catch (error) {
      console.error("Erro ao criar tabela: ", error);
    }
  }
  createDBTable()