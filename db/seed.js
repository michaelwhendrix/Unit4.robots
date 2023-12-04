const client = require('./client');


const dropTables = async() => {
    try {
        await client.query(`
            DROP TABLE IF EXISTS robots;
        `)
    } catch (error) {
        console.log(error);
    }
}
const createTables = async() => {
    try {
        await client.query(`
            CREATE TABLE robots (
                id SERIAL PRIMARY KEY,
                name VARCHAR(50),
                model VARCHAR(50),
                image VARCHAR(200),
                safeKids BOOLEAN,
                company VARCHAR(70),
                expireDate DATE,
                releaseDate DATE
            );
        `)
    } catch (error) {
        console.log(error);
    }
}

const syncAndSeed = async() => {
    await client.connect();
    console.log('CONNECTED TO DATABASE');
    await dropTables();
    console.log('DROPPED TABLES');
    await createTables();
    console.log('CREATED TABLES');
    client.end;
}
syncAndSeed();