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
  background: var(--light-color);
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(172, 0, 0, 0.2);
`;

const boxVarients = {
  hover: {
    scale: 2,
    rotateZ: 90,
  },
  click: {
    borderRadius: "100px",
    scale: 1,
  },
  drag: {
    backgroundColor: "blue",
    transition: {
      duration: 3,
    },
  },
};

function App() {
  return (
    <Wrapper className="App">
      <Box
        drag
        variants={boxVarients}
        whileHover={"hover"}
        whileTap={"click"}
        whileDrag={"drag"}
      />
    </Wrapper>
  );
}

export default App;
