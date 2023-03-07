//#region setDtHrCorrent

/* Descrição */
// Esta função retorna a data e/ou hora atuais no formato YYYY-MM-DD e/ou HH:MM:SS, dependendo do parâmetro de entrada 'opcao'.
// Se 'opcao' for 'data', retorna apenas a data; se 'opcao' for 'hora', retorna apenas a hora; se 'opcao' for 'ambos', retorna data e hora.
// O resultado é retornado como uma string vazia se nenhum formato de saída for especificado ou se 'opcao' não for um valor válido.
function setDtHrCorrent(opcao) {
    const agora = new Date();
    let output = '';

    if (opcao === 'data' || opcao === 'ambos') {
        // Obtém a data atual no formato YYYY-MM-DD
        const mes = (agora.getMonth() + 1).toString().padStart(2, '0');
        const dia = agora.getDate().toString().padStart(2, '0');
        const ano = agora.getFullYear();
        output += `${ano}-${mes}-${dia}`;
    }

    if (opcao === 'hora' || opcao === 'ambos') {
        // Obtém a hora atual no formato HH:MM:SS
        const hora = agora.getHours().toString().padStart(2, '0');
        const minuto = agora.getMinutes().toString().padStart(2, '0');
        const segundo = agora.getSeconds().toString().padStart(2, '0');
        const separador = output ? ' ' : '';
        output += `${separador}${hora}:${minuto}:${segundo}`;
    }

    // Retorna a string resultante com a data e/ou hora atuais no formato especificado
    return output;
}

console.log("⚡ setDtHrCorrent(opcao))")

// Como usar: obtém e imprime a data, hora e data e hora atuais em diferentes formatos
const dataAtual = setDtHrCorrent('data');
console.log(`Hoje é dia ${dataAtual}.`);

const horaAtual = setDtHrCorrent('hora');
console.log(`Agora são ${horaAtual}.`);

const dataHoraAtual = setDtHrCorrent('ambos');
console.log(`A data e hora atual são ${dataHoraAtual}.`);
console.log("end////////")

//#endregion