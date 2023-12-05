const express = require('express');
const client = require('./db/client');
const getAllRobots = require('./db/robots');
const app = express();
client.connect;

app.get('/', async(req, res) => { 
    const allRobots = await getAllRobots();
    res.send(allRobots);

});


const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));