import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { questionData } from "../assets/questiondata";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://r1.community.samsung.com/t5/image/serverpage/image-id/6443547iEC2812E6451342DC/image-size/large?v=v2&px=999")
    no-repeat right bottom #ffe8b6;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 98vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 2.5rem;
  margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  & > button {
    width: 350px;
    height: 200px;
    font-size: 2rem;
  }
`;

const Question = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  const navigate = useNavigate();

  // const handleClickButtonA = (num, type) => {
  //   if (type === "EI") {
  //     const addScore = totalScore[0].score + num;
  //     const newObject = { id: "EI", score: addScore };
  //     totalScore.splice(0, 1, newObject);
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + num;
  //     const newObject = { id: "SN", score: addScore };
  //     totalScore.splice(1, 1, newObject);
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + num;
  //     const newObject = { id: "TF", score: addScore };
  //     totalScore.splice(2, 1, newObject);
  //   } else {
  //     const addScore = totalScore[3].score + num;
  //     const newObject = { id: "JP", score: addScore };
  //     totalScore.splice(3, 1, newObject);
  //   }
  //   setQuestionNum(questionNum + 1);
  // };

  // const handleClickButtonB = (num, type) => {
  //   setQuestionNum(questionNum + 1);
  // };

  const handleClickButton = (num, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + num } : s
    );
    setTotalScore(newScore);
    if (questionData.length !== questionNum + 1) {
      setQuestionNum(questionNum + 1);
    } else {
      navigate("/result");
    }
  };

  return (
    <>
      <Container>
        <ProgressBar
          striped
          variant="danger"
          now={(questionNum / questionData.length) * 100}
        />
        <Wrapper>
          <Title>{questionData[questionNum].title}</Title>
          <ButtonGroup>
            <Button
              variant="warning"
              onClick={() =>
                handleClickButton(1, questionData[questionNum].type)
              }
            >
              {questionData[questionNum].answera}
            </Button>
            <Button
              variant="warning"
              onClick={() =>
                handleClickButton(0, questionData[questionNum].type)
              }
            >
              {questionData[questionNum].answerb}
            </Button>
          </ButtonGroup>
        </Wrapper>
      </Container>
    </>
  );
};

export default Question;
