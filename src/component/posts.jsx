import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Posts = () => {
  const { year, month } = useParams();
  const [searchParams] = useSearchParams();
  // URL:  /posts/2019/03?isBirthMonth=true
  console.log(searchParams.get("isBirthMonth"));
  return (
    <div>
      <h1>Posts</h1>
      <p>
        Year: {year} , Month: {month}
      </p>
    </div>
  );
};

export default Posts;
