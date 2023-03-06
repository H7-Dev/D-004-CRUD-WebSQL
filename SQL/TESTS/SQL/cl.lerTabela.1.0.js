function obterDados() {
    db.transaction(function (tx) {
        tx.executeSql('SELECT rowid, * FROM tbPessoas', [], function (tx, resultado) {
            const tbody = document.querySelector('.tbody');
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
            tbody.innerHTML = html;
        });
    });
}
obterDados();
