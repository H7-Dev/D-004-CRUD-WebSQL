class criarTabelas {
    constructor(db) {
        this.db = db;
    }

    async criarTabela(nomeTabela, colunas) {
        const colunasQuery = colunas.join(", ");
        const sql = `CREATE TABLE IF NOT EXISTS ${nomeTabela} (${colunasQuery})`;
        return new Promise((resolve, reject) => {
            this.db.transaction(tx => {
                tx.executeSql(sql, [], () => {
                    resolve(`Tabela ${nomeTabela} criada com sucesso!`);
                }, error => {
                    reject(`Erro ao criar tabela ${nomeTabela}: ${error.message}`);
                });
            });
        });
    }

    async criarTabelas(tabelas) {
        try {
            const resultados = await Promise.all(tabelas.map(tabela => {
                return this.criarTabela(tabela.nome, tabela.colunas);
            }));
            return resultados;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }
}

const db = window.openDatabase("mydb", "1.0", "My Database", 1024 * 1024);

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
ct.criarTabelas([tabela1, tabela2])
    .then(resultados => {
        console.log("Tabelas criadas com sucesso!", resultados);
    })
    .catch(error => {
        console.error("Erro ao criar tabelas:", error);
    });
