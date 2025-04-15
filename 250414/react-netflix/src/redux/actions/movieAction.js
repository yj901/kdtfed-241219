import api from "../api";
const API_KEY = import.meta.env.VITE_API_KEY;

const getMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_MOVIES_REQUEST",
        payload: {
          loading: true,
        },
      });

      const nowPlayingMovieApi = api.get(
        `/movie/now_playing?api_key=${API_KEY}&language=ko-kr&page=1`
      );

      const topRatedMovieApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=ko-kr&page=1`
      );

      const upComingMovieApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=ko-kr&page=1`
      );

      const [nowPlayingMovie, topRatedMovie, upComingMovie] = await Promise.all(
        [nowPlayingMovieApi, topRatedMovieApi, upComingMovieApi]
      );

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          nowPlayingMovie: nowPlayingMovie.data,
          topRatedMovie: topRatedMovie.data,
          upComingMovie: upComingMovie.data,
          loading: false,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_MOVIES_FAIL",
        payload: {
          loading: false,
        },
      });
    }
  };
};

export const movieAction = { getMovies };
