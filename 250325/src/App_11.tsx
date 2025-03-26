import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 100px;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background: var(--light-color);
  border-radius: 60px;
  box-shadow: 0 10px 20px rgba(172, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  /* border-radius: 50%; */
  background: var(--circle-color);
  box-shadow: 0 10px 20px rgba(25, 161, 240, 0.3);
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => {
    setClicked((prev) => !prev);
  };
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {!clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: 50 }} />
        ) : null}
      </Box>
      <Box>
        {clicked ? <Circle layoutId="circle" style={{ scale: 2 }} /> : null}
      </Box>
    </Wrapper>
  );
}

export default App;
