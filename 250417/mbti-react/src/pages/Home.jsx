import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHywwY1uku0ZUaWf_DfWdj66nycx7VRsUB6gILqbnmUVuxjm6V_QUqGmLiQDjSNuG-50&usqp=CAU")
    no-repeat left bottom #fffdf1;
`;

const Header = styled.div`
  font-size: 4rem;
  color: var(--dark-color);
  background: var(--accent-color);
  padding: 12px 28px;
  border-radius: 100px;
`;

const Contents = styled.div`
  color: var(--dark-color);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  & > button[type="button"] {
    font-size: 2rem;
    padding: 4px 18px;
    border-radius: 100px;
  }
`;

const Title = styled.div`
  font-size: 2.5rem;
`;

const LogoImg = styled.div`
  & > img {
    width: 350px;
    height: 350px;
    border: 4px solid var(--border-color);
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  font-size: 2rem;
  color: var(--dark-color);
  background: var(--accent-color);
  padding: 10px 18px;
  border-radius: 100px;
`;

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/question");
  };

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인님은?🐈</Title>
        <LogoImg>
          <img src="/cat/ggompang.jpeg" alt="mainCat" />
        </LogoImg>
        <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 고양이 찾기</Desc>
        <Button onClick={handleClickButton} variant="danger">
          테스트 시작하기
        </Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;
