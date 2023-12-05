const client = require('./client');

const createCustomers = async(name, email) => {
    try {
        await client.query(`
            INSERT INTO customers ( name, email)
            VALUES ('${name}', '${email}');
        `)
    } catch (error) {
        console.log(error);
    }

}
module.exports = createCustomers;