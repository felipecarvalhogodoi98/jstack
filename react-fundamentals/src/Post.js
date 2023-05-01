import React from "react";
import PropTypes from "prop-types";

export function Post({ post, onRemove }) {
  return (
    <>
      <article>
        <strong>{post.title}</strong>
        <button onClick={() => onRemove(post.id)}>Remover</button>
        <br />
        <small>{post.subtitle}</small>
        <br />
        Likes: {post.likes / 2}
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};
