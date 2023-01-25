import * as SearchAnimeActionCreators from "./searchAnime";
import * as TopAnimeActionCreators from "./topAnime";
import * as RandomAnimeActionCreators from "./randomAnime";
import * as animeActionCreators from "./anime";
export const ActionCreators = {
  ...SearchAnimeActionCreators,
  ...TopAnimeActionCreators,
  ...RandomAnimeActionCreators,
  ...animeActionCreators,
};
