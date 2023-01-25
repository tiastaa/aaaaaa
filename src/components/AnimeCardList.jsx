import AnimeCard from "./AnimeCard";
import classes from "./AnimeCardList.module.scss";
const AnimeCardList = (props) => {
  //   const [inputInfo, setInputInfo] = useState();

  return (
    <div className={classes.animes_box}>
      {props.animes.map((anime) => (
        <AnimeCard anime={anime} key={anime.mal_id}></AnimeCard>
      ))}
    </div>
  );
};

export default AnimeCardList;
