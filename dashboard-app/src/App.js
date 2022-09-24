import Header from './components/Header.js'
import './App.css';
import Button from './components/Button.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="dashboard-container">
          <Header name={"Alex"} />
          <Button/>
        </div>
      </header>
    </div>
  );
}

export default App;
