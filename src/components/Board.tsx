import { styled } from "styled-components";
import back from "../assets/back.svg";
import { Card } from "../helpers/cardsGenerator";

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

type BoardProps = {
  cards: Card[];
  onClickCard: (card: Card, index: number) => void;
};

function Board({ cards, onClickCard }: BoardProps) {
  return (
    <Main>
      {cards.map((card, index) => (
        <div key={index} onClick={() => onClickCard(card, index)} role="button">
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
