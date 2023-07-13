import Product from '@/models/Product';

export default async function handler(req, res) {

    console.log('CONNECTED TO MONGO');
    const products = await Product.find({});
    res.status(200).json(
        JSON.parse(JSON.stringify({
            success: true,
            products: products
        }))
    );
}
