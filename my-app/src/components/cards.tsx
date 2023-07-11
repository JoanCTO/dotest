import * as React from "react";
import { RESULTS } from "../mocks";
import Card from "./card";

interface ICardsProps {
  list: any | any[];
}

const fetchCardData = (list: any) => {
  // TODO FETCH CARDS DATA
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
