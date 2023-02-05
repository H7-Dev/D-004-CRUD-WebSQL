class DBDeleteTable {
    constructor(dbName, tableName) {
      this.dbName = dbName;
      this.tableName = tableName;
    }

    deleteTable() {
      return new Promise((resolve, reject) => {
        const database = openDatabase(this.dbName, "1.0", "Database for storing data", 2 * 1024 * 1024);
        database.transaction(tx => {
          tx.executeSql(`DROP TABLE IF EXISTS ${this.tableName}`, [], (tx, res) => {
            resolve(res);
          }, (tx, err) => {
            reject(err);
          });
        });
      });
    }
  }



const dbDeleteTable = new DBDeleteTable("mydb", "users");
dbDeleteTable.deleteTable().then(res => {
  console.log("Table deleted successfully", res);
}).catch(err => {
  console.error("Error deleting table", err);
});
