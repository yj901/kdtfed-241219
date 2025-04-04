import { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles.styles";
import Box from "./components/Box";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const BoxGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Button = styled.button`
  width: 80px;
  padding: 10px 0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const choice = {
  scissors: {
    name: "scissors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFiOu4bU9ZnlBjq3Q27FB8M1xCCA7Z-ZfLA&s",
  },
  rock: {
    name: "rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg",
  },
  paper: {
    name: "paper",
    img: "https://res.cloudinary.com/env-imgs/images/f_auto/shopimages/products/1200/white-card/.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "비겼어요";
    } else if (user.name === "rock") {
      return computer.name === "scissors" ? "이겼어요" : "졌어요";
    } else if (user.name === "scissors") {
      return computer.name === "paper" ? "이겼어요" : "졌어요";
    } else if (user.name === "paper") {
      return computer.name === "rock" ? "이겼어요" : "졌어요";
    }
  };

  const randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];

    return choice[final];
  };

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    const computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <BoxGroup>
          <Box title="You" item={userSelect} result={result} />
          <Box title="Computer" item={computerSelect} result={result} />
        </BoxGroup>
        <ButtonGroup>
          <Button onClick={() => play("scissors")}>가위</Button>
          <Button onClick={() => play("rock")}>바위</Button>
          <Button onClick={() => play("paper")}>보</Button>
        </ButtonGroup>
      </Container>
    </>
  );
}

export default App;
