import { useEffect, useState } from "react";
import Board from "./components/Board";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Card, cardsGenerator } from "./helpers/cardsGenerator";
import GlobalStyle from "./styles/globalStyle";
import Swal from "sweetalert2";
import { DEFAULT_GAME_CONFIG } from "./constants";

let intervalId: NodeJS.Timeout;

function App() {
  const [gameSize, setGameSize] = useState(DEFAULT_GAME_CONFIG.size);
  const [cards, setCards] = useState<Card[]>(
    cardsGenerator(DEFAULT_GAME_CONFIG.size)
  );
  const [selectedIndexCard, setSelectedIndexCard] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [restart, setRestart] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    intervalId = setInterval(() => {
      setTime((prevState) => prevState + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [restart]);

  useEffect(() => {
    if (isGameOver) {
      clearInterval(intervalId);
      Swal.fire({
        html:
          "<h1>Victory</h1>" +
          "<br />" +
          `Time: ${time} seconds` +
          "<br />" +
          `Moves: ${moves}`,
        focusConfirm: false,
        confirmButtonText: "New Game",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          handleRestart();
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGameOver]);

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
    setMoves((prevState) => prevState + 1);

    if (newCards.every((card) => card.isFlipped)) {
      setIsGameOver(true);
      return;
    }

    setSelectedIndexCard((prevState) => [...prevState, index]);
  };

  const handleRestart = (size = gameSize) => {
    setCards(cardsGenerator(size));
    setSelectedIndexCard([]);
    setMoves(0);
    setTime(0);
    setRestart((prevState) => !prevState);
    clearInterval(intervalId);
    setIsGameOver(false);
  };

  const handleGameSize = () => {
    Swal.fire({
      title: "Select game size",
      input: "range",
      inputAttributes: {
        min: "3",
        max: "9",
        step: "3",
      },
      inputValue: gameSize,
      showCancelButton: true,
      confirmButtonText: "Start",
      cancelButtonText: "Cancel",
      preConfirm: (value) => {
        handleRestart(value);
        setGameSize(value);
      },
    });
  };

  return (
    <Container>
      <GlobalStyle />
      <Header onRestart={handleRestart} onNewGame={handleGameSize} />
      <Board cards={cards} onClickCard={handleClick} />
      <Footer moves={moves} time={time} />
    </Container>
  );
}

export default App;
