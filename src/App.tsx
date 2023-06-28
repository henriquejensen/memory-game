import "./App.css";
import first from "./assets/18.svg";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <div>
          <img src={first} alt="first" />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
