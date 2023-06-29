import { useEffect, useState } from "react";
import Board from "./components/Board";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Card, cardsGenerator } from "./helpers/cardsGenerator";
import GlobalStyle from "./styles/globalStyle";

let intervalId: number;

function App() {
  const [cards, setCards] = useState<Card[]>(cardsGenerator());
  const [selectedIndexCard, setSelectedIndexCard] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [restart, setRestart] = useState(false);

  useEffect(() => {
    intervalId = setInterval(() => {
      setTime((prevState) => prevState + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [restart]);

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
    setMoves((prevState) => prevState + 1);
  };

  const handleRestart = () => {
    setCards(cardsGenerator());
    setSelectedIndexCard([]);
    setMoves(0);
    setTime(0);
    setRestart((prevState) => !prevState);
    clearInterval(intervalId);
  };

  return (
    <Container>
      <GlobalStyle />
      <Header onRestart={handleRestart} />
      <Board cards={cards} onClickCard={handleClick} />
      <Footer moves={moves} time={time} />
    </Container>
  );
}

export default App;
