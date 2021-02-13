import React from "react";
import ARTICLE_QUERY from "../../query/slingle-article";
import { graphql, useQuery } from "@apollo/client";

const EntirePost = () => {
  const { loading, error, data } = useQuery(ARTICLE_QUERY);

  return <div></div>;
};

export default EntirePost;
