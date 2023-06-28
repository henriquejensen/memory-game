import { styled } from "styled-components";
import first from "../assets/18.svg";

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

const array = new Array(15).fill(0);

function Board() {
  return (
    <Main>
      {array.map((_, index) => (
        <div key={index}>
          <Image src={first} alt="first" />
        </div>
      ))}
    </Main>
  );
}

export default Board;
