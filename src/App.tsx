import Board from "./components/Board";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Board />
      <Footer />
    </Container>
  );
}

export default App;
