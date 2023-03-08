
Classe: insertToWsql

Descrição: Uma classe que fornece métodos estáticos para inserir dados em uma tabela de um banco de dados SQL.

Métodos:

1.  insert - Método estático que insere dados em uma tabela do banco de dados. Aceita os seguintes parâmetros:

    *   db: o objeto de banco de dados SQL para executar a inserção
    *   table: o nome da tabela em que inserir os dados
    *   data: um objeto com os dados a serem inseridos, onde as chaves são os nomes das colunas da tabela e os valores são os valores a serem inseridos
    *   fields: uma matriz de strings contendo os nomes das colunas da tabela em que inserir os dados
    *   successCallback: uma função de retorno de chamada que será chamada após a inserção ser concluída com êxito ou falhar
    *   returnField: o nome do campo da tabela que deve ser retornado após a inserção, se desejado
    *   uniqueField: o nome do campo da tabela que deve ser único, ou seja, não pode ter valores duplicados
2.  insertRecord - Método estático que insere um registro em uma tabela do banco de dados. Aceita os seguintes parâmetros:

    *   db: o objeto de banco de dados SQL para executar a inserção
    *   table: o nome da tabela em que inserir o registro
    *   data: um objeto com os dados do registro a serem inseridos, onde as chaves são os nomes das colunas da tabela e os valores são os valores a serem inseridos
    *   fields: uma matriz de strings contendo os nomes das colunas da tabela em que inserir os dados
    *   successCallback: uma função de retorno de chamada que será chamada após a inserção ser concluída com êxito ou falhar
    *   returnField: o nome do campo da tabela que deve ser retornado após a inserção, se desejado

Uso:

Para usar a classe insertToWsql, primeiro é necessário criar um objeto de banco de dados SQL válido. Em seguida, os valores a serem inseridos devem ser passados para o método insert() ou insertRecord(), dependendo do tipo de operação de inserção necessária. As funções de retorno de chamada podem ser fornecidas para tratar os resultados da inserção.

> 📍 O que a "insertToWsql" pode realizar (descreva em pontos)?

A classe "insertToWsql" é projetada para executar operações de inserção de dados em um banco de dados MySQL. Entre as funcionalidades que essa classe pode realizar, incluem-se:

*   Inserir um novo registro em uma tabela específica do banco de dados.
*   Definir o nome da tabela e os valores dos campos que serão inseridos.
*   Realizar a conexão com o banco de dados MySQL, informando as credenciais de acesso (nome do usuário, senha, host e nome do banco de dados).
*   Verificar se a conexão com o banco de dados foi bem-sucedida.
*   Executar a inserção de dados no banco de dados, através do método "executeInsert".
*   Gerenciar exceções que podem ocorrer durante a execução da operação de inserção de dados, exibindo mensagens de erro personalizadas.
*   Fechar a conexão com o banco de dados ao final da execução do script.

Em resumo, a classe "insertToWsql" permite inserir dados em um banco de dados MySQL de forma simples e segura, com recursos de gerenciamento de erros e verificação de conexão.

> 📍 Exemplo de como instanciar a class "insertToWsql"

####  ***O código estar envolvido em uma promessa javascript***

```javascript


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

```

