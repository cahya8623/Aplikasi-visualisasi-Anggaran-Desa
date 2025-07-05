import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_desa",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


export default async function handler(req, res) {
    if (req.method === "POST") {
        const { username, password } = req.body;

        const [rows] = await pool.execute("SELECT * FROM users WHERE username = ?", [username]);
        if (rows.length === 0) return res.status(401).json({ message: "User tidak ditemukan" });

        const user = rows[0];
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ message: "Password salah" });

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(200).json({ token, role: user.role });
    }

}