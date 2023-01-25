import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/UseActions";
import classes from "./LinkButton.module.scss";
const ButtonRandomAnime = () => {
  const navigate = useNavigate();

  const { fetchRandomAnime } = useActions();
  const { randomAnimes, loading, error } = useSelector(
    (state) => state.randomAnime
  );
  const ShowRandomAnime = () => {
    fetchRandomAnime();
    navigate({ pathname: "/random", search: `id=${randomAnimes.mal_id}` });
  };

  useEffect(() => {
    fetchRandomAnime();
  }, []);

  return (
    <button className={classes.link_button} onClick={ShowRandomAnime}>
      Random Anime
    </button>
  );
};

export default ButtonRandomAnime;
