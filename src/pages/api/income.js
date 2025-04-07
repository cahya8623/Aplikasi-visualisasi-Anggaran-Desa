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
                "SELECT SUM(amount) AS total, DATE_FORMAT(date, '%Y-%m-%d') AS date FROM pemasukan WHERE YEAR(date) = ? GROUP BY DATE_FORMAT(date, '%Y-%m-%d') ORDER BY date",
                [year]

            );

            const parsedRows = rows.map((row) => ({ ...row, total: parseInt(row.total) }))

            console.log("parsedRows", parsedRows)

            res.status(200).json({ success: true, data: parsedRows });
        } catch (error) {
            console.error("Database Error:", error);
            res.status(500).json({ success: false, message: "Gagal mengambil data" });
        }
    }

}