const client = require('./client');

const createTask = async(name) => {
    try {
        await client.query(`
            INSERT INTO tasks ( name )
            VALUES ('${name}');
        `)
    } catch (error) {
        console.log(error);
    }

}
module.exports = createTask;