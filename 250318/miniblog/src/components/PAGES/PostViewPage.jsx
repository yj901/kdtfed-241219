import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../LIST/CommentList";
import Textinput from "../UI/Textinput";
import Button from "../UI/Button";
import data from "../../data.json";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const PostContainer = styled.div`
  border: 1px solid gray;
  border-radius: 8px;
  padding: 18px;
`;

const TitleText = styled.p`
  font-size: 24px;
  margin-bottom: 12px;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 16px;
  line-height: 26px;
`;

const Commentlabel = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const PostViewPage = () => {
  const [comment, setCommet] = useState("");
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = data.find((item) => item.id == postId);
  return (
    <Wrapper>
      <Container>
        <Button
          title="뒤로가기"
          onClick={() => {
            navigate("/");
          }}
        />
        <PostContainer>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </PostContainer>
        <Commentlabel>댓글</Commentlabel>
        <CommentList comments={post.comments} />
        <Textinput
          height={80}
          value={comment}
          onChange={(e) => setCommet(e.target.value)}
        />
        <Button
          title="댓글 작성하기"
          onClick={() => {
            navigate("/");
          }}
        />
      </Container>
    </Wrapper>
  );
};

export default PostViewPage;
