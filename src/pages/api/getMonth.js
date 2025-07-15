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
        const { year } = req.query;


        try {
            const [rows] = await pool.execute(
                "SELECT YEAR(date) AS tahun, DATE_FORMAT(date, '%M') AS bulan, amount FROM pendapatan WHERE YEAR(date) = ? ORDER BY YEAR(date), MONTH(date)",
                [year]
            );
            res.status(200).json({ success: true, data: rows });
        } catch (error) {
            console.error("Database Error:", error);
            res.status(500).json({ success: false, message: "Gagal mengambil data" });
        }
    }

}