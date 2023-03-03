class criarTabelas {
    constructor(db) {
        this.db = db;
    }

    async criarTabela(nomeTabela, colunas) {
        if (!nomeTabela || nomeTabela.trim() === '') {
            return Promise.reject('xx Nome da tabela inválido.');
        }

        if (!colunas || colunas.length === 0) {
            return Promise.reject('xx Definições de coluna inválidas.');
        }

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
        if (!tabelas || tabelas.length === 0) {
            return Promise.reject('xx Não foram fornecidas definições de tabela.');
        }

        try {
            const resultados = await Promise.all(tabelas.map(tabela => {
                if (!tabela || !tabela.nome || tabela.nome.trim() === '' || !tabela.colunas || tabela.colunas.length === 0) {
                    throw new Error('xxDefinições de tabela inválidas.');
                }
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
    nome: "tbClientes",
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