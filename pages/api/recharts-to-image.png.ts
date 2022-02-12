import { createCanvas, Image } from 'canvas'
import { recharts2svgString } from './recharts-to-image.svg'

const RechartsToImagePng = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const canvas = createCanvas(400, 400);
  const ctx = canvas.getContext("2d");

  // 背景を白に
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, 400, 400);

  // SVGを読み込んでcanvasに埋め込む
  const img = new Image();
  img.src = "data:image/svg+xml," + recharts2svgString();
  ctx.drawImage(img, 0, 0, 400, 400);

  // canvasをpngでresponseする
  const buffer = canvas.toBuffer();
  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": buffer.length,
  });
  res.end(buffer, "binary");
};

export default RechartsToImagePng;

