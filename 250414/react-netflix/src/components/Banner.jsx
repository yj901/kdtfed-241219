import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  color: var(--light-color);
  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.8) 20%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const BannerInfo = styled.div`
  width: 1550px;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);

  @media screen and (max-width: 1650px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const MovieTitle = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 30px;
`;

const MovieOverview = styled.p`
  width: calc(400px + 20%);
  font-size: 1.5rem;
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Banner = ({ movie }) => {
  return (
    <Wrapper>
      <Img
        src={`https://image.tmdb.org/t/p/w1920/${movie.backdrop_path}`}
        alt="bgImg"
      />
      <BannerInfo>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieOverview>{movie.overview}</MovieOverview>
      </BannerInfo>
    </Wrapper>
  );
};

export default Banner;
