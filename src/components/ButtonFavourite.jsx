import { useNavigate } from "react-router-dom";
import classes from "./LinkButton.module.scss";
const ButtonFavourite = () => {
  const navigate = useNavigate();

  const GoFavourite = () => {
    navigate({ pathname: "/favourite" });
  };

  return (
    <button className={classes.link_button} onClick={GoFavourite}>
      Favourite
    </button>
  );
};

export default ButtonFavourite;
