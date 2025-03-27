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
                "select sum(amount) as total from pemasukan"
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