import { styled } from "styled-components";
import back from "../assets/back.svg";
import { Card } from "../helpers/cardsGenerator";
import { BREAKPOINTS } from "../constants";

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: center;
  justify-items: center;
  gap: 1.5rem;
  margin-block: 2rem;

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const Image = styled.img`
  width: 5rem;
  height: 5rem;

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    width: 7rem;
    height: 7rem;
  }
`;

type BoardProps = {
  cards: Card[];
  onClickCard: (card: Card, index: number) => void;
};

function Board({ cards, onClickCard }: BoardProps) {
  return (
    <Main>
      {cards.map((card, index) => (
        <div
          key={index}
          onClick={() => onClickCard(card, index)}
          role="button"
          data-testid="card"
        >
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
