import React, { useState } from "react";

import { Post } from "./Post";
import { Header } from "./Header";

export function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "React",
      subtitle: "Biblioteca JS",
      likes: 20,
    },
    {
      id: Math.random(),
      title: "Vue",
      subtitle: "Framework JS",
      likes: 30,
    },
  ]);

  function handleRefresh() {
    setTimeout(() => {
      const id = Math.random();
      setPosts((previousState) => [
        ...previousState,
        {
          id,
          title: "Angular" + id,
          subtitle: "Framework JS",
          likes: 40,
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

  return (
    <React.Fragment>
      <Header>
        <h2>
          Posts da semana <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post key={post.id} post={post} onRemove={handleRemovePost} />
      ))}
    </React.Fragment>
  );
}
