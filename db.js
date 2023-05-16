const mongoose = require("mongoose");

const uri = "";

async function connect () {
    try {
        await mongoose.connect(uri, { bdName: 'db-name'});
        console.log("connected to the database");
    } catch (err) {
        console.error(err);
    }
}

module.exports = connect;