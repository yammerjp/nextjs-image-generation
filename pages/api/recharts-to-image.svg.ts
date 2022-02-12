import ReactDOMServer from 'react-dom/server';
import rechartElement from '../../components/graph'
import { parse } from 'node-html-parser'

function recharts2svgString() {
  // React componentsをHTML文字列に
  const htmlStringRoot = ReactDOMServer.renderToString(rechartElement())

  // SVGの部分だけ抜き出す
  const svgString = parse(htmlStringRoot).querySelector("svg").toString()

  return '<?xml version="1.0"?>' + svgString.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink" ')
}

const RechartsToImageSvg = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {

  res.writeHead(200, {
    "Content-Type": "image/svg+xml",
  });
  res.write(recharts2svgString())
  res.end()
};

export { recharts2svgString };
export default RechartsToImageSvg;
