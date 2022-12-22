const express = require('express');
const mysql = require('mysql');

const app = express();

const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values ('Aslap')`;
connection.query(sql);
connection.end();

app.get('/', (request, response) => {
    response.send('<h1>Hello world, Aslap</h1>')
});

app.listen(port, () => {
    console.log(`Server is running, port: ${port}`);
});