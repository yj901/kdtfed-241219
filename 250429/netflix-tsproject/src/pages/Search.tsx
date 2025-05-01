import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { searchContents, IGetMovieResult, searchGenres } from "../api";
import { makeImagePath } from "../utils";

const Container = styled.div`
  width: 100%;
  height: 200vh;
  padding: 0 30px;
  padding-top: 60px;
  color: ${({ theme }) => theme.white.lighter};
`;
const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.red};
`;
const SearchBox = styled.div`
  margin-bottom: 40px;
`;

const MovieSection = styled.div`
  display: flex;
`;

const MovieImg = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
`;

const ReadyImg = styled.div`
  width: 50%;
  background: #aaa;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const MovieInfo = styled.div`
  width: 50%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  word-break: keep-all;
`;

const MovieTitle = styled.div`
  font-size: 2.2rem;
`;

const MovieOverView = styled.div`
  font-size: 1.5rem;
  line-height: 1.4;
  border-top: 1px solid ${({ theme }) => theme.black.light};
  padding-top: 15px;
`;

const MovieDate = styled.div`
  font-size: 1.4rem;
`;

const MovieValue = styled.div`
  font-size: 1.4rem;
`;

const RateNumbers = styled.div``;

const MovieRate = styled.div`
  font-size: 1.4rem;
`;

const GenreSection = styled.div`
  font-size: 1.4rem;
`;

const Search = () => {
  const { search } = useLocation();
  // const keyword = search.split("=")[1];
  const keyword = new URLSearchParams(search).get("keyword");

  const { isLoading: movieLoading, data: movieData } =
    useQuery<IGetMovieResult>({
      queryKey: ["searchContents", keyword],
      queryFn: () => searchContents(keyword),
    });

  const { data: genreData, isLoading: genreLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: searchGenres,
  });

  console.log(movieData);
  return (
    <Container>
      {movieLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {movieData?.results.map((movie) => (
            <SearchBox key={movie.id}>
              <MovieSection>
                {movie.backdrop_path !== null ? (
                  <MovieImg src={makeImagePath(movie.backdrop_path)} />
                ) : (
                  <ReadyImg>이미지 준비 중입니다.</ReadyImg>
                )}
                <MovieInfo>
                  <MovieTitle>{movie.title}</MovieTitle>
                  <MovieOverView>{movie.overview}</MovieOverView>
                  <MovieDate>개봉일: {movie.release_date}</MovieDate>
                  <MovieRate>평점: {movie.vote_average}</MovieRate>
                  <RateNumbers>
                    <span>
                      Members: {movie.vote_count.toLocaleString("ko-kr")}
                    </span>
                  </RateNumbers>
                  <MovieValue>
                    {movie.adult === false ? "ALL" : "18+"}
                  </MovieValue>
                  <GenreSection>
                    {movie.genre_ids
                      .map(
                        (id) =>
                          genreData.genres.find((item: any) => item.id === id)
                            .name
                      )
                      .join(", ")}
                  </GenreSection>
                </MovieInfo>
              </MovieSection>
            </SearchBox>
          ))}
        </>
      )}
      <Outlet />
    </Container>
  );
};

export default Search;
