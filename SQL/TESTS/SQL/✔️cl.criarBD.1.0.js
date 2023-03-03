class criarBD {
    constructor(nome, versao, descricao, tamanho) {
        this.nome = nome;
        this.versao = versao;
        this.descricao = descricao;
        this.tamanho = tamanho;
        this.db = null;
    }

    async criarBancoDeDados() {
        return new Promise((resolve, reject) => {
            this.db = window.openDatabase(this.nome, this.versao, this.descricao, this.tamanho,
                () => resolve(this.db),
                (error) => reject(error)
            );
        });
    }
}
async function criarBDAsync() {
    const banco = new criarBD('meu_banco', '1.0', 'Meu banco de dados', 2 * 1024 * 1024);
    try {
        const db = await banco.criarBancoDeDados();
        console.log('Banco de dados criado com sucesso:', db);
    } catch (error) {
        console.error('Erro ao criar banco de dados:', error);
    }
}

criarBDAsync();