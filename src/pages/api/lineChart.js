import mysql from "mysql2/promise"

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



    if (req.method === "GET") {
        try {
            const [rows] = await pool.execute(
                "SELECT YEAR(date) AS tahun, SUM(amount) AS total FROM pemasukan GROUP BY YEAR(date); "
            );
            res.status(200).json({ success: true, data: rows });
        } catch (error) {
            console.error("Database Error:", error);
            res.status(500).json({ success: false, message: "Gagal mengambil data" });
        }
    }

}