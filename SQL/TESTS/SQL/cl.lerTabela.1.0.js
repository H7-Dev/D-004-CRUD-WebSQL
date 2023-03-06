class TabelaPessoas {
    constructor(db, tabelaNome, colunas) {
        this.db = db;
        this.tbody = document.querySelector('.tbody');
        this.tabelaNome = tabelaNome;
        this.colunas = colunas;
    }

    exibirDados() {
        const colunasSelecionadas = this.colunas.join(', ');
        const query = `SELECT rowid, ${colunasSelecionadas} FROM ${this.tabelaNome}`;

        this.db.transaction((tx) => {
            tx.executeSql(query, [], (tx, resultado) => {
                let html = '';
                for (let i = 0; i < resultado.rows.length; i++) {
                    const row = resultado.rows.item(i);
                    let tdHtml = '';
                    for (const coluna of this.colunas) {
                        tdHtml += `<td>${row[coluna]}</td>`;
                    }
                    html += `<tr>
              <td>${row.rowid}</td>
              ${tdHtml}
            </tr>`;
                }
                this.tbody.innerHTML = html;
            });
        });
    }
}

const tabela = new TabelaPessoas(db, 'tbPessoas', ['idPessoas', 'c_nome', 'c_email', 'c_date', 'c_pais', 'c_sexo']);
tabela.exibirDados();
