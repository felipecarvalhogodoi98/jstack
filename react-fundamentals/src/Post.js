import React from "react";
import PropTypes from "prop-types";

export function Post({ post, onRemove, onRead }) {
  return (
    <>
      <article>
        <strong>{post.read ? <s>{post.title}</s> : post.title}</strong>
        <button onClick={() => onRemove(post.id)}>Remover</button>
        <br />
        <small>{post.subtitle}</small>
        <br />
        Likes: {post.likes}
        <br />
        <button onClick={() => onRead(post.id)}>Marcar como lido</button>
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
    read: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onRead: PropTypes.func.isRequired,
};
