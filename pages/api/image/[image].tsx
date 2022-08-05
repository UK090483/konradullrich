import type { NextApiRequest, NextApiResponse } from "next";
import https from "https";

const url = "https://cdn.sanity.io/images/5dm7cvy8/development/";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const reqUrl = req.url?.split("/");
  const imageUrl = reqUrl && reqUrl[reqUrl?.length - 1];

  const send = new Promise((resolve, reject) => {
    https.get(`${url}${imageUrl}`, async (response) => {
      response.pipe(res);
      response.on("error", async function () {
        reject();
        return res.status(500).json({ message: "Invalid preview request" });
      });
      response.on("end", async function () {
        resolve(true);
      });
    });
  });
  await send;
};

export default handler;
