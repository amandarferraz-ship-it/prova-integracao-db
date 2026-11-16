import { Connection } from 'mysql2';
import mysql2 from 'mysql2/promise';

export const  conexao = mysql2.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env).DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_USE,
    waitForConnections: true,
    connectionLimit: 10


})

export default conexao;