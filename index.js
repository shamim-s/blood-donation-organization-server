const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// MiddleWare
app.use(cors());
app.use(express.json());

// Database Connection 
const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@database-2.yrgjegt.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try{

    }
    catch{
        
    }
}
run().catch(err => console.log(err));


app.get('/', (req, res) => {
    res.send('BDO SERVER RUNNING');
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})