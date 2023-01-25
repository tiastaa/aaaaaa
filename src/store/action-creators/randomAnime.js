import axios from "axios";

export const fetchRandomAnime = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_RANDOM_ANIME" });

      const response = await axios.get(`https://api.jikan.moe/v4/random/anime`);

      dispatch({
        type: "FETCH_RANDOM_ANIME_SUCCESS",
        payload: response.data.data,
      });
    } catch (e) {
      dispatch({
        type: "FETCH_RANDOM_ANIME_ERROR",
        payload: "oops looks like something went wrong :(",
      });
    }
  };
};
