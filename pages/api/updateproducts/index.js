import Product from '@/models/Product';
import connect from '@/lib/db';

export default async function handler(req, res) {
    await connect(); // Ensure a database connection
    if (req.method === 'POST') {
        try {
            for (let i = 0; i < req.body.length; i++) {
                await Product.findByIdAndUpdate(
                    req.body[i]._id,
                    req.body[i]
                )
            }
            res.status(200).json({ message: 'Products saved successfully' });

        } catch (err) {
            console.error('Failed to connect to MongoDB:', err);
            res.status(400).json({ message: 'Error saving products' });
        }
    }
}