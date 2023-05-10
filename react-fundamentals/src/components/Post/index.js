import React from "react";
import PropTypes from "prop-types";
import { PostHeader } from "./PostHeader";
import { Button } from "../Button";

import { Post as PostStyles, Subtitle, Rate } from "./styles";

export function Post({ post, onRemove, onRead }) {
  return (
    <>
      <PostStyles deleted={post.removed}>
        <PostHeader
          post={{
            id: post.id,
            title: post.title,
            read: post.read,
          }}
          onRemove={onRemove}
        />

        <Subtitle>{post.subtitle}</Subtitle>

        <Rate>Media: {post.likes}</Rate>

        {!post.read && (
          <Button onClick={() => onRead(post.id)}>Marcar como lido</Button>
        )}
      </PostStyles>
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
