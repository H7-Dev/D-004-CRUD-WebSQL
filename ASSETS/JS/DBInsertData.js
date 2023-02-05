class DBInsertData {
    constructor(db) {
      this.db = db;
    }

    async insert(table, data) {
      const keys = Object.keys(data);
      const values = Object.values(data);
      const placeholders = keys.map((key, index) => '?').join(', ');
      const sql = `INSERT INTO ${table} (${keys.join(', ')}) VALUES (${placeholders})`;

      try {
        await new Promise((resolve, reject) => {
          this.db.transaction(tx => {
            tx.executeSql(sql, values, (tx, result) => {
              resolve(result);
            }, (tx, error) => {
              reject(error);
            });
          });
        });
      } catch (error) {
        console.error('Error inserting data: ', error);
      }
    }
  }

  const db = openDatabase('mydb', '1.0', 'My Database', 2 * 1024 * 1024);
const insertData = new DBInsertData(db);

(async () => {
  await insertData.insert('users', { name: 'John Doe', age: 30, email: 'john.doe@example.com' });
  console.log('Data inserted successfully');
})();
