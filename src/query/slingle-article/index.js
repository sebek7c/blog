import { gql, useQuery } from "@apollo/client";
const ARTICLE_QUERY = gql`
  {
    article(slug: $slug) {
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
export default ARTICLE_QUERY;
