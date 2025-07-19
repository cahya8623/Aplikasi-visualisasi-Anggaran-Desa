import { pool } from './ConfigDB';

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const [rows] = await pool.execute(
                "SELECT DISTINCT YEAR(date) AS tahun FROM pendapatan ORDER BY tahun DESC"
            );
            res.status(200).json({ success: true, data: rows });
        } catch (error) {
            console.error("Database Error:", error);
            res.status(500).json({ success: false, message: "Gagal mengambil data" });
        }
    }


}
