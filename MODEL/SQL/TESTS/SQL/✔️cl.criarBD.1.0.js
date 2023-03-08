class BDcriarConec {
    constructor(name, version, desc, size) {
        this.db = null;
        this.name = name;
        this.version = version;
        this.desc = desc;
        this.size = size;
    }

    async createDB() {
        try {
            this.db = await openDatabase(this.name, this.version, this.desc, this.size);
            // console.log('Banco de dados criado com sucesso.');
            return this.db;
        } catch (e) {
            // console.error('Erro ao criar o banco de dados: ', e);
            throw e;
        }
    }
}

async function main() {
    const myDB = new BDcriarConec('myBd', '1.0', 'My database', 5 * 1024 * 1024 * 1024);
    try {
        const db = await myDB.createDB();
        console.log('Banco de dados criado com sucesso: ', db);
    } catch (e) {
        console.error('Erro ao criar o banco de dados: ', e);
    }
}
main()
