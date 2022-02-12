// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//
import ReactDOMServer from 'react-dom/server';
import rechartElement from '../../components/graph'

const createOgp = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {

  res.writeHead(200, {
    "Content-Type": "text/plain",
    // "Content-Length": buffer.length,
  });
  //res.end(buffer, "binary");
  //
  res.write(ReactDOMServer.renderToString(rechartElement()))
  res.end()
};

export default createOgp;

