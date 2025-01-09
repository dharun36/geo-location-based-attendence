// app.js
const connection = require('./db'); // Import the connection

// Example query to select all records from a table named 'users'
const query = 'SELECT * FROM users';

connection.query(query, (error, results) => {
    if (error) {
        console.error('Error executing query:', error.stack);
        return;
    }
    console.log('Query results:', results);
});

// Close the connection when done
connection.end((err) => {
    if (err) {
        console.error('Error closing the connection:', err.stack);
        return;
    }
    console.log('Database connection closed.');
});