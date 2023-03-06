class GerenciadorTabelas {
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

    async excluirTabela(nomeTabela) {
        if (!nomeTabela || nomeTabela.trim() === '') {
            return Promise.reject('xx Nome da tabela inválido.');
        }

        const sql = `DROP TABLE IF EXISTS ${nomeTabela}`;
        return new Promise((resolve, reject) => {
            this.db.transaction(tx => {
                tx.executeSql(sql, [], () => {
                    resolve(`Tabela ${nomeTabela} excluída com sucesso!`);
                }, error => {
                    reject(`Erro ao excluir tabela ${nomeTabela}: ${error.message}`);
                });
            });
        });
    }

    async excluirTabelas(nomesTabelas) {
        if (!nomesTabelas || nomesTabelas.length === 0) {
            return Promise.reject('xx Não foram fornecidos nomes de tabela.');
        }

        try {
            const resultados = await Promise.all(nomesTabelas.map(nomeTabela => {
                if (!nomeTabela || nomeTabela.trim() === '') {
                    throw new Error('xx Nome da tabela inválido.');
                }
                return this.excluirTabela(nomeTabela);
            }));
            return resultados;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }
}


// const ct = new GerenciadorTabelas(db)
// ct.excluirTabelas(["tbPessoas", "tbCursos"]).then((resultados) => {
//     console.log("Tabelas excluídas com sucesso!", resultados);
// }).catch(error => {
//     console.error("Erro ao excluir tabelas:", error);
// })



const ct = new GerenciadorTabelas(db);
ct.criarTabelas([
    {
        nome: "tbPessoas",
        colunas: [
            "idPessoas TEXT(545)  NOT NULL",
            "c_nome TEXT(545) NOT NULL",
            "c_email TEXT(545) NOT NULL",
            "c_date TEXT(100) NOT NULL",
            "c_pais TEXT(1545) NOT NULL",
            "c_sexo TEXT(2) NOT NULL",
            "c_dt TEXT(545)",
            "c_dtMod TEXT(545)",
        ],
    },
    {
        nome: "tbCursos",
        colunas: [
            "idCursos TEXT(545) NOT NULL",
            "c_curso TEXT(545) NOT NULL",
            "c_preco TEXT(545) NOT NULL",
            "c_dt TEXT(545)",
            "c_dtMod TEXT(545)",
        ],
    }
])
.then((resultados) => {
    console.log("Tabelas criadas com sucesso!", resultados);
})
.catch(error => {
    console.error("Erro ao criar tabelas:", error);
});