// import { NextApiRequest, NextApiResponse } from "next";

// export const parseJson = (handler: (req: NextApiRequest, res: NextApiResponse) => void | Promise<void>) => async (req : NextApiRequest, res : NextApiResponse) => {
//     if (req.method === 'POST') {
//       const chunks = [];
//       for await (const chunk of req) {
//         chunks.push(chunk);
//       }
//       const body = Buffer.concat(chunks).toString();
//       try {
//         req.body = JSON.parse(body);
//       } catch (e) {
//         console.error('Error parsing JSON:', e);
//         req.body = null;
//       }
//     }
//     return handler(req, res);
//   };