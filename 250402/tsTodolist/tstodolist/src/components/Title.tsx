import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.h1`
  font-size: 2.4rem;
`;

interface Props {
  readonly label: string;
}

const Title = ({ label }: Props) => {
  return (
    <>
      <Container>
        <Label>{label}</Label>
      </Container>
    </>
  );
};

export default Title;
