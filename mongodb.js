const {MongoClient} = require('mongodb');  // imports

const url = 'mongodb://localhost:27017'; // local url connection of mongodb
const database = 'firstDatabase';  // database name
const client =  new MongoClient(url);

async function dbConnect(){
  let result = await client.connect();

  let db = result.db(database);

  return db.collection('products');
}


module.exports = dbConnect;