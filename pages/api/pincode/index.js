import connect from '@/lib/db';
export default async function handler(req, res) {
    await connect(); // Ensure a database connection
    res.status(200).json([327001, 632014, 234234])
}