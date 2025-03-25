import { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled(motion.div)`
  width: 600px;
  height: 600px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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
    scale: 1.5,
    rotateZ: 90,
  },
  click: {
    scale: 1,
    borderRadius: "100px",
  },
};

function App() {
  const biggerRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerRef}>
        <Box
          drag
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerRef}
          variants={boxVarients}
          whileHover={"hover"}
          whileTap={"click"}
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
