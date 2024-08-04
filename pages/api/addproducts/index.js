import Product from '@/models/Product';
import connect from '@/lib/db';

export default async function handler(req, res) {
    await connect(); // Ensure a database connection
    if (req.method === 'POST') {
        try {
            for (let i = 0; i < req.body.length; i++) {
                const product = new Product({
                    name: req.body[i].name,
                    slug: req.body[i].slug,
                    description: req.body[i].description,
                    size: req.body[i].size,
                    color: req.body[i].color,
                    category: req.body[i].category,
                    price: req.body[i].price,
                    image: req.body[i].image,
                });

                const savedProduct = await product.save();
                console.log('Product saved:', savedProduct);
            }
            res.status(200).json({ message: 'Products saved successfully' });

        } catch (err) {
            console.error('Failed to connect to MongoDB:', err);
            res.status(400).json({ message: 'Error saving products' });
        }
    }
}
