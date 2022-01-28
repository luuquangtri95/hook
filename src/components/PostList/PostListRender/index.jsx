import React from "react";
import PropTypes from "prop-types";

PostListRender.propTypes = {
  postList: PropTypes.array,
};

PostListRender.defaultProps = {
  postList: [],
};

function PostListRender({ postList }) {
  return (
    <ul>
      {postList.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default PostListRender;
