const client = require('./client');


const dropTables = async() => {
    try {
        await client.query(`
            DROP TABLE IF EXISTS robots;
            DROP TABLE IF EXISTS tasks;
            DROP TABLE IF EXISTS customers;
            DROP TABLE IF EXISTS customers_robots;
            DROP TABLE IF EXISTS robots_tasks;
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

            CREATE TABLE tasks (
                id SERIAL PRIMARY KEY,
                name VARCHAR(150)
            );

            CREATE TABLE customers (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100),
                email VARCHAR(150)
            );

            CREATE TABLE customers_robots (
                customer_id INTEGER,
                robot_id INTEGER
            );

            CREATE TABLE robots_tasks (
                robot_id INTEGER,
                task_id INTEGER
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