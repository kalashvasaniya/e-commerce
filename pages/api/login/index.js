import User from '@/models/User';
import db from '@/middleware';

export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            const { email, password } = req.body;
            const user = await User.findOne({
                email,
                password
            });
            if (req.body.email === user.email && req.body.password === user.password) {
                return res.status(200).json({ success: true, name: user.name, email: user.email });
            } else {
                return res.status(400).json({ success: false, error: 'Invalid email or password' });
            }
        }
    }
    catch {
        return res.status(400).json({ success: false, error: 'Invalid email or password' });
    }
}
