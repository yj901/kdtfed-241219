import styled from "styled-components";

const Container = styled.div`
  background: var(--light-color);
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Body = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

interface Props {
  readonly title: string;
  readonly body: string;
}

const BlogPost = ({ title, body }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Container>
  );
};

export default BlogPost;
