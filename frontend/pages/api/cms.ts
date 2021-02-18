import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import qs from 'querystring';
import resolveApiUrl from '../../misc/resolve-api-url';

/**
 * Function that acts as a proxy with more fine grained control to do GraphQL requests to the CMS.
 * @param req
 * @param res
 */
export default function(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method === 'GET' ? 'GET' : 'POST';

  const apiUrl = resolveApiUrl(new URL(process.env.WEBSITE_ORIGIN ?? ''));

  const url = req.query
    ? `${apiUrl.origin}?${qs.stringify(req.query)}`
    : apiUrl.origin;

  return axios({
    method,
    url,
  })
    .then(result => res.json(result.data))
    .catch(error => {
      res.status(500).json({ error });
    });
}
