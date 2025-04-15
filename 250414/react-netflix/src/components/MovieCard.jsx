import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding-left: 14px;
  height: 200px;
  /* @media screen and (max-width: 1200px) {
    height: 200px;
  } */
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h3``;

const Genre = styled.div``;

const Vote = styled.span``;

const MovieCard = ({ item }) => {
  return (
    <Wrapper>
      <Img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} />
    </Wrapper>
  );
};

export default MovieCard;
