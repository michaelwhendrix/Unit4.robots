const client = require('./client');

const createTables = async() => {
    try {
        
    } catch (error) {
        console.log(error);
    }
}

const syncAndSeed = async() => {
    await client.connect();
    console.log('CONNECTED TO DATABASE');
    client.end;
}
syncAndSeed();