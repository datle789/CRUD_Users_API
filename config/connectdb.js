import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'practicenodejs'
});

connection.connect(function (err) {
    if (err) {
        console.error('Error connecting: ');
        return;
    }

    console.log('Connected');
});

export default connection;