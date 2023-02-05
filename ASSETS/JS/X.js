class DBConnection {
    constructor(dbName, version, description, size) {
      this.db = null;
      this.dbName = dbName;
      this.version = version;
      this.description = description;
      this.size = size;
    }

    connect() {
      return new Promise((resolve, reject) => {
        this.db = openDatabase(this.dbName, this.version, this.description, this.size, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(this.db);
          }
        });
      });
    }
  }

  class DBTable {
    constructor(db) {
      this.db = db;
    }

    createTable(tableName, columns) {
      return new Promise((resolve, reject) => {
        this.db.transaction((tx) => {
          tx.executeSql(
            `CREATE TABLE IF NOT EXISTS ${tableName} (${columns})`,
            [],
            (tx, results) => {
              resolve();
            },
            (tx, error) => {
              reject(error);
            }
          );
        });
      });
    }
  }

  class DBInsertData {
    constructor(db) {
      this.db = db;
    }

    insertData(tableName, columns, values) {
      return new Promise((resolve, reject) => {
        this.db.transaction((tx) => {
          tx.executeSql(
            `SELECT * FROM ${tableName} WHERE email = ?`,
            [values[2]],
            (tx, results) => {
              if (results.rows.length === 0) {
                tx.executeSql(
                  `INSERT INTO ${tableName} (${columns}) VALUES (${Array(values.length).fill("?").join(",")})`,
                  values,
                  (tx, results) => {
                    resolve();
                  },
                  (tx, error) => {
                    reject(error);
                  }
                );
              } else {
                reject(new Error("Email already exists"));
              }
            },
            (tx, error) => {
              reject(error);
            }
          );
        });
      });
    }
  }


document.addEventListener("DOMContentLoaded", function () {
    const btnAction = document.getElementById("btnAction");
    const dbConnection = new DBConnection("myDB", 1, "My database", 2 * 1024 * 1024);

    btnAction.addEventListener("click", async function() {
    alert("ok")

      try {
        const db = await dbConnection.connect();
        const dbTable = new DBTable(db);
        await dbTable.createTable("users", "id INTEGER PRIMARY KEY, name TEXT, email TEXT");
        const dbInsertData = new DBInsertData(db);
        await dbInsertData.insertData("users", "name, email", ["John Doe", "johndoe@example.com"]);
        console.log("Data inserted successfully");
      } catch (error) {
        console.error(error);
      }
    });

})


// class Database {
//     constructor(dbName, version, description, size) {
//       this.db = null;
//       this.dbName = dbName;
//       this.version = version;
//       this.description = description;
//       this.size = size;
//     }

//     connect() {
//       return new Promise((resolve, reject) => {
//         this.db = openDatabase(this.dbName, this.version, this.description, this.size, (err) => {
//           if (err) {
//             reject(err);
//           } else {
//             resolve();
//           }
//         });
//       });
//     }

//     createTable(tableName, columns) {
//       return new Promise((resolve, reject) => {
//         this.db.transaction((tx) => {
//           tx.executeSql(
//             `CREATE TABLE IF NOT EXISTS ${tableName} (${columns})`,
//             [],
//             (tx, results) => {
//               resolve();
//             },
//             (tx, error) => {
//               reject(error);
//             }
//           );
//         });
//       });
//     }

//     insertData(tableName, columns, values) {
//       return new Promise((resolve, reject) => {
//         this.db.transaction((tx) => {
//           tx.executeSql(
//             `SELECT * FROM ${tableName} WHERE email = ?`,
//             [values[2]],
//             (tx, results) => {
//               if (results.rows.length === 0) {
//                 tx.executeSql(
//                   `INSERT INTO ${tableName} (${columns}) VALUES (${Array(values.length).fill("?").join(",")})`,
//                   values,
//                   (tx, results) => {
//                     resolve();
//                   },
//                   (tx, error) => {
//                     reject(error);
//                   }
//                 );
//               } else {
//                 reject(new Error("Email already exists"));
//               }
//             },
//             (tx, error) => {
//               reject(error);
//             }
//           );
//         });
//       });
//     }
//   }

//   async function main() {
//     alert("ok-a")

//     const database = new Database("databaseName", "1.0", "database description", 2 * 1024 * 1024);

//     try {
//       await database.connect();
//       await database.createTable("tableName", "id INTEGER PRIMARY KEY, name TEXT, age INT, email TEXT");
//     } catch (error) {
//       console.error(error);
//     }

//     document.getElementById("btnAction").addEventListener("click", async () => {
//         alert("ok-b")
//       try {
//         await database.insertData("tableName", "name, age, email", ["John Doe", 30, "john.doe@example.com"]);
//         console.log("Inserted data successfully");
//       } catch (error) {
//         console.error(error);
//       }
//     });
//   }

// main()
