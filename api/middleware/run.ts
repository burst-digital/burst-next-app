import { NextApiRequest, NextApiResponse } from 'next';

export default function runMiddleware<F extends Function>(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: F,
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}
