// // pages/api/sendFeedback.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import emailjs from 'emailjs-com';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { name, email, message } = req.body;

//     try {
//       const emailResponse = await emailjs.send(
//         'service_a1p9wkj',  // Replace with your EmailJS service ID
//         'YOUR_TEMPLATE_ID',  // Replace with your EmailJS template ID
//         {
//           name,
//           email,
//           message,
//         },
//         'YOUR_USER_ID'  // Replace with your EmailJS user ID
//       );

//       // Send confirmation email to the user
//       const userResponse = await emailjs.send(
//         'YOUR_SERVICE_ID',  
//         'YOUR_TEMPLATE_ID',  
//         {
//           name,
//           email,
//           message,
//         },
//         'YOUR_USER_ID'
//       );

//       res.status(200).json({ message: 'Feedback sent successfully!' });
//     } catch (error) {
//       console.error('Error sending feedback:', error);
//       res.status(500).json({ message: 'Failed to send feedback. Please try again later.' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }
