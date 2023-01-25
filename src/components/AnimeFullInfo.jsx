import { useState } from "react";
import classes from "./AnimeFullInfo.module.scss";
const AnimeFullInfo = (props) => {
  const [like, setLike] = useState(false);
  const addToFavourite = () => {
    setLike(!like);
  };
  return (
    <div className={classes.anime_box}>
      <div className={classes.short_info_box_helper}>
        <div className={classes.short_info_box}>
          <div className={classes.anime_title_mobile}>{props.anime.title}</div>
          <div className={classes.img}>
            <img src={props.anime.images?.jpg.image_url} alt="" />
          </div>
          <div className={classes.anime_info_box}>
            <div className={classes.anime_title_pc}>{props.anime.title}</div>

            <div className={classes.info}>
              <div>
                Type: {props.anime.type === null ? ". . ." : props.anime.type}
              </div>
            </div>
            <div className={classes.info}>
              <div>
                Status:{" "}
                {props.anime.status === null ? ". . ." : props.anime.status}
              </div>
            </div>

            <div className={classes.info}>
              <div>
                Score:{" "}
                {props.anime.score === null ? ". . ." : props.anime.score}
              </div>
            </div>

            <div className={classes.info}>
              <div>
                Rating:{" "}
                {props.anime.rating === null ? ". . ." : props.anime.rating}
              </div>
            </div>
            <div className={classes.info}>
              <div>
                Duration:{" "}
                {props.anime.duration === null ? ". . ." : props.anime.duration}
              </div>
            </div>
            <div className={classes.info}>
              <div>
                Episodes:{" "}
                {props.anime.episodes === null ? ". . ." : props.anime.episodes}{" "}
                ep
              </div>
            </div>
            <div className={classes.info}>
              <div>
                Add to favourite:
                <span
                  className={
                    like == true
                      ? classes.like_button_active
                      : classes.like_button
                  }
                  onClick={(event) => {
                    event.stopPropagation();
                    addToFavourite();
                  }}
                >
                  {" "}
                  ♥
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          props.anime.synopsis === null ? classes.none : classes.synopsis
        }
      >
        <span className={classes.span}>Synopsis</span>
        <p>{props.anime.synopsis}</p>
      </div>
      <div
        className={
          props.anime?.trailer?.embed_url === null
            ? classes.none
            : classes.video
        }
      >
        <embed
          className={
            props.anime?.trailer?.embed_url === null
              ? classes.none
              : classes.embed
          }
          src={props.anime?.trailer?.embed_url}
        ></embed>
      </div>
    </div>
  );
};

export default AnimeFullInfo;
