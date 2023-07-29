import sqlite3 from 'sqlite3';
const database = './data.db'

function createDbConnection() {
    const db = new sqlite3.Database(database, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Connected to the database');
    });
    return db;
}

function createTable(db) {
    db.run(`CREATE TABLE IF NOT EXISTS patients (
        health_card INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        role TEXT NOT NULL
    )`);
}