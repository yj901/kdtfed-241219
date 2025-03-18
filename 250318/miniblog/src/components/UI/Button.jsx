import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 8px;
  margin-bottom: 10px;
  font-size: 16px;
  cursor: pointer;
  padding: 8px 16px;
`;

const Button = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
};

export default Button;
