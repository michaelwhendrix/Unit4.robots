const client = require('./client');

const createRobot = async(name, model, image, safeKids, company, expireDate, releaseDate) => {
    try {
        await client.query(`
            INSERT INTO robots (name, model, image, safeKids, company, expireDate, releaseDate)
            VALUES ('${name}', '${model}', '${image}', ${safeKids}, '${company}', '${expireDate}', 
            '${releaseDate}');
        `)
    } catch (error) {
        console.log(error);
    }
}

const getAllRobots = async() => {
    try {
        const allRobots = await client.query(`
            SELECT id, name, image
            FROM robots;
        `);
        return allRobots;
    } catch (error) {
        console.log(error);
    }
}
module.exports = createRobot, getAllRobots;
