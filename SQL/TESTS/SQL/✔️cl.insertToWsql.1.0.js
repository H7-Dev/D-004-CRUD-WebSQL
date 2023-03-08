class insertToWsql {
    static insert(db, table, data, fields, successCallback, returnField, uniqueField) {
        if (uniqueField) {
            var column = uniqueField;
            var value = data[uniqueField];
            var sql = 'SELECT * FROM ' + table + ' WHERE ' + column + ' = ?';
            db.transaction(function (tx) {
                tx.executeSql(sql, [value], function (tx, result) {
                    if (result.rows.length > 0) {
                        var success = false;
                        var message = 'Já existe um registro com ' + column + ' igual a "' + value + '"';
                        if (typeof successCallback === 'function') {
                            successCallback(success, message);
                        }
                    } else {
                        insertToWsql.insertRecord(db, table, data, fields, successCallback, returnField);
                    }
                }, function (tx, error) {
                    var success = false;
                    var message = 'Erro ao executar a validação: ' + error.message;
                    if (typeof successCallback === 'function') {
                        successCallback(success, message);
                    }
                });
            });
        } else {
            insertToWsql.insertRecord(db, table, data, fields, successCallback, returnField);
        }
    }

    static insertRecord(db, table, data, fields, successCallback, returnField) {
        var columns = fields.join(', ');
        var placeholders = fields.map(function () {
            return '?'
        }).join(', ');
        var values = fields.map(function (field) {
            return data[field]
        });
        var sql = 'INSERT INTO ' + table + ' (' + columns + ') VALUES (' + placeholders + ')';
        db.transaction(function (tx) {
            tx.executeSql(sql, values, function (tx, result) {
                var success = true;
                var message = 'Registro inserido com sucesso com ID ' + result.insertId;
                if (returnField && data.hasOwnProperty(returnField)) {
                    message += ' e ' + returnField + ' = ' + data[returnField];
                }
                if (typeof successCallback === 'function') {
                    successCallback(success, message, result.insertId, data[returnField]);
                }
            }, function (tx, error) {
                var success = false;
                var message = 'Erro ao inserir registro: ' + error.message;
                if (typeof successCallback === 'function') {
                    successCallback(success, message);
                }
            });
        });
    }
}

// const tabelax = 'tbPessoas';
// const registro = {
//     idPessoas: 'id',
//     c_nome: 'bruna',
//     c_email: 'bruna.jay@email.com',
//     c_date: '2000-01-01',
//     c_pais: 'Brasil',
//     c_sexo: 'F',
//     c_dt: '07/03/2023',
//     c_dtMod: '07/03/2023 09:49:16',
// };
// const campos = ['idPessoas', 'c_nome', 'c_email', 'c_date', 'c_pais', 'c_sexo', 'c_dt', 'c_dtMod'];
// const retorno = 'c_nome';
// const campoUnico = 'c_email';

// insertToWsql.insert(db, tabelax, registro, campos, function (success, message, insertId, returnField) {
//     if (success) {
//         console.log(message);
//         alert(message)
//         // console.log('ID do registro inserido:', insertId);
//         // console.log('Campo de retorno:', returnField);
//     } else {
//         console.error(message);
//         alert(message)
//     }
// }, retorno, campoUnico);