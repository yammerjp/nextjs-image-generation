// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//
import ReactDOMServer from 'react-dom/server';
import rechartElement from '../../components/graph'
import { parse } from 'node-html-parser'

const svg = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {

  res.writeHead(200, {
    "Content-Type": "text/plain",
    // "Content-Length": buffer.length,
  });
  //res.end(buffer, "binary");
  //
  const htmlStringRoot = ReactDOMServer.renderToString(rechartElement())
  const svgString = parse(htmlStringRoot).querySelector("svg").toString()

  res.write(svgString)
  res.end()
};

export default svg;

