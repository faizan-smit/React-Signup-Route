import {MongoClient} from 'mongodb'

const uri = process.env.MONGO_DB_URI;

const client = new MongoClient(uri);

// async function run() {

//     try {

//         await client.connect();

//         console.log("Successfully connected to Atlas");

//     } catch (err) {

//         console.log(err.stack);

//     }

//     finally {

//         await client.close();
//         console.log("Successfully disconnected");

//     }

// }

// run().catch(console.dir);

export {client};