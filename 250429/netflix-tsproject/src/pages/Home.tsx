import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { getMovies, IGetMovieResult } from "../api";
import { makeImagePath } from "../utils";

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 200vh;
  background: ${({ theme }) => theme.black.veryDark};
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.red};
`;

const Banner = styled.div<IBgPhoto>`
  padding: 0 30px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${({ $bgPhoto }) => $bgPhoto}) center/cover no-repeat;
  color: ${({ theme }) => theme.white.darker};
`;

const Title = styled.h2`
  font-size: 4rem;
  word-break: keep-all;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  word-break: keep-all;
  width: 50%;
  font-size: 1.4rem;
  line-height: 1.4;
  letter-spacing: -0.02em;
`;

const Slider = styled.div`
  width: 100%;
  position: relative;
  top: -100px;
`;

const Row = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

const Box = styled(motion.div)`
  width: auto;
  height: 200px;
  background: ${({ theme }) => theme.white.darker};
`;

const Info = styled.div``;

const ModalBox = styled.div``;

const Overlay = styled.div``;

const MovieCover = styled.div``;

const MovieTitle = styled.h3``;

const MovieOverView = styled.p``;

interface IBgPhoto {
  $bgPhoto: string | undefined;
}

const rowVariants = {
  hidden: {
    x: window.innerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth - 10,
  },
};

const Home = () => {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const { isLoading, data } = useQuery<IGetMovieResult>({
    queryKey: ["nowPlaying"],
    queryFn: getMovies,
  });

  const toggleLeaving = () => {
    setLeaving((prev) => !prev);
  };

  const inCreaseIndex = () => {
    if (leaving) return;
    toggleLeaving();
    setIndex((prev) => prev + 1);
  };

  return (
    <Container>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={inCreaseIndex}
            $bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                key={index}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 0.8 }}
              >
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <Box key={index}>{item}</Box>
                ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Container>
  );
};

export default Home;
