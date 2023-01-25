import AnimeTip from "./AnimeTip";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import classes from "./AnimeCard.module.scss";

const ButtonAnimeTip = (props) => {
  return (
    <div>
      <div
        id={props.anime.mal_id}
        className={classes.tip_button}
        src="https://e7.pngegg.com/pngimages/58/289/png-clipart-die-personennamen-im-deutschen-computer-icons-symbol-information-prompt-miscellaneous-cdr.png"
        alt=""
        data-tooltip-delay-hide={200}
      >
        i
      </div>
      <ReactTooltip
        anchorId={props.anime.mal_id}
        content={<AnimeTip anime={props.anime} />}
        place="right"
        style={{ zIndex: "5", backgroundColor: "rgba(0, 0, 0, 0.626)" }}
        // offset={-5}
      />
    </div>
  );
};

export default ButtonAnimeTip;
