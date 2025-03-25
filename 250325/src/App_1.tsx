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
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
};

function App() {
  return (
    <Wrapper className="App">
      {/* <Box transition={{ duration: 3 }} animate={{ borderRadius: "100px" }} /> */}
      <Box variants={myVars} initial={"start"} animate={"end"} />
    </Wrapper>
  );
}

export default App;
