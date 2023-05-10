import { styled } from "styled-components";

export const Post = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;

  margin-bottom: 24px;

  opacity: ${(props) => (props.deleted ? 0.4 : 1)};
`;

export const PostHeader = styled.article`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const Subtitle = styled.small``;

export const Rate = styled.span``;
