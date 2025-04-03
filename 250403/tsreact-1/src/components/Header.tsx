import styled from "styled-components";

const Container = styled.div`
  background: var(--light-color);
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
`;

const Header = () => {
  return (
    <Container>
      <Title>블로그 포스트</Title>
    </Container>
  );
};

export default Header;
