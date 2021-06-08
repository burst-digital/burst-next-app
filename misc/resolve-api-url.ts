export default function resolveApiUrl(
  url: URL,
  options?: { endpoint?: string; ssl?: boolean; www?: boolean },
) {
  const opts = {
    endpoint: '/graphql',
    ssl: true,
    subdomain: 'cms',
    www: false,
    ...options,
  };

  let { hostname } = url;

  if (hostname.endsWith('.localhost')) {
    hostname = url.hostname.substr(
      0,
      url.hostname.length - '.localhost'.length,
    );
  }

  if (hostname.startsWith('www')) {
    hostname = hostname.replace('www', opts.subdomain);
  } else if (!hostname.startsWith(opts.subdomain)) {
    hostname = `${opts.subdomain}.${hostname}`;
  }

  if (opts.www) {
    hostname = hostname.replace(opts.subdomain, 'www');
  }

  const protocol = opts.ssl ? 'https' : 'http';

  hostname = `${protocol}://${hostname}${
    opts.endpoint ? opts.endpoint : url.pathname
  }${url.search ? `?${url.search}` : ''}${url.hash ? `#${url.hash}` : ''}`;

  return new URL(hostname);
}
