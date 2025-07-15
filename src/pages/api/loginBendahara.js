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
        const { Bendahara, Bendaharapassword } = req.body;


        const [rows] = await pool.execute("SELECT * FROM users");

        if (rows.length === 0) {
            return res.status(404).json({ message: "Tidak ada user di database" });
        }

        const user = rows[1]; // Ambil hanya baris pertama

        const match = await bcrypt.compare(Bendaharapassword, user.password);

        if (Bendahara !== user.username && !match) {
            return res.status(401).json({ message: "Username Salah & Password salah" });
        } else if (Bendahara !== user.username) {
            return res.status(401).json({ message: "Username Salah" });
        } else if (!match) {
            return res.status(401).json({ message: "Password salah" });
        }
        if (Bendahara === "" && Bendaharapassword === "") {
            return res.status(401).json({ message: "Masukkan Username Dan Password Telebih Dahulu" });
        } else if (Bendahara === "") {
            return res.status(401).json({ message: "Masukkan Dulu Usernamenya" });
        } else if (Bendaharapassword === "") {
            return res.status(401).json({ message: "Masukkan Dulu Passwordnya" });
        }




        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(200).json({ token, role: user.role });
    }

}