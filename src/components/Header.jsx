import { NavLink } from "react-router-dom";
import Search from "./Search";
import ButtonRandomAnime from "./ButtonRandomAnime";
import classes from "./Header.module.scss";
import ButtonHome from "./ButtonHome";
import ButtonFavourite from "./ButtonFavourite";
import ButtonLogin from "./ButtonLogin";

const Header = () => {
  return (
    <div className={classes.header_box_helper}>
      <div className={classes.header_box}>
        <div className={classes.header_panel_box}>
          <div className={classes.logo_box}>
            {" "}
            <div className={classes.logo}></div>
            <span className={classes.title_media}>MY ANIME</span>
          </div>

          <ButtonRandomAnime />
          <ButtonHome />
          <ButtonFavourite />
          <Search />
          <ButtonLogin />
        </div>

        <h1 className={classes.title}>MY ANIME</h1>
      </div>
    </div>
  );
};

export default Header;
