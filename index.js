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
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@database-2.yrgjegt.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try{
        const bloodCategory = client.db('bdoDatabase').collection('bloodCategory');
        const usersCollection = client.db('bdoDatabase').collection('usersCollection');

        //Geting all blood categories
        app.get('/category', async(req, res) => {
            const query = {};
            const result = await bloodCategory.find(query).toArray();
            res.send(result);
        })

        //Adding new user to database
        app.post('/newUser', async(req, res) => {
            const user = req.body;
            const result = await usersCollection.insertOne(user);
            res.send(result);
        })

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