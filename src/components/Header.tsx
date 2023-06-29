import { Button, ButtonContainer } from "./Button";
import Title from "./Title";

type HeaderProps = {
  onRestart: () => void;
  onNewGame: () => void;
};

function Header({ onRestart, onNewGame }: HeaderProps) {
  return (
    <header>
      <Title>Memory Game</Title>
      <ButtonContainer>
        <Button onClick={() => onRestart()}>Restart</Button>
        <Button $variant="dark" onClick={onNewGame}>
          New Game
        </Button>
      </ButtonContainer>
    </header>
  );
}

export default Header;
