import React from "react";
import PropTypes from "prop-types";
import { PostHeader } from "./PostHeader";
import { Button } from "./Button";

import styles from "./Post.scss";

export function Post({ post, onRemove, onRead }) {
  console.log(styles);
  return (
    <>
      <article className={`${styles.post} ${post.removed && styles.deleted}`}>
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
    removed: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onRead: PropTypes.func.isRequired,
};
