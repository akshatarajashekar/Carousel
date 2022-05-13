import "./card.scss";
import { cardType } from "./types";

const cssPrefix = "card";
const Card = (props: cardType) => (
  <div className={`${cssPrefix}`} >
    <div className={`${cssPrefix}__container`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/' + props.image})` }}></div>
    <div className={`${cssPrefix}__title`}>{props.title}</div>
  </div>
);
export default Card;
