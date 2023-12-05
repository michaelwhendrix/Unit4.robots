const express = require('express');
const client = require('./db/client');
const {getAllRobots} = require('./db/robots');
const app = express();

app.get('/', async(req, res) => { 
    try {
        const allRobots = await getAllRobots();
        res.send(allRobots);    
    } catch (error) {
        console.log(error);
    }

});


const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));