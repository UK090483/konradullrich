import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("log");
  console.error("error");
  console.info("info");

  return res.json({ message: "logging" });
};

export default handler;
