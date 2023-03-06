class TabelaPessoas {
    constructor(db) {
        this.db = db;
        this.tbody = document.querySelector('.tbody');
    }

    exibirDados() {
        this.db.transaction((tx) => {
            tx.executeSql('SELECT rowid, * FROM tbPessoas', [], (tx, resultado) => {
                let html = '';
                for (let i = 0; i < resultado.rows.length; i++) {
                    const row = resultado.rows.item(i);
                    html += `<tr>
              <td>${row.rowid}</td>
              <td>${row.idPessoas}</td>
              <td>${row.c_nome}</td>
              <td>${row.c_email}</td>
              <td>${row.c_date}</td>
              <td>${row.c_pais}</td>
              <td>${row.c_sexo}</td>
            </tr>`;
                }
                this.tbody.innerHTML = html;
            });
        });
    }
}


const tabela = new TabelaPessoas(db);
tabela.exibirDados();