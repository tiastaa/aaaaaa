import { useNavigate } from "react-router-dom";
import classes from "./LinkButton.module.scss";

const ButtonHome = () => {
  const navigate = useNavigate();

  const GoHome = () => {
    navigate({ pathname: "/" });
  };

  return (
    <button className={classes.link_button} onClick={GoHome}>
      Home
    </button>
  );
};

export default ButtonHome;
