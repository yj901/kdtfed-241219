import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* width: calc(100% - 32px); */
  width: 100%;
  border: 1px solid gray;
  border-radius: 8px;
  padding: 16px;
  background: var(--primary-light-color);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: #d3d3d3;
  }
`;
const ContentText = styled.p`
  font-size: 16px;
`;

const CommentListitem = ({ comment }) => {
  return (
    <Wrapper>
      <ContentText>{comment.content}</ContentText>
    </Wrapper>
  );
};

export default CommentListitem;
