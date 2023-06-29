import { styled } from "styled-components";
import back from "../assets/back.svg";
import { Card, cardsGenerator } from "../helpers/cardsGenerator";
import { useEffect, useState } from "react";

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: center;
  justify-items: center;
  gap: 1.5rem;
  margin-block: 2rem;
`;

const Image = styled.img`
  width: 4.7rem;
  height: 100%;
`;

function Board() {
  const [cards, setCards] = useState<Card[]>(cardsGenerator());
  const [selectedIndexCard, setSelectedIndexCard] = useState<number[]>([]);

  useEffect(() => {
    if (selectedIndexCard.length === 3) {
      const [firstIndex, secondIndex, thirdIndex] = selectedIndexCard;

      if (cards[firstIndex].name !== cards[secondIndex].name) {
        const newCards = cards.map((card) => ({ ...card }));
        newCards[firstIndex].isFlipped = false;
        newCards[secondIndex].isFlipped = false;
        setCards(newCards);
      }
      setSelectedIndexCard([thirdIndex]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndexCard]);

  const handleClick = (card: Card, index: number) => {
    if (card.isFlipped) return;

    const newCards = cards.map((card) => ({ ...card }));
    newCards[index].isFlipped = true;
    setCards(newCards);
    setSelectedIndexCard((prevState) => [...prevState, index]);
  };

  return (
    <Main>
      {cards.map((card, index) => (
        <div key={index} onClick={() => handleClick(card, index)} role="button">
          {card.isFlipped ? (
            <Image src={card.image} alt={card.name} />
          ) : (
            <Image src={back} alt="back" />
          )}
        </div>
      ))}
    </Main>
  );
}

export default Board;
