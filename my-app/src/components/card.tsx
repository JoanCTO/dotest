import * as React from "react";
import { ICard } from "../types";

interface ICardProps {
  data: ICard;
}

const isSmallScreen = window.innerWidth < 1024;

const Card: React.FunctionComponent<ICardProps> = ({ data }) => {
  const {
    primaryImage,
    primaryImageSmall,
    artistDisplayName,
    artistNationality,
    dimensions,
    medium,
    tags,
    title,
    objectURL,
  } = data;

  return (
    <div className="card">
      <a href={objectURL}>
        <div className="cardImageContainer">
          {primaryImage || primaryImageSmall ? (
            <img
              className="cardImage"
              src={primaryImage || primaryImageSmall}
              alt={`${title}`}
            />
          ) : (
            <div className="imageFallback" />
          )}
        </div>
        <div className="cardInfo">
          <div className="cardPrimaryInfo">
            <p>{artistDisplayName || "Unidentified artist"}</p>
            <p>{artistNationality}</p>
          </div>
          {!isSmallScreen && (
            <div className="cardSecondaryInfo">
              <p>{medium}</p>
              <p>{dimensions}</p>
            </div>
          )}
        </div>
        {tags && (
          <div className="cardTags">
            {tags.map((tag, i) => {
              return <p key={i}>{tag.term}</p>;
            })}
          </div>
        )}
      </a>
    </div>
  );
};

export default Card;
