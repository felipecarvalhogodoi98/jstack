import React from "react";
import PropTypes from "prop-types";
import { Button } from "../Button";

import { PostHeader as PostHeaderStyles } from "./styles";

export function PostHeader({ post, onRemove, onRead }) {
  return (
    <PostHeaderStyles>
      <strong>{post.read ? <s>{post.title}</s> : post.title}</strong>
      <Button onClick={() => onRemove(post.id)}>Remover</Button>
    </PostHeaderStyles>
  );
}

PostHeader.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};
