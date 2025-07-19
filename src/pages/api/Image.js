import multer from 'multer';
import { pool } from './ConfigDB';
import cloudinary from "../../component/cloudinary"
import fs from "fs";



const upload = multer({ dest: '/tmp' });

export const config = {
    api: {
        bodyParser: false,
    },
};

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) return reject(result);
            return resolve(result);
        });
    });
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await runMiddleware(req, res, upload.single('gambar'));

            const file = req.file;
            const { title, description } = req.body;
            if (!file) {
                return res.status(400).json({ success: false, message: 'Tidak ada file yang diupload' });
            }

            if (title && description === "") {
                return res.status(400).json({ success: false, message: 'Masukkan Title Atau Deskripsi' });
            }


            // Upload ke Cloudinary
            const result = await cloudinary.uploader.upload(file.path, {
                folder: "berita",
            });

            // Hapus file lokal sementara
            fs.unlinkSync(file.path);

            const imageUrl = result.secure_url;

            const query = "INSERT INTO berita (gambar, title, description) VALUES (?, ?, ?)";
            const [insert] = await pool.execute(query, [imageUrl, title, description]);

            res.status(201).json({
                success: true,
                message: "Gambar berhasil diupload dan disimpan ke database",
                insertId: insert.insertId,
                url: imageUrl,
            });
        } catch (error) {
            console.error('Upload Error:', error);
            res.status(500).json({ success: false, message: 'Gagal upload gambar', error: error.message });
        }
    }
    else if (req.method === 'GET') {
        const { year } = req.query;

        try {
            let query = "SELECT id, DATE_FORMAT(date, '%Y-%m-%d') as date, gambar,title,description FROM berita";
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
    else if (req.method === "DELETE") {
        const { id } = req.query;
        console.log(id)
        if (!id) {
            return res.status(400).json({ message: "ID diperlukan untuk menghapus data" });
        }
        console.log(id)
        try {

            const result = await pool.query("DELETE FROM berita WHERE id = ?", [id]);

            if (result[0].affectedRows === 0) {
                return res.status(404).json({ message: "Data tidak ditemukan" });
            }

            return res.status(200).json({ message: "Data berhasil dihapus" });
        } catch (error) {
            console.error("Error deleting data:", error);
            return res.status(500).json({ message: "Terjadi kesalahan server" });
        }
    }

    else {
        res.status(405).json({ success: false, message: 'Method tidak diizinkan' });
    }
}