import React from "react";
import PropTypes from "prop-types";
import { PostHeader } from "./PostHeader";
import { Button } from "./Button";

export function Post({ post, onRemove, onRead }) {
  return (
    <>
      <article>
        <PostHeader
          post={{
            id: post.id,
            title: post.title,
            read: post.read,
          }}
          onRemove={onRemove}
        />
        <br />
        <small>{post.subtitle}</small>
        <br />
        Likes: {post.likes}
        <br />
        {!post.read && (
          <Button onClick={() => onRead(post.id)}>Marcar como lido</Button>
        )}
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
