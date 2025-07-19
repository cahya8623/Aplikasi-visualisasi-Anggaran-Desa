import { pool } from './ConfigDB';

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