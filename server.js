const express = require('express');
const cors = reure('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');



require('dotenv').config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());



massive(process.env.CONNECTION_STRING)
    .then((databaseVariable)=>{
        app.set('db', databaseVariable);
        console.log('db is connected');
    })
    .catch((error)=> {
        console.log(`Error: ${error}`)
    })

const port = process.env.PORT;
function listening(){
    console.log(`Listening on port ${port}`)
}

app.listen(port, listening());
