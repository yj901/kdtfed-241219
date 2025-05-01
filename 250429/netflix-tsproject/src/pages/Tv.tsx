import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 60px;
  color: ${({ theme }) => theme.white.lighter};
`;

const Tv = () => {
  return <Container>Tv</Container>;
};

export default Tv;
