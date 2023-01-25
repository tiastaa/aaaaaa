import axios from "axios";

export const fetchSearchAnime = (animeTitle, page) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_SEARCH_ANIME" });
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${animeTitle}&page=${page}`
      );
      console.log(response);
      console.log("response");
      dispatch({
        type: "FETCH_SEARCH_ANIME_SUCCESS",
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: "FETCH_SEARCH_ANIME_ERROR",
        payload: "oops looks like something went wrong :(",
      });
    }
  };
};
