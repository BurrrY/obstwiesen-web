export default function handler(req, res) {
    const { email } = req.body;
    console.log(req)
    // Perform server-side operations with `email`
    res.status(200).json({ message: 'Signup successful' });
}