class editInWsql {
    static edit(db, table, data, fields, successCallback, uniqueField) {
            editInWsql.editRecord(db, table, data, fields, successCallback);
    }
    static editRecord(db, table, data, fields, successCallback) {
        var idColumn = 'idPessoas';
        var idValue = data[idColumn];
        var setColumns = fields.map(function (field) {
            return field + ' = ?';
        }).join(', ');
        var values = fields.map(function (field) {
            return data[field];
        });
        values.push(idValue);
        var sql = 'UPDATE ' + table + ' SET ' + setColumns + ' WHERE ' + idColumn + ' = ?';
        db.transaction(function (tx) {
            tx.executeSql(sql, values, function (tx, result) {
                var success = true;
                var message = 'Registro editado com sucesso com ID ' + idValue;
                if (typeof successCallback === 'function') {
                    successCallback(success, message, idValue);
                }
            }, function (tx, error) {
                var success = false;
                var message = 'Erro ao editar registro: ' + error.message;
                if (typeof successCallback === 'function') {
                    successCallback(success, message);
                }
            });
        });
    }
}

const tabelax = 'tbPessoas';
const registro = {
    idPessoas: 'idxxx',
    c_nome: 'Bruna x2',
    c_email: 'bruna.jay@email.com',
    c_date: '2000-01-01',
    c_pais: 'Brasil',
    c_sexo: 'F',
    c_dt: '07/03/2023',
    c_dtMod: '07/03/2023 09:49:16',
};
const campos = ['c_nome', 'c_email', 'c_date', 'c_pais', 'c_sexo', 'c_dt', 'c_dtMod'];
const campoUnico = 'c_email';

editInWsql.edit(db, tabelax, registro, campos, function (success, message, idValue) {
    if (success) {
        console.log(message);
        alert(message)
        // console.log('ID do registro editado:', idValue);
    } else {
        console.error(message);
        alert(message);
    }
}, campoUnico);
