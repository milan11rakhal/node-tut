const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'node-tut'
const client = new MongoClient(url);


   async function dbConnect() {
    try {
        console.log("Fetching data...");
        result = await client.connect();
        let db = result.db(database);
        return db.collection('products');
        // let response = await collection.find().toArray();
        // console.log(response)
    } catch (error) {
        console.error("Error:", error);
    }
}

module.exports = dbConnect