import './App.css'
import first from './assets/18.svg'
import Header from './components/Header'
import GlobalStyle from './styles/globalStyle'

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
      <footer>
        <div>
          <span>Time:</span>
          <span>00:00</span>
        </div>
        <div>
          <span>Movements:</span>
          <span>100</span>
        </div>
      </footer>
    </>
  )
}

export default App
