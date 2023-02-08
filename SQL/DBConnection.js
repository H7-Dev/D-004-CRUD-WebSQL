// Questão [#001] Criar uma class "DBConnection" para conectar ao indexedDB - javascript

// class DBConnection {
//     constructor(dbName, storeName, version) {
//         this.dbName = dbName;
//         this.storeName = storeName;
//         this.version = version;
//         this.db = null;
//     }

//     connect() {
//         return new Promise((resolve, reject) => {
//             let request = window.indexedDB.open(this.dbName, this.version);
//             request.onerror = reject;
//             request.onsuccess = () => {
//                 this.db = request.result;
//                 resolve(this.db);
//             };
//             request.onupgradeneeded = (event) => {
//                 this.db = event.target.result;
//                 if (!this.db.objectStoreNames.contains(this.storeName)) {
//                     this.db.createObjectStore(this.storeName);
//                 }
//             };
//         });
//     }

//     getObjectStore(mode) {
//         let tx = this.db.transaction(this.storeName, mode);
//         return tx.objectStore(this.storeName);
//     }
// }


// // Como Usar [#001] Você pode usar a classe da seguinte maneira:
// let dbConnection = new DBConnection('myDB', 'myStore', 1);
// dbConnection.connect()
//   .then(() => {
//     let objectStore = dbConnection.getObjectStore('readwrite');
//     // fazer operações com objectStore
//   })
//   .catch((error) => {
//     console.error(error);
//   });


/* Descrição [#001] Você pode usar a classe da seguinte maneira:
   - Este código define uma classe JavaScript chamada DBConnection, que pode ser usada para se conectar a um banco de dados IndexedDB e realizar operações nele.
   - A classe tem três propriedades: dbName (nome do banco de dados), storeName (nome da loja de objetos) e version (versão do banco de dados). Ela também tem uma propriedade db, que será usada para armazenar a referência ao banco de dados quando for conectado com sucesso.
   - método connect é usado para conectar ao banco de dados. Ele retorna uma promessa que será resolvida quando a conexão for bem-sucedida ou rejeitada quando houver algum erro. Dentro do método, é aberta uma conexão ao banco de dados usando window.indexedDB.open. Os eventos onsuccess e onupgradeneeded são usados para controlar o resultado da conexão. Se a conexão for bem-sucedida, a propriedade db será definida com a referência ao banco de dados e a promessa será resolvida. Se houver uma necessidade de atualização, o método createObjectStore será usado para criar uma nova loja de objetos no banco de dados.
   - O método getObjectStore é usado para obter uma referência a uma loja de objetos específica no banco de dados. Ele retorna uma referência à loja de objetos, que pode ser usada para realizar operações CRUD (create, read, update, delete) no banco de dados. O modo de transação (leitura ou leitura/gravação) é especificado como um argumento para este método.
*/

//* \\\\\\\\\\\\\\\\\\\\\\

// Questão [#002] implemento de async e await ao código

class DBConnection {
    constructor(dbName, storeName, version) {
        this.dbName = dbName;
        this.storeName = storeName;
        this.version = version;
        this.db = null;
    }

    async connect() {
        let request = window.indexedDB.open(this.dbName, this.version);
        return new Promise((resolve, reject) => {
            request.onerror = reject;
            request.onsuccess = () => {
                this.db = request.result;
                resolve(this.db);
            };
            request.onupgradeneeded = (event) => {
                this.db = event.target.result;
                if (!this.db.objectStoreNames.contains(this.storeName)) {
                    this.db.createObjectStore(this.storeName);
                }
            };
        });
    }

    getObjectStore(mode) {
        let tx = this.db.transaction(this.storeName, mode);
        return tx.objectStore(this.storeName);
    }
}

// Como Usar [#002]:
async function main() {
    let dbConnection = new DBConnection('myDB', 'myStore', 1);
    try {
        await dbConnection.connect();
        let objectStore = dbConnection.getObjectStore('readwrite');
        // fazer operações com objectStore
    } catch (error) {
        console.error(error);
    }
}
main();

/* Descrição [#002]:
    - Nesta versão, o método connect foi marcado como async, e a chamada a ele foi feita com await na função main.
    - Isso significa que a execução da função será pausada até que a conexão ao banco de dados tenha sido estabelecida.
    - Isso é útil para evitar a necessidade de lidar com a sincronização de callbacks.
*/

