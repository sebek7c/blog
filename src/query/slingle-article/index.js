import { gql, useQuery } from "@apollo/client";

const ARTICLE_QUERY = gql`
  query MyQuery($slug: String!) {
    article(where: { slug: $slug }) {
      comments(orderBy: createdAt_DESC) {
        content
        email
        name
        id
        createdAt
      }
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
export default ARTICLE_QUERY;
