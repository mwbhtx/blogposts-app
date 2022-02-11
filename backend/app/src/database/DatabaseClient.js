const {MongoClient} = require('mongodb');



/**
 * DatabaseClient Singleton
 */
class DatabaseClient {

    constructor() {
            
        if (DatabaseClient._instance) {
            return DatabaseClient._instance;
        }

        DatabaseClient._instance = this;
  
        this.username = encodeURIComponent(process.env.MONGODB_USER);
        this.password = encodeURIComponent(process.env.MONGODB_PASS);
        this.clusterURL = process.env.MONGODB_CLUSTER_URL;
        this.authMechanism = "DEFAULT";
        this.uri = `mongodb+srv://${this.username}:${this.password}@${this.clusterURL}?authMechanism=${this.authMechanism}&retryWrites=true&w=majority`;
    }

    getClient() {
        return new MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true });
    }

    async getAllDocuments(database, collection, query = {}) {
        
        const client = this.getClient();

        try {
            await client.connect();
            const cursor = client.db(database).collection(collection).find(query);
            return await cursor.toArray();
        }
        finally {
            await client.close();
        }

    }

    async getOneDocument(database, collection, query = {}) {
        
        const client = this.getClient();

        try {
            await client.connect();
            return await client.db(database).collection(collection).findOne(query);
            
        }
        finally {
            await client.close();
        }

    }

    async createOneDocument(database, collection, document) {

        const client = this.getClient();

        try {

            await client.connect();
            const result = await client.db(database).collection(collection).insertOne(document);
            return result.insertedId;

        }
        finally {
            await client.close();
        }

    }

}


/**
 * Export User Modules
 */
module.exports = new DatabaseClient();