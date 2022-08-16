import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("error");

  return res.json({ message: "logging" });
};

export default handler;
