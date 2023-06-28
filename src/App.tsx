import './App.css'
import first from './assets/18.svg'

function App() {
  return (
    <>
      <header>
        <h1>Memory Game</h1>
        <div>
          <button>Restart</button>
          <button>New Game</button>
        </div>
      </header>
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
