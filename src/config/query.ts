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
