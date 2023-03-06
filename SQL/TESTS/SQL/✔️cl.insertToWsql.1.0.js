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

function getInputsValues() {
    return new Promise((resolve, reject) => {
        const inputs = {
            idPessoas: document.querySelector('body > div.form.frmPessoa.ativado > div > div.main > div.chat > label.in_email > input.in_email').value.replace(/\s/g, '').replace(/[^a-zA-Z0-9]/g, ''),
            in_nome: document.querySelector('body > div.form.frmPessoa.ativado > div > div.main > div.chat > label.in_nome > input.in_nome'),
            in_email: document.querySelector('body > div.form.frmPessoa.ativado > div > div.main > div.chat > label.in_email > input.in_email'),
            in_dtNasc: document.querySelector('body > div.form.frmPessoa.ativado > div > div.main > div.chat > label.in_dtNasc > input.in_dtNasc'),
            in_optsPais: document.querySelector('body > div.form.frmPessoa.ativado > div > div.main > div.chat > label.customSelc.col1-3 > input.in_optsPais'),
            in_optsSexo: document.querySelector('body > div.form.frmPessoa > div > div.main > div.chat > label.customSelc.col3 > input.in_optsSexo')
        };

        // Verifica se todos os valores foram obtidos
        if (inputs.idPessoas && inputs.in_nome && inputs.in_email && inputs.in_dtNasc && inputs.in_optsPais && inputs.in_optsSexo) {
            console.log(inputs.idPessoas)
            resolve(inputs);
        } else {
            reject(new Error('Não foi possível obter todos os valores de entrada.'));
        }
    });
}

// Chama a função getInputsValues para obter os valores de entrada e, em seguida, chama a função insertToWsql.insert quando os valores forem obtidos
getInputsValues().then((inputs) => {
    const tabela = 'tbPessoas';
    const registro = {
        idPessoas: inputs.idPessoas,
        c_nome: inputs.in_nome.value,
        c_email: inputs.in_email.value,
        c_date: inputs.in_dtNasc.value,
        c_pais: inputs.in_optsPais.value,
        c_sexo: inputs.in_optsSexo.value
    };
    const campos = ['idPessoas', 'c_nome', 'c_email', 'c_date', 'c_pais', 'c_sexo'];
    const retorno = 'c_nome';
    const campoUnico = 'c_email';

    insertToWsql.insert(db, tabela, registro, campos, function (success, message, insertId, returnField) {
        if (success) {
            console.log(message);
            alert(message)
            // console.log('ID do registro inserido:', insertId);
            // console.log('Campo de retorno:', returnField);
        } else {
            console.error(message);
            alert(message)
        }
    }, retorno, campoUnico);
}).catch((error) => {
    console.error(error);
});