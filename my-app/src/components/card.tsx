import * as React from "react";
import { IMetMuseum } from "../models/models";

interface ICardProps {
  data: IMetMuseum;
}

// CHECK MISSING CARD DATA
const Card: React.FunctionComponent<ICardProps> = ({ data }) => {
  const {
    primaryImage,
    primaryImageSmall,
    title,
    artistDisplayBio,
    accessionNumber,
  } = data as IMetMuseum;

  return (
    <div className="card">
      <h3>{title}</h3>
      {primaryImage || primaryImageSmall ? (
        <img
          className="cardImage"
          src={primaryImage || primaryImageSmall}
          alt={`${title}-picture`}
        />
      ) : null}
      {!(!!primaryImage || !!primaryImageSmall) ? (
        <div className="imageFallback" />
      ) : null}
      <p className="bio">{artistDisplayBio}</p>
      <p className="bio">{accessionNumber}</p>
    </div>
  );
};

export default Card;
