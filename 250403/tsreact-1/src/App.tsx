import { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.styles";
import Header from "./components/Header";
import BlogPost from "./components/BlogPost";
import Button from "./components/Button";
import Form from "./components/Form";

const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: var(--bg-color);
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
`;

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<Array<Post>>([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    // setTimeout(() => {
    //   setPosts(mockPost);
    // }, 1000);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        {posts.map((post) => (
          <BlogPost key={post.id} title={post.title} body={post.body} />
        ))}
        <ButtonContainer>
          <Button label="등록" />
        </ButtonContainer>
        <Form />
      </Container>
    </>
  );
}

export default App;
