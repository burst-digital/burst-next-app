import Homepage, {
  getStaticProps as getStaticPropsGraphqlRequest,
} from './graphql-clients/graphql-request';

export default Homepage;

export const getStaticProps = getStaticPropsGraphqlRequest;
