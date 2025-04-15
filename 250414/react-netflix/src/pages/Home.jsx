import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import styled from "styled-components";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { ClipLoader } from "react-spinners";

const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Title = styled.h1`
  margin: 50px 14px 30px;
  width: 300px;
  font-size: 2rem;
  border-radius: 4px;
  color: var(--light-color);
`;

const Home = () => {
  const dispatch = useDispatch();
  let [loading, setLoading] = useState(false);
  const { nowPlayingMovie, topRatedMovie, upComingMovie } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <ClipLoader
          size={150}
          loading={loading}
          cssOverride={override}
          // color="#fff"
        />
      </Wrapper>
    );
  } else {
    return (
      <>
        {nowPlayingMovie.results && (
          <Banner movie={nowPlayingMovie?.results[8]} />
        )}
        <Title>현재 인기 상영작</Title>
        <MovieSlide movies={nowPlayingMovie} />
        <Title>역대 최고 영화 TOP 20</Title>
        <MovieSlide movies={topRatedMovie} />
        <Title>다가올 영화 개봉작</Title>
        <MovieSlide movies={upComingMovie} />
      </>
    );
  }
};

export default Home;
