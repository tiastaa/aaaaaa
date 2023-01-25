const initialState = {
  topAnimes: [],
  loading: false,
  error: null,
  current_page: 1,
  total_pages: 0,
};

export const topAnimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TOP_ANIME":
      return { ...state, loading: true };
    case "FETCH_TOP_ANIME_SUCCESS":
      return {
        ...state,
        topAnimes: action.payload.data,
        current_page: action.payload.pagination?.current_page,
        total_pages: action.payload.pagination?.last_visible_page,
        loading: false,
      };
    case "FETCH_TOP_ANIME_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
