import { pool } from './ConfigDB';

export default async function handler(req, res) {

  if (req.method === "GET") {
    const { year } = req.query;


    try {
      let query = "SELECT id, amount,Uraian,  DATE_FORMAT(date, '%Y-%m-%d') AS date FROM pendapatan ";
      const params = [];

      if (year) {
        query += " WHERE YEAR(date) = ?";
        params.push(year);
      }

      query += " ORDER BY date DESC, id DESC";

      const [rows] = await pool.execute(query, params);
      res.status(200).json({ success: true, data: rows });


    } catch (error) {
      console.error("Database Error:", error);
      res.status(500).json({ success: false, message: "Gagal mengambil data" });
    }

  }

  else if (req.method === "POST") {
    try {
      const { jmlPendapatan, Source } = req.body;


      if ((jmlPendapatan && Source === undefined) || jmlPendapatan <= 0 || Source === "") {
        return res.status(400).json({ success: false, message: "Masukkan Data Terlebih Dahulu" });
      } else if (isNaN(jmlPendapatan) || typeof Source !== "string") {
        return res.status(400).json({ success: false, message: "Masukkan Data Sesuai Format" });
      }

      const [result] = await pool.execute(
        "INSERT INTO pendapatan (amount,Uraian) VALUES (?,?)",
        [jmlPendapatan, Source]
      );

      res.status(201).json({ success: true, message: "Data berhasil disimpan", insertId: result.insertId });
    } catch (error) {
      console.error("Database Error:", error);
      res.status(500).json({ success: false, message: "Gagal Mengirim Data" });
    }
  }

  else if (req.method === "DELETE") {

    const { id } = req.query;
    console.log(id)
    if (!id) {
      return res.status(400).json({ message: "ID diperlukan untuk menghapus data" });
    }
    console.log(id)
    try {

      const result = await pool.query("DELETE FROM pendapatan WHERE id = ?", [id]);

      if (result[0].affectedRows === 0) {
        return res.status(404).json({ message: "Data tidak ditemukan" });
      }

      return res.status(200).json({ message: "Data berhasil dihapus" });
    } catch (error) {
      console.error("Error deleting data:", error);
      return res.status(500).json({ message: "Terjadi kesalahan server" });
    }



  } else if (req.method === "PUT") {
    const { id } = req.query;
    const { jmlPendapatan, Source } = req.body;


    if (jmlPendapatan <= 0 || Source === "") {
      return alert("Masukkan Data Terlebih Dahulu");
    } else if (
      isNaN(jmlPendapatan) ||

      typeof Source !== "string"
    ) {
      return alert("Masukkan Data Sesuai Format");
    }



    try {
      const [result] = await pool.execute(
        "UPDATE pendapatan SET amount = ?, Uraian = ? WHERE id = ?",
        [jmlPendapatan, Source, id,]
      );

      if (result.affectedRows > 0) {
        return res.status(200).json({ success: true, message: "Data berhasil diupdate!" });
      } else {
        return res.status(404).json({ success: false, message: "Data tidak ditemukan!" });
      }
    } catch (error) {
      return res.status(500).json({ success: false, message: "Terjadi kesalahan", error });
    }


  }
  else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }


}
