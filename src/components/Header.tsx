import { Button, ButtonContainer } from "./Button";
import Title from "./Title";

type HeaderProps = {
  onRestart: () => void;
};

function Header({ onRestart }: HeaderProps) {
  return (
    <header>
      <Title>Memory Game</Title>
      <ButtonContainer>
        <Button onClick={onRestart}>Restart</Button>
        <Button $variant="dark">New Game</Button>
      </ButtonContainer>
    </header>
  );
}

export default Header;
