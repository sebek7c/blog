import { gql, useQuery } from "@apollo/client";
const ARTICLES_QUERY = gql`
  {
    articles(orderBy: createdAt_DESC) {
      slug
      date
      text {
        text
        markdown
      }
      title
      image {
        url
        handle
        height
        width
      }
    }
  }
`;
export default ARTICLES_QUERY;
