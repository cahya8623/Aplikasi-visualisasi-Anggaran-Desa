import mysql from "mysql2/promise";
import fs from 'fs';
import path from 'path';
import multer from 'multer';

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_desa",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


const uploadDir = path.join(process.cwd(), 'public/uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + file.originalname;
        cb(null, uniqueName);
    },
});
const upload = multer({ storage });

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


            const filename = file.filename;
            const query = 'INSERT INTO gambar_produk (gambar,title,description) VALUES (?, ?, ?)';
            const [result] = await pool.execute(query, [filename, title, description]);

            res.status(201).json({
                success: true,
                message: 'Gambar berhasil diupload dan nama disimpan ke database',
                insertId: result.insertId,
                filename,
                url: `/uploads/${filename}`,
            });
        } catch (error) {
            console.error('Upload Error:', error);
            res.status(500).json({ success: false, message: 'Gagal upload gambar', error: error.message });
        }
    }
    else if (req.method === 'GET') {
        const { year } = req.query;

        try {
            let query = "SELECT id, DATE_FORMAT(date, '%Y-%m-%d') as date, gambar FROM gambar_produk";
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
    else {
        res.status(405).json({ success: false, message: 'Method tidak diizinkan' });
    }
}