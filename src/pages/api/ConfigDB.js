import mysql from "mysql2/promise";
export const configDB = {
    host: "shuttle.proxy.rlwy.net",
    port: "22578",
    user: "root",
    password: "rpXisrIruFZzDpqcIHKQBGsyJCcpWZxB",
    database: "railway",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}
export const pool = mysql.createPool(configDB);