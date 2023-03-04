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

const db = window.openDatabase("mydb", "1.0", "My Database", 1024 * 1024);

const ct = new GerenciadorTabelas(db);
ct.excluirTabelas(["clientes", "produtos"])
    .then((resultados) => {
        console.log("Tabelas excluídas com sucesso!", resultados);
    })
    .catch(error => {
        console.error("Erro ao excluir tabelas:", error);
    });