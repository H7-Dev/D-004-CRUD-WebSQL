function conectarBD() {
    let xa = 'myBd'
        xb = '1.0'
        xc = 'My database'
        xd = 5 * 1024 * 1024 * 1024
    return {xa, xb, xc, xd}
}
// chama a função conectarBD() para obter as configurações do banco de dados
const configBD = conectarBD();
const request = indexedDB.open(configBD.xa, configBD.xb);
request.onerror = (event) => {
  console.log('Erro ao abrir o banco de dados: ', event.target.error);
}
request.onsuccess = (event) => {
  console.log('Banco de dados aberto com sucesso!');
  const db = event.target.result;
};
const db = window.openDatabase(configBD.xa, configBD.xb, configBD.xc, configBD.xd);
