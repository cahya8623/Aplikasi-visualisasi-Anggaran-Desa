
import jwt from 'jsonwebtoken';

export default function verifyToken(req, res) {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];

    if (!token) {
        res.status(401).json({ message: 'Token tidak ditemukan' });
        return null;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (err) {
        res.status(403).json({ message: 'Token tidak valid' });
        return null;
    }
}
