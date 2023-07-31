import * as React from "react";
import { RESULTS } from "../mocks";
import Card from "./card";

interface ICardsProps {
  list: any | any[];
}

const API = "https://collectionapi.metmuseum.org/public/collection/v1/";

// 2. TODO fetch each artwork data from the API
//    NOTE: 'list' argument is src/mocks.ts LIST.objectIDs
const fetchCardData = (list: number[]) => {
  // TODO fetch each artwork data with it's ID
  return RESULTS;
};

const Cards: React.FunctionComponent<ICardsProps> = ({ list }) => {
  const [cardResults, setCardResults] = React.useState<any>(RESULTS);

  React.useEffect(() => {
    setCardResults(fetchCardData(list));
  }, []);

  if (list) {
    return (
      <div className="cardsContainer">
        {cardResults.map((card: any) => {
          return <Card data={card} />;
        })}
      </div>
    );
  } else {
    return <div>No list</div>;
  }
};

export default Cards;
