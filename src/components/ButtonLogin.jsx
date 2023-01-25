import { useNavigate } from "react-router-dom";
import classes from "./LinkButton.module.scss";

const ButtonLogin = () => {
  const navigate = useNavigate();
  const acc = async () => {
    navigate({ pathname: "/login" });
  };

  return (
    <>
      <button className={classes.link_button} onClick={acc}>
        акаунт
      </button>
    </>
  );
};

export default ButtonLogin;
