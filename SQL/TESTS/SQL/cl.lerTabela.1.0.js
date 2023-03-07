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

                    const idade = this.calcularIdade(row.c_date)
                    // const dt = this.converterDataUStoBr(row.c_dt)
                    const dt = this.converterDataUStoBr(row.c_dt, { humanizar: true })
                    const dtx = this.converterDataUStoBr(row.c_dt, { data: true, hora: false })
                    const dtMod = this.converterDataUStoBr(row.c_dtMod, { data: true, hora: true})
                    html += `<tr>
                    <td class="action" action="editar" style="text-align: center;"><input class="checkDel" type="checkbox" checked></td>
                      <td>${row.rowid}</td>
                      <td>${row.idPessoas}</td>
                      <td>${row.c_nome}</td>
                      <td>${row.c_email}</td>
                      <td>${idade + ' anos'}</td>
                      <td>${row.c_pais}</td>
                      <td>${row.c_sexo}</td>
                      <td title="${dt}">${dtx}</td>
                      <td>${dtMod}</td>
                    </tr>`;
                }
                this.tbody.innerHTML = html;
            });
        });
    }
    calcularIdade(dataNascimento) {
        const hoje = new Date();
        const dataNasc = new Date(dataNascimento);
        let idade = hoje.getFullYear() - dataNasc.getFullYear();
        const mes = hoje.getMonth() - dataNasc.getMonth();

        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
            idade--;
        }
        return idade;
    }
    converterDataUStoBr(data, opcoes) {
        opcoes = opcoes || {
            data: true,
            hora: true,
            humanizar: false
        };
        var partes = data.split(/[- :]/);
        var novaData = '';

        if (opcoes.humanizar) {
            var diasDaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
            var mesAno = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
            novaData += diasDaSemana[new Date(data).getDay()] + ', ';
            novaData += partes[2] + ' ' + mesAno[partes[1] - 1] + ' de ' + partes[0];
        } else {
            if (opcoes.data) {
                novaData += partes[2] + '/' + partes[1] + '/' + partes[0];
            }

            if (opcoes.data && opcoes.hora) {
                novaData += ' ';
            }

            if (opcoes.hora) {
                novaData += partes[3] + ':' + partes[4] + ':' + partes[5];
            }
        }

        return novaData;
    }




}
const tabela = new TabelaPessoas(db);
tabela.exibirDados();
