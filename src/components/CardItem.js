import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  var url = props.path;

  return (
    <>
      <li className="cards__item">
        {url == "sudoku" ? (
          <Link to={url} className="cards__item__link">
            <img className="cards__item__img" src={props.src} />
          </Link>
        ) : (
          <a href={url} className="cards__item__link">
            <img className="cards__item__img" src={props.src} />
          </a>
        )}
      </li>
    </>
  );
}

export default CardItem;
