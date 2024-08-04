import Product from '@/models/Product';
import connect from '@/lib/db';

export default async function handler(req, res) {
    await connect(); // Ensure a database connection

    console.log('CONNECTED TO MONGO');
    try {
        const products = await Product.find({});
        res.status(200).json(
            JSON.parse(JSON.stringify({
                success: true,
                products: products
            }))
        );
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Error Getting products' });
    }
}