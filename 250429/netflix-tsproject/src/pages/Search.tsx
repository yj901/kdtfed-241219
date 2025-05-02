import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import {
  searchContents,
  IGetMovieResult,
  searchGenres,
  getReviews,
  getVideos,
} from "../api";
import { makeImagePath } from "../utils";
import YouTube from "react-youtube";
import Pagination from "react-js-pagination";

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

const ReviewSection = styled.div`
  background: ${({ theme }) => theme.white.darker};
  color: ${({ theme }) => theme.black.darker};
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;

  li {
    margin-top: 20px;

    h4 {
      font-size: 1.8rem;
    }
  }
`;

const ReviewTitle = styled.span`
  display: inline-block;
  margin: 10px 0;
  font-size: 1.6rem;
  line-height: 1.3;
`;

const VideoSection = styled.div`
  margin-top: 20px;
  h3 {
    margin: 20px 0;
  }
`;

const StylePagination = styled.div`
  margin-top: 10px;
  .pagination {
    display: flex;
    justify-content: center;
    gap: 10px;
    li {
      a {
        display: inline-block;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background 0.3s;
        border-radius: 50%;
        &:hover {
          background: ${({ theme }) => theme.white.darker};
          color: ${({ theme }) => theme.black.darker};
        }
      }
    }
  }
`;

interface Obj {
  id: number;
  name: string;
}

interface ReviewContents {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

interface ContentState {
  [key: number]: string[];
}

const Search = () => {
  const [videos, setVideos] = useState<ContentState>({});
  const { search } = useLocation();
  // const keyword = search.split("=")[1];
  const keyword = new URLSearchParams(search).get("keyword");

  const { data: movieData, isLoading: movieLoading } =
    useQuery<IGetMovieResult>({
      queryKey: ["searchContents", keyword],
      queryFn: () => searchContents(keyword),
    });

  const { data: genreData, isLoading: genreLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: searchGenres,
  });

  const ids = movieData?.results.map((movie) => movie.id);

  const { data: reviewData, isLoading: reviewLoading } = useQuery({
    queryKey: ["reviews", ids],
    queryFn: () =>
      ids ? Promise.all(ids.map((id) => getReviews(id))) : Promise.resolve([]),
  });

  const { data: videoData, isLoading: videoLoading } = useQuery({
    queryKey: ["videos", ids],
    queryFn: () =>
      ids ? Promise.all(ids.map((id) => getVideos(id))) : Promise.resolve([]),
  });

  useEffect(() => {
    if (movieData && videoData) {
      movieData.results.forEach((movie) => {
        getVideos(movie.id).then((data) => {
          if (data.results) {
            const videoIds = data.results.map((video: any) => video.key);
            setVideos((prev) => ({
              ...prev,
              [movie.id]: videoIds,
            }));
          }
        });
      });
    }
  }, [movieData, videoData]);

  // console.log(videoData);

  const [currentPage, setCurrentPage] = useState(1);
  const [moviePerPage, setMoviePerPage] = useState(4);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastMovie = currentPage * moviePerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviePerPage;
  const currentMovies =
    movieData?.results.slice(indexOfFirstMovie, indexOfLastMovie) || [];

  return (
    <Container>
      {movieLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {movieData?.results.map((movie, index) => (
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
                          genreData.genres.find((item: Obj) => item.id === id)
                            .name
                      )
                      .join(", ")}
                  </GenreSection>
                </MovieInfo>
              </MovieSection>
              <ReviewSection>
                <h3>Review</h3>
                {reviewLoading ? (
                  <div>Loading...</div>
                ) : (
                  <ul>
                    {reviewData &&
                    Array.isArray(reviewData[index].results) &&
                    reviewData[index].results.length > 0 &&
                    Array.isArray(reviewData[index].results) ? (
                      reviewData[index].results.map(
                        (review: ReviewContents) => (
                          <li key={review.id}>
                            <h4>{review.author}</h4>
                            <ReviewTitle>{review.content}</ReviewTitle>
                          </li>
                        )
                      )
                    ) : (
                      <ReviewTitle>Not yet reviews.</ReviewTitle>
                    )}
                  </ul>
                )}
              </ReviewSection>
              <VideoSection>
                <h3>video</h3>
                {videos[movie.id]?.length > 0 ? (
                  <YouTube
                    videoId={videos[movie.id][0]}
                    opts={{
                      width: "100%",
                      height: "500px",
                      playerVars: {
                        autoplay: 0, //자동재생 여부
                        modestbranding: 0, //컨트롤바에 유튜브로고 표시
                        loop: 0, //반복무한재생 여부
                        playlist: videos[movie.id][0], //반복무한재생하고자하는 플레이리스트
                      },
                    }}
                  ></YouTube>
                ) : (
                  <div>No Available</div>
                )}
              </VideoSection>
              <StylePagination>
                <Pagination
                  onChange={handlePageChange}
                  activePage={currentPage}
                  itemsCountPerPage={moviePerPage}
                  totalItemsCount={movieData?.results.length || 0}
                  pageRangeDisplayed={4}
                />
              </StylePagination>
            </SearchBox>
          ))}
        </>
      )}
      <Outlet />
    </Container>
  );
};

export default Search;
