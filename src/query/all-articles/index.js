import { gql, useQuery } from "@apollo/client";
const ARTICLES_QUERY = gql`
  {
    articles(orderBy: createdAt_DESC) {
      slug
      date
      text {
        text
      }
      title
      image {
        url
      }
    }
  }
`;
export default ARTICLES_QUERY;
