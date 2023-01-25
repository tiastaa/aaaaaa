import { combineReducers } from "redux";
import { searchAnimeReducer } from "./searchAnimeReducer";
import { topAnimeReducer } from "./topAnimeReducer";
import { randomAnimeReducer } from "./randomAnimeReducer";
import { animeReducer } from "./animeReducer";

export const rootReducer = combineReducers({
  searchAnime: searchAnimeReducer,
  topAnime: topAnimeReducer,
  randomAnime: randomAnimeReducer,
  anime: animeReducer,
});
