// const remoteUrl = `https://your-nextjs-site.com`;

const remoteUrl = `https://perspectiv.vercel.app/`;
const localUrl = `http://localhost:3000`;

const previewSecret = "j8heapkqy4rdz6kudrvsc7ywpvfhrv022abyx5zgmuwpc1xv";
export default function resolveProductionUrl(doc) {
  const baseUrl = remoteUrl;
  // window.location.hostname === "localhost" ? localUrl : remoteUrl;
  const previewUrl = new URL(baseUrl);
  previewUrl.pathname = `/api/preview/start`;
  previewUrl.searchParams.append(`secret`, previewSecret);
  previewUrl.searchParams.append(`id`, doc._id ?? `/`);
  return previewUrl.toString();
}