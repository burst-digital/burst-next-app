// import { createGraphqlRequestSdk } from './graphql-request-sdk';

export async function getRedirect() {
  // path: string,
  // sdk: ReturnType<typeof createGraphqlRequestSdk>,
  try {
    // const result = await sdk.Redirect({ path });

    const result = { redirect: { target: '/dest', status: 301 } };

    if (result.redirect) {
      return {
        redirect: {
          destination: result.redirect.target,
          permanent: result.redirect.status === 301,
        },
      };
    }

    return null;
  } catch (e) {
    return null;
  }
}
