class TabelaPessoas {
    constructor(db) {
        this.db = db;
        this.tbody = document.querySelector('.tbody');
    }

    exibirDados() {
        this.db.transaction((tx) => {
            // var query = "SELECT rowid, * FROM tbPessoas ORDER BY rowid "+_ordem+";"
            var query = "SELECT rowid, * FROM tbPessoas ORDER BY rowid ASC;"

            tx.executeSql(query, [], (tx, resultado) => {
                let html = '';
                for (let i = 0; i < resultado.rows.length; i++) {
                    const row = resultado.rows.item(i);
                    // console.log(row);
                    html += `<tr>
                    <td class="action" action="editar" style="text-align: center;"><input class="checkDel" type="checkbox" checked></td>
              <td>${row.rowid}</td>
              <td>${row.idPessoas}</td>
              <td>${row.c_nome}</td>
              <td>${row.c_email}</td>
              <td>${row.c_date}</td>
              <td>${row.c_pais}</td>
              <td>${row.c_sexo}</td>
              <td>${row.c_dt}</td>
              <td>${row.c_dtMod}</td>
            </tr>`;
                }
                this.tbody.innerHTML = html;
            });
        });
    }
}


const tabela = new TabelaPessoas(db);
tabela.exibirDados();