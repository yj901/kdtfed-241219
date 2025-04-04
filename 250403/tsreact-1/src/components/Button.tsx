import styled from "styled-components";

const Container = styled.button`
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  background: #ff5714;
  color: #fff;
  cursor: pointer;
`;

interface Props {
  readonly label: string;
  readonly color?: string;
  readonly onClick?: () => void;
}

const Button = ({ label, color, onClick }: Props) => {
  return (
    <>
      <Container style={{ background: `${color}` }} onClick={onClick}>
        {label}
      </Container>
    </>
  );
};

export default Button;
