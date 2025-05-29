


export default async function handler(req, res) {
    if (req.method === "POST") {
        const { username, password } = req.body;

        if (username === "Gending" && password === "Gending123") {
            return res.json({ success: true, message: "Login berhasil" })
        } else {
            return res.status(401).json({ success: false, message: "Username atau password salah" });
        }
    }

}