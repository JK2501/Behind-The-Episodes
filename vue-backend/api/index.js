import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import path from 'path';
import history from 'connect-history-api-fallback';
import dotenv from 'dotenv';

dotenv.config();

// using local db:
const DB_CONNECTION_URL = 'mongodb://127.0.0.1:27017';
// using online free db cluster
// const DB_CONNECTION_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@vue-fullstack.mxmceh5s.mongodb.net/?retryWrites=true&w=majority`;
const DB_CLUSTER_NAME = process.env.DB_CLUSTER_NAME;
const DB_COLLECTION_NAME = process.env.DB_COLLECTION_NAME;


const app = express();
app.use(bodyParser.json());

// Allow cross-origin requests
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); 
//     res.setHeader('Access-Control-Allow-Methods', 'GET');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });

app.use(express.static(path.resolve(__dirname, '../public'), { maxAge: '1y', etag: false }));
app.use(history());

// Serve Images to :5173 that follow /episodes dir 
app.use('/episodes', express.static(path.join(__dirname, '../public/assets/img')));

app.get('/api/episodes/:episodeId', async (req, res) => {
    const {episodeId } = req.params;
    const client = await MongoClient.connect(
        DB_CONNECTION_URL, 
        { useNewUrlParser: true, useUnifiedTopology: true},
    ); 
    const db = client.db(DB_CLUSTER_NAME);
    const episode = await db.collection(DB_COLLECTION_NAME).findOne({id: parseInt(episodeId)});
    if(episode){
        res.status(200).json(episode);
    } else {
        res.status(404).json('Could not retrieve episode!');
    }
});

app.get('/api/episodes', async (req, res) => {
    const client = await MongoClient.connect(
        DB_CONNECTION_URL, 
        { useNewUrlParser: true, useUnifiedTopology: true},
    ); 
    const db = client.db(DB_CLUSTER_NAME);

    let query = {};
    let name = req.query.name;
    let author = req.query.author;
    let characters = req.query.characters;

    
    if(name){ query.name = { $regex: name, $options: 'i' }};
    if(author){ query.author = { $regex: author, $options: 'i' }};
    if(characters){ 
        let arr = characters.split(',');
        query.characters = { $all: arr }
    };

    const episodes = await db.collection(DB_COLLECTION_NAME).find(query).sort({id: 1}).toArray(); 
    if(episodes){
        res.status(200).json(episodes);
    } else {
        res.status(404).json('Could not retrieve episode!');
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(process.env.PORT || 8000, () => {
    console.log('Server is listening on port 8000!');
});