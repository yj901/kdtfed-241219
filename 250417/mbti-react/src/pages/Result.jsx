import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { resultdata } from "../assets/resultdata";
import KakaoShareButton from "../components/KakaoShareButton";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnq5mh_5m2m2zQrzU_iqhj1CrRxstaZBG6tYOVeIVdcmAQPV0iCPo9sCrQswF1CVjrtdE&usqp=CAU")
    no-repeat left bottom #ffe6cd;
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
  padding: 10px 28px;
  border-radius: 100px;
  text-align: center;
  line-height: 1.2;
`;

const ButtonGroups = styled.div`
  display: flex;
  gap: 10px;
  button {
    font-size: 1.7rem;
    padding: 6px 20px;
    border-radius: 100px;
  }
`;

const Result = () => {
  const [resultData, setResultData] = useState();
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/");
  };
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");

  useEffect(() => {
    const result = resultdata.find((item) => item.best === mbti);

    setResultData(result);
  }, [mbti]);

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>결과보기🐈</Title>
        <LogoImg>
          <img src={resultData?.image} alt="mainCat" />
        </LogoImg>
        <Desc>
          예비집사님과 찰떡궁합인 고양이는 <br /> {resultData?.best}형 &nbsp;
          {resultData?.name} 고양이입니다.
        </Desc>
        <ButtonGroups>
          <Button variant="danger" onClick={handleClickButton}>
            테스트 다시 시작하기
          </Button>
          <KakaoShareButton data={resultData} />
        </ButtonGroups>
      </Contents>
    </Wrapper>
  );
};

export default Result;
