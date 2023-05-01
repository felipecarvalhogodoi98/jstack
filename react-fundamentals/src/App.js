import React, { useMemo, useState } from "react";

import { Post } from "./Post";
import { Header } from "./Header";

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
          likes: 40,
          read: false,
        },
      ]);
    }, 100);
  }

  function handleRemovePost(id) {
    setPosts((previousState) => {
      const newState = [...previousState];
      const postIndex = newState.findIndex((post) => post.id === id);
      newState.splice(postIndex, 1);
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
    <React.Fragment>
      <Header>
        <h2>
          Posts da semana <button onClick={handleAddPost}>Atualizar</button>
          <br />
          <button onClick={toggleFilterUnread}>
            {!hasUnreadFilter ? "Filtrar não lidos" : "Remover filtro"}
          </button>
        </h2>
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
    </React.Fragment>
  );
}
