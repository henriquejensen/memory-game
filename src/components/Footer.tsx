import { styled } from "styled-components";
import { Button, ButtonContainer } from "./Button";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-inline: 0.5rem;
`;

type FooterProps = {
  moves: number;
  time: number;
};

function Footer({ moves, time }: FooterProps) {
  return (
    <footer>
      <ButtonContainer>
        <Button>
          <Container>
            <span>Time:</span>
            <span>{time}</span>
          </Container>
        </Button>
        <Button>
          <Container>
            <span>Movements:</span>
            <span>{moves}</span>
          </Container>
        </Button>
      </ButtonContainer>
    </footer>
  );
}

export default Footer;
