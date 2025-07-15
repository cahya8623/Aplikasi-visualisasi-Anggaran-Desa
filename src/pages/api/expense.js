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
        const { year } = req.query

        try {
            const [rows] = await pool.execute(
                " SELECT SUM(expense) AS total, kebutuhan FROM realisasi WHERE YEAR(date) = ? GROUP BY kebutuhan ORDER BY total DESC LIMIT 1",
                [year]
            );
            res.status(200).json({ success: true, data: rows });
        } catch (error) {
            console.error("Database Error:", error);
            res.status(500).json({ success: false, message: "Gagal mengambil data" });
        }
    }

}