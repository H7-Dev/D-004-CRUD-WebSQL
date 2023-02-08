class DBInsertData {
    constructor(db) {
        this.db = db;
    }

    async insert(table, data) {
        const keys = Object.keys(data);
        const values = Object.values(data);
        const placeholders = keys.map((key, index) => '?').join(', ');
        const sql = `INSERT INTO ${table} (${keys.join(', ')}) VALUES (${placeholders})`;

        try {
            const emailExists = await new Promise((resolve, reject) => {
                this.db.transaction(tx => {
                    tx.executeSql(`SELECT * FROM ${table} WHERE email = ?`, [data.email], (tx, result) => {
                        resolve(result.rows.length > 0);
                    }, (tx, error) => {
                        reject(error);
                    });
                });
            });

            if (emailExists) {
                console.error('Error inserting data: email already exists');
                alert("O email: " +data.email + " já existe!")
                return;
            }

            await new Promise((resolve, reject) => {
                this.db.transaction(tx => {
                    tx.executeSql(sql, values, (tx, result) => {
                        resolve(result);
                    }, (tx, error) => {
                        reject(error);
                    });
                });
            });
        } catch (error) {
            console.error('Error inserting data: ', error);
        }
    }
}


//   const db = openDatabase('mydb', '1.0', 'My Database', 2 * 1024 * 1024);
// const insertData = new DBInsertData(db);

// (async () => {
//   await insertData.insert('users', { name: 'John Doe', age: 30, email: 'john.doe@example.com' });
//   console.log('Data inserted successfully');
// })();

const btnAction = document.getElementById('btnAction');

btnAction.addEventListener('click', async () => {
    if (btnAction.getAttribute('action') === 'salvar') {
        const db = openDatabase('mydb', '1.0', 'My Database', 2 * 1024 * 1024);
        const insertData = new DBInsertData(db);

        await insertData.insert('users', {
            name: 'Herbert Pinheiro Pereira',
            age: "30",
            email: 'herbert.pinheiro@gmail.com'
        });
        console.log('Data inserted successfully');
        alert('Data inserted successfully');
    }
});