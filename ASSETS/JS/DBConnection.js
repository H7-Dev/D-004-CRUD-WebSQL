class DBConnection {
    constructor(dbName, version, description, size) {
      this.db = null;
      this.dbName = dbName;
      this.version = version;
      this.description = description;
      this.size = size;
    }

    async connect() {
      try {
        this.db = openDatabase(this.dbName, this.version, this.description, this.size);
        return this.db;
      } catch (error) {
        throw error;
      }
    }
  }

  const dbConnection = new DBConnection('mydb', '1.0', 'My Database', 2 * 1024 * 1024);
  (async () => {
    try {
      const db = await dbConnection.connect();
      console.log('Successful database connection!');
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
  })();
