import classes from "./AnimeTip.module.scss";
const AnimeTip = (props) => {
  return (
    <div className={classes.anime_tip}>
      <div className={classes.title}>{props.anime.title}</div>

      <div className={classes.info}>
        <div>Type: {props.anime.type}</div>
      </div>
      <div className={classes.info}>
        <div>Status: {props.anime.status}</div>
      </div>

      <div className={classes.info}>
        <div>Score: {props.anime.score}</div>
      </div>

      <div className={classes.info}>
        <div>Rating: {props.anime.rating}</div>
      </div>
      <div className={classes.info}>
        <div>Duration: {props.anime.duration}</div>
      </div>
      <div className={classes.info}>
        <div>Episodes: {props.anime.episodes} ep</div>
      </div>
    </div>
  );
};

export default AnimeTip;
