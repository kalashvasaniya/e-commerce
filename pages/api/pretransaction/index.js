// const https = require('https');
// const PaytmChecksum = require('paytmchecksum');


// export default async function handler(req, res) {
//     if (req.method === 'POST') {

//         var paytmParams = {};

//         paytmParams.body = {
//             "requestType": "Payment",
//             "mid": process.env.NEXT_PUBLIC_PAYTM_MID,
//             "websiteName": "YOUR_WEBSITE_NAME",
//             "orderId": req.body.oid,
//             "callbackUrl": `${process.env.NEXT_PUBLIC_HOST}/api/posttransaction`,
//             "txnAmount": {
//                 "value": req.body.subTotal,
//                 "currency": "INR",
//             },
//             "userInfo": {
//                 "custId": req.body.email,
//             },
//         };

//         /*
//         * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
//         */
//         const checksum = await PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), process.env.PAYTM_MKEY);

//         paytmParams.head = {
//             signature: checksum
//         };

//         const post_data = JSON.stringify(paytmParams);

//         const options = {
//             hostname: 'securegw.paytm.in',
//             port: 443,
//             path: `/theia/api/v1/initiateTransaction?mid=${process.env.NEXT_PUBLIC_PAYTM_MID}&orderId=${req.body.oid}`,
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Content-Length': post_data.length
//             }
//         };

//         const response = await new Promise((resolve) => {
//             const post_req = https.request(options, function (post_res) {
//                 let responseData = '';

//                 post_res.on('data', function (chunk) {
//                     responseData += chunk;
//                 });

//                 post_res.on('end', function () {
//                     resolve(responseData);
//                 });
//             });

//             post_req.write(post_data);
//             post_req.end();
//         });

//         const parsedResponse = JSON.parse(response).body;

//         res.status(200).json({success: true, body: parsedResponse });
//     } else {
//         res.status(405).json({success: false, error: 'Method not allowed' });
//     }
// }