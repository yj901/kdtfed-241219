import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";

const Wrapper = styled.div`
  color: var(--light-color);
`;

const MovieSlide = ({ movies }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop1: {
      breakpoint: { max: 3000, min: 1880 },
      items: 5,
    },
    desktop2: {
      breakpoint: { max: 1880, min: 1600 },
      items: 5,
    },
    desktop3: {
      breakpoint: { max: 1600, min: 1300 },
      items: 4,
    },
    desktop4: {
      breakpoint: { max: 1300, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  const movieList = movies?.results ?? [];
  return (
    <Wrapper>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={4000}
        autoPlay={false}
        centerMode={true}
      >
        {movieList.map((item, index) => (
          <MovieCard key={index} item={item} />
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default MovieSlide;
