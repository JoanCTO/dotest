import * as React from "react";

interface ICardProps {
  data: any;
}

// CHECK MISSING CARD DATA
const Card: React.FunctionComponent<ICardProps> = ({ data }) => {
  const {
    primaryImage,
    primaryImageSmall,
    title,
    artistDisplayBio,
    accessionNumber,
  } = data;

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
      {(!!primaryImage || !!primaryImageSmall) === false ? (
        <div className="imageFallback" />
      ) : null}
      <p className="bio">{artistDisplayBio}</p>
      <p className="bio">{accessionNumber}</p>
    </div>
  );
};

export default Card;
