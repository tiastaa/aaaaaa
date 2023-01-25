const initialState = {
  randomAnimes: [],
  loading: false,
  error: null,
};

export const randomAnimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RANDOM_ANIME":
      return { ...state, loading: true };
    case "FETCH_RANDOM_ANIME_SUCCESS":
      return { ...state, randomAnimes: action.payload, loading: false };
    case "FETCH_RANDOM_ANIME_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
