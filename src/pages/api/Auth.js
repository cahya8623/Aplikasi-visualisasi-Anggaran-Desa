import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Ada Kesalahan Input" });
    }
    const USERNAME = process.env.AUTH_USERNAME;
    const PASSWORD = process.env.PASSWORD;
    const SECRET_KEY = process.env.JWT_SECRET;




    if (username !== USERNAME) {
        return res.status(401).json({ message: 'Username salah' });
    }


    if (password !== PASSWORD) {
        return res.status(401).json({ message: 'Password salah' });
    }

    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({ token });
}