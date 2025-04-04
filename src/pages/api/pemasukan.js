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
        "SELECT id, amount, source, DATE_FORMAT(date, '%Y-%m-%d') AS date FROM pemasukan ORDER BY date DESC, id DESC"
      );
      res.status(200).json({ success: true, data: rows });
    } catch (error) {
      console.error("Database Error:", error);
      res.status(500).json({ success: false, message: "Gagal mengambil data" });
    }
  }

  else if (req.method === "POST") {
    try {
      const { jmlPendapatan, Sumber } = req.body;

      // Validasi input
      if (Sumber === "" || (jmlPendapatan && Sumber === undefined) || jmlPendapatan <= 0) {

        return res.status(400).json({ success: false, message: "Masukkan Data Terlebih Dahulu" });
      } else if (isNaN(jmlPendapatan) || !isNaN(Number(Sumber))) {
        return res.status(400).json({ success: false, message: "Masukkan Data Sesuai Format" });
      }


      if (Sumber === "" || isNaN(jmlPendapatan)) {
        return res.status(400).json({ success: false, message: "Data tidak valid" });
      }

      const [result] = await pool.execute(
        "INSERT INTO pemasukan (amount, source) VALUES (?, ?)",
        [jmlPendapatan, Sumber]
      );

      res.status(201).json({ success: true, message: "Data berhasil disimpan", insertId: result.insertId });
    } catch (error) {
      console.error("Database Error:", error);
      res.status(500).json({ success: false, message: "Gagal Mengirim Data" });
    }
  }

  else if (req.method === "DELETE") {

    const { id } = req.query; // Ambil ID dari query parameter
    console.log(id)
    if (!id) {
      return res.status(400).json({ message: "ID diperlukan untuk menghapus data" });
    }
    console.log(id)
    try {

      const result = await pool.query("DELETE FROM pemasukan WHERE id = ?", [id]);

      if (result[0].affectedRows === 0) {
        return res.status(404).json({ message: "Data tidak ditemukan" });
      }

      return res.status(200).json({ message: "Data berhasil dihapus" });
    } catch (error) {
      console.error("Error deleting data:", error);
      return res.status(500).json({ message: "Terjadi kesalahan server" });
    }



  } else if (req.method === "PUT") {
    const { id } = req.query; // Ambil ID dari query parameter
    const { jmlPendapatan, Sumber } = req.body;

    if (!id || !jmlPendapatan || !Sumber) {
      return res.status(400).json({ success: false, message: "Data tidak lengkap" });
    }

    try {
      const [result] = await connection.execute(
        "UPDATE pemasukan SET amount = ?, source = ? WHERE id = ?",
        [jmlPendapatan, Sumber, id]
      );

      if (result.affectedRows > 0) {
        return res.status(200).json({ success: true, message: "Data berhasil diupdate!" });
      } else {
        return res.status(404).json({ success: false, message: "Data tidak ditemukan!" });
      }
    } catch (error) {
      return res.status(500).json({ success: false, message: "Terjadi kesalahan", error });
    } finally {
      connection.end();
    }


  }
  else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }


}
