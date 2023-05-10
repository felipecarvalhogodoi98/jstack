import React, { useMemo, useState } from "react";

import { Post } from "../Post/";
import { Header } from "../Header";
import { Button } from "../Button";

import { ThemeProvider } from "../../context/ThemeContext";
import { Title } from "./styles";

export function App() {
  const [posts, setPosts] = useState([]);
  const [hasUnreadFilter, setHasUnreadFilter] = useState(false);

  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) => (post.read === false && hasUnreadFilter) || !hasUnreadFilter
    );
  }, [posts, hasUnreadFilter]);

  function handleAddPost() {
    setTimeout(() => {
      const id = Math.random();
      setPosts((previousState) => [
        ...previousState,
        {
          id,
          title: "Title" + id,
          subtitle: "Subtitle",
          likes: +id.toString().slice(-4, -2),
          read: false,
          removed: false,
        },
      ]);
    }, 100);
  }

  function handleRemovePost(id) {
    setPosts((previousState) => {
      const newState = [...previousState];
      const postIndex = newState.findIndex((post) => post.id === id);
      newState[postIndex].removed = !newState[postIndex].removed;
      return newState;
    });
  }

  function handleReadPost(id) {
    setPosts((previousState) => {
      const newState = [...previousState];
      const postIndex = newState.findIndex((post) => post.id === id);
      newState[postIndex].read = true;
      return newState;
    });
  }

  function toggleFilterUnread() {
    setHasUnreadFilter((prevState) => !prevState);
  }

  return (
    <ThemeProvider>
      <Header>
        <Title as="h2">
          Posts da semana <Button onClick={handleAddPost}>Atualizar</Button>
          <br />
          <Button onClick={toggleFilterUnread}>
            {!hasUnreadFilter ? "Filtrar não lidos" : "Remover filtro"}
          </Button>
        </Title>
      </Header>

      <hr />

      {!filteredPosts.length && "Nao ha posts"}
      {!!filteredPosts.length &&
        filteredPosts.map((post) => (
          <Post
            key={post.id}
            post={post}
            onRemove={handleRemovePost}
            onRead={handleReadPost}
          />
        ))}
    </ThemeProvider>
  );
}
