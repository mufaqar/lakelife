const gql = String.raw;

export const QAllProducts = `
  query products {
    products(first: 10) {
      edges {
        node {
          title
        }
      }
    }
  }
`;

export const QSingleProduct = `
query MyQuery($slug: String!) {
  productByHandle(handle: $slug) {
    title
    variants(first: 1) {
      nodes {
        id
      }
    }
  }
}`;
