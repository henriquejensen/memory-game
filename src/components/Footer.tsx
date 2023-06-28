import { styled } from "styled-components";
import { Button, ButtonContainer } from "./Button";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-inline: 0.5rem;
`;

function Footer() {
  return (
    <footer>
      <ButtonContainer>
        <Button>
          <Container>
            <span>Time:</span>
            <span>00:00</span>
          </Container>
        </Button>
        <Button>
          <Container>
            <span>Movements:</span>
            <span>100</span>
          </Container>
        </Button>
      </ButtonContainer>
    </footer>
  );
}

export default Footer;
