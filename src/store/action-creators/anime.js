import axios from "axios";

export const fetchAnime = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_ANIME" });
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime/${id}/full`
      );
      console.log(response);
      console.log("responseAnime");
      dispatch({
        type: "FETCH_ANIME_SUCCESS",
        payload: response.data.data,
      });
    } catch (e) {
      dispatch({
        type: "FETCH_ANIME_ERROR",
        payload: "oops looks like something went wrong :(",
      });
    }
  };
};
