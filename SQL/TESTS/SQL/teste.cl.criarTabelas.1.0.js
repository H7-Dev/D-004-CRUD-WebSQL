class criarTabelas {
    constructor(db) {
        this.db = db;
    }

    criarTabela(nomeTabela, colunas, sucesso, erro) {
        const colunasQuery = colunas.join(", ");
        const sql = `CREATE TABLE IF NOT EXISTS ${nomeTabela} (${colunasQuery})`;
        this.db.transaction(tx => {
            tx.executeSql(sql, [], sucesso, erro);
        });
    }

    criarTabelas(tabelas, sucesso, erro) {
        try {
            this.db.transaction(tx => {
                tabelas.forEach(tabela => {
                    this.criarTabela(
                        tabela.nome,
                        tabela.colunas,
                        tabela.sucesso,
                        tabela.erro
                    );
                });
            }, erro, sucesso);
        } catch (e) {
            console.error(e);
            if (erro) erro(e);
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
    sucesso: () => {
        console.log("Tabela clientes criada com sucesso!");
    },
    erro: err => {
        console.error("Erro ao criar tabela clientes: " + err.message);
    },
};
const tabela2 = {
    nome: "produtos",
    colunas: [
        "id INTEGER PRIMARY KEY AUTOINCREMENT",
        "nome TEXT NOT NULL",
        "preco REAL NOT NULL",
    ],
    sucesso: () => {
        console.log("Tabela produtos criada com sucesso!");
    },
    erro: err => {
        console.error("Erro ao criar tabela produtos: " + err.message);
    },
};
const ct = new criarTabelas(db);
ct.criarTabelas(
    [tabela1, tabela2],
    () => {
        console.log("Tabelas criadas com sucesso!");
    },
    err => {
        console.error("Erro ao criar tabelas: " + err.message);
    }
);