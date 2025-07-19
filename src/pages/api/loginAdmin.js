import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from './ConfigDB';




export default async function handler(req, res) {
    if (req.method === "POST") {
        const { Admin, Adminpassword } = req.body;


        const [rows] = await pool.execute("SELECT * FROM users");

        if (rows.length === 0) {
            return res.status(404).json({ message: "Tidak ada user di database" });
        }

        const user = rows[0];
        const match = await bcrypt.compare(Adminpassword, user.password);
        if (Admin !== user.username && !match) {
            return res.status(401).json({ message: "Username Salah & Password salah" });
        } else if (Admin !== user.username) {
            return res.status(401).json({ message: "Username Salah" });
        } else if (!match) {
            return res.status(401).json({ message: "Password salah" });
        }
        if (Admin === "" && Adminpassword === "") {
            return res.status(401).json({ message: "Masukkan Username Dan Password Telebih Dahulu" });
        } else if (Admin === "") {
            return res.status(401).json({ message: "Masukkan Dulu Usernamenya" });
        } else if (Adminpassword === "") {
            return res.status(401).json({ message: "Masukkan Dulu Passwordnya" });
        }



        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(200).json({ token, role: user.role });
    }

}