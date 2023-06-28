import { Button, ButtonContainer } from "./Button";
import Title from "./Title";

function Header() {
  return (
    <header>
      <Title>Memory Game</Title>
      <ButtonContainer>
        <Button>Restart</Button>
        <Button $variant="dark">New Game</Button>
      </ButtonContainer>
    </header>
  );
}

export default Header;
