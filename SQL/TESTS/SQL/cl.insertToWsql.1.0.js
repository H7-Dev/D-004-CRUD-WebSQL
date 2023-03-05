class insertToWsql {
    static insert(db, tabela, registro, campos, callback) {
        let camposSql = campos.join(', ');
        let valoresSql = campos.map((campo) => registro[campo]);

        db.transaction(function (tx) {
            tx.executeSql(`INSERT INTO ${tabela} (${camposSql}) VALUES (${campos.map(() => '?').join(', ')})`, valoresSql, function (tx, resultado) {
                if (resultado.rowsAffected > 0) {
                    callback(true, `Registro inserido com sucesso: ${resultado.insertId}`);
                } else {
                    callback(false, 'Falha ao inserir registro');
                }
            }, function (tx, erro) {
                callback(false, `Erro ao inserir registro: ${erro.message}`);
            });
        });
    }
}


var dbX = openDatabase('myBd', '1.0', 'My database', 5 * 1024 * 1024 * 1024);
var tabela = 'tbPessoas';
var registro = {
    idPessoas: '123',
    c_nome: 'Fulano de Tal',
    c_email: 'fulano@example.com',
    c_date: '1980-01-01',
    c_pais: 'Brasil',
    c_sexo: 'M'
};
var campos = ['idPessoas','c_nome', 'c_email', 'c_date', 'c_pais', 'c_sexo'];
insertToWsql.insert(dbX, tabela, registro, campos, function (sucesso, mensagem) {
    if (sucesso) {
        console.log(mensagem);
    } else {
        console.error(mensagem);
    }
});
