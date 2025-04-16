import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap";

const Wrapper = styled.div`
  width: 100%;
  padding-left: 20px;
  /* height: 200px; */
  overflow: hidden;
  position: relative;
  /* @media screen and (max-width: 1200px) {
    height: 200px;
  } */
`;

const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s;
    background: rgba(0, 0, 0, 0.3) 100%;
  }
  &:hover {
    &::before {
      opacity: 1;
    }
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TopTxt = styled.div`
  position: absolute;
  width: 60%;
  left: 10px;
  top: 10px;
`;

const Title = styled.h3`
  font-size: 1.6;
  font-weight: 600;
  line-height: 1.3;
`;

const Genre = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 3px;
`;

const Adult = styled.div`
  font-size: 1.3rem;
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 8px 10px 10px;
  background: var(--accent-color);
  border-radius: 0 0 0 8px;
`;

const Vote = styled.span`
  font-size: 1.3rem;
  /* position: absolute;
  /* bottom: 10px;
  right: 10px; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 3px;
  .material-icons {
    font-size: 1.4rem;
  }
`;

const MovieCard = ({ item }) => {
  const { genresMovie } = useSelector((state) => state.movie);
  return (
    <Wrapper>
      <Inner>
        <Overlay className="overlay">
          <Img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} />
        </Overlay>

        <TopTxt>
          <Title>{item.title}</Title>
          <Genre>
            {item.genre_ids.map((id, index) => (
              <Badge bg="danger" key={index}>
                {genresMovie.find((item) => item.id === id).name}
              </Badge>
            ))}
          </Genre>
        </TopTxt>
        <Adult>{item.adult ? "성인" : "전체이용가"}</Adult>
        <Vote>
          <span className="material-icons">star_rate</span>평점 :{" "}
          {item.vote_average.toFixed(1)}
        </Vote>
      </Inner>
    </Wrapper>
  );
};

export default MovieCard;
