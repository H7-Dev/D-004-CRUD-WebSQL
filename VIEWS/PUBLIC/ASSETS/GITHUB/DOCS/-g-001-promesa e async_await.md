


Este código é uma operação de inserção em um banco de dados usando JavaScript, utilizando a class chamada "insertToWsql" para realizar a operação.

O código começa definindo um objeto chamado "inputs" que armazena os valores dos campos de entrada de dados em uma página web, como o nome, email, data de nascimento, país, sexo, etc. Esses valores são obtidos por meio do método "document.querySelector" que seleciona um elemento HTML com base no seletor CSS especificado.

Em seguida, são definidas variáveis para armazenar o nome da tabela ("tabela"), os campos que serão inseridos na tabela ("campos"), o campo que será retornado após a inserção ("retorno"), e um campo único que será usado para verificar se já existe um registro com o mesmo valor ("campoUnico").

A função "insertToWsql.insert" é chamada para realizar a operação de inserção no banco de dados. Esta função recebe vários argumentos, incluindo o nome da tabela, os valores do registro, os campos a serem inseridos, uma função de retorno de chamada para lidar com o resultado da operação e outras informações adicionais.

Se a inserção for bem-sucedida, a mensagem de sucesso é exibida no console, juntamente com o ID do registro inserido e o campo de retorno especificado. Caso contrário, a mensagem de erro é exibida no console.

Este código é específico para a biblioteca "insertToWsql" e depende do seu funcionamento. Além disso, é importante notar que o código pode precisar de ajustes dependendo do contexto em que está sendo utilizado.

> implementar um promessa para certificar que os valores de todos os inputs foram obtidos para só depois chamar o insertToWsql.

Para implementar uma promessa para certificar que os valores de todos os inputs foram obtidos antes de chamar a função "insertToWsql.insert", você pode criar uma função que retorna uma promessa que aguarda a obtenção de todos os valores de entrada. Em seguida, você pode chamar a função "insertToWsql.insert" dentro da função "then" da promessa para garantir que todos os valores de entrada tenham sido obtidos antes da inserção.

Aqui está um exemplo de como implementar isso:

javascript

```javascript
function getInputsValues() {
  return new Promise((resolve, reject) => {
    const inputs = {
      idPessoas    : document.querySelector('body > div.form.frmPessoa.ativado > div > div.main > div.chat > label.in_email > input.in_email').value.replace(/\s/g, '').replace(/[^a-zA-Z0-9]/g, ''),
      in_nome      : document.querySelector('body > div.form.frmPessoa.ativado > div > div.main > div.chat > label.in_nome > input.in_nome'),
      in_email     : document.querySelector('body > div.form.frmPessoa.ativado > div > div.main > div.chat > label.in_email > input.in_email'),
      in_dtNasc    : document.querySelector('body > div.form.frmPessoa.ativado > div > div.main > div.chat > label.in_dtNasc > input.in_dtNasc'),
      in_optsPais  : document.querySelector('body > div.form.frmPessoa.ativado > div > div.main > div.chat > label.customSelc.col1-3 > input.in_optsPais'),
      in_optsSexo  : document.querySelector('body > div.form.frmPessoa > div > div.main > div.chat > label.customSelc.col3 > input.in_optsSexo')
    };

    // Verifica se todos os valores foram obtidos
    if (inputs.idPessoas && inputs.in_nome && inputs.in_email && inputs.in_dtNasc && inputs.in_optsPais && inputs.in_optsSexo) {
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
    c_nome:   inputs.in_nome.value,
    c_email:  inputs.in_email.value,
    c_date:   inputs.in_dtNasc.value,
    c_pais:   inputs.in_optsPais.value,
    c_sexo:   inputs.in_optsSexo.value
  };
  const campos = ['idPessoas', 'c_nome', 'c_email', 'c_date', 'c_pais', 'c_sexo'];
  const retorno = 'c_nome';
  const campoUnico = 'c_email';

  insertToWsql.insert(db, tabela, registro, campos, function (success, message, insertId, returnField) {
    if (success) {
      console.log(message);
      // console.log('ID do registro inserido:', insertId);
      // console.log('Campo de retorno:', returnField);
    } else {
      console.error(message);
    }
  }, retorno, campoUnico);
}).catch((error) => {
  console.error(error);
});
```

Neste exemplo, a função "getInputsValues" retorna

> 3 / 3
>
> agora, Utilizar async/await ao invés de Promise

Claro, segue o código utilizando async/await:

javascript

```javascript
async function insertRegistro() {
  const inputs = {
    idPessoas: document.querySelector('body > div.form.frmPessoa.ativado > div > div.main > div.chat > label.in_email > input.in_email').value.replace(/\s/g, '').replace(/[^a-zA-Z0-9]/g, ''),
    in_nome: document.querySelector('body > div.form.frmPessoa.ativado > div > div.main > div.chat > label.in_nome > input.in_nome'),
    in_email: document.querySelector('body > div.form.frmPessoa.ativado > div > div.main > div.chat > label.in_email > input.in_email'),
    in_dtNasc: document.querySelector('body > div.form.frmPessoa.ativado > div > div.main > div.chat > label.in_dtNasc > input.in_dtNasc'),
    in_optsPais: document.querySelector('body > div.form.frmPessoa.ativado > div > div.main > div.chat > label.customSelc.col1-3 > input.in_optsPais'),
    in_optsSexo: document.querySelector('body > div.form.frmPessoa > div > div.main > div.chat > label.customSelc.col3 > input.in_optsSexo')
  };

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

  try {
    // Espera todos os valores dos inputs serem obtidos
    await Promise.all(Object.values(inputs).map((input) => input.ready));

    // Insere o registro no banco de dados
    const { success, message, insertId, returnField } = await new Promise((resolve, reject) => {
      insertToWsql.insert(db, tabela, registro, campos, (success, message, insertId, returnField) => {
        if (success) {
          resolve({ success, message, insertId, returnField });
        } else {
          reject(message);
        }
      }, retorno, campoUnico);
    });

    console.log(message);
    // console.log('ID do registro inserido:', insertId);
    // console.log('Campo de retorno:', returnField);
  } catch (error) {
    console.error(error);
  }
}

insertRegistro();
```

Nesse código, utilizamos o `async` na função `insertRegistro` e o `await` antes das duas chamadas assíncronas: a primeira é o `Promise.all` que espera que todas as promessas retornadas por `Object.values(inputs).map((input) => input.ready)` sejam resolvidas antes de prosseguir. A segunda é a própria chamada assíncrona a `insertToWsql.insert`, envolta em uma `Promise` para poder ser utilizada com `await`. O resultado dessa chamada é armazenado em uma variável e, caso tenha sucesso, o resultado é impresso no console. Caso haja erro, o mesmo é impresso no console também.