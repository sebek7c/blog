import { gql } from "@apollo/client";

const ADD_COMMENT = gql`
  mutation createComment(
    $email: String!
    $content: String!
    $name: String
    $slug: String
  ) {
    __typename
    createComment(
      data: {
        email: $email
        content: $content
        name: $name
        article: { connect: { slug: $slug } }
      }
    ) {
      email
      name
      content
    }
  }
`;

export default ADD_COMMENT;
