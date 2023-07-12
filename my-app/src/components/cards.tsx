import * as React from "react";
import { ICard } from "../types";
import { OBJECTS_API } from "../urls";
import Card from "./card";

interface ICardsProps {
  list: number[];
}

const fetchCardData = async (list: number[]): Promise<ICard[]> => {
  const promises = list.map((id) => fetch(`${OBJECTS_API}${id}`));
  const allResponses = await Promise.all(promises);
  const successfullResponses = await Promise.all(
    allResponses.reduce((acc, res) => {
      if (res.ok) {
        acc.push(res.json());
      }
      return acc;
    }, [] as Promise<ICard>[])
  );
  return successfullResponses;
};

const Cards: React.FunctionComponent<ICardsProps> = ({ list }) => {
  const [cardResults, setCardResults] = React.useState<ICard[]>([]);

  React.useEffect(() => {
    const fetchAndSet = async () => {
      const cardData = await fetchCardData(list);
      setCardResults(cardData);
    };
    fetchAndSet();
  }, [list]);

  if (!list.length) {
    return <div>No list</div>;
  }

  return (
    <>
      <div className="cardsContainer">
        {cardResults.map((card) => {
          return <Card data={card} key={card.objectID} />;
        })}
      </div>
    </>
  );
};

export default Cards;
