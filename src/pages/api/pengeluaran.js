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
    if (req.method === "GET") {
        try {
            const [rows] = await pool.execute(
                "SELECT id,DATE_FORMAT(date, '%Y-%m-%d') as date,kebutuhan,expense,keterangan FROM pengeluaran"
            );
            res.status(200).json({ success: true, data: rows });
        } catch (error) {
            console.error("Database Error:", error);
            res.status(500).json({ success: false, message: "Gagal mengambil data" });
        }
    }

    else if (req.method === "POST") {
        try {
            const { kebutuhan, total, keterangan } = req.body;

            // Validasi input
            if (kebutuhan === "" || total <= 0 || keterangan == "") {
                return res.status(400).json({ success: false, message: "Isi Data Terlebih Dahulu" });
            } else if (isNaN(total) || typeof kebutuhan !== "string" || typeof keterangan !== "string") {
                return res.status(400).json({ success: false, message: "Isi Data Sesuai Format" });

            }
            const [result] = await pool.execute(
                "INSERT INTO pengeluaran(kebutuhan, expense,keterangan) VALUES (?, ?,?)",
                [kebutuhan, total, keterangan]
            );

            res.status(201).json({ success: true, message: "Data berhasil disimpan", insertId: result.insertId });
        } catch (error) {
            console.error("Database Error:", error);
            res.status(500).json({ success: false, message: "Gagal Mengirim Data" });
        }
    }

    else {
        res.status(405).json({ success: false, message: "Method Not Allowed" });
    }
}
