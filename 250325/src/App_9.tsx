import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: var(--light-color);
  border-radius: 40px;
  margin: 10px;
  box-shadow: 0 10px 20px rgba(172, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  position: absolute;
  top: 200px;
`;

const BoxList = styled.div`
  display: flex;
  gap: 20px;
`;

const box = {
  initial: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),

  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exits: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    rotateX: 180,
    transition: {
      duration: 0.5,
    },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const prevPlease = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setBack(true);
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  };
  const nextPlease = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setBack(false);
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  };
  return (
    <Wrapper>
      <AnimatePresence mode="wait" custom={back}>
        {arr.map((i) =>
          i === visible ? (
            <Box
              custom={back}
              key={visible}
              variants={box}
              initial="initial"
              animate="visible"
              exit="exits"
              onAnimationComplete={() => setIsAnimating(false)}
            >
              {visible}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <BoxList>
        <button onClick={prevPlease}>Prev</button>
        <button onClick={nextPlease}>Next</button>
      </BoxList>
    </Wrapper>
  );
}

export default App;
