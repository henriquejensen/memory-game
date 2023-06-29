import { styled } from "styled-components";
import { Button, ButtonContainer } from "./Button";
import Title from "./Title";
import { BREAKPOINTS } from "../constants";

type HeaderProps = {
  onRestart: () => void;
  onNewGame: () => void;
};

const HeaderContainer = styled.header`
  @media (min-width: ${BREAKPOINTS.mobile}px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & h1 {
      margin-left: 5rem;
    }
  }
`;

function Header({ onRestart, onNewGame }: HeaderProps) {
  return (
    <HeaderContainer>
      <Title>Memory Game</Title>
      <ButtonContainer>
        <Button onClick={() => onRestart()}>Restart</Button>
        <Button $variant="dark" onClick={onNewGame}>
          New Game
        </Button>
      </ButtonContainer>
    </HeaderContainer>
  );
}

export default Header;
