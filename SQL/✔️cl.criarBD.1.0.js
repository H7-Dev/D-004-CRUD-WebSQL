// Questão: Class javascript para criar um banco de dados em websql

class BDcriarConec {
    constructor(name, version, desc, size) {
        this.db = null;
        this.name = name;
        this.version = version || 1;
        this.desc = desc || 'My database';
        this.size = size || 2 * 1024 * 1024;
    }

    async createDB() {
        try {
            this.db = await openDatabase(this.name, this.version, this.desc, this.size);
            console.log(`Banco de dados "${this.name}" criado com sucesso.`);
            return this.db;
        } catch (e) {
            console.error(`Erro ao criar o banco de dados "${this.name}": `, e);
            throw e;
        }
    }
}

async function createMyDB() {
    const myDB = new BDcriarConec('myBd');
    try {
        const db = await myDB.createDB();
        console.log(`Banco de dados "${myDB.name}" criado com sucesso: `, db);
    } catch (e) {
        console.error(`Erro ao criar o banco de dados "${myDB.name}": `, e);
    }
}

// Como usar:
async function createMyDB() {
    const myDB = new BDcriarConec('meuBd', '1.0', 'Meu banco de dados', 10 * 1024 * 1024 * 1024);
    try {
        const db = await myDB.createDB();
        console.log(`Banco de dados "${myDB.name}" criado com sucesso: `, db);
    } catch (e) {
        console.error(`Erro ao criar o banco de dados "${myDB.name}": `, e);
    }
}
createMyDB()