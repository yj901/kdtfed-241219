import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(172, 0, 0, 0.2);
`;

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background: var(--light-color);
  box-shadow: 0 10px 20px rgba(177, 0, 0, 0.15);
  place-self: center;
`;

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      delay: 0.5,
      bounce: 0.5,
      delayChildren: 1,
      staggerChildren: 0.5,
    },
  },
};

const circleVariants = {
  start: {
    scale: 0,
    opacity: 0,
    y: 90,
  },
  end: {
    scale: 1,
    opacity: 1,
    y: 0,
    // transition: {
    //   type: "spring",
    //   delay: 1,
    //   bounce: 0.8,
    //   duration: 2,
    // },
  },
};

function App() {
  return (
    <Wrapper className="App">
      <Box variants={boxVariants} initial={"start"} animate={"end"}>
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  );
}

export default App;
