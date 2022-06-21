import handler from "pages/api/revalidate";
import { useEffect, useState } from "react";
import { useKey, useKeyPress } from "react-use";

const useScreenshot = () => {
  const [href, setHref] = useState<null | string>(null);
  useEffect(() => {
    const capture = async () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      const video = document.createElement("video");
      console.log(context);
      if (!context) return null;

      try {
        const captureStream = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = captureStream;
        //@ts-ignore
        context.drawImage(video, 0, 0, window.width, window.height);
        const frame = canvas.toDataURL("image/png");
        captureStream.getTracks().forEach((track) => track.stop());

        window.location.href = frame;
      } catch (err) {
        console.error("Error: " + err);
      }
    };

    const handler = (e: KeyboardEvent) => {
      if (e.key === "s") {
        capture();
        console.log("screeenshot");
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);
};

export default useScreenshot;
