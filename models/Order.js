// const mongoose = require('mongoose');

// const OrderSchema = new mongoose.Schema({
//     user: {
//         type: mongoose.Schema.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     orderID: {
//         type: String,
//         required: true
//     },
//     paymentinfo: {
//         type: String,
//         default: ''
//     },
//     products: [
//         {
//             product: {
//                 type: mongoose.Schema.ObjectId,
//                 ref: 'Product',
//                 required: true
//             },
//             quantity: {
//                 type: Number,
//                 required: true,
//                 min: 1
//             }
//         }
//     ],
//     total: {
//         type: Number,
//         required: true,
//         min: 0
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// });
// mongoose.models = {}
// module.exports = mongoose.model("Order", OrderSchema);