// db.js
const mysql = require('mysql');
const config = require('./config'); // Import configuration

// Create a connection to the database
const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as ID', connection.threadId);
});

// Export the connection for use in other files
module.exports = connection;