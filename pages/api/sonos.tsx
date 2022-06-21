// @ts-nocheck
import type { NextApiRequest, NextApiResponse } from "next";
import { AsyncDeviceDiscovery } from "sonos";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body._id);
  let discovery = new AsyncDeviceDiscovery();

  const device = await discovery.discover();

  const currentState = await device.getCurrentState();
  //   if (currentState === "playing") {
  //     await device.stop();
  //   }
  //   if (currentState === "stopped") {
  //     await device.play();
  //   }

  const playmode = await device.getPlayMode();
  const currentTrack = await device.currentTrack();

  return res.json({ currentState, currentTrack, playmode });
};

export default handler;
