import styled from "styled-components";

const Container = styled.button``;

interface Props {
  readonly label: string;
}

const Button = ({ label }: Props) => {
  return <Container>{label}</Container>;
};

export default Button;
