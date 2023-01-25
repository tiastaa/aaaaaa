import { useNavigate } from "react-router-dom";
import classes from "./AnimeCard.module.scss";

import "react-tooltip/dist/react-tooltip.css";

import ButtonAnimeTip from "./ButtonAnimeTip";
import { useState } from "react";

const AnimeCard = (props) => {
  const navigate = useNavigate();

  const FullAnimeInfo = (animeId) => {
    console.log(animeId);
    console.log("animeId");
    console.log(props.images?.jpg.image_url);
    navigate({
      pathname: "/anime-info",
      search: `id=${animeId}`,
    });
    console.log(props.images.jpg.image_url);
  };
  const [like, setLike] = useState(false);
  const addToFavourite = () => {
    setLike(!like);
  };
  return (
    <div
      className={classes.card}
      onClick={() => FullAnimeInfo(props.anime.mal_id)}
      key={props.anime.mal_id}
    >
      <div className={classes.img_box}>
        <img
          className={classes.anime_img}
          src={props.anime.images.jpg.image_url}
          alt=""
        />
        <div
          className={
            like == true ? classes.like_button_active : classes.like_button
          }
          onClick={(event) => {
            event.stopPropagation();
            addToFavourite();
          }}
        >
          <span>♥</span>
        </div>

        <ButtonAnimeTip anime={props.anime} />
        <span className={classes.episodes}>{props.anime.episodes} ep</span>
        <span className={classes.score}>{props.anime.score}</span>
      </div>
      <span className={classes.title}>{props.anime.title}</span>
    </div>
  );
};

export default AnimeCard;
